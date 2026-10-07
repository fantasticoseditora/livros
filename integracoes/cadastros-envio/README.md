# Ativação do cadastro de envio

Planilha privada criada no Drive: https://docs.google.com/spreadsheets/d/1ZE_k0SFQ41f2M0Xq1Db68QIY8JS5wHx6vew4YIehBTg/edit

Status em 07/10/2026: planilha criada e página preparada; gravação e redirecionamento dos cinco CTAs ainda não ativados. A tela de login Google no navegador da tarefa retornou 502 Bad Gateway. Não considerar a coleta ativa antes do teste de gravação real.

## Publicar o aplicativo de gravação

1. Abra https://script.google.com/home e crie um **Novo projeto** independente.
2. Abra o [código pronto, Code.gs](Code.gs) e copie todo o conteúdo (botão **Copy raw file** no GitHub). Substitua o conteúdo de `Code.gs` no novo projeto por esse código. Não há parâmetros a editar; ele já aponta para a planilha criada e para o formulário canônico do site.
3. Em **Implantar → Nova implantação**, escolha **Aplicativo da Web**. Executar como: sua conta. Quem pode acessar: **Qualquer pessoa**. Autorize somente o projeto da Editora; mantenha a planilha privada.
4. Copie a URL do aplicativo terminada em `/exec` e envie ao Work para configurar e testar o fluxo. Não use a URL `/dev`.

O aplicativo público recebe apenas cadastros validados. Não oferece consulta, listagem ou exportação da planilha; não compartilha a planilha; não recebe dados de cartão. A confirmação de pagamento continua sob responsabilidade do Mercado Pago.

## Configurar e validar depois da implantação

- Inserir a URL em `cronicas-mesopotamicas/dados-de-envio/config.js`.
- Abrir a página intermediária; testar campos obrigatórios, CEP, WhatsApp vazio, sucesso real e erro de gravação.
- Enviar um cadastro sintético identificado como teste e verificar a linha na aba `Cadastros` antes de considerar concluído. Não fazer compra de teste.
- Só depois alterar os cinco `href` da landing para `./dados-de-envio/` e adicionar `cadastroEnvioUrl` no `CONFIG` de `assets/app.js`. O destino deve continuar sendo a página intermediária em todas as atualizações do contador.
- Atualizar as versões dos recursos editados; aguardar Pages e testar em 360, 390, 412, 768 e 1440 px.

O formulário exibido dentro do aplicativo vem de `dados-de-envio/formulario.html`. O botão do Mercado Pago fica oculto até a confirmação de gravação por `google.script.run`; não tratar carregamento de iframe ou resposta opaca de rede como sucesso.

O cadastro não comprova pagamento. Antes de preparar os envios, conciliar com o Mercado Pago usando o e-mail e o nome. Não publicar cadastros, respostas ou comprovantes no repositório público.

## Verificação local

Execute `node integracoes/cadastros-envio/cadastros.test.cjs` a partir da raiz do repositório. O teste cobre validação, CEP com zero inicial, WhatsApp vazio, deduplicação, prevenção de fórmulas em células, erro de gravação, prazo e botão de pagamento oculto até um ACK válido. Serviços Google simulados; implantação e gravação reais ainda pendentes.

Referências técnicas oficiais: [aplicativos da Web](https://developers.google.com/apps-script/guides/web) e [comunicação com o servidor](https://developers.google.com/apps-script/guides/html/communication).
