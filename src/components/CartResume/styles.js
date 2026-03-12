// import styled from "styled-components"; 

// export const Container = styled.div`
// background-color: ${(props) => props.theme.white}fff;
// border-radius: 20px;
// display: flex;
// flex-direction: column;
// justify-content: space-between;
// margin-bottom:20px ;

// * {
//     color: ${(props) => props.theme.secondBlack};
//     font-weight: 500;
// }

// .container-top {
//     display: grid;
//     grid-gap: 10px 30%;
//     grid-template-areas: "title title"
//     "items items-price"
//     "delivery-tax delivery-tax-price";

//     .title {
//         grid-area: title;
//         font-size: 20px;
//         font-weight: 700;
//         margin-bottom: 20px;
//         background-color: ${(props) => props.theme.secondBlack};
//         color: ${(props) => props.theme.white};
//         width: 100%;
//         padding:15px ;
//         text-align: center;
//         border-top-left-radius: 20px;
//         border-top-right-radius: 20px;
//     }

//     .items {
//         grid-area: items;
//         padding-left: 20px;
//     }

//     .items-price {
//         grid-area: items-price;
//         padding-right: 20px;
//     }

//     .delivery-tax {
// grid-area: delivery-tax;
// padding-left: 20px;
//     }
//     .delivery-tax-price {
//         grid-area: delivery-tax-price;
//         padding-right: 20px;
//     }
// }

// .container-bottom {
//     display: flex;
//     justify-content: space-between;
//     font-size: 20px;
//     font-weight: 700;
//     /* margin-top: 24px; */
//     margin: 24px 20px 22px;

//     * {
        
//         font-weight:700;
        
//     }
// }


// `;



// /*depois*/
// import styled, { keyframes } from "styled-components";

// const fadeUp = keyframes`
//   from { opacity: 0; transform: translateY(12px); }
//   to   { opacity: 1; transform: translateY(0); }
// `;

// export const Container = styled.div`
//   background: linear-gradient(160deg, #1a1a1a 0%, #111 100%);
//   border-radius: 20px;
//   border: 1px solid rgba(255,255,255,.07);
//   box-shadow: 0 8px 32px rgba(0,0,0,.4);
//   overflow: hidden;
//   margin-bottom: 16px;
//   animation: ${fadeUp} .5s ease forwards;

//   * { color: rgba(255,248,240,.7); }

//   .container-top {
//     display: grid;
//     grid-gap: 10px 0;
//     grid-template-areas:
//       "title title"
//       "items items-price"
//       "delivery-tax delivery-tax-price";
//     padding-bottom: 16px;

//     .title {
//       grid-area: title;
//       font-family: 'Bebas Neue', sans-serif !important;
//       font-size: 16px;
//       letter-spacing: 4px;
//       font-weight: 400;
//       color: rgba(255,248,240,.5) !important;
//       background: rgba(255,255,255,.04);
//       border-bottom: 1px solid rgba(255,255,255,.06);
//       padding: 16px 20px;
//       text-transform: uppercase;
//     }

//     .items, .delivery-tax {
//       padding-left: 20px;
//       font-size: 13px;
//       color: rgba(255,248,240,.4) !important;
//       letter-spacing: .3px;
//     }
//     .items { grid-area: items; }
//     .delivery-tax { grid-area: delivery-tax; }

//     .items-price, .delivery-tax-price {
//       text-align: right;
//       padding-right: 20px;
//       font-size: 13px;
//       font-weight: 700;
//       color: rgba(255,248,240,.8) !important;
//     }
//     .items-price { grid-area: items-price; }
//     .delivery-tax-price { grid-area: delivery-tax-price; }
//   }

//   .container-bottom {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 16px 20px;
//     background: rgba(200,0,10,.08);
//     border-top: 1px solid rgba(200,0,10,.2);

//     p {
//       font-family: 'Bebas Neue', sans-serif !important;
//       font-size: 20px;
//       letter-spacing: 2px;
//       font-weight: 400;

//       &:last-child {
//         color: #FF2020 !important;
//         font-size: 22px;
//       }
//     }
//   }
// `;`

// `


import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const bp = {
  md: '@media (max-width: 768px)',
  sm: '@media (max-width: 480px)',
};

export const Container = styled.div`
  background: linear-gradient(160deg, #1a1a1a 0%, #111 100%);
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,.07);
  box-shadow: 0 8px 32px rgba(0,0,0,.4);
  overflow: hidden;
  margin-bottom: 16px;
  animation: ${fadeUp} .5s ease forwards;
  position: sticky;
  top: 84px;

  * { color: rgba(255,248,240,.7); }

  .container-top {
    display: grid;
    grid-gap: 10px 0;
    grid-template-areas:
      "title title"
      "items items-price"
      "delivery-tax delivery-tax-price";
    padding-bottom: 16px;

    .title {
      grid-area: title;
      font-family: 'Bebas Neue', sans-serif !important;
      font-size: 13px;
      letter-spacing: 5px;
      font-weight: 400;
      color: rgba(255,248,240,.35) !important;
      background: rgba(255,255,255,.04);
      border-bottom: 1px solid rgba(255,255,255,.06);
      padding: 16px 20px;
      text-transform: uppercase;
    }

    .items, .delivery-tax {
      padding-left: 20px;
      font-size: 13px;
      color: rgba(255,248,240,.4) !important;
    }
    .items { grid-area: items; }
    .delivery-tax { grid-area: delivery-tax; }

    .items-price, .delivery-tax-price {
      text-align: right;
      padding-right: 20px;
      font-size: 13px;
      font-weight: 700;
      color: rgba(255,248,240,.8) !important;
    }
    .items-price { grid-area: items-price; }
    .delivery-tax-price { grid-area: delivery-tax-price; }
  }

  .container-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    background: rgba(200,0,10,.08);
    border-top: 1px solid rgba(200,0,10,.2);

    p {
      font-family: 'Bebas Neue', sans-serif !important;
      font-size: 18px;
      letter-spacing: 2px;

      &:last-child {
        color: #FF2020 !important;
        font-size: 20px;
      }
    }
  }

  /* No mobile fica embaixo da tabela — remove sticky */
  ${bp.md} {
    position: static;
    border-radius: 16px;
  }
`;