// import styled from "styled-components";


// export const Container = styled.div`
// display: flex;
// flex-direction: column;
// align-items: center;
// gap: 40px;
// padding: 20px;
// border-radius: 8px;
// background-color: ${(props) => props.theme.white}f;
// cursor: grab;
// box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
// position: relative;


// div {
//     width: 100%;
//     height: 80px;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     gap: 5px;


//     p {
//         font-size: 18px;
//         color: ${(props) => props.theme.orange};
//         line-height: 20px;
//         font-weight: 700;
//         margin-top: 50px;

//     }

//     strong {
//         font-size: 20px;
//         color: ${(props) => props.theme.dimgrayblack};
//         font-weight: 800;
//         line-height: 20px;

//     }
// }

// `;

// export const CardImage = styled.img `
// height: 60%;
// position: absolute;
// top: -60px;





// `;


/*depois*/

// import styled, { keyframes } from "styled-components";

// const fadeUp = keyframes`
//   from { opacity: 0; transform: translateY(16px); }
//   to   { opacity: 1; transform: translateY(0); }
// `;

// const pulseBadge = keyframes`
//   0%, 100% { box-shadow: 0 0 0 0 rgba(255,32,32,.5); }
//   50%       { box-shadow: 0 0 0 6px rgba(255,32,32,.0); }
// `;

// const floatImg = keyframes`
//   0%, 100% { transform: translateX(-50%) translateY(0); }
//   50%       { transform: translateX(-50%) translateY(-6px); }
// `;

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 16px 14px 14px;
//   border-radius: 20px;
//   background: linear-gradient(160deg, #1e1e1e 0%, #141414 100%);
//   cursor: grab;
//   position: relative;
//   border: 1px solid rgba(255,255,255,.07);
//   box-shadow: 0 8px 32px rgba(0,0,0,.35);
//   transition: all .28s ease;
//   animation: ${fadeUp} .5s ease forwards;
//   overflow: visible;
//   min-height: 280px;

//   &:hover {
//     transform: translateY(-6px);
//     box-shadow: 0 20px 48px rgba(0,0,0,.5), 0 0 0 1px rgba(200,0,10,.2);
//     border-color: rgba(200,0,10,.25);
//   }
// `;

// export const OfferBadge = styled.div`
//   position: absolute;
//   top: 12px;
//   left: 12px;
//   background: #C8000A;
//   color: #fff;
//   font-family: 'Bebas Neue', sans-serif !important;
//   font-size: 11px;
//   letter-spacing: 2px;
//   padding: 3px 10px;
//   border-radius: 100px;
//   animation: ${pulseBadge} 2s ease-in-out infinite;
//   z-index: 2;
// `;

// export const CategoryTag = styled.span`
//   position: absolute;
//   top: 12px;
//   right: 12px;
//   background: rgba(255,255,255,.07);
//   border: 1px solid rgba(255,255,255,.1);
//   color: rgba(255,248,240,.4);
//   font-size: 9px;
//   letter-spacing: 1.5px;
//   text-transform: uppercase;
//   font-weight: 600;
//   padding: 3px 10px;
//   border-radius: 100px;
//   z-index: 2;
// `;

// export const CardImage = styled.img`
//   height: 110px;
//   object-fit: contain;
//   position: absolute;
//   top: -48px;
//   left: 50%;
//   transform: translateX(-50%);
//   filter: drop-shadow(0 12px 20px rgba(0,0,0,.5));
//   animation: ${floatImg} 3.5s ease-in-out infinite;

//   ${Container}:hover & {
//     filter: drop-shadow(0 16px 28px rgba(200,0,10,.25));
//   }
// `;

// export const CardInfo = styled.div`
//   margin-top: 72px;
//   display: flex;
//   flex-direction: column;
//   gap: 4px;
//   flex: 1;
// `;

// export const CardName = styled.p`
//   font-family: 'Alfa Slab One', serif !important;
//   font-size: 15px;
//   color: #fff;
//   line-height: 1.3;
//   font-weight: 400;
// `;

// export const CardPrice = styled.strong`
//   font-size: 18px;
//   color: #FF2020;
//   font-weight: 800;
//   letter-spacing: .3px;
// `;

// export const CardDivider = styled.div`
//   width: 100%;
//   height: 1px;
//   background: rgba(255,255,255,.06);
//   margin: 10px 0;
// `;

// export const QuantityRow = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 10px;
// `;

// export const QuantityLabel = styled.span`
//   font-size: 10px;
//   letter-spacing: 1.5px;
//   text-transform: uppercase;
//   color: rgba(255,248,240,.25);
//   font-weight: 600;
// `;

// export const QuantityControls = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 12px;
// `;

// export const QtyBtn = styled.button`
//   width: 26px;
//   height: 26px;
//   border-radius: 8px;
//   border: 1px solid rgba(255,255,255,.1);
//   background: rgba(255,255,255,.06);
//   color: #fff;
//   font-size: 16px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   transition: all .2s ease;
//   line-height: 1;

//   &:hover {
//     background: rgba(200,0,10,.3);
//     border-color: rgba(200,0,10,.5);
//   }
// `;

// export const QtyNumber = styled.span`
//   font-family: 'Bebas Neue', sans-serif !important;
//   font-size: 18px;
//   color: #fff;
//   min-width: 20px;
//   text-align: center;
// `;



import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const pulseBadge = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(255,32,32,.5); }
  50%       { box-shadow: 0 0 0 6px rgba(255,32,32,.0); }
`;

const floatImg = keyframes`
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%       { transform: translateX(-50%) translateY(-6px); }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 14px 14px;
  border-radius: 20px;
  background: linear-gradient(160deg, #1e1e1e 0%, #141414 100%);
  cursor: grab;
  position: relative;
  border: 1px solid rgba(255,255,255,.07);
  box-shadow: 0 8px 32px rgba(0,0,0,.35);
  transition: all .28s ease;
  animation: ${fadeUp} .5s ease forwards;
  overflow: visible;
  min-height: 300px;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 48px rgba(0,0,0,.5), 0 0 0 1px rgba(200,0,10,.2);
    border-color: rgba(200,0,10,.25);
  }
`;

export const OfferBadge = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  background: #C8000A;
  color: #fff;
  font-family: 'Bebas Neue', sans-serif !important;
  font-size: 11px;
  letter-spacing: 2px;
  padding: 3px 10px;
  border-radius: 100px;
  animation: ${pulseBadge} 2s ease-in-out infinite;
  z-index: 2;
`;

export const CategoryTag = styled.span`
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(255,255,255,.07);
  border: 1px solid rgba(255,255,255,.1);
  color: rgba(255,248,240,.4);
  font-size: 9px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 100px;
  z-index: 2;
`;

export const CardImage = styled.img`
  height: 110px;
  object-fit: contain;
  position: absolute;
  top: -48px;
  left: 50%;
  transform: translateX(-50%);
  filter: drop-shadow(0 12px 20px rgba(0,0,0,.5));
  animation: ${floatImg} 3.5s ease-in-out infinite;

  ${Container}:hover & {
    filter: drop-shadow(0 16px 28px rgba(200,0,10,.25));
  }
`;

export const CardInfo = styled.div`
  margin-top: 72px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

export const CardName = styled.p`
  font-family: 'Alfa Slab One', serif !important;
  font-size: 15px;
  color: #fff;
  line-height: 1.3;
  font-weight: 400;
`;

export const CardDescription = styled.p`
  font-size: 11px;
  color: rgba(255,248,240,.35);
  line-height: 1.5;
  letter-spacing: .3px;
  margin-top: 2px;
  font-weight: 400;
`;

export const CardPrice = styled.strong`
  font-size: 18px;
  color: #FF2020;
  font-weight: 800;
  letter-spacing: .3px;
  margin-top: 4px;
`;

export const CardDivider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255,255,255,.06);
  margin: 10px 0;
`;

export const QuantityRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const QuantityLabel = styled.span`
  font-size: 10px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgba(255,248,240,.25);
  font-weight: 600;
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const QtyBtn = styled.button`
  width: 26px;
  height: 26px;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,.1);
  background: rgba(255,255,255,.06);
  color: #fff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all .2s ease;
  line-height: 1;

  &:hover {
    background: rgba(200,0,10,.3);
    border-color: rgba(200,0,10,.5);
  }

  &:disabled {
    opacity: .25;
    cursor: not-allowed;
  }
`;

export const QtyNumber = styled.span`
  font-family: 'Bebas Neue', sans-serif !important;
  font-size: 18px;
  color: #fff;
  min-width: 20px;
  text-align: center;
`;