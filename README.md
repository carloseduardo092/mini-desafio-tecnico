  SaaS Dashboard — Frontend UI (Mock)

Projeto frontend desenvolvido com foco exclusivamente visual, simulando um painel SaaS B2B para gestão de e-mails, pedidos e refunds.
Não possui backend, autenticação real ou integrações externas.

 Visão Geral

A aplicação simula a interface de um sistema SaaS integrado a e-commerce, permitindo:

Visualizar e-mails de clientes

Consultar pedidos

Solicitar refunds (apenas visual)

Configurar e-mail do aplicativo

Todos os dados são mockados, utilizados apenas para demonstração de UI/UX.

   Tecnologias Utilizadas

React

TypeScript

Vite

CSS puro

React Router DOM

 Estrutura do Projeto
src/
 ├─ components/        # Componentes reutilizáveis
 ├─ pages/             # Telas principais
 ├─ data/              # Mock data
 ├─ App.tsx            # Rotas da aplicação
 ├─ main.tsx           # Entrada do React
 └─ index.css          # Estilos globais

   Telas Implementadas

Login

Dashboard

Cards de resumo

Inbox

Lista de e-mails mockados

Detalhes do Pedido

Informações do pedido

Modal de solicitação de refund

Configurações

Configuração de e-mail do aplicativo

 Importante

Este projeto não implementa:

Backend

Autenticação real

Integração com APIs

Persistência de dados

Validações reais

O foco é layout, navegação, organização de código e experiência do usuário.

 Como Rodar o Projeto

Clone o repositório:

git clone https://github.com/seu-usuario/nome-do-repo


Instale as dependências:

npm install


Execute o projeto:

npm run dev


Acesse no navegador:

http://localhost:5173

 Decisões de UI/UX

Layout inspirado em dashboards SaaS B2B

Sidebar fixa para navegação rápida

Hierarquia visual clara

Componentes simples e reutilizáveis

Design limpo e funcional
