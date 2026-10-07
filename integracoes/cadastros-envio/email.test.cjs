const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const code=fs.readFileSync(path.join(__dirname,'../../cronicas-mesopotamicas/dados-de-envio/formulario.js'),'utf8');
const uuid='abcdef01-1234-4123-8123-abcdef012345';
let now=Date.parse('2026-10-07T13:00:00-03:00');
class Clock extends Date{static now(){return now;}}
const data={nome:'Cadastro sintético de teste',email:'teste@example.invalid',whatsapp:'',cep:'01234567',logradouro:'Rua de teste',numero:'S/N',complemento:'',bairro:'Bairro de teste',cidade:'Cidade de teste',uf:'SC',site:''};
function setup({enabled=true,values=data,handler=()=>Promise.resolve({ok:true,json:async()=>({success:true})})}={}){
 const nodes={},events={},calls=[];
 for(const k of ['shipping-form','form-fields','save-registration','service-status','registration-success','registration-code','registration-intro','registration-instructions'])nodes[k]={hidden:false,disabled:false,textContent:'',classList:{add(){},remove(){}},focus(){}};
 nodes['registration-success'].hidden=true;nodes['save-registration'].disabled=true;
 const f=nodes['shipping-form'];f.reportValidity=()=>true;f.elements={namedItem:()=>({value:'',addEventListener(){},focus(){}})};f.addEventListener=(n,c)=>events[n]=c;
 const context={Date:Clock,window:{SHIPPING_REGISTRATION:{enabled,endpoint:'https://formsubmit.co/ajax/fantasticoseditora@gmail.com'}},document:{getElementById:k=>nodes[k]},crypto:{randomUUID:()=>uuid},FormData:class{entries(){return Object.entries(values);}},AbortController,setTimeout:()=>1,clearTimeout(){},fetch:(url,o)=>{calls.push({url,...o});return handler(url,o);}};
 vm.createContext(context);vm.runInContext(code,context);
 return {nodes,calls,submit:()=>events.submit?.({preventDefault(){}})};
}
(async()=>{
 const off=setup({enabled:false});await off.submit();assert.equal(off.calls.length,0);assert.equal(off.nodes['save-registration'].disabled,true);
 for(const values of [{...data,nome:'   '},{...data,email:'erro'},{...data,cep:'123'},{...data,whatsapp:'123'},{...data,site:'spam'}]){const c=setup({values});await c.submit();assert.equal(c.calls.length,0);assert.equal(c.nodes['registration-success'].hidden,true);}
 const required=setup();required.nodes['shipping-form'].reportValidity=()=>false;await required.submit();assert.equal(required.calls.length,0);
 for(const response of [{ok:false,json:async()=>({success:true})},{ok:true,json:async()=>({success:false})},{ok:true,json:async()=>({success:'false'})},{ok:true,json:async()=>({})}]){const c=setup({handler:async()=>response});await c.submit();assert.equal(c.nodes['registration-success'].hidden,true);assert.equal(c.nodes['save-registration'].disabled,false);}
 const network=setup({handler:async()=>{throw Error('Falha simulada');}});await network.submit();assert.equal(network.nodes['registration-success'].hidden,true);
 let resolve;const pending=setup({handler:()=>new Promise(r=>resolve=r)});const sending=pending.submit();assert.equal(pending.nodes['form-fields'].disabled,true);assert.equal(pending.nodes['registration-success'].hidden,true);await pending.submit();assert.equal(pending.calls.length,1);resolve({ok:true,json:async()=>({success:'true'})});await sending;assert.equal(pending.nodes['registration-success'].hidden,false);assert.equal(pending.nodes['shipping-form'].hidden,true);await pending.submit();assert.equal(pending.calls.length,1);
 const payload=JSON.parse(pending.calls[0].body);assert.equal(payload['CEP'],'01234-567');assert.equal(payload['WhatsApp'],'Não informado');assert.equal(payload['Complemento'],'Não informado');assert.equal(payload['email'],'teste@example.invalid');assert.equal(payload._cc,'teste@example.invalid');assert.match(payload['Confirmação'],/não o pagamento/);assert.equal(pending.nodes['registration-intro'].hidden,true);assert.equal(pending.nodes['registration-instructions'].hidden,true);assert.match(payload['Pagamento'],/Não verificado/);assert.equal(payload['Código do cadastro'],uuid);assert.equal(pending.calls[0].url,'https://formsubmit.co/ajax/fantasticoseditora@gmail.com');
 now=Date.parse('2026-10-20T00:00:00-03:00');const closed=setup();assert.equal(closed.nodes['form-fields'].disabled,true);await closed.submit();assert.equal(closed.calls.length,0);
 console.log('OK: obrigatórios, CEP, WhatsApp opcional, envio pendente, falhas, ACK estrito, clique duplo e encerramento. Rede simulada; entrega real deve ser verificada no Gmail.');
})().catch(e=>{console.error(e);process.exitCode=1;});
