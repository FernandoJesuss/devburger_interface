// import styled from "styled-components";
// import BannerHome from "../../assets/BannerHome.svg";
// import Background from "../../assets/background.svg";


// export const Banner = styled.div `
// background: url("${BannerHome}");
// background-size: cover;
// background-position: center;
// height: 480px;

// h1 {
//     font-family: "Road Rage", sans-serif;
//     font-size: 80px;
//     color: ${(props) => props.theme.darkWhite};
//     position: absolute;
//     right: 20%;
//     top: 10%;
// }
// `;

// export const Container = styled.section `
// background: linear-gradient(rgba(255, 255, 255, 0.5),
// rgba(255, 255, 255, 0.4)
// ),
// url("${Background}");
// /* height: 500px; */
// /* height: 100%; */


// `;







/*depois*/

// import styled, { keyframes } from 'styled-components';
// import BannerHome from '../../assets/BannerHome.svg';
// import Background from '../../assets/background.svg';

// const fadeUp = keyframes`
//   from { opacity: 0; transform: translateY(24px); }
//   to   { opacity: 1; transform: translateY(0); }
// `;

// const shimmer = keyframes`
//   0%   { background-position: -200% center; }
//   100% { background-position: 200% center; }
// `;

// const pulse = keyframes`
//   0%, 100% { opacity: 1; }
//   50%       { opacity: .4; }
// `;

// /* ─── BANNER ─── */
// export const Banner = styled.div`
//   position: relative;
//   height: 500px;
//   background: url("${BannerHome}") center/cover no-repeat;
//   overflow: hidden;

//   /* Dark cinematic overlay — mesma linguagem do login */
//   &::before {
//     content: '';
//     position: absolute;
//     inset: 0;
//     background:
//       linear-gradient(
//         105deg,
//         rgba(6,4,2,.82) 0%,
//         rgba(6,4,2,.5)  40%,
//         rgba(6,4,2,.15) 100%
//       ),
//       linear-gradient(to top, rgba(0,0,0,.7) 0%, transparent 50%);
//   }

//   /* Red bottom accent line */
//   &::after {
//     content: '';
//     position: absolute;
//     bottom: 0; left: 0; right: 0;
//     height: 3px;
//     background: linear-gradient(90deg, transparent, #C8000A, #FF2020, #C8000A, transparent);
//   }

//   h1 {
//     font-family: 'Alfa Slab One', serif;
//     font-size: 72px;
//     line-height: 1;
//     color: #FFF8F0;
//     position: absolute;
//     right: 10%;
//     top: 50%;
//     transform: translateY(-50%);
//     text-shadow: 0 4px 30px rgba(0,0,0,.5);
//     opacity: 0;
//     animation: ${fadeUp} .8s cubic-bezier(.34,1.1,.64,1) .3s forwards;

//     span {
//       display: block;
//       font-family: 'Playfair Display', serif;
//       font-style: italic;
//       color: #FF2020;
//       text-shadow: 0 0 40px rgba(200,0,10,.4);
//     }
//   }
// `;

// /* Badge "Aberto agora" no banner */
// export const BannerBadge = styled.div`
//   position: absolute;
//   bottom: 32px;
//   left: 48px;
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   background: rgba(8,6,4,.7);
//   backdrop-filter: blur(12px);
//   border: 1px solid rgba(255,248,240,.1);
//   border-radius: 100px;
//   padding: 8px 16px;
//   opacity: 0;
//   animation: ${fadeUp} .6s ease .6s forwards;

//   span:first-child {
//     width: 7px;
//     height: 7px;
//     border-radius: 50%;
//     background: #22C55E;
//     box-shadow: 0 0 8px #22C55E;
//     display: inline-block;
//     animation: ${pulse} 2s ease-in-out infinite;
//   }

//   span:last-child {
//     font-size: 10px;
//     letter-spacing: 3px;
//     text-transform: uppercase;
//     color: rgba(255,248,240,.6);
//     font-weight: 600;
//   }
// `;

// /* ─── MAIN CONTAINER ─── */
// export const Container = styled.section`
//   background:
//     linear-gradient(rgba(255,255,255,.96), rgba(255,255,255,.92)),
//     url("${Background}");
//   min-height: 100vh;
//   padding: 56px 80px 80px;

//   @media (max-width: 768px) {
//     padding: 40px 24px 60px;
//   }
// `;

// /* ─── SECTION HEADER ─── */
// export const SectionHeader = styled.div`
//   margin-bottom: 36px;
//   opacity: 0;
//   animation: ${fadeUp} .6s ease ${({ delay }) => delay || '.1s'} forwards;
// `;

// export const SectionTitle = styled.h2`
//   font-family: 'alfa slab one', sans-serif !important;
//   font-size: 38px;
//   letter-spacing: 3px;
//   color: #1f1f1f;
//   position: relative;
//   display: inline-block;

//   &::after {
//     content: '';
//     position: absolute;
//     bottom: -8px;
//     left: 0;
//     width: 48px;
//     height: 3px;
//     background: linear-gradient(90deg, #C8000A, #FF2020);
//     border-radius: 2px;
//   }
// `;

// export const SectionSub = styled.p`
//   font-size: 13px;
//   color: rgba(31,31,31,.4);
//   letter-spacing: 1px;
//   margin-top: 16px;
//   font-weight: 400;
// `;





import styled, { keyframes } from 'styled-components';
import BannerHome from '../../assets/BannerHome.svg';
import Background from '../../assets/background.svg';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: .4; }
`;

const bp = {
  lg: '@media (max-width: 1024px)',
  md: '@media (max-width: 768px)',
  sm: '@media (max-width: 480px)',
};

export const Banner = styled.div`
  position: relative;
  height: 500px;
  background: url("${BannerHome}") center/cover no-repeat;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(105deg, rgba(6,4,2,.82) 0%, rgba(6,4,2,.5) 40%, rgba(6,4,2,.15) 100%),
      linear-gradient(to top, rgba(0,0,0,.7) 0%, transparent 50%);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, #C8000A, #FF2020, #C8000A, transparent);
  }

  h1 {
    font-family: 'Alfa Slab One', serif;
    font-size: 72px;
    line-height: 1;
    color: #FFF8F0;
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translateY(-50%);
    text-shadow: 0 4px 30px rgba(0,0,0,.5);
    opacity: 0;
    animation: ${fadeUp} .8s cubic-bezier(.34,1.1,.64,1) .3s forwards;
  }

  ${bp.md} {
    height: 360px;
    h1 { font-size: 52px; right: auto; left: 24px; top: auto; bottom: 72px; transform: none; }
  }

  ${bp.sm} {
    height: 280px;
    h1 { font-size: 38px; left: 16px; bottom: 60px; }
  }
`;

export const BannerBadge = styled.div`
  position: absolute;
  bottom: 32px;
  left: 48px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(8,6,4,.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,248,240,.1);
  border-radius: 100px;
  padding: 8px 16px;
  opacity: 0;
  animation: ${fadeUp} .6s ease .6s forwards;

  span:first-child {
    width: 7px; height: 7px; border-radius: 50%;
    background: #22C55E; box-shadow: 0 0 8px #22C55E;
    display: inline-block;
    animation: ${pulse} 2s ease-in-out infinite;
  }

  span:last-child {
    font-size: 10px; letter-spacing: 3px; text-transform: uppercase;
    color: rgba(255,248,240,.6); font-weight: 600;
  }

  ${bp.md} { left: 24px; bottom: 20px; }
  ${bp.sm} { left: 16px; bottom: 16px; padding: 6px 12px; }
`;

export const Container = styled.section`
  background:
    linear-gradient(rgba(255,255,255,.96), rgba(255,255,255,.92)),
    url("${Background}");
  min-height: 100vh;
  padding: 56px 80px 80px;

  ${bp.lg} { padding: 48px 40px 60px; }
  ${bp.md} { padding: 36px 20px 48px; }
  ${bp.sm} { padding: 24px 12px 40px; }
`;

export const SectionHeader = styled.div`
  margin-bottom: 36px;
  opacity: 0;
  animation: ${fadeUp} .6s ease ${({ delay }) => delay || '.1s'} forwards;
`;

export const SectionTitle = styled.h2`
  font-family: 'Alfa Slab One', serif !important;
  font-size: 38px;
  letter-spacing: 3px;
  color: #1f1f1f;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px; left: 0;
    width: 48px; height: 3px;
    background: linear-gradient(90deg, #C8000A, #FF2020);
    border-radius: 2px;
  }

  ${bp.md} { font-size: 30px; }
  ${bp.sm} { font-size: 24px; letter-spacing: 1px; }
`;

export const SectionSub = styled.p`
  font-size: 13px;
  color: rgba(31,31,31,.4);
  letter-spacing: 1px;
  margin-top: 16px;
  font-weight: 400;
`;