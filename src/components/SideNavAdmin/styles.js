// import styled from "styled-components";
// import { Link } from "react-router-dom";


// export const Container = styled.nav`
// display: flex;
// flex-direction: column;
// align-items: center;
// width: 100%;
// height:100vh;
// background-color: ${(props) => props.theme.mainBlack};

// img {
// width: 60%;
// margin: 40px 0;
// }
// `;

// export const NavLinkContainer = styled.div`
// display: flex;
// flex-direction: column;
// width: 100%;

// `;

// export const NavLink = styled(Link)`
// display: flex;
// align-items: center;
// gap: 12px;
// padding: 12px 20px;
// text-decoration: none;
// color: ${(props) => props.theme.white};
//     background-color: ${(props) => props.$isActive ? props.theme.purple : "transparent"};

// &:hover {
//     background-color: ${props => props.theme.purple};
// }

// `;

// export const Footer = styled.footer`
// width: 100%;
// margin-top: auto;
// `;


/*depois*/

import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const slideIn = keyframes`
  from { transform: translateX(-100%); }
  to   { transform: translateX(0); }
`;

const bp = {
  lg: '@media (max-width: 1024px)',
  md: '@media (max-width: 768px)',
};

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #0a0a0a 0%, #111 100%);
  border-right: 1px solid rgba(255,255,255,.06);
  position: sticky;
  top: 0;

  img {
    width: 65%;
    margin: 32px 0 24px;
  }

  /* Linha vermelha topo */
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #C8000A, transparent);
  }

  ${bp.md} {
    position: fixed;
    top: 0; left: 0;
    width: 260px;
    height: 100vh;
    z-index: 120;
    transform: ${({ $open }) => $open ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform .3s cubic-bezier(.4,0,.2,1);
    box-shadow: ${({ $open }) => $open ? '4px 0 32px rgba(0,0,0,.5)' : 'none'};
  }
`;

export const CloseButton = styled.button`
  display: none;

  ${bp.md} {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 12px; right: 12px;
    width: 32px; height: 32px;
    background: rgba(255,255,255,.06);
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 8px;
    color: rgba(255,248,240,.5);
    cursor: pointer;
    font-size: 18px;
    transition: all .2s ease;

    &:hover { background: rgba(200,0,10,.2); color: #FF2020; }
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 8px;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 13px 20px;
  text-decoration: none;
  color: ${({ $isActive }) => $isActive ? '#FFF8F0' : 'rgba(255,248,240,.35)'};
  background: ${({ $isActive }) => $isActive ? 'rgba(200,0,10,.2)' : 'transparent'};
  border-left: 3px solid ${({ $isActive }) => $isActive ? '#C8000A' : 'transparent'};
  font-size: 13px;
  font-weight: ${({ $isActive }) => $isActive ? '600' : '400'};
  letter-spacing: .5px;
  transition: all .2s ease;

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    color: ${({ $isActive }) => $isActive ? '#FF2020' : 'rgba(255,248,240,.3)'};
    transition: color .2s ease;
  }

  &:hover {
    background: rgba(200,0,10,.1);
    color: rgba(255,248,240,.8);
    border-left-color: rgba(200,0,10,.4);
    svg { color: #C8000A; }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  margin-top: auto;
  border-top: 1px solid rgba(255,255,255,.06);
  padding: 8px 0;
`;

export const AdminBadge = styled.div`
  width: calc(100% - 32px);
  margin: 0 16px 16px;
  padding: 10px 14px;
  background: rgba(200,0,10,.08);
  border: 1px solid rgba(200,0,10,.15);
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgba(200,0,10,.7);
    font-weight: 600;
  }

  &::before {
    content: '';
    width: 6px; height: 6px;
    border-radius: 50%;
    background: #C8000A;
    box-shadow: 0 0 6px #C8000A;
    flex-shrink: 0;
  }
`;