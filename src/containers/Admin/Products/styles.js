// import styled from "styled-components";

// export const Container = styled.div``;

// export const ProductImage = styled.img`
// height: 80px;
// padding: 12px;
// border-radius: 16px;
// /* background-color: #f1f1f1; */
// `;

// export const EditButton = styled.button`
// border: 0;
// background-color: ${(props) => props.theme.darkWhite};
// height: 32px;
// width: 32px;
// border-radius: 8px;
// margin: 0 auto;

// display: flex;
// align-items: center;
// justify-content: center;

// svg {
//     height: 18px;
//     width: 18px;
// }

// &:hover {
//    background-color: ${(props) => props.theme.purple}; 
// }

// svg {
//     fill: ${(props) => props.theme.mainBlack}; 
// }

// `;



/*depois*/

import styled from "styled-components";

export const Container = styled.div`
  padding: 8px 0;
`;

export const ProductImage = styled.img`
  height: 56px;
  width: 56px;
  object-fit: contain;
  border-radius: 10px;
  background: rgba(255,255,255,.05);
  padding: 4px;
`;

export const EditButton = styled.button`
  border: none;
  background: rgba(255,255,255,.07);
  border: 1px solid rgba(255,255,255,.08);
  height: 34px;
  width: 34px;
  border-radius: 8px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all .2s ease;

  svg {
    height: 16px;
    width: 16px;
    color: rgba(255,255,255,.5);
    transition: color .2s ease;
  }

  &:hover {
    background: rgba(200,0,10,.2);
    border-color: rgba(200,0,10,.4);
    svg { color: #FF2020; }
  }
`;

// MUI overrides via global sx prop — shared table dark theme
export const muiTableSx = {
  background: 'linear-gradient(160deg, #1a1a1a 0%, #111 100%)',
  borderRadius: '16px',
  overflow: 'hidden',
  border: '1px solid rgba(255,255,255,.07)',
  '& .MuiTableCell-head': {
    background: 'rgba(255,255,255,.04)',
    color: 'rgba(255,248,240,.3)',
    fontSize: '10px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontWeight: 600,
    borderBottom: '1px solid rgba(255,255,255,.07)',
    fontFamily: 'Poppins, sans-serif',
  },
  '& .MuiTableCell-body': {
    color: 'rgba(255,248,240,.75)',
    fontSize: '13px',
    borderBottom: '1px solid rgba(255,255,255,.04)',
    fontFamily: 'Poppins, sans-serif',
  },
  '& .MuiTableRow-root:hover .MuiTableCell-body': {
    background: 'rgba(255,255,255,.02)',
  },
  '& .MuiTableRow-root:last-child .MuiTableCell-body': {
    borderBottom: 'none',
  },
  '& .MuiPaper-root': {
    background: 'transparent',
    boxShadow: 'none',
  },
  '& .MuiIconButton-root': {
    color: 'rgba(255,255,255,.35)',
    '&:hover': { color: '#FF2020' },
  },
  '& .MuiCollapse-root': {
    background: 'rgba(255,255,255,.02)',
  },
  '& .MuiTypography-root': {
    color: 'rgba(255,248,240,.5)',
    fontFamily: 'Bebas Neue, sans-serif',
    letterSpacing: '2px',
  },
};