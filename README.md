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
