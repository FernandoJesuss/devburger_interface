// import React, { useState, useEffect } from "react";
// import { api } from "../../services/api";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { Container, Title } from "./styles"; 
// import { CardProduct } from "../CardProduct";


// export function OffersCarousel() {
//     const [offers, setOffers] = useState([]);

//     useEffect(() => {
//         async function loadProducts() {
//             const { data } = await api.get("/products");

//             const onlyOffers = data.filter((product) => product.offer);
// setOffers(onlyOffers);

            
//         }
//         loadProducts();
//     }, []);

//     const responsive = {
//         superLargeDesktop: {
//             breakpoint: { max: 4000, min: 3000 },
//             items: 4,
//         },
//         desktop: {
//             breakpoint: { max: 3000, min: 1280 },
//             items: 4,
//         },
//         tablet: {
//             breakpoint: { max: 1280, min: 690 },
//             items: 3,
//         },
//         mobile: {
//             breakpoint: { max: 690, min: 0 },
//             items: 2,
//         },
//     };

//     return (
//         <Container>
//             <Title>Ofertas do Dia</Title>
//             <Carousel responsive={responsive} infinite={true} itemClass="carousel-item">
//                 {offers.map((product) => (
//                   <CardProduct key={product.id} product={product} />
//                 ))}
//             </Carousel>
//         </Container>
//     );
// }




// /*depois*/
// import styled from "styled-components";

// export const Container = styled.div`
//   .carousel-item {
//     padding-right: 40px;
//   }

//   overflow-x: hidden;
//   padding-left: 40px;
//   padding-bottom: 40px;

//   .react-multi-carousel-list {
//     overflow: visible;
//   }

//   .react-multiple-carousel__arrow--left {
//     left: 15px;
//     top: 10px;
//   }

//   .react-multiple-carousel__arrow--right {
//     top: 10px;
//   }
// `;

// export const Title = styled.h2`
//   font-family: 'Bebas Neue', sans-serif !important;
//   font-size: 38px;
//   letter-spacing: 3px;
//   font-weight: 400;
//   color: #1f1f1f;
//   text-align: left;
//   padding-bottom: 12px;
//   margin: 56px 0 40px;
//   position: relative;

//   &::after {
//     content: "";
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     width: 48px;
//     height: 3px;
//     background: linear-gradient(90deg, #C8000A, #FF2020);
//     border-radius: 2px;
//   }
// `;


/*depois de */
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Title, SubTitle } from "./styles";
import { CardProduct } from "../CardProduct";

export function OffersCarousel() {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const { data } = await api.get("/products");
            setOffers(data.filter((product) => product.offer));
        }
        loadProducts();
    }, []);

    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
        desktop:           { breakpoint: { max: 3000, min: 1280 }, items: 4 },
        tablet:            { breakpoint: { max: 1280, min: 690  }, items: 3 },
        mobile:            { breakpoint: { max: 690,  min: 0    }, items: 2 },
    };

    return (
        <Container>
            <Title>Ofertas do Dia</Title>
            <SubTitle>Aproveite antes que acabe 🔥</SubTitle>
            <Carousel responsive={responsive} infinite={true} itemClass="carousel-item">
                {offers.map((product) => (
                    <CardProduct key={product.id} product={product} />
                ))}
            </Carousel>
        </Container>
    );
}