// import styled from "styled-components"; 

// export const Root = styled.table`
// width: 100%;
// border-collapse: collapse;
// background-color: ${(props) => props.theme.white};
// border-radius: 20px;

// `;

// export const Header = styled.thead`


// `;

// export const Tr = styled.tr`


// `;

// export const Th = styled.th`
// padding: 16px;
// text-align: left;
// color: ${(props) => props.theme.white};
// background-color: ${(props) => props.theme.secondBlack};
// border-bottom: 1px solid #cdcdcd;

// &:last-child {
   
// border-top-right-radius: 20px ;
// }

// &:first-child {
//     border-top-left-radius: 20px;
// }

// `;

// export const Td = styled.td`
// padding: 16px;
// color: ${(props) => props.theme.secondBlack};
// font-weight: 500;
// line-height: 115%;

// `;


// export const Body = styled.tbody`
// /* padding: 16px;
// color: ${(props) => props.theme.secondBlack};
// font-weight: 500;
// line-height: 115%; */

// `;







/*depois*/
import styled from "styled-components";

export const Root = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: linear-gradient(160deg, #1a1a1a 0%, #111 100%);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,.07);
  box-shadow: 0 8px 32px rgba(0,0,0,.4);
`;

export const Header = styled.thead``;

export const Tr = styled.tr`
  border-bottom: 1px solid rgba(255,255,255,.05);
  transition: background .2s ease;

  &:hover {
    background: rgba(255,255,255,.03);
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const Th = styled.th`
  padding: 14px 16px;
  text-align: left;
  color: rgba(255,248,240,.35);
  background: rgba(255,255,255,.04);
  border-bottom: 1px solid rgba(255,255,255,.07);
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 600;

  &:first-child { border-top-left-radius: 20px; }
  &:last-child  { border-top-right-radius: 20px; }
`;

export const Td = styled.td`
  padding: 14px 16px;
  color: rgba(255,248,240,.75);
  font-weight: 500;
  font-size: 13px;
  line-height: 115%;
`;

export const Body = styled.tbody``;