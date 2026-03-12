// import styled from "styled-components"; 
// import Texture from "../../assets/texture.svg";
// import Background from "../../assets/background.svg";

// export const Container = styled.div`
// width: 100%;
// background: linear-gradient(rgba(255, 255, 255, 0.5),
// rgba(255, 255, 255, 0.4)
// ),
// url("${Background}");
// min-height: 100vh;

// `;

// export const Banner = styled.div`
// background: url("${Texture}");
// background-color: ${(props) => props.theme.secondWhite};
// background-color: ${(props) => props.theme.mainBlack};
// background-size: cover;
// background-position: center;
// display: flex;
// align-items: center;
// justify-content: center;
// position: relative;

// height: 180px;

// img {
//     height: 130px;
// }

// `;

// export const Title = styled.div`
// font-size: 32px;
// font-weight: 800;
// padding-bottom: 12px;
// color: #61a120;
// text-align: center;
// position: relative;

// &::after {
//     position: absolute;
//     left: 50%;
// transform: translateX(-50%);
//     bottom: 0;
//     content: '';
//     width: 56px;
//     height: 4px;
//     /* background-color: #61a120; */
//     background-color: #7952a5;
// }


// `;

// export const Content = styled.div`
// display: grid;
// grid-template-columns: 1fr 30%;
// gap: 20px;
// width: 100%;
// max-width: 1280px;
// padding: 40px;
// margin: 0 auto;




// `;



/*depois*/

import styled, { keyframes } from "styled-components";
import Texture from "../../assets/texture.svg";
import Background from "../../assets/background.svg";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const bp = {
  lg: '@media (max-width: 1024px)',
  md: '@media (max-width: 768px)',
  sm: '@media (max-width: 480px)',
};

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background:
    linear-gradient(rgba(255,255,255,.95), rgba(255,255,255,.92)),
    url("${Background}");
`;

export const Banner = styled.div`
  background: url("${Texture}") center/cover no-repeat;
  background-color: #080604;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 160px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(6,4,2,.75);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, #C8000A, #FF2020, #C8000A, transparent);
  }

  img {
    height: 100px;
    position: relative;
    z-index: 1;
    filter: drop-shadow(0 4px 20px rgba(0,0,0,.4));
  }

  ${bp.sm} {
    height: 120px;
    img { height: 70px; }
  }
`;

export const Title = styled.div`
  font-family: 'Bebas Neue', sans-serif !important;
  font-size: 13px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: rgba(31,31,31,.3);
  text-align: center;
  padding: 24px 0 0;
  opacity: 0;
  animation: ${fadeUp} .5s ease .2s forwards;

  ${bp.sm} { font-size: 11px; letter-spacing: 3px; padding: 16px 0 0; }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 24px;
  width: 100%;
  max-width: 1280px;
  padding: 32px 40px 80px;
  margin: 0 auto;
  opacity: 0;
  animation: ${fadeUp} .5s ease .3s forwards;

  ${bp.lg} {
    grid-template-columns: 1fr 280px;
    padding: 24px 24px 60px;
  }

  ${bp.md} {
    grid-template-columns: 1fr;
    padding: 20px 16px 48px;
    gap: 20px;
  }

  ${bp.sm} {
    padding: 16px 12px 40px;
    gap: 16px;
  }
`;