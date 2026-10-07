# Cadastro de envio por e-mail

Orientação mais recente do editor: encaminhar nome, e-mail, WhatsApp opcional e endereço completo com CEP para **fantasticoseditora@gmail.com**, e só então liberar o Mercado Pago.

Serviço: FormSubmit, via AJAX, sem credenciais no navegador. O formulário informa o serviço utilizado e sua política de privacidade. O sucesso exige resposta HTTP positiva e `success` igual a `true` ou `"true"`; falhas não liberam o botão de pagamento. Recebimento do endereço não comprova pagamento. A planilha privada anterior não recebe gravações automáticas nesse fluxo.

## Status de ativação

Autorização expressa do editor em 07/10/2026 para o FormSubmit processar os dados e encaminhá-los para fantasticoseditora@gmail.com. Ativação confirmada no serviço e formulário habilitado. Teste técnico realizado no GitHub Pages: campos vazios impedem envio; Mercado Pago permanece oculto durante a requisição e só aparece após confirmação positiva. Mensagem técnica recebida no Gmail da editora, com todos os campos conferidos; WhatsApp vazio aceito e CEP com zero inicial preservado. Nenhum dado real de comprador utilizado.

Os cinco CTAs da landing levam para `./dados-de-envio/`. Após enviar os dados, o comprador deve concluir o pagamento no Mercado Pago com o mesmo e-mail. Cadastro não confirma pagamento; conciliar nome/e-mail com os pagamentos antes de preparar os envios. Não há gravação automática na planilha.

O serviço informa retenção das submissões por 30 dias em sua documentação. Política: https://formsubmit.co/privacy.pdf.

## Testes

`node integracoes/cadastros-envio/email.test.cjs` verifica campos obrigatórios, CEP, WhatsApp vazio, espera do envio, falhas, confirmação estrita do serviço, prevenção de clique duplo e encerramento da campanha. A rede é simulada; a entrega real deve ser verificada separadamente.

## Arquivos

- `dados-de-envio/config.js`: destinatário e endpoint públicos, sem senha ou chave.
- `dados-de-envio/formulario.js`: validação, envio e liberação do Mercado Pago.
- `Code.gs` e `cadastros.test.cjs`: referência da integração Apps Script anterior, não implantada nem em uso. Não seguir a antiga ativação Google para este fluxo.

O código de cadastro permanece igual em uma tentativa de reenvio e facilita reconhecer mensagens repetidas. O serviço não fornece garantia de deduplicação; não prometer que uma nova tentativa nunca duplicará o e-mail. Não publicar mensagens, endereços ou comprovantes no repositório.

Documentação oficial: https://formsubmit.co/ajax-documentation e https://formsubmit.co/documentation.
