// export const orderStatusOptions = [


// {

// id: 0,
// label: "Todos",
// value: "Todos",

// },

// {

// id: 1,
// label: "Pedido Realizado",
// value: "Pedido Realizado",

// },

// {

// id: 2,
// label: "Em Preparação",
// value: "Em Preparação",  

// },
 
// {

// id: 3, 
// label: "Pedido Pronto",
// value: "Pedido Pronto",  

// },
 
// { 

// id: 4, 
// label: "Pedido à Caminho",
// value: "Pedido à Caminho",  

// },
  
// {

// id: 5, 
// label: "Entregue",
// value: "Entregue", 

// },
    
//  {

//  id: 6,
//  label: "Pedido Cancelado",
//  value: "Pedido Cancelado", 

// },
 
// ];


/*depois*/

// import styled from "styled-components";
// import Select from "react-select";

// const bp = {
//   md: '@media (max-width: 768px)',
//   sm: '@media (max-width: 480px)',
// };

// export const ProductImage = styled.img`
//   height: 56px;
//   width: 56px;
//   object-fit: contain;
//   border-radius: 10px;
//   background: rgba(255,255,255,.05);
//   padding: 4px;
// `;

// export const SelectStatus = styled(Select).attrs({
//   styles: {
//     control: (base, state) => ({
//       ...base,
//       background: 'rgba(255,255,255,.05)',
//       border: state.isFocused
//         ? '1px solid rgba(200,0,10,.5)'
//         : '1px solid rgba(255,255,255,.08)',
//       borderRadius: '8px',
//       minHeight: '36px',
//       boxShadow: 'none',
//       cursor: 'pointer',
//     }),
//     menu: (base) => ({
//       ...base,
//       background: '#1a1a1a',
//       border: '1px solid rgba(255,255,255,.08)',
//       borderRadius: '10px',
//       zIndex: 9999,
//     }),
//     option: (base, state) => ({
//       ...base,
//       background: state.isSelected
//         ? 'rgba(200,0,10,.25)'
//         : state.isFocused
//         ? 'rgba(255,255,255,.06)'
//         : 'transparent',
//       color: '#FFF8F0',
//       fontSize: '12px',
//       cursor: 'pointer',
//     }),
//     singleValue: (base) => ({ ...base, color: '#FFF8F0', fontSize: '12px' }),
//     placeholder: (base) => ({ ...base, color: 'rgba(255,255,255,.25)', fontSize: '12px' }),
//     input: (base) => ({ ...base, color: '#FFF8F0' }),
//     indicatorSeparator: () => ({ display: 'none' }),
//     dropdownIndicator: (base) => ({ ...base, color: 'rgba(255,255,255,.3)', padding: '4px' }),
//   },
// })`
//   width: 200px;
//   ${bp.sm} { width: 150px; }
// `;

// export const Filter = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   padding: 20px 0;
//   overflow-x: auto;
//   scrollbar-width: none;
//   &::-webkit-scrollbar { display: none; }

//   ${bp.sm} { gap: 6px; }
// `;

// export const FilterOption = styled.button`
//   flex-shrink: 0;
//   padding: 7px 16px;
//   border-radius: 100px;
//   font-size: 12px;
//   font-weight: 600;
//   letter-spacing: 1px;
//   text-transform: uppercase;
//   cursor: pointer;
//   transition: all .2s ease;
//   border: 1px solid ${({ $isActiveStatus }) =>
//     $isActiveStatus ? '#C8000A' : 'rgba(255,255,255,.1)'};
//   background: ${({ $isActiveStatus }) =>
//     $isActiveStatus ? '#C8000A' : 'transparent'};
//   color: ${({ $isActiveStatus }) =>
//     $isActiveStatus ? '#fff' : 'rgba(255,255,255,.4)'};
//   box-shadow: ${({ $isActiveStatus }) =>
//     $isActiveStatus ? '0 4px 14px rgba(200,0,10,.3)' : 'none'};

//   &:hover {
//     border-color: #C8000A;
//     color: ${({ $isActiveStatus }) => $isActiveStatus ? '#fff' : '#C8000A'};
//   }

//   ${bp.sm} { font-size: 10px; padding: 6px 12px; }
// `;




export const orderStatusOptions = [
  { id: 0, label: "Todos", value: "Todos" },
  { id: 1, label: "Pedido Realizado", value: "Pedido Realizado" },
  { id: 2, label: "Em Preparação", value: "Em Preparação" },
  { id: 3, label: "Pedido Pronto", value: "Pedido Pronto" },
  { id: 4, label: "Pedido à Caminho", value: "Pedido à Caminho" },
  { id: 5, label: "Entregue", value: "Entregue" },
  { id: 6, label: "Pedido Cancelado", value: "Pedido Cancelado" },
];