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
  FloatingEmojis,
  RightContainer,
  PhotoStrip,
  LogoOver,
  FormBody,
  Title,
  TitleSub,
  Form,
  InputContainer,
  ButtonWrapper,
  MenuTeaser,
  Link,
} from './styles';

/* foto de burger (Unsplash, sem custo) */
const BURGER_PHOTO =
  'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=85';

const EMOJIS  = ['🍔', '🥓', '🧀', '🍟', '🌶️', '🥤', '🧅', '🍦'];
const CHIPS   = [
  { icon: '🍔', label: 'Smash Clássico' },
  { icon: '🥓', label: 'BBQ Bacon' },
  { icon: '🍟', label: 'Fritas Especiais' },
  { icon: '🥤', label: 'Milkshake' },
  { icon: '🌶️', label: 'Crispy Hot' },
];

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
  const navigate       = useNavigate();
  const { putUserData } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  /* ── emojis flutuantes ── */
  useEffect(() => {
    const wrap = document.getElementById('floating-emojis');
    if (!wrap) return;
    for (let i = 0; i < 16; i++) {
      const el = document.createElement('span');
      el.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
      el.style.cssText = `
        left: ${Math.random() * 100}vw;
        animation-duration: ${12 + Math.random() * 16}s;
        animation-delay: ${Math.random() * 18}s;
        font-size: ${0.9 + Math.random() * 1.2}rem;
      `;
      wrap.appendChild(el);
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

        {/* emojis flutuando no fundo */}
        <FloatingEmojis id="floating-emojis" aria-hidden="true" />

        {/* CARD */}
        <RightContainer>

          {/* foto de burger no topo */}
          <PhotoStrip>
            <img
              src={BURGER_PHOTO}
              alt="Hambúrguer artesanal Dev Burguer"
              fetchpriority="high"
            />

            {/* logo + badge sobre a foto */}
            <LogoOver>
              <div className="logo">
                <div className="logo-icon">🍔</div>
                <div>
                  <span className="logo-dev">dev</span>
                  <span className="logo-name">Burguer</span>
                </div>
              </div>
              <div className="open-badge">
                <div className="open-dot" />
                Aberto agora
              </div>
            </LogoOver>
          </PhotoStrip>

          {/* formulário */}
          <FormBody>
            <Title>
              Bem-vindo de volta<span>!</span>
            </Title>
            <TitleSub>Acesse sua conta e faça seu pedido.</TitleSub>

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

              <ButtonWrapper>
                <Button type="submit">Entrar na conta</Button>
              </ButtonWrapper>

            </Form>
          </FormBody>

          {/* chips do cardápio */}
          <MenuTeaser>
            <div className="teaser-label">Peça hoje</div>
            <div className="teaser-scroll">
              {CHIPS.map((c) => (
                <div className="chip" key={c.label}>
                  <span>{c.icon}</span>
                  {c.label}
                </div>
              ))}
            </div>
          </MenuTeaser>

          {/* link de cadastro */}
          <p>
            Não possui conta?{' '}
            <Link to="/cadastro">Clique aqui.</Link>
          </p>

        </RightContainer>

      </Container>
    </>
  );
}