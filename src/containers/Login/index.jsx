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
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { api } from '../../services/api';
import Logo from '../../assets/Logo.svg';
import { Button } from '../../components/Button';
import { useUser } from '../../hooks/UserContext';

import {
  GlobalStyle,
  Container,
  LeftContainer,
  RightContainer,
  Title,
  Form,
  InputContainer,
  ButtonWrapper,
  FooterText,
  Link,
} from './styles';

const schema = yup
  .object({
    email: yup
      .string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: yup
      .string()
      .min(6, 'A senha deve ter pelo menos 6 caracteres')
      .required('Digite uma senha'),
  })
  .required();

export function Login() {
  const navigate = useNavigate();
  const { putUserData } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

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
              if (userData?.admin) {
                navigate('/admin/pedidos');
              } else {
                navigate('/');
              }
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
        {/* ── LEFT: visual / logo ── */}
        <LeftContainer>
          {/* grain overlay */}
          <div className="grain" aria-hidden="true" />

          <img src={Logo} alt="Logo Dev Burguer" />

          <p className="left-label" aria-hidden="true">
            Artesanal · Fresco · Rápido
          </p>
        </LeftContainer>

        {/* ── RIGHT: form ── */}
        <RightContainer>
          <Title>
            Olá, seja bem-vindo ao <span>Dev Burguer!</span>
            <br />
            Acesse com seu <span>login e senha.</span>
          </Title>

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
              <Button type="submit">Entrar</Button>
            </ButtonWrapper>
          </Form>

          <FooterText>
            Não possui conta?{' '}
            <Link to="/cadastro">Clique aqui.</Link>
          </FooterText>
        </RightContainer>
      </Container>
    </>
  );
}