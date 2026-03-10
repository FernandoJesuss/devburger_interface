// import styled from "styled-components";

// export const ContainerButton = styled.button `
// width: 100%;
// height: 52px;
// border: 0;
// border-radius: 5px ;
// background-color: ${(props) => props.theme.purple};
// font-family: "Road Rage", sans-serif;
// font-size: 30px;
// color: ${(props) => props.theme.white};

// &:hover {
// background-color: ${(props) => props.theme.secondDarkPurple};
// border: 1px solid ${(props) => props.theme.white};
// }

// &:active {
//     background-color: #6f355d;
// }

// `;





import styled from "styled-components";

export const ContainerButton = styled.button`
  width: 100%;
  height: 52px;
  border: 0;
  border-radius: 10px;
  background: linear-gradient(135deg, #C8000A 0%, #A0000A 100%);
   font-family: "Bebas Neue", sans-serif !important;
  font-size: 20px;
  letter-spacing: 5px;
  color: #fff;
  position: relative;
  overflow: hidden;
  transition: all .22s ease;
  box-shadow: 0 4px 0 #5A0005, 0 8px 30px rgba(200,0,10,.45);

  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(135deg, #D8000C 0%, #AA0008 100%);
    box-shadow: 0 6px 0 #5A0005, 0 14px 40px rgba(200,0,10,.6);
    border: none;
  }

  &:active {
    transform: translateY(1px);
    background: #C8000A;
    box-shadow: 0 2px 0 #5A0005;
  }

  &:disabled {
    opacity: .3;
    cursor: not-allowed;
    transform: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.18), transparent);
    transition: left .6s ease;
  }

  &:hover::after {
    left: 160%;
  }
`;