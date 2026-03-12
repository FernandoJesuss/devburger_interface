// import styled from "styled-components";
// import BannerHamburger from "../../assets/BannerHamburger.svg";
// import Background from "../../assets/background.svg";
// import { Link } from "react-router-dom";


// export const Container = styled.div `
// width: 100%;
// min-height: 100vh;
// background-color: #f0f0f0;

// background: linear-gradient(
//     rgba(255, 255, 255, 0.6),
//     rgba(255, 255, 255, 0.6)
// ),
// url("${Background}");

// `;

// export const Banner = styled.div `
// display: flex;
// justify-content: center;
// align-items: center;
// height: 480px;
// width: 100%;
// position: relative;

// background: url("${BannerHamburger}") no-repeat;
// background-color: ${(props) => props.theme.mainBlack};
// background-position: center;
// background-size: cover;

// h1 {
//     font-family: 'Road Rage', sans-serif;
//     font-size: 80px;
//     line-height: 65px;
//     color: ${(props) => props.theme.white};
//     position: absolute;

//     right: 20%;
//     top: 30%;

//     span {
//         display: block;
//         color: ${(props) => props.theme.white};
//         font-size: 20px;
//     }



// }


// `;


// export const CategoryMenu = styled.div `
// display: flex;
// justify-content: center;
// gap: 50px;
// margin-top: 30px;

// `;

// export const CategoryButton = styled(Link) `
// text-decoration: none;
// cursor: pointer;
// background: none;
// color: ${(props) =>
//   props.$isActiveCategory
//    ? props => props.theme.purple 
//    : props => props.theme.dimgray};
// font-size: 24px;
// font-weight: 500;
// padding-bottom: 5px;
// line-height: 20px;
// border: none;
// border-bottom: ${(props) => 
//   props.$isActiveCategory && `3px solid ${(props) => props.theme.purple}`};

// `;

// export const ProductsContainer = styled.div `
// display: grid;
// grid-template-columns: repeat(3, 1fr);
// padding: 40px;
// gap: 60px;
// justify-content: center;
// max-width: 1280px;
// margin: 50px auto;

// `;

// export const BackButton = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 8px; 
//   position: relative;
//   top: 12px;
//   left: 20px;
//   padding: 10px 20px;
//   background-color: ${(props) => props.theme.purple}; 
//   color: ${(props) => props.theme.white}; 
//   font-size: 16px;
//   font-weight: bold;
//   border: none;
//   border-radius: 5px; 
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #7c4691; 
//   }

//   &:active {
//     background-color: #5e2f6e; 
//   }
// `;


/*depois*/
import styled, { keyframes } from "styled-components";
import BannerHamburger from "../../assets/BannerHamburger.svg";
import Background from "../../assets/background.svg";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: .4; }
`;

const bp = {
  lg:  '@media (max-width: 1024px)',
  md:  '@media (max-width: 768px)',
  sm:  '@media (max-width: 480px)',
};

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background:
    linear-gradient(rgba(255,255,255,.95), rgba(255,255,255,.92)),
    url("${Background}");
`;

/* ─── BANNER ─── */
export const Banner = styled.div`
  position: relative;
  height: 480px;
  background: url("${BannerHamburger}") center/cover no-repeat;
  overflow: hidden;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(105deg, rgba(6,4,2,.85) 0%, rgba(6,4,2,.5) 45%, rgba(6,4,2,.1) 100%),
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
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    line-height: 1;
    color: #FFF8F0;
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translateY(-50%);
    text-align: right;
    text-shadow: 0 4px 30px rgba(0,0,0,.5);
    opacity: 0;
    animation: ${fadeUp} .8s cubic-bezier(.34,1.1,.64,1) .3s forwards;

    span {
      display: block;
      font-family: 'Poppins', sans-serif;
      font-size: 14px;
      font-weight: 300;
      letter-spacing: 2px;
      color: rgba(255,248,240,.5);
      margin-top: 12px;
      text-transform: uppercase;
    }
  }

  ${bp.md} {
    height: 360px;
    h1 {
      font-size: 56px;
      right: auto;
      left: 24px;
      top: auto;
      bottom: 60px;
      transform: none;
      text-align: left;
    }
  }

  ${bp.sm} {
    height: 280px;
    h1 {
      font-size: 40px;
      left: 16px;
      bottom: 48px;
      span { font-size: 11px; }
    }
  }
`;

/* ─── BACK BUTTON ─── */
export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 20px 40px 0;
  padding: 9px 18px;
  background: rgba(200,0,10,.08);
  border: 1px solid rgba(200,0,10,.2);
  border-radius: 8px;
  color: #C8000A;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all .2s ease;

  &:hover {
    background: rgba(200,0,10,.15);
    border-color: rgba(200,0,10,.4);
    transform: translateX(-2px);
  }

  ${bp.md} { margin: 16px 20px 0; }
  ${bp.sm} { margin: 12px 16px 0; font-size: 12px; padding: 8px 14px; }
`;

/* ─── CATEGORY MENU ─── */
export const CategoryMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 24px 40px;
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }

  ${bp.md} { padding: 20px 20px; gap: 8px; }
  ${bp.sm} { padding: 16px 16px; }
`;

export const CategoryButton = styled.button`
  flex-shrink: 0;
  padding: 8px 20px;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all .22s ease;
  border: 1px solid ${({ $isActiveCategory }) =>
    $isActiveCategory ? '#C8000A' : 'rgba(31,31,31,.12)'};
  background: ${({ $isActiveCategory }) =>
    $isActiveCategory ? '#C8000A' : 'transparent'};
  color: ${({ $isActiveCategory }) =>
    $isActiveCategory ? '#fff' : 'rgba(31,31,31,.5)'};
  box-shadow: ${({ $isActiveCategory }) =>
    $isActiveCategory ? '0 4px 16px rgba(200,0,10,.3)' : 'none'};

  &:hover {
    border-color: #C8000A;
    color: ${({ $isActiveCategory }) => $isActiveCategory ? '#fff' : '#C8000A'};
  }

  ${bp.sm} { font-size: 11px; padding: 7px 14px; }
`;

/* ─── PRODUCTS GRID ─── */
export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 20px 40px 80px;
  gap: 60px 24px;
  max-width: 1440px;
  margin: 0 auto;

  ${bp.lg} {
    grid-template-columns: repeat(3, 1fr);
    padding: 20px 24px 60px;
    gap: 56px 20px;
  }

  ${bp.md} {
    grid-template-columns: repeat(2, 1fr);
    padding: 16px 16px 48px;
    gap: 52px 16px;
  }

  ${bp.sm} {
    grid-template-columns: repeat(2, 1fr);
    padding: 12px 12px 40px;
    gap: 16px 12px;
  }
`;