// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";
// import { useNavigate } from 'react-router-dom';

// import { toast } from 'react-toastify';


// import { api } from "../../services/api";
// import Logo from '../../assets/Logo.svg';
// import { Button } from "../../components/Button";
// import { useUser } from '../../hooks/UserContext';

// import {
//   Container,
//   LeftContainer,
//   RightContainer,
//   Title,
//   Form,
//   InputContainer,
//   Link,


// } from './styles';

// export function Login() {
//   const navigate = useNavigate();
//   const { putUserData } = useUser();

//   const schema = yup
//     .object({
//       email: yup
//         .string()
//         .email("Digite um e-mail válido")
//         .required("O e-mail é obrigatório"),
//       password: yup
//         .string()
//         .min(6, " A senha deve ter pelo menos 6 caracteres")
//         .required("Digite uma senha"),
//     })
//     .required();


//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   })

//   console.log(errors);

//   const onSubmit = async (data) => {
//     const {
//       data: userData } = await toast.promise(
//         api.post("/session", {
//           email: data.email,
//           password: data.password,
//         }),
//         {
//           pending: "Verificando seus dados ",
//           success: {
//             render() {
//               setTimeout(() => {
//                 if (userData?.admin) {
//                    navigate("/admin/pedidos");
//                 } else {
//                   navigate("/");
//                 }


//               }, 2000);
//               return "Seja Bem-Vindo(a) 👌";

//             },
//           },

//           error: "Email ou Senha Incorretos 🤯",
//         },

//       );

//     putUserData(userData)
//     // localStorage.setItem("token", token);
//   };

//   return (
//     <Container>
//       <LeftContainer>
//         <img src={Logo} alt="logo-devburger" />
//       </LeftContainer>
//       <RightContainer>
//         <Title>
//           Olá, seja bem vindo ao <span>Dev Burguer!</span>
//           <br />
//           Acesse com seu <span> Login e senha.</span>
//         </Title>
//         <Form onSubmit={handleSubmit(onSubmit)}>
//           <InputContainer>
//             <label>Email</label>
//             <input type="email"{...register("email")} />
//             <p>{errors?.email?.message}</p>
//           </InputContainer>

//           <InputContainer>
//             <label>Senha</label>
//             <input type="password" {...register("password")} />
//             <p>{errors?.password?.message}</p>
//           </InputContainer>


//           <Button type="submit" >Entrar</Button>
//         </Form>
//         <p>Não possui conta? <Link to="/cadastro">Clique aqui.</Link> </p>
//       </RightContainer>
//     </Container>
//   );
// }








/*Depois*/
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { api } from '../../services/api';
import { Button } from '../../components/Button';
import { useUser } from '../../hooks/UserContext';

import {
  GlobalStyle,
  Container,
  BurgerHero,
  ArcTitle,
  Title,
  StatsBadge,
  NeonSign,
  Embers,
  RightContainer,
  Form,
  InputContainer,
  Link,
} from './styles';

const schema = yup.object({
  email: yup
    .string()
    .email('Digite um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: yup
    .string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('Digite uma senha'),
}).required();

export function Login() {
  const navigate   = useNavigate();
  const { putUserData } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  /* ── partículas de brasa ── */
  useEffect(() => {
    const container = document.getElementById('embers-wrap');
    if (!container) return;
    for (let i = 0; i < 28; i++) {
      const el = document.createElement('div');
      el.className = 'ember';
      const size = 2 + Math.random() * 4;
      el.style.cssText = `
        width:${size}px; height:${size}px;
        left:${Math.random() * 100}%;
        bottom:${Math.random() * 30}%;
        --drift:${(Math.random() - 0.5) * 120}px;
        animation-duration:${3 + Math.random() * 6}s;
        animation-delay:${Math.random() * 8}s;
        box-shadow: 0 0 ${size * 2}px rgba(255,100,0,.6);
        background: hsl(${20 + Math.random() * 30},100%,${55 + Math.random() * 20}%);
      `;
      container.appendChild(el);
    }
  }, []);

  const onSubmit = async (data) => {
    const { data: userData } = await toast.promise(
      api.post('/session', {
        email: data.email,
        password: data.password,
      }),
      {
        pending: 'Verificando seus dados...',
        success: {
          render() {
            setTimeout(() => {
              if (userData?.admin) navigate('/admin/pedidos');
              else navigate('/');
            }, 2000);
            return 'Seja Bem-Vindo(a) 👌';
          },
        },
        error: 'Email ou Senha incorretos 🤯',
      }
    );
    putUserData(userData);
  };

  return (
    <>
      <GlobalStyle />

      <Container>
        {/* grade + glow ficam no ::before e ::after do Container */}

        {/* partículas de brasa */}
        <Embers id="embers-wrap" />

        {/* burger flutuando */}
        <BurgerHero aria-hidden="true">🍔</BurgerHero>

        {/* título no topo */}
        <ArcTitle>
          <span className="dev-label">dev</span>
          <Title>
            Bur<span>guer</span>
          </Title>
        </ArcTitle>

        {/* stats lateral esquerda */}
        <StatsBadge aria-hidden="true">
          <div className="stat">
            <div className="stat-val">4.9★</div>
            <div className="stat-lbl">Avaliação</div>
          </div>
          <div className="stat">
            <div className="stat-val">28'</div>
            <div className="stat-lbl">Entrega</div>
          </div>
          <div className="stat">
            <div className="stat-val">12k</div>
            <div className="stat-lbl">Pedidos</div>
          </div>
        </StatsBadge>

        {/* neon lateral direita */}
        <NeonSign aria-hidden="true">Artesanal · Fresco · Único</NeonSign>

        {/* FORM STRIP — base da tela */}
        <RightContainer>
          <Form onSubmit={handleSubmit(onSubmit)} noValidate>

            <InputContainer>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="seu@email.com"
                autoComplete="email"
                {...register('email')}
              />
              <p role="alert">{errors?.email?.message}</p>
            </InputContainer>

            <InputContainer>
              <label htmlFor="password">Senha</label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                autoComplete="current-password"
                {...register('password')}
              />
              <p role="alert">{errors?.password?.message}</p>
            </InputContainer>

            <Button type="submit">Entrar →</Button>

          </Form>

          <p>
            Não possui conta?{' '}
            <Link to="/cadastro">Criar agora</Link>
          </p>
        </RightContainer>

      </Container>
    </>
  );
}