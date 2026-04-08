
<div align="center">

<img src="./src/assets/logo_devburguer.png" alt="DevBurguer Logo" width="80"/>

# 🍔 DevBurguer

### Sistema completo de gerenciamento de pedidos para restaurantes

Aplicação full-stack que simula um ambiente real de pedidos, com fluxo completo do cliente ao painel administrativo.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)](https://stripe.com/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)](https://jwt.io/)
[![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)](https://docker.com/)

**[🚀 Ver Projeto](https://devburger-app.netlify.app/)** · **[🔒 Backend privado (estratégia comercial)](#)**

</div>

---

## 📸 Visão geral

![Home DevBurguer](./src/assets/home_devburguer.png)

---

## 🧠 Sobre o projeto

O **DevBurguer** é uma aplicação full-stack que simula um sistema real de restaurante, permitindo gerenciar pedidos, visualizar produtos e acompanhar todo o fluxo de atendimento em tempo real.

O sistema cobre todo o ciclo de um pedido — do cardápio ao pagamento — incluindo um painel administrativo completo.

> 💡 Projeto inspirado em sistemas reais utilizados por restaurantes  
> 🔒 Backend mantido privado por estratégia comercial

---

## 🔄 Fluxo do sistema

1. Cliente acessa o cardápio  
2. Adiciona produtos ao carrinho  
3. Finaliza o pedido  
4. Pagamento processado com Stripe  
5. Pedido aparece no painel administrativo  
6. Status atualizado em tempo real  

---

## 🖥️ Interface

| Login | Home |
|-------|------|
| ![Login](./src/assets/login_devburguer.png) | ![Home](./src/assets/home_devburguer.png) |

| Cardápio | Carrinho |
|----------|----------|
| ![Cardápio](./src/assets/cardapio_devburguer.png) | ![Carrinho](./src/assets/carrinho_devburguer.png) |

| Pagamento | Confirmação |
|-----------|-------------|
| ![Pagamento](./src/assets/pagamento_devburguer.png) | ![Confirmação](./src/assets/confirmação_devburguer.png) |

---

## 👨‍💼 Painel Administrativo

![Admin](./src/assets/painel_admin_devburguer.png)

---

## 📱 Responsividade

| Home | Cardápio | Carrinho |
|------|----------|----------|
| <img src="./src/assets/home_mobile_devburguer.png" width="220"/> | <img src="./src/assets/cardapio_mobile_devburguer.png" width="220"/> | <img src="./src/assets/carrinho_mobile_devburguer.png" width="220"/> |

---

## 🚀 Funcionalidades

### 🔐 Autenticação
- Login e cadastro com validação  
- JWT + Bcrypt  
- Controle por perfil (cliente/admin)  

### 🏪 Cliente
- Cardápio por categorias  
- Carrinho dinâmico  
- Taxa automática  
- Checkout com Stripe  

### 👨‍💼 Admin
- CRUD produtos/categorias  
- Gestão de pedidos em tempo real  
- Filtros por status  

### 💳 Pagamento
- Stripe (PaymentIntent)  
- Confirmação segura via backend  

---

## 🚀 Diferenciais

- Simulação de sistema real de pedidos  
- Integração completa frontend + backend  
- Pagamento real com Stripe  
- Interface responsiva  
- Estrutura preparada para SaaS  

---

## 🛠️ Stack Tecnológica

### Frontend
| Tecnologia | Uso |
|---|---|
| React.js | Interface |
| React Router | Rotas |
| Styled Components | Estilo |
| Context API | Estado |
| Axios | API |

### Backend
| Tecnologia | Uso |
|---|---|
| Node.js + Express | API |
| JWT + Bcrypt | Auth |
| PostgreSQL + Sequelize | Banco |
| Multer | Upload |
| Stripe | Pagamento |
| Cloudinary | Imagens |

---

## 🏗️ Decisões Técnicas

- JWT com controle de roles  
- Context API para simplicidade  
- PaymentIntent no backend (segurança real)  
- PostgreSQL com migrations  

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
