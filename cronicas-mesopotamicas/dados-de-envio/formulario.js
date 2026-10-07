(() => {
  const form=document.getElementById('shipping-form');
  const fields=document.getElementById('form-fields');
  const button=document.getElementById('save-registration');
  const status=document.getElementById('service-status');
  const success=document.getElementById('registration-success');
  const config=window.SHIPPING_REGISTRATION || {};
  const deadline=Date.parse(config.deadline || '2026-10-19T23:59:59-03:00');
  const ready=config.enabled===true && config.endpoint==='https://formsubmit.co/ajax/fantasticoseditora@gmail.com';
  let sending=false;
  let sent=false;
  let requestId='';
  if(Date.now()>deadline){status.textContent='A pré-venda terminou em 19 de outubro de 2026.';fields.disabled=true;return;}
  if(ready){button.disabled=false;status.hidden=true;}
  const cep=form.elements.namedItem('cep');
  cep.addEventListener('input',()=>{const digits=cep.value.replace(/\D/g,'').slice(0,8);cep.value=digits.length>5?digits.slice(0,5)+'-'+digits.slice(5):digits;});
  const fail=message=>{sending=false;fields.disabled=false;button.disabled=!ready || Date.now()>deadline;button.textContent='ENVIAR DADOS E CONTINUAR';status.hidden=false;status.classList.add('error');status.textContent=message;};
  form.addEventListener('submit',async event=>{
    event.preventDefault();
    if(!ready || sending || sent)return;
    if(Date.now()>deadline){fail('A pré-venda terminou em 19 de outubro de 2026.');return;}
    if(!form.reportValidity())return;
    const data=Object.fromEntries(new FormData(form).entries());
    Object.keys(data).forEach(key=>data[key]=String(data[key]).trim());
    if(data.site){fail('Não foi possível enviar o cadastro. Confira os dados e tente novamente.');return;}
    for(const key of ['nome','email','cep','uf','logradouro','numero','bairro','cidade']){
      if(!data[key]){fail('Preencha todos os campos obrigatórios.');form.elements.namedItem(key).focus();return;}
    }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)){fail('Confira o e-mail informado.');form.elements.namedItem('email').focus();return;}
    if(!/^\d{5}-?\d{3}$/.test(data.cep)){fail('Confira os oito números do CEP.');cep.focus();return;}
    if(data.whatsapp && !/^(?:55)?\d{10,11}$/.test(data.whatsapp.replace(/\D/g,''))){fail('Confira o WhatsApp: informe o DDD e o número, ou deixe o campo vazio.');form.elements.namedItem('whatsapp').focus();return;}
    requestId=requestId || crypto.randomUUID();
    const payload={
      _subject:'Crônicas Mesopotâmicas — dados de envio — '+requestId.slice(0,8),
      _template:'table',_captcha:'false',_honey:'',
      _url:'https://fantasticoseditora.github.io/livros/cronicas-mesopotamicas/dados-de-envio/',
      'Código do cadastro':requestId,'Livro':'Crônicas Mesopotâmicas — Deuses Famintos',
      'Nome completo':data.nome,email:data.email,'WhatsApp':data.whatsapp || 'Não informado',
      'CEP':data.cep.replace(/\D/g,'').replace(/^(\d{5})(\d{3})$/,'$1-$2'),
      'Rua / avenida':data.logradouro,'Número':data.numero,'Complemento':data.complemento || 'Não informado',
      'Bairro':data.bairro,'Cidade':data.cidade,'UF':data.uf,
      'Pagamento':'Não verificado — cadastro anterior ao pagamento'
    };
    fields.disabled=true;button.disabled=true;sending=true;button.textContent='ENVIANDO DADOS…';status.hidden=false;status.classList.remove('error');status.textContent='Aguarde a confirmação do envio.';
    const controller=new AbortController();
    const timeout=setTimeout(()=>controller.abort(),45000);
    try{
      const response=await fetch(config.endpoint,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(payload),signal:controller.signal});
      const result=await response.json();
      if(!response.ok || !(result.success===true || result.success==='true'))throw new Error('Envio não confirmado.');
      sent=true;sending=false;form.hidden=true;status.hidden=true;success.hidden=false;
      document.getElementById('registration-code').textContent='Código do cadastro: '+requestId;
      success.focus();
    }catch(error){
      fail(error.name==='AbortError'?'O envio demorou e não foi possível confirmá-lo. Tente novamente ou fale com a editora.':'Não foi possível confirmar o envio dos dados. Tente novamente ou fale com fantasticoseditora@gmail.com.');
    }finally{clearTimeout(timeout);}
  });
})();
