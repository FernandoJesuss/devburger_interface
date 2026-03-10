// import styled from "styled-components";

// export const Container = styled.div`
// .carousel-item {
//     padding-right: 40px;
// }

// overflow-x: hidden;

// padding-left: 40px;
// padding-bottom: 40px;

// .react-multi-carousel-list {
//     overflow: visible;

// }

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
// color: ${(props) => props.theme.gren};
// padding-bottom: 12px;
// position: relative;
// text-align: center;
// margin: 70px 0;


// &::after {
//     content: "";
//     position: absolute;
//     bottom: 0;
//     width: 56px;
//     height: 4px;
//     background-color: ${(props) => props.theme.gren};
//     left: calc(50% - 28px);

// }


// `;







/*depois*/

import styled from "styled-components";

export const Container = styled.div`
  .carousel-item {
    padding-right: 40px;
  }

  overflow-x: hidden;
  padding-left: 40px;
  padding-bottom: 40px;

  .react-multi-carousel-list {
    overflow: visible;
  }

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
  margin: 56px 0 40px;
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

export const SubTitle = styled.p`
  font-size: 13px;
  color: rgba(31,31,31,.4);
  letter-spacing: 1px;
  margin-top: -32px;
  margin-bottom: 40px;
  font-weight: 400;
`;