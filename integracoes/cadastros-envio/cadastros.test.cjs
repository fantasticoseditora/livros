const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const id='abcdef01-1234-4123-8123-abcdef012345';
const headers=['ID do cadastro','Data do cadastro','Nome completo','E-mail','WhatsApp (opcional)','CEP','Rua / avenida','Número','Complemento','Bairro','Cidade','UF','Pagamento'];
const input={id,nome:'Cadastro sintético de teste',email:'teste@example.invalid',whatsapp:'',cep:'01234567',logradouro:'Rua de teste',numero:'S/N',complemento:'',bairro:'Bairro de teste',cidade:'Cidade de teste',uf:'SP',site:''};
let now=Date.parse('2026-10-07T14:00:00-03:00');
class FixedDate extends Date{constructor(...a){super(...(a.length?a:[now]));}static now(){return now;}}
const rows=[headers];
let released=0, flushed=0, failFlush=false, writes=0;
const sheet={
  getLastRow:()=>Math.max(5,rows.length),getMaxRows:()=>1000,
  getRange:(r,c,h=1,w=1)=>({
    getValues:()=>Array.from({length:h},(_,i)=>Array.from({length:w},(_,j)=>rows[r+i-1]?.[c+j-1]??'')),
    setNumberFormat:()=>{},
    setValues:values=>{writes++;values.forEach((row,i)=>{rows[r+i-1]=rows[r+i-1]||[];row.forEach((v,j)=>rows[r+i-1][c+j-1]=v);});}
  })
};
const server={Date:FixedDate,LockService:{getScriptLock:()=>({waitLock:()=>{},releaseLock:()=>released++})},SpreadsheetApp:{openById:()=>({getSheetByName:()=>sheet}),flush:()=>{flushed++;if(failFlush)throw Error('Falha simulada de gravação');}}};
vm.createContext(server);vm.runInContext(fs.readFileSync(path.join(__dirname,'Code.gs'),'utf8'),server);
assert.equal(server.salvarCadastro(input).ok,true);
assert.equal(rows.length,2,'As notas em outras colunas não podem deslocar o primeiro cadastro');
assert.equal(rows[1][5],'01234-567','CEP com zero à esquerda preservado');
assert.equal(rows[1][4],'','WhatsApp é opcional');
assert.equal(rows[1][12],'Não verificado','Cadastro não confirma pagamento');
assert.equal(flushed,1);
assert.equal(server.salvarCadastro(input).ok,true);
assert.equal(writes,1,'Reenvio com o mesmo ID não duplica');
for(const patch of [{nome:''},{email:'erro'},{cep:'123'},{uf:'XX'},{logradouro:''},{numero:''},{bairro:''},{cidade:''},{whatsapp:'123'},{site:'spam'},{id:'id-inválido'},{complemento:'a\n=1'}])assert.throws(()=>server.salvarCadastro({...input,...patch}));
assert.equal(writes,1,'Dados inválidos não são gravados');
const injection={...input,id:'abcdef02-1234-4123-8123-abcdef012345',logradouro:'=IMPORTXML("https://example.invalid")',numero:'+123',whatsapp:'(11) 99999-9999'};
assert.equal(server.salvarCadastro(injection).ok,true);
assert.equal(rows[2][6][0],"'",'Fórmulas não são executadas');
assert.equal(rows[2][4],'11999999999');
failFlush=true;
assert.throws(()=>server.salvarCadastro({...input,id:'abcdef03-1234-4123-8123-abcdef012345'}));
assert.equal(released,4,'Lock liberado mesmo quando a gravação falha');
failFlush=false;
now=Date.parse('2026-10-20T00:00:00-03:00');
assert.throws(()=>server.salvarCadastro(input),/encerrada/);
now=Date.parse('2026-10-07T14:00:00-03:00');
headers[0]='Cabeçalho alterado';assert.throws(()=>server.salvarCadastro(input),/Cabeçalho/);headers[0]='ID do cadastro';

const clientCode=fs.readFileSync(path.join(__dirname,'../../cronicas-mesopotamicas/dados-de-envio/formulario.js'),'utf8');
function client(ready=true){
  const events={},calls=[],timers=[];
  const nodes={};
  for(const key of ['shipping-form','form-fields','save-registration','service-status','registration-success','registration-code'])nodes[key]={hidden:false,disabled:false,textContent:'',classList:{add(){},remove(){}},focus(){}};
  nodes['registration-success'].hidden=true;nodes['save-registration'].disabled=true;
  nodes['shipping-form'].elements={namedItem:()=>({value:'',addEventListener(){},focus(){}})};
  nodes['shipping-form'].reportValidity=()=>true;
  nodes['shipping-form'].addEventListener=(name,callback)=>events[name]=callback;
  const run={withSuccessHandler(fn){const call={success:fn};return {withFailureHandler(failure){call.failure=failure;return {salvarCadastro(data){call.data=data;calls.push(call);}};}};}};
  const context={Date:FixedDate,window:ready?{google:{script:{run}}}:{},document:{getElementById:k=>nodes[k]},crypto:{randomUUID:()=>id},FormData:class{entries(){return Object.entries(input);}},setTimeout:fn=>{timers.push(fn);return timers.length;},clearTimeout(){}};
  vm.createContext(context);vm.runInContext(clientCode,context);
  return {nodes,calls,timers,submit:()=>events.submit({preventDefault(){}})};
}
const offline=client(false);offline.submit();assert.equal(offline.calls.length,0);assert.equal(offline.nodes['save-registration'].disabled,true);assert.equal(offline.nodes['registration-success'].hidden,true);
const invalid=client();invalid.nodes['shipping-form'].reportValidity=()=>false;invalid.submit();assert.equal(invalid.calls.length,0);
const c=client();c.submit();assert.equal(c.nodes['registration-success'].hidden,true);c.calls[0].failure();assert.equal(c.nodes['registration-success'].hidden,true);assert.equal(c.nodes['save-registration'].disabled,false);
c.submit();c.calls[1].success({ok:true,id:'outro-id'});assert.equal(c.nodes['registration-success'].hidden,true,'ACK inválido não libera pagamento');
c.submit();assert.equal(c.calls[2].data.id,c.calls[0].data.id,'Retry mantém ID para evitar duplicação');c.calls[2].success({ok:true,id});assert.equal(c.nodes['registration-success'].hidden,false);assert.equal(c.nodes['shipping-form'].hidden,true);
c.calls[0].failure();assert.equal(c.nodes['service-status'].hidden,true,'Falha antiga não desfaz sucesso');c.submit();assert.equal(c.calls.length,3);
const slow=client();slow.submit();slow.timers[0]();assert.equal(slow.nodes['registration-success'].hidden,true);assert.equal(slow.nodes['save-registration'].disabled,false);
console.log('OK: validação, CEP, WhatsApp opcional, deduplicação, fórmulas, falhas, prazo e liberação do pagamento após confirmação. Serviços Google simulados; implantação real pendente.');
