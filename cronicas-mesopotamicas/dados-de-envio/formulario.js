(() => {
  const form=document.getElementById('shipping-form');
  const fields=document.getElementById('form-fields');
  const button=document.getElementById('save-registration');
  const status=document.getElementById('service-status');
  const success=document.getElementById('registration-success');
  const deadline=Date.parse('2026-10-19T23:59:59-03:00');
  const ready=!!window.google?.script?.run;
  let sending=false;
  let saved=false;
  let attempt=0;
  let requestId='';
  let timeout;
  if(Date.now()>deadline){status.textContent='A pré-venda terminou em 19 de outubro de 2026.';fields.disabled=true;return;}
  if(ready){button.disabled=false;status.hidden=true;}
  const cep=form.elements.namedItem('cep');
  cep.addEventListener('input',()=>{const digits=cep.value.replace(/\D/g,'').slice(0,8);cep.value=digits.length>5?digits.slice(0,5)+'-'+digits.slice(5):digits;});
  const fail=(message, currentAttempt=attempt)=>{if(saved || currentAttempt!==attempt)return;clearTimeout(timeout);sending=false;fields.disabled=false;button.disabled=!ready;button.textContent='SALVAR DADOS E CONTINUAR';status.hidden=false;status.classList.add('error');status.textContent=message;};
  form.addEventListener('submit',event=>{
    event.preventDefault();
    if(!ready || sending || saved)return;
    if(Date.now()>deadline){fail('A pré-venda terminou em 19 de outubro de 2026.');button.disabled=true;return;}
    if(!form.reportValidity())return;
    const data=Object.fromEntries(new FormData(form).entries());
    if(data.whatsapp && !/^(?:55)?\d{10,11}$/.test(data.whatsapp.replace(/\D/g,''))){fail('Confira o WhatsApp: informe o DDD e o número, ou deixe o campo vazio.');form.elements.namedItem('whatsapp').focus();return;}
    requestId=requestId || crypto.randomUUID();
    data.id=requestId;
    const currentAttempt=++attempt;
    fields.disabled=true;button.disabled=true;sending=true;button.textContent='SALVANDO DADOS…';status.hidden=false;status.classList.remove('error');status.textContent='Aguarde a confirmação do cadastro.';
    timeout=setTimeout(()=>fail('A gravação está demorando. Tente novamente; seu cadastro não será duplicado.',currentAttempt),45000);
    try{
      window.google.script.run.withSuccessHandler(result=>{
        if(saved)return;
        if(!result || result.ok!==true || result.id!==requestId){fail('Não foi possível confirmar a gravação. Tente novamente.',currentAttempt);return;}
        clearTimeout(timeout);sending=false;saved=true;form.hidden=true;status.hidden=true;success.hidden=false;
        document.getElementById('registration-code').textContent='Código do cadastro: '+requestId;
        success.focus();
      }).withFailureHandler(()=>fail('Não foi possível salvar seus dados. Tente novamente ou fale com fantasticoseditora@gmail.com.',currentAttempt)).salvarCadastro(data);
    }catch{fail('Não foi possível conectar ao cadastro. Tente novamente.',currentAttempt);}
  });
})();
