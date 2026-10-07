# Prompt final — Work

PROJETO: PRÉ-VENDA — CRÔNICAS MESOPOTÂMICAS: DEUSES FAMINTOS
Autor: Ugo Leão
Editora: Fantásticos

## OBJETIVO

Criar, publicar e testar no GitHub Pages a página oficial de pré-venda de **Crônicas Mesopotâmicas — Deuses Famintos**, de **Ugo Leão**, além da página pós-compra que será usada como redirecionamento do Mercado Pago.

A execução deve ocorrer em duas fases:

**FASE 1:** criar/organizar repositório, subir os arquivos, ativar GitHub Pages, testar as URLs e devolver a URL pós-compra para configuração no Mercado Pago.

**FASE 2:** somente depois que o editor fornecer o link de pagamento do Mercado Pago, inserir esse link em todos os CTAs de compra e publicar a atualização.

Não pedir o link do Mercado Pago antes de concluir a FASE 1.

---

## DADOS COMERCIAIS

Livro: **CRÔNICAS MESOPOTÂMICAS**

Livro Um: **DEUSES FAMINTOS**

Autor: **UGO LEÃO**

Atenção: Ugo é escrito **sem H**.

Preço da pré-venda: **R$ 79,90**.

O valor já inclui: **frete econômico para todo o Brasil**.

Prazo da pré-venda: **até 19 de outubro de 2026**.

Bônus: **A Epifania do Escriba**, conto exclusivo de Ugo Leão, a ser disponibilizado em **PDF e EPUB** quando a versão final estiver aprovada.

Canal oficial para dúvidas e informações: **fantasticoseditora@gmail.com**.

---

## GITHUB

Usar a organização:

`fantasticoseditora`

Verificar se existe:

`fantasticoseditora/livros`

Se não existir, criar repositório público chamado:

`livros`

Esse repositório será a base central para páginas oficiais/comerciais de livros da Editora Fantásticos.

Se houver um pacote `livros-site.zip` anexado a esta conversa/tarefa, usar esse pacote como base e preservar sua estrutura.

Estrutura mínima esperada:

```text
/
  index.html
  README.md
  PROMPT-WORK.md

  cronicas-mesopotamicas/
      index.html

      assets/
          styles.css
          app.js

      referencias-oficiais/
          README.md
          manifesto-referencias.json
          capa-aprovada-cronicas-mesopotamicas.png
          logo-fantasticos-original.jpg
          arte-original-sem-tipografia.png
          conto-a-epifania-do-escriba-FONTE.md

      compra-confirmada/
          index.html

      bonus/
          README.txt
          [PDF/EPUB somente quando aprovados]
```

---

## DIRETÓRIO CANÔNICO DE REFERÊNCIAS

O diretório abaixo é a **fonte obrigatória de referência** para qualquer alteração visual ou editorial relacionada a Crônicas Mesopotâmicas:

`/cronicas-mesopotamicas/referencias-oficiais/`

Depois que o repositório for criado, a URL esperada do diretório será:

`https://github.com/fantasticoseditora/livros/tree/main/cronicas-mesopotamicas/referencias-oficiais`

Confirmar a URL real depois da criação.

### REGRA OBRIGATÓRIA

Antes de editar a página, capa, logotipo, identidade visual, copy do bônus ou arquivos de entrega:

1. abrir `referencias-oficiais/README.md`;
2. abrir `referencias-oficiais/manifesto-referencias.json`;
3. tratar esses arquivos como fonte canônica;
4. não substituir nenhuma referência por arquivos encontrados fora desse diretório sem autorização explícita do editor.

A própria landing page deve usar diretamente a capa armazenada nesse diretório, evitando cópias divergentes.

---

## CAPA APROVADA

Arquivo canônico:

`referencias-oficiais/capa-aprovada-cronicas-mesopotamicas.png`

A capa aprovada contém:

- UGO LEÃO acima do título;
- CRÔNICAS MESOPOTÂMICAS como título principal;
- DEUSES FAMINTOS abaixo do título;
- logo Fantásticos na parte inferior.

Não reconstruir a capa com IA.
Não redesenhar.
Não alterar iluminação.
Não alterar personagens.
Não alterar o tigre.
Não alterar cidade, rio, céu ou paisagem.

A página deve usar essa capa como arquivo real, não uma recriação.

---

## LOGO FANTÁSTICOS

Arquivo-fonte canônico:

`referencias-oficiais/logo-fantasticos-original.jpg`

Não reconstruir nem redesenhar o símbolo.

Se for necessário usar o logo com transparência, realizar somente remoção técnica do fundo preservando o desenho original; não usar geração de imagem para recriá-lo.

---

## ARTE ORIGINAL

Arquivo de referência:

`referencias-oficiais/arte-original-sem-tipografia.png`

Usar apenas como referência complementar para compreender a arte e a iluminação originais.

A capa aprovada continua sendo a referência principal para a página.

---

## CONTO — FONTE EDITORIAL

Arquivo de referência no repositório:

`referencias-oficiais/conto-a-epifania-do-escriba-FONTE.md`

Esse arquivo aponta para a fonte canônica no Google Drive:

https://docs.google.com/document/d/16H3tnAh7Hp6uNk50v0AWcYWUVrC7Dm9BDJlM7eezmJA/edit?usp=drivesdk

A versão atual ainda está em revisão por Ugo Leão.

### IMPORTANTE SOBRE O CONTO

O repositório `livros` será público por causa do GitHub Pages.

Portanto, **não copiar o texto integral do conto para o repositório público enquanto a obra ainda não tiver sido autorizada para divulgação**.

O diretório deve manter apenas o ponteiro canônico para o documento no Drive.

Sempre consultar o conto pelo Drive quando necessário.

Enquanto o `manifesto-referencias.json` indicar:

`provisorio_nao_publicar`

não:

- gerar PDF final;
- gerar EPUB final;
- disponibilizar o conto;
- incluir link público para o documento;
- entregar a versão atual aos compradores.

Quando Ugo enviar a revisão final, o editor orientará a atualização da fonte no Drive. Só depois da aprovação editorial atualizar o manifesto para `aprovado_para_publicacao` e gerar:

`/cronicas-mesopotamicas/bonus/a-epifania-do-escriba.pdf`

`/cronicas-mesopotamicas/bonus/a-epifania-do-escriba.epub`

---

## IDENTIDADE VISUAL

A página deve parecer uma extensão digital da capa aprovada.

Paleta principal:

- terracota;
- cobre;
- âmbar;
- dourado;
- vermelho queimado;
- marrom profundo;
- fundos escuros para contraste.

Tipografia:

- títulos: Cinzel Bold;
- destaques/autor: Cinzel Regular;
- corpo: Inter, Source Sans 3 ou equivalente altamente legível.

Não criar visual genérico de infoproduto, curso, SaaS ou startup.
Não usar neon ou azul tecnológico como identidade dominante.

---

## POSICIONAMENTO

Trata-se de fantasia sombria histórica ambientada na antiga Mesopotâmia.

O protagonista é Calibum.

A escala é épica, envolvendo cidades, deuses, monstros, cultos, guerra, rituais e forças sobrenaturais.

O eixo emocional é humano: um pai diante de escolhas cada vez mais brutais para proteger a própria família.

Frase principal da campanha:

**“Antes de os deuses virarem mitos, eles tinham fome.”**

Pergunta de impacto:

**“Até onde um pai iria para salvar a própria filha?”**

Evitar spoilers centrais do clímax.

---

## FONTES EDITORIAIS OFICIAIS

Pasta do projeto:

https://drive.google.com/drive/folders/1FKGjL_C6qPE_9bjDXifLzhidad2Jse89

Plano de Marketing:

https://docs.google.com/document/d/1DcOVYFg4ze8t57KzTMCeAnNzhXaeI7GBk07b_tRoXNE/edit

Manuscrito final pré-diagramação:

https://docs.google.com/document/d/1714R9wwU-zQkMpBw3DkNvZcwNoATJZMkM-plhlaEM_E/edit

Não inventar fatos da obra.

---

## LANDING PAGE

Caminho:

`/cronicas-mesopotamicas/`

URL prevista após GitHub Pages:

`https://fantasticoseditora.github.io/livros/cronicas-mesopotamicas/`

Confirmar URL real depois do deploy.

O Hero deve mostrar sem necessidade de rolagem:

UGO LEÃO

CRÔNICAS MESOPOTÂMICAS

DEUSES FAMINTOS

“Antes de os deuses virarem mitos, eles tinham fome.”

PRÉ-VENDA ATÉ 19 DE OUTUBRO

R$ 79,90

FRETE ECONÔMICO INCLUSO PARA TODO O BRASIL

+

BÔNUS: A EPIFANIA DO ESCRIBA

CTA:

`GARANTIR MEU EXEMPLAR — R$ 79,90`

Na FASE 1, enquanto não houver link do Mercado Pago, o botão deve ficar visualmente pronto, porém sem direcionar a um checkout inexistente.

---

## ESTRUTURA DA PÁGINA

Criar fluxo contínuo contendo:

1. Hero.
2. Premissa.
3. Calibum e o conflito humano.
4. Mundo da antiga Mesopotâmia.
5. Uruk, Nippur, zigurates, pântanos, Anunnaki, cultos e horror.
6. Pergunta dramática.
7. Bônus da pré-venda.
8. Sobre Ugo Leão.
9. Oferta.
10. Contador real até 19/10/2026.
11. FAQ.
12. CTA final.
13. Rodapé Fantásticos.

Não transformar a página em enciclopédia.

---

## OFERTA

Exibir claramente:

**R$ 79,90**

**Frete econômico incluso para todo o Brasil.**

Pré-venda até 19/10/2026.

Bônus exclusivo: **A Epifania do Escriba** em PDF + EPUB quando aprovado.

Informação logística discreta:

“O prazo de produção e entrega pode variar conforme a região e a modalidade econômica disponível.”

Não prometer PAC ou Sedex dentro desse preço.

---

## URGÊNCIA

A única urgência permitida é verdadeira:

“A pré-venda termina em 19 de outubro.”

Pode haver contador até:

19/10/2026 23:59:59 — America/Sao_Paulo.

Não inventar estoque, compradores, últimas unidades, lotes ou pessoas visualizando.

---

## PÁGINA PÓS-COMPRA

Criar em:

`/cronicas-mesopotamicas/compra-confirmada/`

URL prevista:

`https://fantasticoseditora.github.io/livros/cronicas-mesopotamicas/compra-confirmada/`

Essa URL é prioridade da FASE 1, pois será cadastrada no Mercado Pago como URL de retorno.

Texto principal:

“Obrigado pela compra”

ou

“Compra concluída”

Não afirmar que o pagamento está aprovado se não houver validação técnica real.

Informar:

“A confirmação e os dados do pagamento são enviados pelo Mercado Pago para o e-mail informado durante a compra.”

---

## BÔNUS NA PÁGINA PÓS-COMPRA

Enquanto o conto não estiver aprovado, exibir:

“Seu bônus está sendo preparado editorialmente.

A versão definitiva de A Epifania do Escriba será disponibilizada aqui em PDF e EPUB assim que o fechamento editorial for concluído.

Guarde o endereço desta página.”

Não exibir links quebrados.

Quando os arquivos finais forem aprovados, substituir por:

- BAIXAR EM PDF
- BAIXAR EM EPUB

---

## INDEXAÇÃO DA PÁGINA PÓS-COMPRA

Adicionar:

`<meta name="robots" content="noindex,nofollow,noarchive">`

Não incluir a página pós-compra em menus, sitemap, catálogo ou links públicos da landing page.

Não alegar proteção individual da URL; GitHub Pages é hospedagem estática.

---

## ATENDIMENTO

Exibir próximo ao FAQ:

“Ficou com alguma dúvida sobre a pré-venda?
Entre em contato com a Editora Fantásticos:
fantasticoseditora@gmail.com”

Criar link:

`mailto:fantasticoseditora@gmail.com`

Na página pós-compra:

“Precisa de ajuda com sua compra, pagamento ou acesso ao bônus?
Fale com a Editora Fantásticos:
fantasticoseditora@gmail.com”

E acrescentar:

“Guarde o comprovante de pagamento e utilize, preferencialmente, o mesmo e-mail informado durante a compra para facilitar a identificação do pedido.”

Não inventar prazo de resposta.

---

## GITHUB PAGES — FASE 1

Ativar GitHub Pages usando a configuração mais simples e estável, preferencialmente:

branch `main`, raiz `/`.

Aguardar o deploy.

Abrir no navegador e testar de fato:

1. landing page;
2. página pós-compra;
3. capa carregada a partir de `referencias-oficiais/`;
4. responsividade;
5. HTTPS;
6. ausência de links quebrados.

Não considerar concluído apenas porque os arquivos foram enviados ao repositório.

---

## RESULTADO OBRIGATÓRIO DA FASE 1

Antes de pedir o link do Mercado Pago, devolver ao editor:

1. URL do repositório;
2. URL do diretório canônico `referencias-oficiais`;
3. URL pública da landing page;
4. URL pública da página pós-compra;
5. URL EXATA que deve ser cadastrada no Mercado Pago como redirecionamento de sucesso;
6. confirmação de que as páginas foram abertas e testadas;
7. confirmação de que o conto provisório não foi publicado no repositório público.

PAUSAR NESSE PONTO.

---

## FASE 2 — MERCADO PAGO

Depois que o editor fornecer o link do Mercado Pago, inserir esse link em todos os CTAs:

- Hero;
- oferta intermediária;
- oferta principal;
- CTA final;
- CTA fixo no mobile.

Não criar checkout interno.
Não armazenar dados de cartão.
Não processar pagamento no site.

---

## MOBILE FIRST

Testar aproximadamente:

360 px
390 px
412 px
768 px
1440 px

Garantir:

- nenhuma rolagem horizontal;
- título legível;
- capa proporcional;
- botões grandes;
- contraste adequado;
- bom desempenho.

---

## SEO

Na landing page pública adicionar:

- title;
- meta description;
- Open Graph;
- imagem social;
- favicon;
- canonical quando a URL real estiver definida.

A landing page pode ser indexada.
A página pós-compra não.

---

## REGRAS FINAIS

Não inventar depoimentos.
Não inventar avaliações.
Não inventar vendas.
Não alegar bestseller.
Não criar urgência falsa.
Não publicar o conto provisório.
Não escrever “Hugo Leão”.
O correto é **UGO LEÃO**.
Não mudar o preço de **R$ 79,90**.
Não mudar a data de **19/10/2026**.
Não retirar a informação **frete econômico incluso para todo o Brasil**.
Não alterar ou recriar a capa e o logo fora das referências canônicas.

Executar sem pedir aprovações intermediárias.
Interromper apenas diante de bloqueio real ou ao concluir a FASE 1 e precisar do link do Mercado Pago.
