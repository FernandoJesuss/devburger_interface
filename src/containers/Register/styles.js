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
//  color: ${(props) => props.theme.purple};
//  font-size: 40px;

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



// export const Link = styled(ReactLink)`
// text-decoration: none;
// color: ${(props) => props.theme.white};
// `;


/*depois*/

import { Link as ReactLink } from "react-router-dom";
import styled, { keyframes } from 'styled-components';

const panelIn = keyframes`
  from { opacity: 0; transform: translateY(20px) }
  to   { opacity: 1; transform: translateY(0) }
`;

const fieldIn = keyframes`
  from { opacity: 0; transform: translateY(10px) }
  to   { opacity: 1; transform: translateY(0) }
`;

const blink = keyframes`
  0%, 100% { opacity: 1 }
  50%       { opacity: .15 }
`;

const tickScroll = keyframes`
  from { transform: translateX(0) }
  to   { transform: translateX(-50%) }
`;

const T = {
  red:        '#C8000A',
  redBright:  '#FF2020',
  redGlow:    'rgba(200,0,10,.35)',
  cream:      '#FFF8F0',
  creamFaint: 'rgba(255,248,240,.18)',
  glassBg:    'rgba(8,6,4,.62)',
  glassBorder:'rgba(255,248,240,.1)',
};

const bp = {
  md: '@media (max-width: 768px)',
  sm: '@media (max-width: 480px)',
};

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: #080604;
  font-family: 'Nunito Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  position: relative;

  ${bp.md} { height: 100dvh; overflow-y: auto; }
`;

export const VideoBackground = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(.28) saturate(1.3) contrast(1.05);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(105deg, rgba(6,4,2,.96) 0%, rgba(6,4,2,.88) 32%, rgba(6,4,2,.55) 58%, rgba(6,4,2,.08) 100%),
    linear-gradient(to top, rgba(0,0,0,.6) 0%, transparent 35%);

  ${bp.md} { background: rgba(6,4,2,.85); }
`;

export const Topbar = styled.header`
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 56px;
  z-index: 40;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  background: rgba(6,4,2,.7);
  backdrop-filter: blur(24px);
  border-bottom: 1px solid ${T.glassBorder};

  ${bp.md} { padding: 0 20px; height: 48px; }
`;

export const TopbarBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const StatusDot = styled.span`
  width: 6px; height: 6px;
  border-radius: 50%;
  background: #22C55E;
  box-shadow: 0 0 8px #22C55E;
  display: inline-block;
  animation: ${blink} 2.5s ease-in-out infinite;
`;

export const Panel = styled.div`
  position: relative;
  width: 420px;
  flex-shrink: 0;
  background: ${T.glassBg};
  border: 1px solid ${T.glassBorder};
  border-radius: 24px;
  padding: 44px 40px 40px;
  backdrop-filter: blur(28px);
  -webkit-backdrop-filter: blur(28px);
  box-shadow:
    0 32px 80px rgba(0,0,0,.5),
    0 0 0 1px rgba(255,255,255,.04) inset,
    0 1px 0 rgba(255,255,255,.08) inset;
  opacity: 0;
  animation: ${panelIn} .75s cubic-bezier(.34,1.1,.64,1) .15s forwards;

  ${bp.md} { width: 100%; max-width: 440px; padding: 36px 28px; border-radius: 20px; }
  ${bp.sm} { padding: 28px 20px; border-radius: 0; border-left: none; border-right: none; }
`;

export const PanelAccent = styled.div`
  position: absolute;
  top: 0; left: 32px; right: 32px;
  height: 2px;
  background: linear-gradient(90deg, transparent, ${T.red}, ${T.redBright}, ${T.red}, transparent);
  border-radius: 0 0 2px 2px;
  opacity: .7;
`;

export const LogoWrapper = styled.div`
  margin-bottom: 28px;
`;

export const LogoName = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 48px;
  line-height: .88;
  letter-spacing: 1px;
  color: ${T.cream};

  em {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 44px;
    color: ${T.redBright};
    display: block;
    text-shadow: 0 0 40px ${T.redGlow};
  }

  ${bp.sm} { font-size: 38px; em { font-size: 34px; } }
`;

export const LogoSub = styled.p`
  margin-top: 6px;
  font-size: 9px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: ${T.creamFaint};
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 20px 0;
`;

export const DividerLine = styled.div`
  flex: 1; height: 1px;
  background: ${T.glassBorder};
`;

export const DividerText = styled.span`
  font-size: 9px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255,255,255,.15);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  opacity: 0;
  animation: ${fieldIn} .5s ease forwards;

  &:nth-child(1) { animation-delay: .3s; }
  &:nth-child(2) { animation-delay: .38s; }
  &:nth-child(3) { animation-delay: .46s; }
  &:nth-child(4) { animation-delay: .54s; }

  label {
    font-size: 9px;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    font-weight: 600;
    color: ${T.creamFaint};
  }

  input {
    width: 100%;
    background: rgba(255,255,255,.05);
    border: 1px solid rgba(255,248,240,.08);
    border-radius: 10px;
    padding: 14px 16px;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 15px;
    font-weight: 300;
    color: ${T.cream};
    outline: none;
    transition: all .28s ease;
    caret-color: ${T.redBright};

    &::placeholder { color: rgba(255,248,240,.2); }

    &:focus {
      background: rgba(255,255,255,.08);
      border-color: rgba(200,0,10,.5);
      box-shadow: 0 0 0 3px rgba(200,0,10,.1);
    }

    ${bp.sm} { font-size: 16px; padding: 13px 14px; }
  }

  p {
    font-size: 11px;
    color: #FF6B6B;
    font-weight: 600;
    letter-spacing: .3px;
    min-height: 14px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, #C8000A 0%, #A0000A 100%);
  border: none;
  border-radius: 10px;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 18px;
  letter-spacing: 6px;
  color: #fff;
  cursor: pointer;
  margin-top: 8px;
  position: relative;
  overflow: hidden;
  transition: all .22s ease;
  box-shadow: 0 4px 0 #5A0005, 0 8px 30px rgba(200,0,10,.45);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 0 #5A0005, 0 14px 40px rgba(200,0,10,.6);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 0 #5A0005;
  }
`;

export const LoginText = styled.p`
  text-align: center;
  margin-top: 16px;
  font-size: 12px;
  color: rgba(255,255,255,.2);
  font-weight: 300;
  opacity: 0;
  animation: ${fieldIn} .5s ease .7s forwards;
`;

export const Link = styled(ReactLink)`
  color: rgba(255,248,240,.45);
  border-bottom: 1px solid rgba(255,248,240,.12);
  text-decoration: none;
  padding-bottom: 1px;
  transition: all .2s ease;

  &:hover {
    color: ${T.redBright};
    border-color: rgba(255,32,32,.3);
  }
`;

export const Ticker = styled.div`
  position: fixed;
  bottom: 0; left: 0; right: 0;
  height: 36px;
  z-index: 40;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: rgba(6,4,2,.88);
  backdrop-filter: blur(16px);
  border-top: 1px solid ${T.glassBorder};
`;

export const TickerLabel = styled.div`
  flex-shrink: 0;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-right: 1px solid ${T.glassBorder};
  font-family: 'Bebas Neue', sans-serif;
  font-size: 10px;
  letter-spacing: 4px;
  color: ${T.redBright};
  white-space: nowrap;
`;

export const TickerTrack = styled.div`
  display: flex;
  animation: ${tickScroll} 32s linear infinite;
  white-space: nowrap;
`;

export const TickerItem = styled.span`
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255,255,255,.18);
  padding: 0 22px;
`;