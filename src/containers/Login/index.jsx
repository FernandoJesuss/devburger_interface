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





/*depois*/
import { useState, useEffect, Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { api } from "../../services/api";
import Logo from '../../assets/Logo.svg';
import { useUser } from '../../hooks/UserContext';

import {
  Container,
  VideoBackground,
  Overlay,
  Topbar,
  TopbarBrand,
  TopbarRight,
  StatusDot,
  Panel,
  PanelAccent,
  LogoWrapper,
  LogoName,
  LogoSub,
  Divider,
  DividerLine,
  DividerText,
  Form,
  Field,
  FieldLabel,
  FieldInner,
  FieldInput,
  Tick,
  ForgotLink,
  RegisterText,
  Tracker,
  TrackerTitle,
  Step,
  StepIcon,
  StepInfo,
  StepName,
  StepDesc,
  StepBadge,
  OrderStatus,
  StatusIndicator,
  StatusText,
  Ticker,
  TickerLabel,
  TickerTrack,
  TickerItem,
  SuccessOverlay,
  SuccessEmoji,
  SuccessTitle,
  SuccessSub,
  LoginButton,
} from './styles';

const schema = yup.object({  email: yup.string().email("Digite um e-mail válido").required("O e-mail é obrigatório"),
  password: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("Digite uma senha"),
}).required();

const MENU_ITEMS = [
  'X-Burguer Clássico','Double Smash','Chicken Crispy','Dev Stack Especial',
  'Batata Frita Temperada','Onion Ring','Milkshake Red Velvet','Combo Full Stack',
  'X-Bacon Supreme','Nuggets Dev','Sundae Caramelo','Refrigerante Gelado',
];

const STEPS = [
  { icon: '🍞', name: 'Pão de baixo',  desc: 'aguardando email...',  field: 'email' },
  { icon: '🥬', name: 'Alface',         desc: 'aguardando senha...',  field: 'senha' },
  { icon: '🥩', name: 'Hambúrguer',     desc: 'aguardando senha...',  field: 'senha' },
  { icon: '🧀', name: 'Queijo',         desc: 'aguardando senha...',  field: 'senha' },
  { icon: '🍅', name: 'Tomate',         desc: 'aguardando senha...',  field: 'senha' },
  { icon: '🍞', name: 'Pão de cima',    desc: 'feche ao entrar!',     field: 'login' },
];

export function Login() {
  const navigate = useNavigate();
  const { putUserData } = useUser();

  const [emailFilled, setEmailFilled] = useState(false);
  const [senhaFilled, setSenhaFilled] = useState(false);
  const [success, setSuccess]         = useState(false);
  const [time, setTime]               = useState('');

  // Clock
  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', hour12: false }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // Watch fields to update tracker
  const emailValue    = watch('email', '');
  const passwordValue = watch('password', '');

  useEffect(() => {
    setEmailFilled(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue));
  }, [emailValue]);

  useEffect(() => {
    setSenhaFilled(passwordValue?.length >= 6);
  }, [passwordValue]);

  const getStepDone = (index) => {
    if (index === 0) return emailFilled;
    if (index >= 1 && index <= 4) return senhaFilled;
    return false;
  };

  const getStepDesc = (step, index) => {
    if (getStepDone(index)) return '✓ adicionado!';
    return step.desc;
  };

  const statusText = () => {
    if (!emailFilled && !senhaFilled) return 'Aguardando pedido';
    if (emailFilled && !senhaFilled)  return 'Agora adicione a senha!';
    if (!emailFilled && senhaFilled)  return 'Agora preencha o email!';
    return 'Pronto! Clique em entrar 🍔';
  };
  const isReady = emailFilled && senhaFilled;

  const onSubmit = async (data) => {
    const { data: userData } = await toast.promise(
      api.post("/session", { email: data.email, password: data.password }),
      {
        pending: "Verificando seus dados",
        success: {
          render() {
            setSuccess(true);
            setTimeout(() => {
              if (userData?.admin) navigate("/admin/pedidos");
              else navigate("/");
            }, 2000);
            return "Seja Bem-Vindo(a) 👌";
          },
        },
        error: "Email ou Senha Incorretos 🤯",
      }
    );
    putUserData(userData);
  };

  const tickerItems = [...MENU_ITEMS, ...MENU_ITEMS];

  return (
    <Container>
      {/* Video Background */}
      <VideoBackground>
        <video autoPlay muted loop playsInline>
          <source src="https://assets.mixkit.co/videos/24785/24785-360.mp4" type="video/mp4" />
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
        <TopbarRight>
          <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,248,240,.3)' }}>
            <StatusDot /> Aberto agora
          </span>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 15, letterSpacing: 3, color: 'rgba(255,255,255,.18)' }}>
            {time}
          </span>
        </TopbarRight>
      </Topbar>

      {/* Main Stage */}
      <main style={{ position: 'fixed', inset: 0, zIndex: 10, display: 'flex', alignItems: 'center', padding: '56px 7vw 44px', gap: 72 }}>

        {/* Glass Panel */}
        <Panel>
          <PanelAccent />

          <LogoWrapper>
            <LogoName>
              DEV
              <em>Burguer</em>
            </LogoName>
            <LogoSub>Monte seu pedido para entrar</LogoSub>
          </LogoWrapper>

          <Divider>
            <DividerLine />
            <DividerText>acesso</DividerText>
            <DividerLine />
          </Divider>

          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <Field filled={emailFilled}>
              <FieldLabel filled={emailFilled}>🍞 Email — pão de baixo</FieldLabel>
              <FieldInner>
                <FieldInput
                  type="email"
                  placeholder="seu@email.com"
                  filled={emailFilled}
                  hasError={!!errors.email}
                  {...register("email")}
                  autoComplete="email"
                />
                <Tick visible={emailFilled}>✓</Tick>
              </FieldInner>
              {errors.email && (
                <p style={{ color: '#FF6B6B', fontSize: 11, marginTop: 6, letterSpacing: .3 }}>
                  {errors.email.message}
                </p>
              )}
            </Field>

            {/* Senha */}
            <Field filled={senhaFilled}>
              <FieldLabel filled={senhaFilled}>🥩 Senha — recheio secreto</FieldLabel>
              <FieldInner>
                <FieldInput
                  type="password"
                  placeholder="Mín. 6 caracteres"
                  filled={senhaFilled}
                  hasError={!!errors.password}
                  {...register("password")}
                  autoComplete="current-password"
                />
                <Tick visible={senhaFilled}>✓</Tick>
              </FieldInner>
              {errors.password && (
                <p style={{ color: '#FF6B6B', fontSize: 11, marginTop: 6, letterSpacing: .3 }}>
                  {errors.password.message}
                </p>
              )}
            </Field>

            <ForgotLink href="#">Esqueceu a senha?</ForgotLink>

            <LoginButton type="submit" disabled={!isReady}>
              MONTAR &amp; ENTRAR
            </LoginButton>
          </Form>

          <RegisterText>
            Primeira vez aqui?{' '}
            <a href="/cadastro" style={{ color: 'rgba(255,248,240,.45)', borderBottom: '1px solid rgba(255,248,240,.12)', textDecoration: 'none', paddingBottom: 1 }}>
              Criar conta
            </a>
          </RegisterText>
        </Panel>

        {/* Order Tracker */}
        <Tracker>
          <TrackerTitle>Seu pedido</TrackerTitle>
          {STEPS.map((s, i) => (
            <Step key={i} done={getStepDone(i)}>
              <StepIcon done={getStepDone(i)}>{s.icon}</StepIcon>
              <StepInfo>
                <StepName done={getStepDone(i)}>{s.name}</StepName>
                <StepDesc done={getStepDone(i)}>{getStepDesc(s, i)}</StepDesc>
              </StepInfo>
              <StepBadge done={getStepDone(i)}>{i + 1}</StepBadge>
            </Step>
          ))}
          <OrderStatus ready={isReady}>
            <StatusIndicator ready={isReady} />
            <StatusText ready={isReady}>{statusText()}</StatusText>
          </OrderStatus>
        </Tracker>

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

      {/* Success */}
      {success && (
        <SuccessOverlay>
          <SuccessEmoji>🍔</SuccessEmoji>
          <SuccessTitle>Burguer Pronto!</SuccessTitle>
          <SuccessSub>Bem-vindo de volta. Bom apetite!</SuccessSub>
        </SuccessOverlay>
      )}
    </Container>
  );
}