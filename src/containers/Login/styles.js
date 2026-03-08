// import { Link as ReactLink } from "react-router-dom";
// import styled from 'styled-components';
// import BackgroundLogin from "../../assets/background-login.svg";
// import Background from "../../assets/background.svg";

// export const Container = styled.div`
// display: flex;
// height: 100vh;
// width: 100vw;
// `;

// export const LeftContainer = styled.div`
// background: url('${BackgroundLogin}');
// background-position: center;
// background-size: cover;

// height: 100%;
// width: 100%;
// max-width: 50%;

// display: flex;
// align-items: center;
// justify-content: center;

// img {
//     width: 80%;
    
// }
// `;

// export const RightContainer = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// flex-direction: column;

// height: 100%;
// width: 100%;
// max-width: 50%;

// background: url('${Background}');
// background-color: #1e1e1e;

// p{
//    color: ${(props) => props.theme.white};
//    font-size: 18px;
//    font-weight: 800;

//    a{
//         text-decoration: underline;
//     }
// }

// `;

// export const Title = styled.h2`
//  font-family: "Road Rage", sans-serif;
//  color: ${(props) => props.theme.white};
//  font-size: 40px;

//  span {
//     color: ${(props) => props.theme.purple} ;
//     font-family: "Road Rage", sans-serif;
//  }

// `;

// export const Form = styled.form`
// display: flex;
// flex-direction: column;
// gap: 20px;
// padding: 20px;
// width: 100%;
// max-width: 400px;

// `;

// export const InputContainer = styled.div`
// display: flex;
// flex-direction: column;
// gap: 5px;
// width: 100%;

// input {
//     width: 100%;
//     border: none;
//     height: 52px;
//     border-radius: 5px;
//     padding: 0 16px;
// }

// label {
//     font-size: 18px;
//     font-weight: 600;
//     color: ${(props) => props.theme.white};

// }

//     p {
//     font-size: 14px;
//     line-height: 80%;
//     color: ${(props) => props.theme.darkRed};
//     font-weight: 600;
//     height: 10px;

// }
// `;



//  export const Link = styled(ReactLink)
//  `
//  text-decoration: none;
// color: ${(props) => props.theme.white};
// `;








// /*Depois*/
    
// import styled, { keyframes, createGlobalStyle } from 'styled-components';
// import { Link as RouterLink } from 'react-router-dom';

// /* ─── TOKENS ─── */
// const C = {
//   bg:        '#0e0c09',
//   panel:     '#141210',
//   surface:   '#1c1810',
//   border:    'rgba(255,200,80,.1)',
//   borderHov: 'rgba(255,200,80,.28)',
//   fire:      '#ff5e00',
//   gold:      '#ffbe00',
//   cream:     '#fdf6e9',
//   muted:     'rgba(253,246,233,.4)',
//   error:     '#ff4444',
// };

// /* ─── KEYFRAMES ─── */
// const fadeIn = keyframes`
//   from { opacity:0; transform:translateY(22px); }
//   to   { opacity:1; transform:translateY(0); }
// `;

// const shimmer = keyframes`
//   0%   { background-position: -200% center; }
//   100% { background-position:  200% center; }
// `;

// const grain = keyframes`
//   0%,100% { transform: translate(0,0); }
//   10%      { transform: translate(-2%,-3%); }
//   30%      { transform: translate(3%,-1%); }
//   50%      { transform: translate(-1%, 2%); }
//   70%      { transform: translate(2%, 3%); }
//   90%      { transform: translate(-3%, 1%); }
// `;

// const glow = keyframes`
//   0%,100% { opacity:.55; transform:scale(1); }
//   50%      { opacity:.8;  transform:scale(1.08); }
// `;

// const float = keyframes`
//   0%,100% { transform:translateY(0px) rotate(-2deg); }
//   50%      { transform:translateY(-12px) rotate(2deg); }
// `;

// /* ─── GLOBAL ─── */
// export const GlobalStyle = createGlobalStyle`
//   *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
//   html, body { height:100%; overflow:hidden; }
//   body {
//     font-family: 'Sora', 'Plus Jakarta Sans', system-ui, sans-serif;
//     background: ${C.bg};
//     color: ${C.cream};
//     -webkit-font-smoothing: antialiased;
//   }
//   ::-webkit-scrollbar { width:3px; }
//   ::-webkit-scrollbar-thumb { background:${C.fire}; border-radius:2px; }
// `;

// /* ─── LAYOUT ─── */
// export const Container = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   height: 100vh;
//   overflow: hidden;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// /* ─── LEFT ─── */
// export const LeftContainer = styled.div`
//   position: relative;
//   overflow: hidden;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: ${C.panel};

//   /* real burger photo as bg */
//   &::before {
//     content: '';
//     position: absolute; inset: 0;
//     background:
//       url('https://images.unsplash.com/photo-1586816001966-79b736744398?w=900&q=85')
//       center/cover no-repeat;
//     filter: brightness(.22) saturate(1.5);
//     transform: scale(1.04);
//     animation: ${keyframes`
//       from { transform:scale(1.04); }
//       to   { transform:scale(1.1); }
//     `} 16s ease-in-out infinite alternate;
//   }

//   /* warm glow overlay */
//   &::after {
//     content: '';
//     position: absolute; inset: 0;
//     background:
//       radial-gradient(ellipse at 50% 80%, rgba(255,94,0,.22) 0%, transparent 65%),
//       linear-gradient(180deg, rgba(14,12,9,.3) 0%, rgba(14,12,9,.0) 40%, rgba(14,12,9,.6) 100%);
//   }

//   img {
//     position: relative; z-index: 2;
//     width: clamp(160px, 55%, 260px);
//     filter:
//       drop-shadow(0 0 40px rgba(255,94,0,.5))
//       drop-shadow(0 0 80px rgba(255,94,0,.2));
//     animation: ${float} 5s ease-in-out infinite;
//     transition: filter .3s;

//     &:hover {
//       filter:
//         drop-shadow(0 0 55px rgba(255,94,0,.7))
//         drop-shadow(0 0 100px rgba(255,190,0,.25));
//     }
//   }

//   /* grain texture */
//   .grain {
//     position: absolute; inset: -50%; z-index: 3;
//     width: 200%; height: 200%;
//     opacity: .025;
//     background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
//     animation: ${grain} .8s steps(1) infinite;
//     pointer-events: none;
//   }

//   /* bottom label */
//   .left-label {
//     position: absolute; bottom: 2.5rem; left: 0; right: 0;
//     z-index: 4;
//     text-align: center;
//     font-size: .62rem;
//     font-weight: 700;
//     letter-spacing: .28em;
//     text-transform: uppercase;
//     color: rgba(253,246,233,.2);
//   }

//   @media (max-width: 768px) { display: none; }
// `;

// /* ─── RIGHT ─── */
// export const RightContainer = styled.div`
//   position: relative;
//   background: ${C.panel};
//   border-left: 1px solid ${C.border};
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   padding: clamp(2.5rem, 6vw, 4rem) clamp(2rem, 6vw, 4.5rem);
//   overflow: hidden;

//   /* subtle dot grid */
//   &::before {
//     content: '';
//     position: absolute; inset: 0;
//     background-image: radial-gradient(circle, rgba(255,200,80,.07) 1px, transparent 1px);
//     background-size: 28px 28px;
//     pointer-events: none;
//   }

//   /* ambient glow blob */
//   &::after {
//     content: '';
//     position: absolute;
//     bottom: -15%; right: -15%;
//     width: 50vw; height: 50vw;
//     background: radial-gradient(circle, rgba(255,94,0,.07) 0%, transparent 65%);
//     border-radius: 50%;
//     animation: ${glow} 6s ease-in-out infinite;
//     pointer-events: none;
//   }

//   > * { position: relative; z-index: 1; }

//   animation: ${fadeIn} .65s .05s cubic-bezier(.4,0,.2,1) both;
// `;

// /* ─── TITLE ─── */
// export const Title = styled.h1`
//   font-size: clamp(1.35rem, 2.5vw, 1.8rem);
//   font-weight: 800;
//   letter-spacing: -.03em;
//   line-height: 1.25;
//   color: ${C.cream};
//   margin-bottom: 2.25rem;
//   animation: ${fadeIn} .6s .15s both;

//   span {
//     background: linear-gradient(90deg, ${C.fire}, ${C.gold}, ${C.fire});
//     background-size: 200% auto;
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     background-clip: text;
//     animation: ${shimmer} 3.5s linear infinite;
//   }
// `;

// /* ─── FORM ─── */
// export const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 1.1rem;
//   animation: ${fadeIn} .6s .25s both;
// `;

// /* ─── INPUT CONTAINER ─── */
// export const InputContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: .45rem;

//   label {
//     font-size: .65rem;
//     font-weight: 700;
//     letter-spacing: .18em;
//     text-transform: uppercase;
//     color: rgba(253,246,233,.35);
//   }

//   input {
//     background: ${C.surface};
//     border: 1.5px solid ${C.border};
//     border-radius: 10px;
//     color: ${C.cream};
//     font-family: inherit;
//     font-size: .92rem;
//     font-weight: 400;
//     padding: .82rem 1.1rem;
//     outline: none;
//     transition: border-color .2s, background .2s, box-shadow .2s;
//     -webkit-appearance: none;
//     width: 100%;

//     &::placeholder {
//       color: rgba(253,246,233,.15);
//       font-weight: 300;
//     }

//     &:hover {
//       border-color: ${C.borderHov};
//       background: #221c10;
//     }

//     &:focus {
//       border-color: ${C.gold};
//       background: #221c10;
//       box-shadow: 0 0 0 3px rgba(255,190,0,.1);
//     }

//     &:-webkit-autofill,
//     &:-webkit-autofill:hover,
//     &:-webkit-autofill:focus {
//       -webkit-box-shadow: 0 0 0 1000px #221c10 inset;
//       -webkit-text-fill-color: ${C.cream};
//       transition: background-color 9999s;
//     }
//   }

//   /* error message */
//   p {
//     font-size: .72rem;
//     color: ${C.error};
//     font-weight: 500;
//     min-height: 1rem;
//     padding-left: .25rem;
//     display: flex;
//     align-items: center;
//     gap: .3rem;

//     &::before {
//       content: '⚠';
//       font-size: .65rem;
//     }

//     &:empty::before { display: none; }
//     &:empty { min-height: 0; }
//   }
// `;

// /* ─── BUTTON (override component) ─── */
// export const ButtonWrapper = styled.div`
//   margin-top: .5rem;
//   animation: ${fadeIn} .6s .35s both;

//   button, [type="submit"] {
//     width: 100%;
//     background: linear-gradient(135deg, ${C.fire} 0%, #cc4400 100%);
//     color: #fff;
//     border: none;
//     cursor: pointer;
//     border-radius: 10px;
//     font-family: inherit;
//     font-size: .92rem;
//     font-weight: 700;
//     padding: .9rem 1.5rem;
//     letter-spacing: .02em;
//     position: relative;
//     overflow: hidden;
//     transition: transform .2s, box-shadow .2s, filter .2s;
//     box-shadow: 0 4px 20px rgba(255,94,0,.3);

//     &::before {
//       content: '';
//       position: absolute; top: 0; left: -80%; width: 60%; height: 100%;
//       background: linear-gradient(90deg, transparent, rgba(255,255,255,.15), transparent);
//       transform: skewX(-15deg);
//       transition: left .45s ease;
//     }

//     &:hover {
//       transform: translateY(-2px);
//       box-shadow: 0 8px 28px rgba(255,94,0,.45);
//       filter: brightness(1.08);

//       &::before { left: 150%; }
//     }

//     &:active { transform: translateY(0); }
//   }
// `;

// /* ─── BOTTOM LINK ─── */
// export const FooterText = styled.p`
//   margin-top: 1.5rem;
//   font-size: .8rem;
//   color: ${C.muted};
//   text-align: center;
//   animation: ${fadeIn} .6s .45s both;
// `;

// export const Link = styled(RouterLink)`
//   color: ${C.fire};
//   font-weight: 700;
//   text-decoration: none;
//   border-bottom: 1px solid transparent;
//   transition: border-color .2s, opacity .2s;

//   &:hover {
//     border-color: ${C.fire};
//     opacity: .85;
//   }
// ;
// `











import { Link as ReactLink } from "react-router-dom";
import styled, { keyframes, createGlobalStyle } from "styled-components";

/* ═══════════════════════════
   KEYFRAMES
═══════════════════════════ */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const cardIn = keyframes`
  from { opacity: 0; transform: translateY(28px) scale(.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;

const photoZoom = keyframes`
  from { transform: scale(1); }
  to   { transform: scale(1.06); }
`;

const shimmer = keyframes`
  0%   { left: -80%; }
  100% { left: 160%; }
`;

const pulse = keyframes`
  0%,100% { transform: scale(1);   opacity: 1; }
  50%      { transform: scale(.7); opacity: .5; }
`;

const floatUp = keyframes`
  0%   { transform: translateY(110vh) rotate(0deg);   opacity: 0; }
  10%  { opacity: .07; }
  90%  { opacity: .07; }
  100% { transform: translateY(-10vh) rotate(360deg); opacity: 0; }
`;

const glowPulse = keyframes`
  0%,100% { opacity: .55; transform: scale(1); }
  50%      { opacity: .85; transform: scale(1.06); }
`;

const amberGlow = keyframes`
  0%,100% { box-shadow: 0 0 0 3px rgba(255,170,0,.1); }
  50%      { box-shadow: 0 0 0 3px rgba(255,170,0,.2); }
`;

/* ═══════════════════════════
   GLOBAL
═══════════════════════════ */
export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { height: 100%; overflow: hidden; }
  body {
    font-family: 'Plus Jakarta Sans', 'DM Sans', system-ui, sans-serif;
    background: #1a0f00;
    -webkit-font-smoothing: antialiased;
  }
  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-thumb { background: #ff6b1a; border-radius: 2px; }
`;

/* ═══════════════════════════
   CONTAINER — fundo com glow
═══════════════════════════ */
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: #1a0f00;
  position: relative;
  overflow: hidden;
  padding: 1.5rem;

  /* glow de brasa no fundo */
  &::before {
    content: '';
    position: absolute;
    bottom: -10%; left: 50%;
    transform: translateX(-50%);
    width: 80vw; height: 50vh;
    background: radial-gradient(ellipse, rgba(255,107,26,.18) 0%, transparent 70%);
    pointer-events: none;
    animation: ${glowPulse} 5s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute; inset: 0;
    background-image:
      radial-gradient(circle at 20% 80%, rgba(255,107,26,.07) 0%, transparent 40%),
      radial-gradient(circle at 80% 20%, rgba(255,170,51,.05) 0%, transparent 35%);
    pointer-events: none;
  }
`;

/* ═══════════════════════════
   EMOJIS FLUTUANTES
   — adicione <FloatingEmojis /> no Container
═══════════════════════════ */
export const FloatingEmojis = styled.div`
  position: fixed; inset: 0; z-index: 0; pointer-events: none; overflow: hidden;

  /* os spans são criados via JS no Login.jsx */
  span {
    position: absolute;
    font-size: 1.4rem;
    opacity: 0;
    animation: ${floatUp} linear infinite;
    user-select: none;
  }
`;

/* ═══════════════════════════
   LEFT — não usado no novo layout
═══════════════════════════ */
export const LeftContainer = styled.div`
  display: none;
`;

/* ═══════════════════════════
   RIGHT = CARD CENTRALIZADO
═══════════════════════════ */
export const RightContainer = styled.div`
  position: relative; z-index: 1;
  width: min(440px, 100%);
  background: #1e1208;
  border-radius: 24px;
  border: 1px solid rgba(255,160,60,.12);
  overflow: hidden;
  box-shadow:
    0 0 0 1px rgba(255,107,26,.05),
    0 40px 80px rgba(0,0,0,.7),
    0 0 100px rgba(255,107,26,.05);
  animation: ${cardIn} .65s cubic-bezier(.4,0,.2,1) both;

  /* parágrafo de cadastro */
  > p {
    text-align: center;
    margin-top: 1.5rem;
    padding: 0 2rem 2rem;
    font-size: .8rem;
    color: rgba(255,230,180,.35);
    animation: ${fadeUp} .5s .55s both;

    a {
      color: #ff6b1a;
      text-decoration: none;
      font-weight: 600;
      border-bottom: 1px solid transparent;
      transition: border-color .2s;
      &:hover { border-color: #ff6b1a; }
    }
  }
`;

/* ═══════════════════════════
   PHOTO STRIP — foto no topo do card
═══════════════════════════ */
export const PhotoStrip = styled.div`
  height: 200px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%; height: 100%;
    object-fit: cover;
    object-position: center 60%;
    display: block;
    filter: brightness(.75) saturate(1.3) contrast(1.05);
    animation: ${photoZoom} 14s ease-in-out infinite alternate;
  }

  /* fade para o card */
  &::after {
    content: '';
    position: absolute; bottom: 0; left: 0; right: 0; height: 65%;
    background: linear-gradient(0deg, #1e1208 0%, transparent 100%);
  }
`;

/* ═══════════════════════════
   LOGO SOBRE A FOTO
═══════════════════════════ */
export const LogoOver = styled.div`
  position: absolute;
  bottom: -1px; left: 0; right: 0;
  z-index: 2;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 1.75rem 1.25rem;

  .logo {
    display: flex; align-items: center; gap: .65rem;
  }
  .logo-icon {
    width: 50px; height: 50px;
    background: linear-gradient(135deg, #ff6b1a, #ffaa33);
    border-radius: 13px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.5rem;
    box-shadow: 0 6px 20px rgba(255,107,26,.45), 0 0 0 2px rgba(255,107,26,.15);
    transition: transform .3s cubic-bezier(.34,1.56,.64,1);
    &:hover { transform: scale(1.08) rotate(-5deg); }
  }
  .logo-dev {
    font-size: .58rem; font-weight: 700;
    letter-spacing: .22em; text-transform: uppercase;
    color: #ffaa33; display: block; line-height: 1; margin-bottom: .15rem;
  }
  .logo-name {
    font-size: 1.25rem; font-weight: 800;
    letter-spacing: -.03em; color: #fff;
    display: block; line-height: 1;
  }

  /* badge aberto agora */
  .open-badge {
    display: flex; align-items: center; gap: .35rem;
    background: rgba(34,197,94,.12);
    border: 1px solid rgba(34,197,94,.25);
    border-radius: 99px;
    padding: .28rem .7rem;
    font-size: .62rem; font-weight: 700;
    color: #4ade80; letter-spacing: .06em;
  }
  .open-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: #4ade80;
    box-shadow: 0 0 6px #4ade80;
    animation: ${pulse} 2s ease infinite;
  }
`;

/* ═══════════════════════════
   FORM BODY
═══════════════════════════ */
export const FormBody = styled.div`
  padding: 1.25rem 1.75rem 0;
`;

/* ═══════════════════════════
   TITLE
═══════════════════════════ */
export const Title = styled.h2`
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: -.03em;
  color: #fdf6e9;
  line-height: 1.2;
  margin-bottom: .35rem;
  animation: ${fadeUp} .5s .15s both;

  span {
    /* gradiente animado no span */
    background: linear-gradient(90deg, #ff6b1a, #ffaa00, #ff6b1a);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 800;
  }
`;

export const TitleSub = styled.p`
  font-size: .82rem;
  color: rgba(255,230,180,.38);
  font-weight: 300;
  margin-bottom: 1.75rem;
  animation: ${fadeUp} .5s .2s both;
`;

/* ═══════════════════════════
   FORM
═══════════════════════════ */
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: .95rem;
  animation: ${fadeUp} .5s .25s both;
`;

/* ═══════════════════════════
   INPUT CONTAINER
═══════════════════════════ */
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .45rem;
  width: 100%;

  label {
    font-size: .62rem;
    font-weight: 700;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: rgba(255,230,180,.35);
  }

  input {
    width: 100%;
    background: rgba(255,120,0,.06);
    border: 1.5px solid rgba(255,160,60,.14);
    border-radius: 10px;
    color: #fdf6e9;
    font-family: inherit;
    font-size: .9rem;
    font-weight: 400;
    padding: .8rem 1rem;
    outline: none;
    transition: border-color .22s, background .22s, box-shadow .22s;

    &::placeholder { color: rgba(255,230,180,.16); font-weight: 300; }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      -webkit-box-shadow: 0 0 0 1000px #221208 inset;
      -webkit-text-fill-color: #fdf6e9;
      transition: background-color 9999s;
    }

    &:hover {
      border-color: rgba(255,160,60,.28);
      background: rgba(255,120,0,.09);
    }

    &:focus {
      border-color: #ffaa00;
      background: rgba(255,120,0,.1);
      animation: ${amberGlow} 2s ease-in-out infinite;
    }
  }

  p {
    font-size: .72rem;
    color: #ff4444;
    font-weight: 600;
    min-height: .85rem;
    height: 10px;
    line-height: 80%;
    padding-left: .1rem;

    &:not(:empty)::before { content: '⚠ '; font-size: .6rem; }
  }
`;

/* ═══════════════════════════
   BUTTON WRAPPER
   envolve o <Button> do seu projeto
   para aplicar estilos sem quebrar o componente
═══════════════════════════ */
export const ButtonWrapper = styled.div`
  margin-top: .35rem;
  animation: ${fadeUp} .5s .38s both;

  button, [type="submit"] {
    width: 100%;
    background: linear-gradient(135deg, #ff6b1a 0%, #d45200 100%);
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    font-family: inherit;
    font-size: .9rem;
    font-weight: 700;
    padding: .88rem 1.5rem;
    position: relative;
    overflow: hidden;
    transition: transform .2s, box-shadow .2s, filter .2s;
    box-shadow: 0 4px 20px rgba(255,107,26,.3);

    /* shimmer diagonal */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -80%;
      width: 60%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,.15), transparent);
      transform: skewX(-15deg);
      transition: left .45s ease;
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 28px rgba(255,107,26,.45);
      filter: brightness(1.06);

      &::before { left: 160%; }
    }

    &:active { transform: translateY(0); }
  }
`;

/* ═══════════════════════════
   MENU TEASER — chips roláveis
═══════════════════════════ */
export const MenuTeaser = styled.div`
  margin: 1.5rem 1.75rem 0;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255,160,60,.1);
  animation: ${fadeUp} .5s .5s both;

  .teaser-label {
    font-size: .58rem; font-weight: 700;
    letter-spacing: .18em; text-transform: uppercase;
    color: rgba(255,230,180,.2); margin-bottom: .75rem;
  }

  .teaser-scroll {
    display: flex; gap: .45rem;
    overflow-x: auto; padding-bottom: 2px;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }
  }

  .chip {
    flex-shrink: 0;
    background: rgba(255,120,0,.07);
    border: 1px solid rgba(255,160,60,.12);
    border-radius: 8px;
    padding: .4rem .75rem;
    display: flex; align-items: center; gap: .35rem;
    font-size: .7rem; font-weight: 500;
    color: rgba(255,230,180,.4);
    cursor: default;
    transition: border-color .2s, color .2s, transform .2s;
    white-space: nowrap;

    &:hover {
      border-color: rgba(255,160,60,.3);
      color: #fdf6e9;
      transform: translateY(-1px);
    }

    span { font-size: .95rem; }
  }
`;

/* ═══════════════════════════
   LINK
═══════════════════════════ */
export const Link = styled(ReactLink)`
  text-decoration: none;
  color: #ff6b1a;
  font-weight: 600;
  border-bottom: 1px solid transparent;
  transition: border-color .2s, opacity .2s;

  &:hover {
    border-color: #ff6b1a;
    opacity: .85;
  }
`;