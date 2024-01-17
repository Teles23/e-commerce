# Projeto Fake Store - E-commerce

## Visão Geral

Este projeto é uma aplicação de comércio eletrônico desenvolvida com React e TypeScript, utilizando a [Fake Store API](https://fakestoreapi.com/products) para simular dados de produtos. Inclui recursos como autenticação de usuário, navegação de produtos, informações detalhadas do produto e um processo de checkout.

## Funcionalidades

### 1. Autenticação de Usuário

- Acesse a página de login na rota raiz ("/").
- Insira seu email e senha nos campos de input correspondentes.
- O formulário de login só é válido com um email válido e uma senha de 8 ou mais caracteres.
- O botão de envio é desativado se o formulário for inválido.

### 2. Listagem de Produtos

- Navegue até a rota "/products" para visualizar uma lista de produtos obtidos da Fake Store API.
- Cada produto é exibido com sua imagem, nome e preço.
- As categorias são fornecidas como botões de filtro.
- Adicione produtos ao carrinho usando o botão "+".
- Cada card de produto permite ajustar a quantidade de itens e exibe o preço total.
- O botão de checkout redireciona para a rota "/checkout".

### 3. Detalhes do Produto

- Clique em um card de produto para navegar até a visualização detalhada do produto ("/products/:id").
- Obtenha informações detalhadas do produto da API com base no ID do produto fornecido.
- Exiba a imagem, nome, preço, descrição e avaliação do produto.

### 4. Checkout

- Acesse a página de checkout na rota "/checkout".
- Visualize todos os itens no carrinho com preço unitário, quantidade e preço total.
- Cada item no carrinho possui um botão de exclusão para removê-lo da lista e atualizar o preço total.

## Como Usar

1. Clone o repositório: `git clone https://github.com/Teles23/e-commerce`
2. Navegue até a pasta do projeto: `cd e-commerce`
3. Instale as dependências: `npm install`
4. Inicie o servidor de desenvolvimento: `npm start`
5. Abra seu navegador e vá para [http://localhost:3000](http://localhost:3000)

## Exemplos de Requisições

- API para todos os produtos: [https://fakestoreapi.com/products](https://fakestoreapi.com/products)
- API para um produto por ID: [https://fakestoreapi.com/products/1](https://fakestoreapi.com/products/1)

## TypeScript e Aprendizado

- Este projeto foi desenvolvido utilizando TypeScript junto com React, proporcionando uma tipagem mais robusta e ajudando na detecção de erros durante o desenvolvimento.
- A dificuldade encontrada durante o projeto incluiu questões relacionadas à manipulação de estados, especialmente quando se tratava de gerenciar o carrinho de compras e a quantidade de itens.
- Aprendizado significativo ocorreu na prática de utilização do React Router para a navegação entre páginas e na integração de dados provenientes de uma API externa.
- A experiência proporcionou uma compreensão mais aprofundada sobre a construção de interfaces de usuário dinâmicas e interativas, bem como a importância do estado global para compartilhar dados entre componentes.

## Observações

- Durante o desenvolvimento, enfrente dificuldades específicas na manipulação de estados relacionados ao carrinho de compras.
- O aprendizado incluiu a prática do React Router para navegação eficiente entre páginas e integração de dados de uma API externa.
- Foi realizada a implantação do projeto usando Netlify, e o site está disponível [aqui](https://ecommerce-unifel.netlify.app/).

Sinta-se à vontade para explorar a aplicação, adicionar produtos ao carrinho e experimentar o processo de checkout!
