// import { Link } from "react-router-dom";
// import styled from "styled-components";

// export const Container = styled.div`
// .carousel-item {
//     padding-right: 40px;
// }

// padding-left: 40px;

// .react-multiple-carousel__arrow--left {
//     left: 15px;
//     top: 10px;

// }

// .react-multiple-carousel__arrow--right {
//     /* right: 15px; */
//     top: 10px;

// }

// `;

// export const Title = styled.h2`
// font-size: 32px;
// font-weight: 800;
// color: ${(props) => props.theme.purple};
// padding-bottom: 12px;
// position: relative;
// text-align: center;
// margin-bottom: 40px;
// margin-top: 20px;

// &::after {
//     content: "";
//     position: absolute;
//     bottom: 0;
//     width: 56px;
//     height: 4px;
//     background-color: ${(props) => props.theme.purple};
//     left: calc(50% - 28px);

// }


// `;


// export const ContainerItems = styled.div`
// background: url("${props => props.imageUrl}");
// background-position:center ;
// background-size: cover;
// border-radius: 20px;

// display: flex;
// align-items: center;
// padding: 20px 10px;
// width: 100%;
// height: 250px;

// `;

// export const CategoryButton = styled(Link)`
//    color: ${(props) => props.theme.white}fff;
//     background-color: rgba(0, 0, 0, 0.5);
//     padding: 10px 30px;
//     border-radius: 30px;
//     font-size: 22.5px;
//     font-weight: 500;
//     margin-top: 50px;
//     text-decoration: none;

//     &:hover {
//         background-color: ${(props) => props.theme.purple};
//     }
// `;






/*depois*/
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  .carousel-item {
    padding-right: 40px;
  }

  padding-left: 40px;

  .react-multiple-carousel__arrow--left {
    left: 15px;
    top: 10px;
  }

  .react-multiple-carousel__arrow--right {
    top: 10px;
  }
`;

export const Title = styled.h2`
  font-family: 'Alfa Slab One', serif !important;
  font-size: 38px;
  letter-spacing: 3px;
  font-weight: 400;
  color: #1f1f1f;
  text-align: left;
  padding-bottom: 12px;
  margin-bottom: 40px;
  margin-top: 20px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 48px;
    height: 3px;
    background: #1f1f1f;
    border-radius: 2px;
  }
`;

export const ContainerItems = styled.div`
  background: url("${props => props.imageUrl}") center/cover no-repeat;
  border-radius: 16px;
  display: flex;
  align-items: flex-end;
  padding: 20px;
  width: 100%;
  height: 250px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,.7) 0%, transparent 60%);
    border-radius: 16px;
  }
`;

export const CategoryButton = styled.button`

  position: relative;
  color: #fff;
  background: rgba(200, 0, 10, 0.85);
  padding: 8px 24px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all .22s ease;
  backdrop-filter: blur(4px);

  &:hover {
    background: #C8000A;
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(200,0,10,.4);
  }
`;

export const SubTitle = styled.p`
  font-size: 13px;
  color: rgba(31,31,31,.4);
  letter-spacing: 1px;
  margin-top: -32px;
  margin-bottom: 40px;
  font-weight: 400;
`;`
    
`