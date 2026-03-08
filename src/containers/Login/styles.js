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








/*Depois*/
    
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

/* ─── TOKENS ─── */
const C = {
  bg:        '#0e0c09',
  panel:     '#141210',
  surface:   '#1c1810',
  border:    'rgba(255,200,80,.1)',
  borderHov: 'rgba(255,200,80,.28)',
  fire:      '#ff5e00',
  gold:      '#ffbe00',
  cream:     '#fdf6e9',
  muted:     'rgba(253,246,233,.4)',
  error:     '#ff4444',
};

/* ─── KEYFRAMES ─── */
const fadeIn = keyframes`
  from { opacity:0; transform:translateY(22px); }
  to   { opacity:1; transform:translateY(0); }
`;

const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`;

const grain = keyframes`
  0%,100% { transform: translate(0,0); }
  10%      { transform: translate(-2%,-3%); }
  30%      { transform: translate(3%,-1%); }
  50%      { transform: translate(-1%, 2%); }
  70%      { transform: translate(2%, 3%); }
  90%      { transform: translate(-3%, 1%); }
`;

const glow = keyframes`
  0%,100% { opacity:.55; transform:scale(1); }
  50%      { opacity:.8;  transform:scale(1.08); }
`;

const float = keyframes`
  0%,100% { transform:translateY(0px) rotate(-2deg); }
  50%      { transform:translateY(-12px) rotate(2deg); }
`;

/* ─── GLOBAL ─── */
export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
  html, body { height:100%; overflow:hidden; }
  body {
    font-family: 'Sora', 'Plus Jakarta Sans', system-ui, sans-serif;
    background: ${C.bg};
    color: ${C.cream};
    -webkit-font-smoothing: antialiased;
  }
  ::-webkit-scrollbar { width:3px; }
  ::-webkit-scrollbar-thumb { background:${C.fire}; border-radius:2px; }
`;

/* ─── LAYOUT ─── */
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

/* ─── LEFT ─── */
export const LeftContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${C.panel};

  /* real burger photo as bg */
  &::before {
    content: '';
    position: absolute; inset: 0;
    background:
      url('https://images.unsplash.com/photo-1586816001966-79b736744398?w=900&q=85')
      center/cover no-repeat;
    filter: brightness(.22) saturate(1.5);
    transform: scale(1.04);
    animation: ${keyframes`
      from { transform:scale(1.04); }
      to   { transform:scale(1.1); }
    `} 16s ease-in-out infinite alternate;
  }

  /* warm glow overlay */
  &::after {
    content: '';
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse at 50% 80%, rgba(255,94,0,.22) 0%, transparent 65%),
      linear-gradient(180deg, rgba(14,12,9,.3) 0%, rgba(14,12,9,.0) 40%, rgba(14,12,9,.6) 100%);
  }

  img {
    position: relative; z-index: 2;
    width: clamp(160px, 55%, 260px);
    filter:
      drop-shadow(0 0 40px rgba(255,94,0,.5))
      drop-shadow(0 0 80px rgba(255,94,0,.2));
    animation: ${float} 5s ease-in-out infinite;
    transition: filter .3s;

    &:hover {
      filter:
        drop-shadow(0 0 55px rgba(255,94,0,.7))
        drop-shadow(0 0 100px rgba(255,190,0,.25));
    }
  }

  /* grain texture */
  .grain {
    position: absolute; inset: -50%; z-index: 3;
    width: 200%; height: 200%;
    opacity: .025;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    animation: ${grain} .8s steps(1) infinite;
    pointer-events: none;
  }

  /* bottom label */
  .left-label {
    position: absolute; bottom: 2.5rem; left: 0; right: 0;
    z-index: 4;
    text-align: center;
    font-size: .62rem;
    font-weight: 700;
    letter-spacing: .28em;
    text-transform: uppercase;
    color: rgba(253,246,233,.2);
  }

  @media (max-width: 768px) { display: none; }
`;

/* ─── RIGHT ─── */
export const RightContainer = styled.div`
  position: relative;
  background: ${C.panel};
  border-left: 1px solid ${C.border};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(2.5rem, 6vw, 4rem) clamp(2rem, 6vw, 4.5rem);
  overflow: hidden;

  /* subtle dot grid */
  &::before {
    content: '';
    position: absolute; inset: 0;
    background-image: radial-gradient(circle, rgba(255,200,80,.07) 1px, transparent 1px);
    background-size: 28px 28px;
    pointer-events: none;
  }

  /* ambient glow blob */
  &::after {
    content: '';
    position: absolute;
    bottom: -15%; right: -15%;
    width: 50vw; height: 50vw;
    background: radial-gradient(circle, rgba(255,94,0,.07) 0%, transparent 65%);
    border-radius: 50%;
    animation: ${glow} 6s ease-in-out infinite;
    pointer-events: none;
  }

  > * { position: relative; z-index: 1; }

  animation: ${fadeIn} .65s .05s cubic-bezier(.4,0,.2,1) both;
`;

/* ─── TITLE ─── */
export const Title = styled.h1`
  font-size: clamp(1.35rem, 2.5vw, 1.8rem);
  font-weight: 800;
  letter-spacing: -.03em;
  line-height: 1.25;
  color: ${C.cream};
  margin-bottom: 2.25rem;
  animation: ${fadeIn} .6s .15s both;

  span {
    background: linear-gradient(90deg, ${C.fire}, ${C.gold}, ${C.fire});
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${shimmer} 3.5s linear infinite;
  }
`;

/* ─── FORM ─── */
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  animation: ${fadeIn} .6s .25s both;
`;

/* ─── INPUT CONTAINER ─── */
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .45rem;

  label {
    font-size: .65rem;
    font-weight: 700;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: rgba(253,246,233,.35);
  }

  input {
    background: ${C.surface};
    border: 1.5px solid ${C.border};
    border-radius: 10px;
    color: ${C.cream};
    font-family: inherit;
    font-size: .92rem;
    font-weight: 400;
    padding: .82rem 1.1rem;
    outline: none;
    transition: border-color .2s, background .2s, box-shadow .2s;
    -webkit-appearance: none;
    width: 100%;

    &::placeholder {
      color: rgba(253,246,233,.15);
      font-weight: 300;
    }

    &:hover {
      border-color: ${C.borderHov};
      background: #221c10;
    }

    &:focus {
      border-color: ${C.gold};
      background: #221c10;
      box-shadow: 0 0 0 3px rgba(255,190,0,.1);
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      -webkit-box-shadow: 0 0 0 1000px #221c10 inset;
      -webkit-text-fill-color: ${C.cream};
      transition: background-color 9999s;
    }
  }

  /* error message */
  p {
    font-size: .72rem;
    color: ${C.error};
    font-weight: 500;
    min-height: 1rem;
    padding-left: .25rem;
    display: flex;
    align-items: center;
    gap: .3rem;

    &::before {
      content: '⚠';
      font-size: .65rem;
    }

    &:empty::before { display: none; }
    &:empty { min-height: 0; }
  }
`;

/* ─── BUTTON (override component) ─── */
export const ButtonWrapper = styled.div`
  margin-top: .5rem;
  animation: ${fadeIn} .6s .35s both;

  button, [type="submit"] {
    width: 100%;
    background: linear-gradient(135deg, ${C.fire} 0%, #cc4400 100%);
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    font-family: inherit;
    font-size: .92rem;
    font-weight: 700;
    padding: .9rem 1.5rem;
    letter-spacing: .02em;
    position: relative;
    overflow: hidden;
    transition: transform .2s, box-shadow .2s, filter .2s;
    box-shadow: 0 4px 20px rgba(255,94,0,.3);

    &::before {
      content: '';
      position: absolute; top: 0; left: -80%; width: 60%; height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,.15), transparent);
      transform: skewX(-15deg);
      transition: left .45s ease;
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 28px rgba(255,94,0,.45);
      filter: brightness(1.08);

      &::before { left: 150%; }
    }

    &:active { transform: translateY(0); }
  }
`;

/* ─── BOTTOM LINK ─── */
export const FooterText = styled.p`
  margin-top: 1.5rem;
  font-size: .8rem;
  color: ${C.muted};
  text-align: center;
  animation: ${fadeIn} .6s .45s both;
`;

export const Link = styled(RouterLink)`
  color: ${C.fire};
  font-weight: 700;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color .2s, opacity .2s;

  &:hover {
    border-color: ${C.fire};
    opacity: .85;
  }
;
`