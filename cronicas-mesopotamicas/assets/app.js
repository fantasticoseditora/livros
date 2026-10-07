const CONFIG = Object.freeze({
  cadastroEnvioUrl: "./dados-de-envio/",
  mercadoPagoUrl: "https://mpago.la/2rBm8qQ", // Checkout fornecido pelo editor.
  deadline: "2026-10-19T23:59:59-03:00"
});
const deadline = Date.parse(CONFIG.deadline);
function updateCampaign(now = Date.now()) {
  const expired = now > deadline;
  const ready = !expired && /^https:\/\//.test(CONFIG.mercadoPagoUrl) && CONFIG.cadastroEnvioUrl === "./dados-de-envio/";
  document.querySelectorAll('[data-buy]').forEach(link => {
    link.textContent = expired ? 'PRÉ-VENDA ENCERRADA' : link.dataset.label;
    if (ready) {
      link.href = CONFIG.cadastroEnvioUrl;
      link.removeAttribute('aria-disabled');
      link.removeAttribute('tabindex');
    } else {
      link.removeAttribute('href');
      link.setAttribute('aria-disabled', 'true');
      link.setAttribute('tabindex', '-1');
    }
  });
  document.querySelectorAll('[data-payment-status]').forEach(el => {
    el.textContent = expired ? 'A pré-venda terminou em 19 de outubro de 2026.' : ready ? 'Informe os dados de envio e continue para o Mercado Pago.' : 'Link de pagamento em configuração.';
  });
  const diff = Math.max(0, deadline - now);
  const values = {days:Math.floor(diff/86400000), hours:Math.floor(diff%86400000/3600000), minutes:Math.floor(diff%3600000/60000), seconds:Math.floor(diff%60000/1000)};
  Object.entries(values).forEach(([key,value]) => {
    const el = document.querySelector(`[data-${key}]`);
    if (el) el.textContent = String(value).padStart(2,'0');
  });
}
document.querySelectorAll('[data-buy]').forEach(link => link.addEventListener('click', event => {
  updateCampaign();
  if (link.getAttribute('aria-disabled') === 'true') event.preventDefault();
}));
updateCampaign();
setInterval(updateCampaign,1000);
