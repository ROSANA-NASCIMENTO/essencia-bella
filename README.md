Essência Bella — Cosméticos & Perfumaria

Sobre o projeto

O Essência Bella é um projeto de loja virtual de cosméticos e perfumaria, desenvolvido como trabalho final da disciplina Angular I.

O objetivo é aplicar os conhecimentos adquiridos durante o curso, utilizando os principais recursos do Angular para construir uma aplicação web organizada, interativa e funcional.

A aplicação simula uma loja virtual na qual o usuário pode visualizar produtos, pesquisar itens, consultar detalhes, adicionar produtos ao carrinho e realizar uma finalização de pedido simulada.

O projeto utiliza uma API pública para obter os produtos, sem necessidade de cadastro manual em um banco de dados.

Tecnologias utilizadas

- **Angular** — desenvolvimento da aplicação e dos componentes.
- **TypeScript** — implementação da lógica.
- **HTML** — estrutura das páginas.
- **CSS** — estilização e responsividade.
- **Angular Router** — navegação entre páginas.
- **HttpClient** — comunicação com a API.
- **RxJS** — programação reativa e gerenciamento do carrinho.
- **BehaviorSubject** — armazenamento e atualização dos itens do carrinho.
- **Angular Signals** — gerenciamento de estados da interface.
- **Reactive Forms** — formulários e validações.
- **NgRx Store** — biblioteca de gerenciamento de estado incluída no projeto.

Funcionalidades

Vitrine de produtos

A página inicial apresenta uma seleção de 10 produtos de cosméticos e perfumaria.

Cada produto é exibido em um card reutilizável contendo imagem, nome, descrição resumida e preço.

Pesquisa de produtos

A aplicação possui um campo de busca que permite filtrar os produtos pelo nome.

A pesquisa utiliza `FormControl` e `valueChanges`, atualizando os resultados conforme o usuário digita.

Detalhes dos produtos

Ao clicar em Ver detalhes, o usuário acessa uma página específica do produto selecionado.

Essa página apresenta o nome, a imagem, a descrição completa em português e o preço, além das opções de adicionar ao carrinho e voltar à loja.

A identificação do produto é realizada por meio do parâmetro `id` na rota.

Carrinho de compras

O usuário pode adicionar produtos ao carrinho.

O cabeçalho apresenta um contador que é atualizado conforme os itens são adicionados.

O carrinho utiliza um serviço com `BehaviorSubject` do RxJS, permitindo que as alterações sejam compartilhadas entre os componentes.

Checkout

A página de checkout apresenta o resumo dos produtos adicionados e o valor total da compra.

O formulário solicita informações de contato e endereço, com validações para impedir o envio de dados inválidos.

O botão de finalização permanece desabilitado enquanto o formulário não estiver válido.

Após a finalização, a aplicação apresenta uma mensagem de sucesso e limpa o carrinho.

**Importante:** a compra é apenas uma simulação acadêmica. Não existe processamento de pagamento real.

API utilizada

Os produtos são consultados por meio da API pública **DummyJSON**.

Documentação: https://dummyjson.com/docs/products

Foram utilizadas as seguintes categorias:

- `beauty` — cosméticos e produtos de beleza.
- `fragrances` — perfumes.
- `skin-care` — produtos de cuidados pessoais.

As requisições são realizadas utilizando o `HttpClient` do Angular, com métodos GET e tratamento das respostas por meio de Observables e `subscribe()`.

### Justificativa da seleção dos produtos

Durante o desenvolvimento, foi realizada uma análise dos produtos disponibilizados pela API.

Identifiquei que o produto **Powder Canister**, retornado pela categoria `beauty`, não correspondia à seleção de produtos que desejava apresentar na vitrine.

Por esse motivo, optei por excluí-lo da listagem utilizando o método `filter()`.

Para manter uma vitrine organizada com 10 produtos, realizei uma consulta adicional à categoria `skin-care`, da mesma API, selecionando o produto **Olay Ultra Moisture Shea Butter Body Wash**, apresentado como Sabonete Líquido Olay.

A distribuição ficou da seguinte forma:

| Categoria | Quantidade |
|---|---:|
| Beauty | 4 |
| Skin-care | 1 |
| Fragrances | 5 |
| **Total** | **10** |

Essa decisão foi tomada para manter a identidade da loja voltada para cosméticos e perfumaria e para praticar os conceitos de manipulação de dados estudados durante o curso.

A seleção dos produtos é realizada na aplicação, sem modificar os dados originais disponibilizados pela API.

### Tradução e padronização

Como a API retorna informações originalmente em inglês, foram realizadas adaptações nos nomes e nas descrições dos produtos para apresentá-los em português.

As traduções foram organizadas de maneira a manter a consistência das informações entre a vitrine e a página de detalhes.

Os preços são exibidos em formato monetário brasileiro (R$), para fins de apresentação.

Organização do projeto

O código foi organizado em componentes, páginas, serviços e arquivos de configuração.

Principais responsabilidades:

- `components/header` — cabeçalho e informações do carrinho.
- `components/footer` — rodapé da aplicação.
- `components/product-card` — apresentação individual dos produtos.
- `components/product-list` — listagem, busca e organização dos produtos.
- `pages/home` — página inicial da loja.
- `pages/product-detail` — página de detalhes.
- `pages/checkout` — formulário e resumo da compra.
- `services/product.ts` — comunicação com a API e tratamento dos dados.
- `services/cart.ts` — gerenciamento dos produtos adicionados ao carrinho.
- `app.routes.ts` — configuração das rotas.
- `app.config.ts` — configuração dos serviços e recursos da aplicação.

Essa organização facilita a manutenção do código e a reutilização dos componentes.

Como executar o projeto

Pré-requisitos

É necessário ter instalado:

- Node.js
- npm
- Angular CLI

Passo 1 — Obter o projeto

Clone o repositório do GitHub ou baixe o projeto em formato ZIP.

Passo 2 — Instalar as dependências

No terminal, dentro da pasta do projeto, execute:

```bash
npm install
```

Passo 3 — Iniciar a aplicação

Execute:

```bash
ng serve
```

Passo 4 — Acessar no navegador

Abra:

http://localhost:4200

Caso a porta esteja ocupada, utilize:

```bash
ng serve --port 4201
```

Nesse caso, acesse:

http://localhost:4201

**Observação:** é necessária uma conexão com a internet para consultar os produtos na API DummyJSON.

Interface responsiva

A interface foi desenvolvida utilizando CSS, com atenção à organização dos elementos em diferentes tamanhos de tela.

A vitrine foi adaptada para facilitar a visualização dos produtos em computadores e dispositivos móveis.

Conceitos aplicados durante o curso

O desenvolvimento do Essência Bella permitiu colocar em prática:

- Criação e reutilização de componentes Angular.
- Comunicação entre componentes por meio de `input()`.
- Interpolação e vinculação de propriedades e eventos.
- Diretivas de controle de fluxo, como `@for` e `@if`.
- Utilização de Pipes para apresentação dos dados.
- Injeção de dependências.
- Criação e utilização de serviços.
- Consumo de API com `HttpClient`.
- Utilização de Observables e `subscribe()`.
- Manipulação de arrays com `filter()` e `map()`.
- Gerenciamento de estado com Signals e RxJS.
- Navegação utilizando Angular Router.
- Rotas com parâmetros.
- Formulários reativos e validações.
- Organização e separação de responsabilidades no código.

Considerações finais

O desenvolvimento do Essência Bella teve como objetivo consolidar os conhecimentos adquiridos na disciplina Angular I.

Durante a construção da aplicação, foram aplicados conceitos de componentes, serviços, rotas, consumo de API, manipulação de dados, programação reativa e formulários.

O projeto também proporcionou a oportunidade de trabalhar com situações práticas, como a seleção dos produtos retornados pela API, a padronização das informações e a integração entre diferentes partes da aplicação.

O resultado é uma vitrine virtual funcional, desenvolvida para fins acadêmicos, que reúne os principais conceitos trabalhados durante o curso.

---

**Projeto final — Angular I**

**Essência Bella | Cosméticos & Perfumaria**

**2026**
