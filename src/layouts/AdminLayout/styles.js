// import styled from "styled-components";

// export const Container = styled.div`
// display: grid;
// grid-template-columns: minmax(220px, 280px) 1fr;

// main {
//     display: flex;
//     flex-direction: column;
//     flex: 1;
//     width: 100%;
//     height: 100vh;
//     background-color: ${(props) => props.theme.secondWhite};
//     overflow-y: auto;
// }

// section {
//     margin: 0 auto;
//     padding: 40px 20px;
//     max-width: 1200px;
//     width: 100%;
// }


// `;


/*depois*/

import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from { transform: translateX(-100%); }
  to   { transform: translateX(0); }
`;

const bp = {
  lg: '@media (max-width: 1024px)',
  md: '@media (max-width: 768px)',
};

export const Container = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  min-height: 100vh;

  main {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background: #0f0f0f;
    overflow-y: auto;
  }

  section {
    margin: 0 auto;
    padding: 32px 24px 60px;
    max-width: 1200px;
    width: 100%;
  }

  ${bp.lg} {
    grid-template-columns: 200px 1fr;
  }

  ${bp.md} {
    grid-template-columns: 1fr;

    main {
      padding-top: 56px; /* espaço para o topbar mobile */
    }
  }
`;

export const MobileTopbar = styled.header`
  display: none;

  ${bp.md} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0; left: 0; right: 0;
    height: 56px;
    z-index: 100;
    background: #0a0a0a;
    border-bottom: 1px solid rgba(255,255,255,.07);
    padding: 0 16px;

    img { height: 36px; }
  }
`;

export const HamburgerButton = styled.button`
  display: none;

  ${bp.md} {
    display: flex;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;

    span {
      display: block;
      width: 22px;
      height: 2px;
      background: rgba(255,248,240,.7);
      border-radius: 2px;
      transition: all .25s ease;
    }
  }
`;

export const Overlay = styled.div`
  display: none;

  ${bp.md} {
    display: ${({ $open }) => $open ? 'block' : 'none'};
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,.6);
    z-index: 110;
    backdrop-filter: blur(4px);
  }
`;