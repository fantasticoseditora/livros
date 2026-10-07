/** Cadastro de endereço. A planilha permanece privada; nenhuma leitura pública. */
const SPREADSHEET_ID = '1ZE_k0SFQ41f2M0Xq1Db68QIY8JS5wHx6vew4YIehBTg';
const SHEET_NAME = 'Cadastros';
const FORM_HTML = 'https://fantasticoseditora.github.io/livros/cronicas-mesopotamicas/dados-de-envio/formulario.html';
const DEADLINE = '2026-10-19T23:59:59-03:00';
const UFS = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];
const EXPECTED_HEADERS = ['ID do cadastro','Data do cadastro','Nome completo','E-mail','WhatsApp (opcional)','CEP','Rua / avenida','Número','Complemento','Bairro','Cidade','UF','Pagamento'];

function doGet() {
  const response=UrlFetchApp.fetch(FORM_HTML,{muteHttpExceptions:true});
  if(response.getResponseCode()!==200)throw new Error('Formulário temporariamente indisponível.');
  return HtmlService.createHtmlOutput(response.getContentText()).setTitle('Dados de envio — Crônicas Mesopotâmicas').setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function validarCadastro_(input) {
  if(!input || typeof input!=='object')throw new Error('Dados inválidos.');
  if(Date.now()>Date.parse(DEADLINE))throw new Error('Pré-venda encerrada.');
  const limits={id:36,nome:120,email:160,whatsapp:20,cep:9,logradouro:160,numero:20,complemento:160,bairro:100,cidade:100,uf:2,site:200};
  const p={};
  Object.keys(limits).forEach(key=>{
    if(input[key]!=null && typeof input[key]!=='string')throw new Error('Campo inválido.');
    p[key]=(input[key] || '').trim();
    if(p[key].length>limits[key] || /[\u0000-\u001f\u007f]/.test(p[key]))throw new Error('Campo inválido.');
  });
  if(p.site)throw new Error('Cadastro inválido.');
  if(!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(p.id))throw new Error('ID inválido.');
  if(p.nome.length<3 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email))throw new Error('Confira nome e e-mail.');
  if(!/^[0-9]{5}-?[0-9]{3}$/.test(p.cep) || !UFS.includes(p.uf))throw new Error('Confira CEP e estado.');
  ['logradouro','numero','bairro','cidade'].forEach(k=>{if(!p[k])throw new Error('Endereço incompleto.');});
  p.whatsapp=p.whatsapp.replace(/\D/g,'');
  if(p.whatsapp && !/^(?:55)?\d{10,11}$/.test(p.whatsapp))throw new Error('WhatsApp inválido.');
  p.cep=p.cep.replace(/\D/g,'').replace(/^(\d{5})(\d{3})$/,'$1-$2');
  return p;
}

function textoSeguro_(value) {
  return /^[=+\-@]/.test(value)?"'"+value:value;
}

function salvarCadastro(input) {
  const p=validarCadastro_(input);
  const lock=LockService.getScriptLock();
  lock.waitLock(10000);
  try{
    const sheet=SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
    if(!sheet)throw new Error('Planilha de cadastros indisponível.');
    const headers=sheet.getRange(1,1,1,EXPECTED_HEADERS.length).getValues()[0];
    if(JSON.stringify(headers)!==JSON.stringify(EXPECTED_HEADERS))throw new Error('Cabeçalho da planilha alterado.');
    const ids=sheet.getRange(2,1,Math.max(1,sheet.getLastRow()-1),1).getValues();
    if(ids.some(row=>row[0]===p.id))return {ok:true,id:p.id};
    const lastDataRow=ids.reduce((last,row,index)=>row[0]?index+2:last,1);
    const rowIndex=lastDataRow+1;
    if(rowIndex>sheet.getMaxRows())sheet.insertRowsAfter(sheet.getMaxRows(),100);
    const values=[p.id,new Date(),p.nome,p.email,p.whatsapp,p.cep,p.logradouro,p.numero,p.complemento,p.bairro,p.cidade,p.uf,'Não verificado'];
    const range=sheet.getRange(rowIndex,1,1,values.length);
    range.setNumberFormat('@');
    range.setValues([values.map(value=>typeof value==='string'?textoSeguro_(value):value)]);
    sheet.getRange(rowIndex,2).setNumberFormat('dd/mm/yyyy hh:mm');
    SpreadsheetApp.flush();
    return {ok:true,id:p.id};
  }finally{lock.releaseLock();}
}
