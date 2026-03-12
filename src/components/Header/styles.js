// import styled from "styled-components";
// import { Link } from "react-router-dom";


// export const Container = styled.div`
// background-color: ${(props) => props.theme.mainBlack};
// width: 100%;
// height: 72px;
// padding: 0 56px ;

// `;

// export const Content = styled.nav`
// display: flex;
// align-items: center;
// justify-content: space-between;

// width: 100%;
// max-width: 1280px;
// margin: 0 auto;

// `;

// export const Navigation = styled.nav`
// display: flex;
// align-items: center;
// justify-content: center;
// height: 72px;

// div {

// display: flex;
// justify-content: center;
// align-items: center;
// gap: 20px;

// hr {
//     height: 24px;
//     border: 1px solid ${(props) => props.theme.darkGray};
// }

// }
// `;

// export const HeaderLink = styled(Link)`
// color: ${( props ) => (props.$isActive
//      ? (props) => props.theme.purple 
//      : (props) => props.theme.white)};
// border-bottom: ${(props) => (props.$isActive ? `1px solid ${(props) => props.theme.purple }` : "none")};
// padding-bottom: 5px;
// text-decoration: none;
// font-size: 14px;
// transition: color 200ms;


// &:hover {
//     color: ${(props) => props.theme.purple};
// }
// `;

// export const Options = styled.div`
// display: flex;
// align-items: center;
// justify-content: center;
// gap: 48px;

// `;

// export const Profile = styled.div`
// display: flex;
// align-items: center;
// gap: 12px;
// font-size: 14px;


// p {
//     color: ${(props) => props.theme.white};
//     line-height: 90%;
//     font-weight: 300;

//     span {
//         font-weight: 700;
//         color: ${(props) => props.theme.purple};
//     }
// }
// `;

// export const LinkContainer = styled.div`
// display: flex;
// align-items: center;
// gap: 10px;

// `;

// export const Logout = styled.button`
// color: #ff3205;
// text-decoration: none;
// font-weight: 700;
// background-color: transparent;
// border: none;

// `;



// /*depois*/
// import styled, { keyframes } from "styled-components";
// import { Link } from "react-router-dom";

// const popIn = keyframes`
//   0%   { transform: scale(0); }
//   70%  { transform: scale(1.2); }
//   100% { transform: scale(1); }
// `;

// export const Container = styled.div`
//   background: rgba(6, 4, 2, 0.92);
//   backdrop-filter: blur(24px);
//   -webkit-backdrop-filter: blur(24px);
//   width: 100%;
//   height: 64px;
//   padding: 0 56px;
//   border-bottom: 1px solid rgba(255, 248, 240, 0.08);
//   position: sticky;
//   top: 0;
//   z-index: 100;
// `;

// export const Content = styled.nav`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 100%;
//   max-width: 1280px;
//   margin: 0 auto;
//   height: 64px;
// `;

// export const Navigation = styled.nav`
//   display: flex;
//   align-items: center;
//   height: 64px;

//   div {
//     display: flex;
//     align-items: center;
//     gap: 24px;

//     hr {
//       height: 18px;
//       border: none;
//       border-left: 1px solid rgba(255, 248, 240, 0.12);
//     }
//   }
// `;

// export const HeaderLink = styled(Link)`
//   color: ${({ $isActive }) => ($isActive ? '#FF2020' : 'rgba(255,248,240,.55)')};
//   border-bottom: ${({ $isActive }) => ($isActive ? '1px solid #FF2020' : '1px solid transparent')};
//   padding-bottom: 3px;
//   text-decoration: none;
//   font-size: 13px;
//   font-weight: 600;
//   letter-spacing: 1.5px;
//   text-transform: uppercase;
//   transition: all 0.2s ease;

//   &:hover {
//     color: #fff;
//     border-bottom-color: rgba(255, 255, 255, 0.3);
//   }
// `;

// export const Options = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 32px;
// `;

// export const Profile = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;

//   p {
//     color: rgba(255, 248, 240, 0.5);
//     font-size: 12px;
//     line-height: 1.4;
//     font-weight: 300;
//     letter-spacing: 0.3px;

//     span {
//       display: block;
//       font-weight: 700;
//       font-size: 13px;
//       color: #fff;
//       letter-spacing: 0.3px;
//     }
//   }
// `;

// export const LinkContainer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   padding: 8px 16px;
//   border-radius: 8px;
//   border: 1px solid rgba(255, 248, 240, 0.08);
//   background: rgba(255, 255, 255, 0.04);
//   transition: all 0.2s ease;
//   cursor: pointer;
//   position: relative;

//   &:hover {
//     background: rgba(255, 255, 255, 0.08);
//     border-color: rgba(255, 248, 240, 0.15);
//   }
// `;

// export const CartBadge = styled.span`
//   position: absolute;
//   top: -8px;
//   right: -8px;
//   background: #C8000A;
//   color: #fff;
//   font-size: 10px;
//   font-weight: 800;
//   min-width: 18px;
//   height: 18px;
//   border-radius: 100px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 0 4px;
//   animation: ${popIn} .3s ease forwards;
//   border: 2px solid rgba(6,4,2,.92);
// `;

// export const Logout = styled.button`
//   color: #C8000A;
//   font-weight: 700;
//   font-size: 11px;
//   letter-spacing: 1px;
//   text-transform: uppercase;
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   padding: 0;
//   transition: color 0.2s ease;

//   &:hover {
//     color: #FF2020;
//   }
// `;


import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const popIn = keyframes`
  0%   { transform: scale(0); }
  70%  { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to   { transform: translateX(0); }
`;

const slideOut = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(100%); }
`;

const bp = {
  md: '@media (max-width: 768px)',
  sm: '@media (max-width: 480px)',
};

/* ─── CONTAINER ─── */
export const Container = styled.div`
  background: rgba(6, 4, 2, 0.92);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  width: 100%;
  height: 64px;
  padding: 0 56px;
  border-bottom: 1px solid rgba(255, 248, 240, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;

  ${bp.md} { padding: 0 20px; }
  ${bp.sm} { padding: 0 16px; }
`;

export const Content = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  height: 64px;
`;

/* ─── DESKTOP NAV ─── */
export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  height: 64px;

  div {
    display: flex;
    align-items: center;
    gap: 24px;

    hr {
      height: 18px;
      border: none;
      border-left: 1px solid rgba(255, 248, 240, 0.12);
    }
  }

  ${bp.md} { display: none; }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  ${bp.md} { display: none; }
`;

/* ─── LINKS ─── */
export const HeaderLink = styled(Link)`
  color: ${({ $isActive }) => ($isActive ? '#FF2020' : 'rgba(255,248,240,.55)')};
  border-bottom: ${({ $isActive }) => ($isActive ? '1px solid #FF2020' : '1px solid transparent')};
  padding-bottom: 3px;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  transition: all 0.2s ease;

  &:hover {
    color: #fff;
    border-bottom-color: rgba(255, 255, 255, 0.3);
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    color: rgba(255, 248, 240, 0.5);
    font-size: 12px;
    line-height: 1.4;
    font-weight: 300;

    span {
      display: block;
      font-weight: 700;
      font-size: 13px;
      color: #fff;
    }
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid rgba(255, 248, 240, 0.08);
  background: rgba(255, 255, 255, 0.04);
  transition: all 0.2s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 248, 240, 0.15);
  }
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #C8000A;
  color: #fff;
  font-size: 10px;
  font-weight: 800;
  min-width: 18px;
  height: 18px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  animation: ${popIn} .3s ease forwards;
  border: 2px solid rgba(6,4,2,.92);
`;

export const Logout = styled.button`
  color: #C8000A;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s ease;

  &:hover { color: #FF2020; }
`;

/* ─── HAMBURGER BUTTON ─── */
export const HamburgerButton = styled.button`
  display: none;
  position: relative;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,248,240,.08);
  border-radius: 8px;
  padding: 8px 10px;
  cursor: pointer;
  transition: all .2s ease;

  &:hover {
    background: rgba(255,255,255,.1);
  }

  ${bp.md} { display: flex; align-items: center; justify-content: center; }
`;

/* ─── MOBILE OVERLAY ─── */
export const MobileOverlay = styled.div`
  display: none;
  position: fixed;
  inset: 0;
  z-index: 199;
  background: rgba(0,0,0,.6);
  backdrop-filter: blur(4px);
  opacity: ${({ open }) => open ? 1 : 0};
  pointer-events: ${({ open }) => open ? 'all' : 'none'};
  transition: opacity .3s ease;

  ${bp.md} { display: block; }
`;

/* ─── MOBILE DRAWER ─── */
export const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  z-index: 200;
  background: linear-gradient(160deg, #1a1a1a 0%, #0e0e0e 100%);
  border-left: 1px solid rgba(255,248,240,.07);
  box-shadow: -20px 0 60px rgba(0,0,0,.5);
  overflow-y: auto;
  animation: ${({ open }) => open ? slideIn : slideOut} .3s ease forwards;

  ${bp.md} { display: flex; flex-direction: column; }
  ${bp.sm} { width: 280px; }
`;

export const MobileMenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid rgba(255,248,240,.06);
`;

export const MobileProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 20px 24px;
`;

export const MobileDivider = styled.div`
  height: 1px;
  background: rgba(255,248,240,.05);
  margin: 0 24px;
`;

export const MobileMenuSection = styled.div`
  padding: 16px 24px;
`;

export const MobileMenuTitle = styled.p`
  font-size: 9px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255,248,240,.2);
  font-weight: 600;
  margin-bottom: 12px;
`;

export const MobileNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MobileCartLink = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 10px;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,248,240,.07);
  cursor: pointer;
  transition: all .2s ease;
  color: rgba(255,248,240,.7);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: .5px;

  &:hover {
    background: rgba(200,0,10,.08);
    border-color: rgba(200,0,10,.2);
  }
`;