// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";
// import { useNavigate } from 'react-router-dom'; 

// import { toast } from 'react-toastify';


// import { api } from "../../services/api";
// import Logo from '../../assets/Logo.svg';
// import { Button } from "../../components/Button";

// import {
//   Container,
//   LeftContainer,
//   RightContainer,
//   Title,
//   Form,
//   InputContainer,
// Link,

// } from './styles';


// export function Register() {
//   const  navigate = useNavigate();

//   const schema = yup
//     .object({
//       name: yup.string().required("O nome é Obrigatório"),
//       email: yup
//       .string()
//       .email("Digite um e-mail válido")
//       .required("O e-mail é obrigatório"),
//       password: yup
//       .string()
//       .min(6, " A senha deve ter pelo menos 6 caracteres")
//       .required("Digite uma senha"),
//       confirmPassword: yup
//       .string()
//       .oneOf([yup.ref("password")], "As senhas devem ser iguais")
//       .required("Confirme sua senha"),
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
//     try {
//       const { status } = await api.post("/users", {
//         name: data.name,
//         email: data.email,
//         password: data.password,
//       }, 
//       {
//         validateStatus: () => true,
//       },
//     );

//     if (status === 200 || status === 201) {
//       setTimeout(() => {
// navigate ("/login");
//       },2000);
//       toast.success("Conta criada com sucesso!");
//     }else if (status === 409){
//       toast.error("Email já cadastrado! Faça o login para continuar");
//     }else{
//       throw new Error("");

//     }
      
//     } catch (error) {
//       toast.error("Falha no Sistema! Tente novamente");
//     }
    
//   };


//   return (
//     <Container>
//       <LeftContainer>
//         <img src={Logo} alt="logo-devburger" />
//       </LeftContainer>
//       <RightContainer>
//         <Title> Criar Conta </Title>
//         <Form onSubmit={handleSubmit(onSubmit)}>
//           <InputContainer>
//             <label>Nome</label>
//             <input type="text"{...register("name")} />
//             <p>{errors?.name?.message}</p>
//           </InputContainer>

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

//           <InputContainer>
//             <label>Confirmar Senha</label>
//             <input type="password"{...register("confirmPassword")} />
//             <p>{errors?.confirmPassword?.message}</p>
//           </InputContainer>


//           <Button type="submit" >Criar Conta</Button>
//         </Form>
//         <p>Já possui conta? <Link to="/login">Clique aqui.</Link> </p>
//       </RightContainer>
//     </Container>
//   );
// }


/*depois*/

import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { api } from "../../services/api";
import Logo from '../../assets/logo_devburguer.png';

import {
  Container, VideoBackground, Overlay, Topbar, TopbarBrand, StatusDot,
  Panel, PanelAccent, LogoWrapper, LogoName, LogoSub,
  Divider, DividerLine, DividerText,
  Form, InputContainer, SubmitButton, LoginText, Link,
  Ticker, TickerLabel, TickerTrack, TickerItem,
} from './styles';

const schema = yup.object({
  name: yup.string().required("O nome é obrigatório"),
  email: yup.string().email("Digite um e-mail válido").required("O e-mail é obrigatório"),
  password: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("Digite uma senha"),
  confirmPassword: yup.string().oneOf([yup.ref("password")], "As senhas devem ser iguais").required("Confirme sua senha"),
}).required();

const MENU_ITEMS = [
  'X-Burguer Clássico','Double Smash','Chicken Crispy','Dev Stack Especial',
  'Batata Frita Temperada','Onion Ring','Milkshake Red Velvet','Combo Full Stack',
  'X-Bacon Supreme','Nuggets Dev','Sundae Caramelo','Refrigerante Gelado',
];

export function Register() {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const { status } = await api.post("/users", {
        name: data.name,
        email: data.email,
        password: data.password,
      }, { validateStatus: () => true });

      if (status === 200 || status === 201) {
        toast.success("Conta criada com sucesso! 🍔");
        setTimeout(() => navigate("/login"), 2000);
      } else if (status === 409) {
        toast.error("Email já cadastrado! Faça o login para continuar");
      } else {
        throw new Error("");
      }
    } catch {
      toast.error("Falha no sistema! Tente novamente");
    }
  };

  const tickerItems = [...MENU_ITEMS, ...MENU_ITEMS];

  return (
    <Container>
      {/* Video Background */}
      <VideoBackground>
        <video autoPlay muted loop playsInline>
          <source src="https://assets.mixkit.co/videos/14010/14010-360.mp4" type="video/mp4" />
        </video>
        <Overlay />
      </VideoBackground>

      {/* Topbar */}
      <Topbar>
        <TopbarBrand>
          <img src={Logo} alt="Dev Burguer" style={{ height: 28 }} />
          <span style={{ width: 1, height: 16, background: 'rgba(255,248,240,.1)', display: 'block' }} />
          <span style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,248,240,.3)' }}>
            🚚 Food Truck · SP
          </span>
        </TopbarBrand>
        <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,248,240,.3)' }}>
          <StatusDot /> Aberto agora
        </span>
      </Topbar>

      {/* Main */}
      <main style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '56px 7vw 44px',
        overflowY: 'auto',
      }}>
        <Panel>
          <PanelAccent />

          <LogoWrapper>
            <LogoName>DEV<em>Burguer</em></LogoName>
            <LogoSub>Crie sua conta e faça seu pedido</LogoSub>
          </LogoWrapper>

          <Divider>
            <DividerLine /><DividerText>cadastro</DividerText><DividerLine />
          </Divider>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
              <label>👤 Nome completo</label>
              <input type="text" placeholder="Seu nome" {...register("name")} />
              <p>{errors?.name?.message}</p>
            </InputContainer>

            <InputContainer>
              <label>📧 Email</label>
              <input type="email" placeholder="seu@email.com" {...register("email")} autoComplete="email" />
              <p>{errors?.email?.message}</p>
            </InputContainer>

            <InputContainer>
              <label>🔒 Senha</label>
              <input type="password" placeholder="Mín. 6 caracteres" {...register("password")} autoComplete="new-password" />
              <p>{errors?.password?.message}</p>
            </InputContainer>

            <InputContainer>
              <label>🔒 Confirmar Senha</label>
              <input type="password" placeholder="Repita a senha" {...register("confirmPassword")} autoComplete="new-password" />
              <p>{errors?.confirmPassword?.message}</p>
            </InputContainer>

            <SubmitButton type="submit">CRIAR CONTA</SubmitButton>
          </Form>

          <LoginText>
            Já tem conta?{' '}
            <Link to="/login">Fazer login</Link>
          </LoginText>
        </Panel>
      </main>

      {/* Ticker */}
      <Ticker>
        <TickerLabel>🍔 Cardápio</TickerLabel>
        <TickerTrack>
          {tickerItems.map((item, i) => (
            <Fragment key={i}>
              <TickerItem>{item}</TickerItem>
              <span style={{ color: 'rgba(200,0,10,.35)', fontSize: 8, padding: '0 2px' }}>●</span>
            </Fragment>
          ))}
        </TickerTrack>
      </Ticker>
    </Container>
  );
}