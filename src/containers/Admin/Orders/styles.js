// import styled from "styled-components";
// import Select from 'react-select'


// export const ProductImage = styled.img`
// height: 90px;
// padding: 12px;
// border-radius: 16px;
// `;

// export const SelectStatus = styled(Select)`

// width: 240px;
// `;


// export const Filter = styled.div`
// display: flex;
// justify-content: center;
// margin: 28px 0;
// gap: 50px;
// `;


// export const FilterOption = styled.button`
// cursor: pointer;
// background: none;
// border: none;
// color: ${(props) => props.$isActiveStatus ?  props.theme.purple : props.theme.darkGray} ;
// border-bottom: ${(props) => props.$isActiveStatus ? `3px solid ${props.theme.purple}` : "none" } ;
// font-size: 17px;
// line-height: 20px;
// padding-bottom: 5px;

// `;




/*depois*/

import styled from "styled-components";
import Select from "react-select";

const bp = {
  md: '@media (max-width: 768px)',
  sm: '@media (max-width: 480px)',
};

export const STATUS_COLORS = {
  "Pedido Realizado":  { bg: "rgba(99,102,241,.15)",  border: "rgba(99,102,241,.4)",  color: "#818CF8" },
  "Em Preparação":     { bg: "rgba(245,158,11,.15)",  border: "rgba(245,158,11,.4)",  color: "#FBBF24" },
  "Pedido Pronto":     { bg: "rgba(34,197,94,.15)",   border: "rgba(34,197,94,.4)",   color: "#4ADE80" },
  "Pedido à Caminho":  { bg: "rgba(14,165,233,.15)",  border: "rgba(14,165,233,.4)",  color: "#38BDF8" },
  "Entregue":          { bg: "rgba(34,197,94,.2)",    border: "rgba(34,197,94,.5)",   color: "#22C55E" },
  "Pedido Cancelado":  { bg: "rgba(200,0,10,.15)",    border: "rgba(200,0,10,.4)",    color: "#FF2020" },
};

function getStatusStyle(value) {
  return STATUS_COLORS[value] || {
    bg: "rgba(255,255,255,.05)",
    border: "rgba(255,255,255,.1)",
    color: "rgba(255,248,240,.5)",
  };
}

export const ProductImage = styled.img`
  height: 56px;
  width: 56px;
  object-fit: contain;
  border-radius: 10px;
  background: rgba(255,255,255,.05);
  padding: 4px;
`;

export const SelectStatus = styled(Select).attrs(({ value }) => {
  const s = getStatusStyle(value?.value);
  return {
    styles: {
      control: (base, state) => ({
        ...base,
        background: s.bg,
        border: `1px solid ${state.isFocused ? s.color : s.border}`,
        borderRadius: '8px',
        minHeight: '36px',
        boxShadow: state.isFocused ? `0 0 0 2px ${s.bg}` : 'none',
        cursor: 'pointer',
        transition: 'all .2s ease',
      }),
      menu: (base) => ({
        ...base,
        background: '#1a1a1a',
        border: '1px solid rgba(255,255,255,.08)',
        borderRadius: '10px',
        zIndex: 9999,
      }),
      option: (base, state) => {
        const os = getStatusStyle(state.data?.value);
        return {
          ...base,
          background: state.isSelected
            ? os.bg
            : state.isFocused
            ? 'rgba(255,255,255,.05)'
            : 'transparent',
          color: os.color,
          fontSize: '12px',
          fontWeight: 600,
          cursor: 'pointer',
          borderLeft: state.isSelected ? `3px solid ${os.color}` : '3px solid transparent',
          paddingLeft: '13px',
        };
      },
      singleValue: (base) => ({ ...base, color: s.color, fontSize: '12px', fontWeight: 700 }),
      placeholder: (base) => ({ ...base, color: 'rgba(255,255,255,.25)', fontSize: '12px' }),
      input: (base) => ({ ...base, color: '#FFF8F0' }),
      indicatorSeparator: () => ({ display: 'none' }),
      dropdownIndicator: (base) => ({ ...base, color: s.color, padding: '4px', opacity: .7 }),
    },
  };
})`
  width: 200px;
  ${bp.sm} { width: 150px; }
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 20px 0;
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }

  ${bp.sm} { gap: 6px; }
`;

export const FilterOption = styled.button`
  flex-shrink: 0;
  padding: 7px 16px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all .2s ease;
  border: 1px solid ${({ $isActiveStatus }) =>
    $isActiveStatus ? '#C8000A' : 'rgba(255,255,255,.1)'};
  background: ${({ $isActiveStatus }) =>
    $isActiveStatus ? '#C8000A' : 'transparent'};
  color: ${({ $isActiveStatus }) =>
    $isActiveStatus ? '#fff' : 'rgba(255,255,255,.4)'};
  box-shadow: ${({ $isActiveStatus }) =>
    $isActiveStatus ? '0 4px 14px rgba(200,0,10,.3)' : 'none'};

  &:hover {
    border-color: #C8000A;
    color: ${({ $isActiveStatus }) => $isActiveStatus ? '#fff' : '#C8000A'};
  }

  ${bp.sm} { font-size: 10px; padding: 6px 12px; }
`;
