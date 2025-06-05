# 🍔 DevBurguer - Sistema Completo de Lanchonete Digital

Uma aplicação full-stack que simula uma experiência real de compra em uma lanchonete digital, passando por todas as etapas de um sistema profissional: autenticação, painel administrativo, gerenciamento de produtos, carrinho de compras e integração com pagamentos.

## 📋 Sobre o Projeto

O DevBurguer foi desenvolvido para proporcionar uma experiência completa de e-commerce, desde o cadastro do usuário até a finalização da compra com pagamento integrado. O sistema conta com área administrativa para gerenciamento de produtos e pedidos, proporcionando uma solução robusta e profissional.

## ✨ Funcionalidades

### 🔐 Autenticação
- Sistema de login e cadastro de usuários
- Autenticação JWT segura
- Controle de acesso e rotas protegidas

### 🏪 Área do Cliente
- Página principal com cardápio organizado por categorias
- Navegação entre hambúrgueres, bebidas, sobremesas e mais
- Carrinho de compras com controle de quantidade
- Totalização automática de pedidos
- Integração com Stripe para pagamentos

### 👨‍💼 Painel Administrativo
- CRUD completo de produtos
- Gerenciamento de categorias
- Interface intuitiva para administradores
- Controle de estoque e preços

### 💳 Sistema de Pagamento
- Integração com Stripe para pagamentos em tempo real
- Feedback visual de compra bem-sucedida
- Processamento seguro de transações

## 📱 Screenshots do Projeto

### 🔑 Tela de Login
<img src="https://github.com/FernandoJesuss/devburger_interface/blob/main/src/assets/Tela%20de%20Login.png" alt="Tela de Login" width="600"/>

*Sistema de autenticação com validação e feedback visual*

### 🏠 Página Principal - Home
<img src="https://github.com/FernandoJesuss/devburger_interface/blob/main/src/assets/Tela%20de%20Home.png" alt="Página Home" width="600"/>

*Interface moderna com produtos organizados por categorias*

### 🍽️ Página do Cardápio
<img src="https://github.com/FernandoJesuss/devburger_interface/blob/main/src/assets/Tela%20de%20Card%C3%A1io.png" alt="Página do Cardápio" width="600"/>

*Catálogo completo de produtos organizados por categorias*

### 🛒 Carrinho de Compras
<img src="https://github.com/FernandoJesuss/devburger_interface/blob/main/src/assets/Tela%20Carrinho.png" alt="Carrinho de Compras" width="600"/>

*Gerenciamento de pedidos com cálculo automático e controle de quantidade*

### 💳 Processo de Pagamento
<img src="https://github.com/FernandoJesuss/devburger_interface/blob/main/src/assets/Tela%20de%20pagamento.png" alt="Tela de Pagamento" width="600"/>

*Integração com Stripe para pagamentos seguros em tempo real*

### ✅ Confirmação de Compra
<img src="https://github.com/FernandoJesuss/devburger_interface/blob/main/src/assets/Tela%20de%20pagamento%20confirmado.png" alt="Pagamento Confirmado" width="600"/>

*Feedback visual de compra realizada com sucesso*

### 📦 Painel Administrativo
<img src="https://github.com/FernandoJesuss/devburger_interface/blob/main/src/assets/Tela%20ADM.png" alt="Painel Administrativo" width="600"/>

*Interface completa para gerenciamento de produtos e categorias*

## 🎯 Funcionalidades em Destaque

<div align="center">
  
| 🔐 **Autenticação** | 🛍️ **E-commerce** | 👨‍💼 **Admin** |
|:---:|:---:|:---:|
| Login/Cadastro Seguro | Carrinho Inteligente | CRUD Completo |
| JWT + Validação | Stripe Integration | Gestão de Produtos |
| Controle de Acesso | Cálculo Automático | Interface Intuitiva |

</div>

## 📁 Estrutura do Projeto

### Frontend
```
src/
├── 📁 assets/                 # Recursos estáticos (imagens, ícones)
├── 📁 components/             # Componentes reutilizáveis
│   ├── Button/               # Componente de botão personalizado
│   ├── CardProduct/          # Card de exibição de produtos
│   ├── CartButton/           # Botão do carrinho
│   ├── CartItems/            # Itens do carrinho
│   ├── CartResume/           # Resumo do carrinho
│   ├── CategoriesCarousel/   # Carrossel de categorias
│   ├── Footer/               # Rodapé da aplicação
│   ├── Header/               # Cabeçalho da aplicação
│   ├── OffersCarousel/       # Carrossel de ofertas
│   ├── SideNavAdmin/         # Navegação lateral do admin
│   ├── Stripe/               # Componentes do Stripe
│   └── Table/                # Componente de tabela
├── 📁 containers/             # Páginas e containers principais
│   ├── Admin/                # Painel administrativo
│   ├── Cart/                 # Página do carrinho
│   ├── Checkout/             # Processo de checkout
│   ├── CompletePayment/      # Confirmação de pagamento
│   ├── Home/                 # Página inicial
│   ├── Login/                # Página de login
│   ├── Menu/                 # Página do cardápio
│   └── Register/             # Página de cadastro
├── 📁 hooks/                  # Custom hooks
│   ├── CartContext.jsx       # Context do carrinho
│   ├── UserContext.jsx       # Context do usuário
│   └── index.jsx             # Barrel exports
├── 📁 services/               # Serviços e API calls
├── 📁 styles/                 # Estilos globais
├── 📁 utils/                  # Funções utilitárias
├── 📁 config/                 # Configurações da aplicação
└── main.jsx                   # Ponto de entrada da aplicação
```

### Backend
```
src/
├── 📁 app/                    # Core da aplicação
│   ├── 📁 controllers/        # Controladores das rotas
│   │   ├── 📁 stripe/         # Integração com Stripe
│   │   │   └── CreatePaymentIntent.js
│   │   ├── CategoryController.js    # Gestão de categorias
│   │   ├── OrderController.js       # Gestão de pedidos
│   │   ├── ProductController.js     # Gestão de produtos
│   │   ├── SessionController.js     # Autenticação/Sessões
│   │   └── UserController.js        # Gestão de usuários
│   ├── 📁 middlewares/        # Middlewares customizados
│   ├── 📁 models/             # Modelos do banco de dados
│   └── 📁 schemas/            # Schemas de validação
├── 📁 config/                 # Configurações da aplicação
│   ├── auth.js               # Configuração de autenticação
│   ├── database.js           # Configuração do banco
│   └── multer.js             # Configuração de upload
├── 📁 database/               # Estrutura do banco
│   ├── 📁 migrations/         # Migrações do banco
│   └── index.js              # Conexão com banco
├── 📁 uploads/                # Arquivos enviados pelos usuários
├── app.js                     # Configuração da aplicação
├── routes.js                  # Definição das rotas
└── server.js                  # Servidor principal
```

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React.js** - Biblioteca para construção da interface
- **React Router** - Gerenciamento de rotas
- **Styled Components** - Estilização de componentes
- **Axios** - Consumo de APIs
- **Context API** - Gerenciamento de estado

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **JWT** - Autenticação e autorização
- **Bcrypt** - Criptografia de senhas
- **Multer** - Upload de arquivos

### Banco de Dados
- **PostgreSQL** - Banco de dados relacional
- **Sequelize** - ORM para Node.js

### Integrações
- **Stripe** - Gateway de pagamento
- **Cloudinary** - Armazenamento de imagens

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn
- PostgreSQL
- Conta no Stripe para chaves de API

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/FernandoJesuss/devburguer.git
cd devburguer
```

2. **Configure o Backend**
```bash
cd backend
npm install
```

3. **Configure as variáveis de ambiente**
Crie um arquivo `.env` na pasta backend:
```env
DATABASE_URL=sua_url_do_banco
JWT_SECRET=sua_chave_jwt_secreta
STRIPE_SECRET_KEY=sua_chave_secreta_stripe
PORT=3001
```

4. **Execute as migrações do banco**
```bash
npm run migrate
```

5. **Inicie o servidor backend**
```bash
npm run dev
```

6. **Configure o Frontend**
```bash
cd ../frontend
npm install
```

7. **Configure as variáveis de ambiente do frontend**
Crie um arquivo `.env` na pasta frontend:
```env
REACT_APP_API_URL=http://localhost:3001
REACT_APP_STRIPE_PUBLIC_KEY=sua_chave_publica_stripe
```

8. **Inicie o frontend**
```bash
npm start
```

O projeto estará disponível em:
- Frontend: http://localhost:3000
- Backend: http://localhost:3001

## 📚 Aprendizados Técnicos

### Frontend (React.js)
- Desenvolvimento de interfaces modernas e responsivas
- Gerenciamento de estado com Context API
- Consumo de APIs RESTful
- Implementação de autenticação no frontend
- Integração com gateway de pagamento
- Controle de rotas e navegação

### Backend (Node.js + Express)
- Construção de APIs RESTful robustas
- Implementação de autenticação JWT
- CRUD completo com validações
- Integração com banco de dados
- Middleware de segurança
- Integração com serviços externos (Stripe)

### Banco de Dados
- Modelagem de dados relacionais
- Otimização de consultas
- Migrações e seeders
- Relacionamentos entre entidades

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Fernando Santos**
- LinkedIn: [fernando-santos-jesus](https://www.linkedin.com/in/fernando-santos-jesus/)
- GitHub: [@FernandoJesuss](https://github.com/FernandoJesuss)

---

## 🔗 Links Úteis

- [Documentação do React](https://reactjs.org/)
- [Documentação do Node.js](https://nodejs.org/)
- [Documentação do Stripe](https://stripe.com/docs)
- [Documentação do Express](https://expressjs.com/)
- [Documentação do Sequelize](https://sequelize.org/)

---

<div align="center">

⭐ **Se este projeto te ajudou, deixe uma estrela no repositório!** ⭐

</div>
