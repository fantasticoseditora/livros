# Livros — Editora Fantásticos

Estrutura-base das páginas comerciais de livros da Editora Fantásticos.

## Crônicas Mesopotâmicas

- Landing page: `/cronicas-mesopotamicas/`
- Pós-compra: `/cronicas-mesopotamicas/compra-confirmada/`
- Bônus final: `/cronicas-mesopotamicas/bonus/`
- **Referências oficiais/canônicas:** `/cronicas-mesopotamicas/referencias-oficiais/`

### Regra para Work/agentes

Antes de editar qualquer página de **Crônicas Mesopotâmicas**, consultar obrigatoriamente o diretório `referencias-oficiais/` e seu `manifesto-referencias.json`. A capa e o logo não podem ser reconstruídos por IA. O conto presente ali é provisório e não pode ser publicado enquanto estiver marcado como `provisorio_nao_publicar`.

## Mercado Pago

O link de pagamento deve ser inserido somente depois da URL de retorno do GitHub Pages estar ativa e validada.

## Publicação

GitHub Pages: branch `main`, raiz `/`.

O conteúdo do conto permanece no Google Drive. O repositório público armazena apenas o ponteiro editorial. Não existem arquivos de bônus para entrega enquanto o manifesto indicar `provisorio_nao_publicar`.

Os cinco CTAs compartilham a configuração `mercadoPagoUrl` em `cronicas-mesopotamicas/assets/app.js`. A Fase 2 só deve preencher esse campo depois de o editor fornecer o checkout. O contador encerra em `2026-10-19T23:59:59-03:00`; os CTAs são desativados ao término da campanha.

A página pós-compra não valida pagamentos e não deve ser vinculada na landing, no catálogo, em menus ou no sitemap.

## Validação da Fase 1 — 7 de outubro de 2026

- Landing e pós-compra abertas no navegador em HTTPS.
- Ambas verificadas nas larguras 360, 390, 412, 768 e 1440 px, sem rolagem horizontal.
- Capa carregada diretamente de `referencias-oficiais/`; os três arquivos de imagem preservam os hashes Git dos originais do pacote.
- HTML, CSS, JavaScript, capa e logo retornam HTTP 200; FAQ e contato por e-mail conferidos.
- Cinco CTAs preparados e desativados enquanto não houver checkout do Mercado Pago.
- Pós-compra com `noindex,nofollow,noarchive`, sem afirmação de pagamento aprovado e sem arquivos de bônus provisórios.
- Conto integral não publicado: o diretório canônico contém somente o ponteiro editorial para a fonte.

Landing: https://fantasticoseditora.github.io/livros/cronicas-mesopotamicas/

URL exata de retorno de sucesso do Mercado Pago: https://fantasticoseditora.github.io/livros/cronicas-mesopotamicas/compra-confirmada/

## Fase 2 — 7 de outubro de 2026

Checkout informado pelo editor: https://mpago.la/2rBm8qQ

Os cinco CTAs usam esse checkout. O editor também autorizou a revisão pontual e a entrega de A Epifania do Escriba em PDF e EPUB na página pós-compra. O manifesto registra a nova fonte corrigida e o status aprovado_para_publicacao. A página pós-compra continua sem validação técnica do pagamento e sem links públicos no catálogo ou na landing.

A foto solicitada ainda depende da identificação do arquivo: o documento Prefácio + 5 Cap consultado não contém imagem incorporada. Não usar retrato substituto sem autorização.

### Validação da Fase 2

- Landing e pós-compra verificadas novamente em 360, 390, 412, 768 e 1440 px, sem rolagem horizontal.
- Cinco CTAs ativos, incluindo o botão fixo no mobile, com o link exato informado pelo editor.
- PDF e EPUB baixados pelos botões da página pós-compra no navegador; bytes idênticos aos arquivos finais publicados.
- PDF e EPUB contêm integralmente a versão revisada. EPUBCheck: zero erros e avisos.
- Pós-compra mantém noindex,nofollow,noarchive; capa e logo originais preservados.
- O Mercado Pago apresentou erro genérico de acesso no navegador remoto, mesmo após uma atualização da página. Não foi possível verificar a tela de checkout nem fazer uma compra; o destino dos CTAs corresponde ao link do editor.
- Recursos CSS e JS usam versão na URL para evitar cache da configuração anterior. Atualizar a versão ao publicar mudanças nesses arquivos.

## Ajuste de exibição — 07/10/2026

Preço removido de toda a landing, metadados e botões por solicitação do editor. Cinco CTAs mantidos com o checkout informado. Fonte dos CTAs: 20 px no desktop e 18 px no mobile; altura mínima de 60 px.

Verificado no navegador em 360, 390, 412, 768 e 1440 px: sem preço no conteúdo/metadados, cinco CTAs ativos, fonte de 18/20 px, altura mínima de 60 px nos botões visíveis e nenhuma rolagem horizontal. Verificação temporária removida após os testes.

## Início dos envios — 07/10/2026

Aviso destacado nas duas páginas: os livros comprados na pré-venda serão enviados a partir de 19 de outubro de 2026, conforme informação do editor. FAQ atualizado.

## Correção visual mobile — 07/10/2026

Logo integral no rodapé, sem recorte circular ou fundo, derivada tecnicamente da referência original. Título da oferta organizado em linhas completas, com fonte responsiva e sem quebra interna de Mesopotâmicas.

Verificado no GitHub Pages em 360, 390, 412, 768 e 1440 px: sem rolagem horizontal ou quebra interna de palavras no título da oferta. Logo transparente carregada em 512 × 512 px, exibida proporcionalmente e sem máscara circular. Arquivo original preservado. Página temporária de teste removida.

## Primeira dobra — 07/10/2026

No mobile, capa canônica entre a apresentação do livro e o botão de compra. Aviso de início dos envios abaixo do botão. Na página pós-compra, mantido o aviso destacado de envios a partir de 19 de outubro de 2026.

Validação no navegador em 360, 390, 412, 768 e 1440 px, com altura de 700 px: capa carregada na primeira dobra, sem rolagem horizontal, aviso após o botão e cinco CTAs preservados. Nos celulares de 360, 390 e 412 px, a capa também cabe integralmente em uma primeira tela de 640 px, descontado o botão fixo. Pós-compra aberta e aviso de início dos envios confirmado.
