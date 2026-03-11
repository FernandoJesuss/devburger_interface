// import styled from "styled-components";

// export const ContainerButton = styled.button `
// background-color: ${(props) => props.theme.purple};
// width: 100%;
// height: 52px;
// border: 0;
// border-radius: 5px;
// font-size: 30px;
// color: ${(props) => props.theme.white}f;

// &:hover {
//     background-color: ${(props) => props.theme.secondDarkPurple};
// }





// `;


/*depois*/
import styled from "styled-components";

export const ContainerButton = styled.button`
  background: linear-gradient(135deg, #C8000A 0%, #A0000A 100%);
  width: 100%;
  height: 44px;
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all .22s ease;
  box-shadow: 0 3px 0 #5A0005, 0 4px 16px rgba(200,0,10,.3);
  margin-top: 12px;

  img {
    width: 22px;
    height: 22px;
    filter: brightness(0) invert(1);
    transition: transform .2s ease;
  }

  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(135deg, #D8000C 0%, #AA0008 100%);
    box-shadow: 0 5px 0 #5A0005, 0 8px 24px rgba(200,0,10,.45);

    img {
      transform: scale(1.15);
    }
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 1px 0 #5A0005;
  }

  /* Shimmer */
  &::after {
    content: '';
    position: absolute;
    top: 0; left: -100%;
    width: 50%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.2), transparent);
    transition: left .5s ease;
  }

  &:hover::after {
    left: 160%;
  }
`;`
    

`