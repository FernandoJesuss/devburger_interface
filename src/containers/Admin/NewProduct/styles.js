// import styled from "styled-components";
// import  ReactSelect from "react-select";
// import { Button } from "../../../components";

// export const Container = styled.div`
// display: flex;
// align-items: center;
// justify-content: center;
// min-height: 100vh;
// `;

// export const Form = styled.form`
// border-radius: 20px;
// background-color: ${(props) => props.theme.mainBlack};
// padding: 32px;
// width: 100%;
// max-width: 380px;
// display: flex;
// flex-direction: column;
// gap: 12px;
// `;


// export const InputGroup = styled.div`
// display: flex;
// flex-direction: column;
// gap: 4px;
// `;


// export const Label = styled.label`
// color: ${(props) => props.theme.white};
// font-size: 14px;

// `;

// export const Input = styled.input`
// width: 100%;
// height: 48px;
// border-radius: 5px;
// padding: 0 12px;
// border: none;
// `;


// export const LabelUpload = styled.label`
// cursor: pointer;
// border: 1px dashed ${(props) => props.theme.white};
// border-radius: 5px;
// padding: 10px;
// display: flex;
// color: ${(props) => props.theme.white};
// margin: 20px 0;

// >svg {
//     width: 20px;
//     height: 20px;
//     fill: ${(props) => props.theme.white};
//     margin-right: 4px;
// }

// input {
//     display: none;
// }
// `;


// export const Select = styled(ReactSelect)``;

// export const SubmitButton = styled(Button)`
// margin-top: 40px;
// `;

// export const ErrorMessage = styled.span`
// color: ${(props) => props.theme.darkRed};
// font-size: 14px;
// line-height: 80%;
// font-weight: 600;
// `;

// export const ContainerCheckbox = styled.div`
// display: flex;
// cursor: pointer;
// margin-top: 10px;
// /* color: ${(props) => props.theme.darkRed};
// font-size: 14px;
// line-height: 80%;
// font-weight: 600; */
// gap: 10px;

// input {
//     cursor: pointer;
// }
// `;




/*depois*/

import styled from "styled-components";
import ReactSelect from "react-select";
import { Button } from "../../../components";

const bp = {
  sm: '@media (max-width: 480px)',
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 64px);
  padding: 40px 16px;
  background: #0f0f0f;
`;

export const Form = styled.form`
  background: linear-gradient(160deg, #1a1a1a 0%, #111 100%);
  border: 1px solid rgba(255,255,255,.07);
  border-radius: 20px;
  padding: 36px 32px;
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  box-shadow: 0 16px 48px rgba(0,0,0,.4);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 32px; right: 32px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #C8000A, #FF2020, #C8000A, transparent);
    border-radius: 0 0 2px 2px;
    opacity: .7;
  }

  ${bp.sm} { padding: 28px 20px; border-radius: 16px; }
`;

export const FormTitle = styled.h2`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 26px;
  letter-spacing: 3px;
  color: #FFF8F0;
  margin-bottom: 8px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  font-size: 9px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  font-weight: 600;
  color: rgba(255,248,240,.3);
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 10px;
  padding: 0 14px;
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,248,240,.08);
  color: #FFF8F0;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  outline: none;
  transition: all .25s ease;

  &:focus {
    background: rgba(255,255,255,.08);
    border-color: rgba(200,0,10,.5);
    box-shadow: 0 0 0 3px rgba(200,0,10,.1);
  }

  &::placeholder { color: rgba(255,248,240,.2); }
`;

export const LabelUpload = styled.label`
  cursor: pointer;
  border: 1px dashed rgba(255,248,240,.15);
  border-radius: 10px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255,248,240,.35);
  font-size: 13px;
  transition: all .25s ease;
  margin: 4px 0;

  &:hover {
    border-color: rgba(200,0,10,.4);
    color: rgba(255,248,240,.6);
    background: rgba(200,0,10,.05);
  }

  svg {
    width: 20px;
    height: 20px;
    fill: rgba(255,248,240,.35);
    flex-shrink: 0;
  }

  input { display: none; }
`;

export const Select = styled(ReactSelect).attrs({
  styles: {
    control: (base, state) => ({
      ...base,
      background: 'rgba(255,255,255,.05)',
      border: state.isFocused
        ? '1px solid rgba(200,0,10,.5)'
        : '1px solid rgba(255,248,240,.08)',
      borderRadius: '10px',
      minHeight: '48px',
      boxShadow: state.isFocused ? '0 0 0 3px rgba(200,0,10,.1)' : 'none',
      '&:hover': { borderColor: 'rgba(200,0,10,.3)' },
    }),
    menu: (base) => ({
      ...base,
      background: '#1a1a1a',
      border: '1px solid rgba(255,255,255,.08)',
      borderRadius: '10px',
      overflow: 'hidden',
    }),
    option: (base, state) => ({
      ...base,
      background: state.isSelected
        ? 'rgba(200,0,10,.25)'
        : state.isFocused
        ? 'rgba(255,255,255,.06)'
        : 'transparent',
      color: '#FFF8F0',
      fontSize: '13px',
      cursor: 'pointer',
    }),
    singleValue: (base) => ({ ...base, color: '#FFF8F0', fontSize: '14px' }),
    placeholder: (base) => ({ ...base, color: 'rgba(255,248,240,.2)', fontSize: '13px' }),
    input: (base) => ({ ...base, color: '#FFF8F0' }),
    indicatorSeparator: () => ({ display: 'none' }),
    dropdownIndicator: (base) => ({ ...base, color: 'rgba(255,248,240,.3)' }),
  },
})``;

export const ContainerCheckbox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 4px;
  cursor: pointer;

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    accent-color: #C8000A;
    cursor: pointer;
  }
`;

export const SubmitButton = styled(Button)`
  margin-top: 16px;
  background: linear-gradient(135deg, #C8000A 0%, #A0000A 100%) !important;
  border: none !important;
  border-radius: 10px !important;
  font-family: 'Bebas Neue', sans-serif !important;
  font-size: 16px !important;
  letter-spacing: 4px !important;
  box-shadow: 0 4px 0 #5A0005, 0 8px 24px rgba(200,0,10,.4) !important;
  transition: all .22s ease !important;

  &:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 6px 0 #5A0005, 0 12px 32px rgba(200,0,10,.55) !important;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 11px;
  color: #FF6B6B;
  font-weight: 600;
  letter-spacing: .3px;
  min-height: 14px;
`;
