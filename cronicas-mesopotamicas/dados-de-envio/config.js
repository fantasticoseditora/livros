// Aguardando autorização explícita para o FormSubmit; manter o envio desativado.
// O destino dos CTAs só deve mudar após validar a entrega de um e-mail de teste.
window.SHIPPING_REGISTRATION = Object.freeze({
  enabled: false,
  endpoint: 'https://formsubmit.co/ajax/fantasticoseditora@gmail.com',
  recipient: 'fantasticoseditora@gmail.com',
  deadline: '2026-10-19T23:59:59-03:00'
});
