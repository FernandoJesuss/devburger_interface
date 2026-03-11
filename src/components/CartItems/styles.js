// import styled from "styled-components";

// export const ProductImage = styled.img`
// height: 80px;
// width: 80px;
// border-radius: 16px;

// `;

// export const ButtonGroup = styled.div`
// display: flex;
// align-items: center;
// gap: 12px;

// button {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: 30px;
//     width: 30px;
//     color: ${(props) => props.theme.white};
//     border-radius: 4px;
//     background-color: ${(props) => props.theme.purple};
//     transition: all 0.4s;
//     border: none;

//     &:hover {
//         background-color: ${(props) => props.theme.secondDarkPurple};
//     }
// }

// `;

// export const EmptyCart = styled.p`
// font-size: 20px;
// text-align: center;
// font-weight: bold;

// `;

// export const ProductTotalPrice = styled.p`
// font-weight: bold;

// `;

// export const TrashImage = styled.img`
// height: 20px;
// width: 20px;
// cursor: pointer;

// `;

/*depois*/

import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(-10px); }
  to   { opacity: 1; transform: translateX(0); }
`;

export const ProductImage = styled.img`
  height: 64px;
  width: 64px;
  object-fit: contain;
  border-radius: 12px;
  background: rgba(255,255,255,.05);
  padding: 4px;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,.3));
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    width: 28px;
    color: #fff;
    border-radius: 8px;
    background: rgba(255,255,255,.08);
    border: 1px solid rgba(255,255,255,.1);
    font-size: 16px;
    transition: all .2s ease;
    cursor: pointer;
    line-height: 1;

    &:hover {
      background: rgba(200,0,10,.4);
      border-color: rgba(200,0,10,.5);
    }
  }

  span {
    font-family: 'Bebas Neue', sans-serif !important;
    font-size: 18px;
    color: #fff;
    min-width: 20px;
    text-align: center;
  }
`;

export const EmptyCart = styled.div`
  text-align: center;
  padding: 48px 20px;
  color: rgba(255,248,240,.2);
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 600;

  &::before {
    content: '🛒';
    display: block;
    font-size: 40px;
    margin-bottom: 12px;
    opacity: .4;
  }
`;

export const ProductTotalPrice = styled.p`
  font-weight: 800;
  color: #FF2020 !important;
  font-size: 14px;
`;

export const TrashImage = styled.img`
  height: 18px;
  width: 18px;
  cursor: pointer;
  opacity: .4;
  transition: all .2s ease;
  filter: invert(1);

  &:hover {
    opacity: 1;
    filter: invert(20%) sepia(100%) saturate(5000%) hue-rotate(0deg);
    transform: scale(1.1);
  }
`;

export const ProductName = styled.td`
  color: rgba(255,248,240,.85) !important;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: .3px;
`;

export const ProductPrice = styled.td`
  color: rgba(255,248,240,.4) !important;
  font-size: 13px;
`;