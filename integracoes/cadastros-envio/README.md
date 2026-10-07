# Cadastro de envio por e-mail

Orientação mais recente do editor: encaminhar nome, e-mail, WhatsApp opcional e endereço completo com CEP para **fantasticoseditora@gmail.com**, e só então liberar o Mercado Pago.

Serviço: FormSubmit, via AJAX, sem credenciais no navegador. O formulário informa o serviço utilizado e sua política de privacidade. O sucesso exige resposta HTTP positiva e `success` igual a `true` ou `"true"`; falhas não liberam o botão de pagamento. Recebimento do endereço não comprova pagamento. A planilha privada anterior não recebe gravações automáticas nesse fluxo.

## Status de ativação

Página preparada para envio, porém desativada (`enabled: false`). O primeiro envio técnico gerou uma mensagem de ativação para fantasticoseditora@gmail.com, referente ao domínio fantasticoseditora.github.io. O botão de pagamento permaneceu oculto.

A confirmação do FormSubmit foi rejeitada pela revisão automática de aprovação: o editor autorizou o envio ao e-mail da editora, mas não autorizou especificamente o intermediário a processar os dados. Aguardar autorização explícita para o FormSubmit; não contornar a rejeição por outra ferramenta ou rota. Nenhum dado real de comprador foi enviado; o teste usou apenas campos sintéticos e o e-mail comercial da própria editora.

Após autorização: confirmar o destinatário pelo e-mail de ativação, habilitar o formulário, confirmar a entrega de um e-mail técnico com todos os campos e WhatsApp vazio, então publicar os cinco CTAs apontando para a etapa intermediária. Não considerar o fluxo concluído apenas pela resposta da API.

A autorização solicitada abrange o processamento de nome, e-mail, endereço completo com CEP, WhatsApp opcional e código de cadastro pelo FormSubmit para encaminhamento a fantasticoseditora@gmail.com. O serviço informa retenção das submissões por 30 dias em sua documentação. Política: https://formsubmit.co/privacy.pdf.

## Testes

`node integracoes/cadastros-envio/email.test.cjs` verifica campos obrigatórios, CEP, WhatsApp vazio, espera do envio, falhas, confirmação estrita do serviço, prevenção de clique duplo e encerramento da campanha. A rede é simulada; a entrega real deve ser verificada separadamente.

## Arquivos

- `dados-de-envio/config.js`: destinatário e endpoint públicos, sem senha ou chave.
- `dados-de-envio/formulario.js`: validação, envio e liberação do Mercado Pago.
- `Code.gs` e `cadastros.test.cjs`: referência da integração Apps Script anterior, não implantada nem em uso. Não seguir a antiga ativação Google para este fluxo.

O código de cadastro permanece igual em uma tentativa de reenvio e facilita reconhecer mensagens repetidas. O serviço não fornece garantia de deduplicação; não prometer que uma nova tentativa nunca duplicará o e-mail. Não publicar mensagens, endereços ou comprovantes no repositório.

Documentação oficial: https://formsubmit.co/ajax-documentation e https://formsubmit.co/documentation.
