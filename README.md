<div align="center">

<img src="./src/assets/logo_devburguer.png" alt="DevBurguer Logo" width="80"/>

# 🍔 DevBurguer

### Sistema completo de lanchonete digital — do pedido ao pagamento, em produção.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)](https://stripe.com/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)](https://jwt.io/)
[![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)](https://docker.com/)

**[🚀 Ver Projeto](https://devburger-app.netlify.app/)** · **[📂 Repositório Backend - Privado por segurança](#)**

</div>

---

## 📸 Preview

![Home DevBurguer](./src/assets/home_devburguer.png)

---

## 📋 Sobre o Projeto

O **DevBurguer** é uma aplicação full-stack de lanchonete digital com fluxo completo de e-commerce: autenticação por perfil, cardápio com categorias, carrinho em tempo real, checkout e integração com **Stripe** para pagamentos. O sistema conta com painel administrativo para gestão de produtos, categorias e pedidos.

> ⚠️ **Ambiente de demonstração** — as imagens de produtos são servidas pelo backend local. Para visualizar o projeto completo com todas as funcionalidades, execute localmente seguindo as instruções abaixo.

---

## 🖥️ Screenshots — Desktop

| Login | Home |
|-------|------|
| ![Login](./src/assets/login_devburguer.png) | ![Home](./src/assets/home_devburguer.png) |

| Cardápio | Carrinho |
|----------|----------|
| ![Cardápio](./src/assets/cardapio_devburguer.png) | ![Carrinho](./src/assets/carrinho_devburguer.png) |

| Pagamento | Confirmação |
|-----------|-------------|
| ![Pagamento](./src/assets/pagamento_devburguer.png) | ![Confirmação](./src/assets/confirmação_devburguer.png) |

<div align="center">

**Painel Administrativo**

![Admin](./src/assets/painel_admin_devburguer.png)

</div>

---

## 📱 Screenshots — Mobile

<div align="center">

| Home | Cardápio | Carrinho |
|------|----------|----------|
| <img src="./src/assets/home_mobile_devburguer.png" width="220"/> | <img src="./src/assets/cardapio_mobile_devburguer.png" width="220"/> | <img src="./src/assets/carrinho_mobile_devburguer.png" width="220"/> |

</div>

---

## ✨ Funcionalidades

### 🔐 Autenticação
- Login e cadastro com validação
- Autenticação JWT segura com Bcrypt
- Controle de acesso por perfil — cliente e admin

### 🏪 Área do Cliente
- Cardápio organizado por categorias (hambúrgueres, bebidas, sobremesas, entradas)
- Carrossel de ofertas do dia
- Carrinho com controle de quantidade e totalização automática
- Taxa de entrega calculada automaticamente
- Checkout integrado com Stripe

### 👨‍💼 Painel Administrativo
- CRUD completo de produtos e categorias
- Gerenciamento de pedidos com status em tempo real
- Filtros por status: Realizado, Em Preparação, Pronto, À Caminho, Entregue, Cancelado

### 💳 Pagamento
- Integração com Stripe via `PaymentIntent`
- Feedback visual com ID do pagamento e status
- Processamento seguro de transações

---

## 🛠️ Stack Tecnológica

### Frontend
| Tecnologia | Uso |
|---|---|
| React.js | Interface do usuário |
| React Router | Gerenciamento de rotas |
| Styled Components | Estilização |
| Context API | Estado global (carrinho e usuário) |
| Axios | Consumo de API |

### Backend
| Tecnologia | Uso |
|---|---|
| Node.js + Express | Servidor e API REST |
| JWT + Bcrypt | Autenticação e segurança |
| PostgreSQL + Sequelize | Banco relacional e ORM |
| Multer | Upload de arquivos |
| Stripe | Gateway de pagamento |
| Cloudinary | Armazenamento de imagens |

---

## 🏗️ Decisões Técnicas

**Autenticação dual por perfil** — JWT com `role` no payload permite controlar acesso de cliente e admin em uma única implementação, sem complexidade desnecessária.

**Context API em vez de Redux** — o volume de estado do carrinho não justificava Redux. O `CartContext` resolve com menos boilerplate e mais legibilidade.

**PaymentIntent no backend** — a confirmação do pagamento acontece via webhook do Stripe, garantindo que o pedido só é atualizado após processamento real — não apenas na resposta do frontend.

**PostgreSQL + Sequelize** — modelagem relacional para usuários, produtos, categorias e pedidos com migrations versionadas, facilitando deploys e rollbacks.

---

## 📁 Estrutura do Projeto

### Frontend
```
src/
├── assets/                    # Imagens e ícones
├── components/                # Componentes reutilizáveis
│   ├── Button/
│   ├── CardProduct/
│   ├── CartButton/
│   ├── CartItems/
│   ├── CartResume/
│   ├── CategoriesCarousel/
│   ├── Header/
│   ├── Footer/
│   ├── OffersCarousel/
│   ├── SideNavAdmin/
│   ├── Stripe/
│   └── Table/
├── containers/                # Páginas
│   ├── Admin/
│   ├── Cart/
│   ├── Checkout/
│   ├── CompletePayment/
│   ├── Home/
│   ├── Login/
│   ├── Menu/
│   └── Register/
├── hooks/                     # CartContext · UserContext
├── services/                  # API calls
├── utils/
├── config/
└── main.jsx
```

### Backend
```
src/
├── app/
│   ├── controllers/
│   │   ├── stripe/CreatePaymentIntent.js
│   │   ├── CategoryController.js
│   │   ├── OrderController.js
│   │   ├── ProductController.js
│   │   ├── SessionController.js
│   │   └── UserController.js
│   ├── middlewares/
│   ├── models/
│   └── schemas/
├── config/
│   ├── auth.js
│   ├── database.js
│   └── multer.js
├── database/
│   └── migrations/
├── routes.js
└── server.js
```

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js 16+
- PostgreSQL
- Conta no Stripe

### Backend
```bash
cd backend
npm install
```

Crie o `.env`:
```env
DATABASE_URL=sua_url_do_banco
JWT_SECRET=sua_chave_jwt
STRIPE_SECRET_KEY=sua_chave_stripe
PORT=3001
```

```bash
npm run migrate
npm run dev
```

### Frontend
```bash
cd frontend
npm install
```

Crie o `.env`:
```env
REACT_APP_API_URL=http://localhost:3001
REACT_APP_STRIPE_PUBLIC_KEY=sua_chave_publica_stripe
```

```bash
npm start
```

- Frontend: http://localhost:3000
- Backend: http://localhost:3001

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

Desenvolvido por **[Fernando Santos](https://www.linkedin.com/in/fernando-santos-jesus/)** · [GitHub](https://github.com/FernandoJesuss) · [LinkedIn](https://www.linkedin.com/in/fernando-santos-jesus/)

</div>
