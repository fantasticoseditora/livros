# Cadastro de envio por e-mail

Orientação mais recente do editor: encaminhar nome, e-mail, WhatsApp opcional e endereço completo com CEP para **fantasticoseditora@gmail.com**, e só então liberar o Mercado Pago.

Serviço: FormSubmit, via AJAX, sem credenciais no navegador. O formulário informa o serviço utilizado e sua política de privacidade. O sucesso exige resposta HTTP positiva e `success` igual a `true` ou `"true"`; falhas não liberam o botão de pagamento. Recebimento do endereço não comprova pagamento. A planilha privada anterior não recebe gravações automáticas nesse fluxo.

## Status de ativação

Página preparada para envio. Ativação do destinatário e entrega de e-mail de teste ainda serão conferidas antes de alterar os cinco CTAs. O serviço pede confirmação do e-mail no primeiro uso. Não considerar o fluxo concluído apenas pela resposta da API: confirmar a chegada do e-mail de teste.

## Testes

`node integracoes/cadastros-envio/email.test.cjs` verifica campos obrigatórios, CEP, WhatsApp vazio, espera do envio, falhas, confirmação estrita do serviço, prevenção de clique duplo e encerramento da campanha. A rede é simulada; a entrega real deve ser verificada separadamente.

## Arquivos

- `dados-de-envio/config.js`: destinatário e endpoint públicos, sem senha ou chave.
- `dados-de-envio/formulario.js`: validação, envio e liberação do Mercado Pago.
- `Code.gs` e `cadastros.test.cjs`: referência da integração Apps Script anterior, não implantada nem em uso. Não seguir a antiga ativação Google para este fluxo.

O código de cadastro permanece igual em uma tentativa de reenvio e facilita reconhecer mensagens repetidas. O serviço não fornece garantia de deduplicação; não prometer que uma nova tentativa nunca duplicará o e-mail. Não publicar mensagens, endereços ou comprovantes no repositório.

Documentação oficial: https://formsubmit.co/ajax-documentation e https://formsubmit.co/documentation.
