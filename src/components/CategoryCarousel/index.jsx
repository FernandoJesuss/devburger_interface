
// import { api } from "../../services/api";
// import { useState, useEffect, } from "react";

// import Carousel from "react-multi-carousel";
// import { Container, Title } from "../../containers/Login/styles";

// export function CategoryCarousel() {
// const [categories, setCategories] = useState([]);

// useEffect(() => {
//     async function loadCategories(){
//        const {data} = await api.get("/categories");

//        setCategories(data);

//        console.log(data);
//     }

//     loadCategories();

// },[]);

// const responsive = {
//     superLargeDesktop: {
//         breakpoint: {max: 4000, min: 3000},
//         items: 4,
//     },
//     desktop: {
//         breakpoint: {max: 3000, min: 1280},
//         items: 4,
//     },
//     tablet: {
//         breakpoint: {max: 1280, min: 690},
//         items: 3,
//     },
//     mobile: {
//         breakpoint: {max: 690, min: 0},
//         items: 2,
//     },
// };

//     return (
//         <Container>
//                      <Title>Categorias</Title>
//                      <Carousel responsive={responsive} infinite={true} itemClass="carousel-item">
//                          {categories.map((category) => (
//                              <div key={category.id}>{category.name}</div>
//                          ))}
//                      </Carousel>
//                  </Container>
//              );
//          }


























import React, { useState, useEffect } from "react";
import { api } from "../../services/api";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, ContainerItems, Title } from "./styles"; 


export function CategoryCarousel() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get("/categories");
            setCategories(data);
        }
        loadCategories();
    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1280, min: 690 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 690, min: 0 },
            items: 2,
        },
    };

    return (
        <Container>
            <Title>Categorias</Title>
            <Carousel responsive={responsive} infinite={true} itemClass="carousel-item">
                {categories.map((category) => (
                    <ContainerItems key={category.id} imageUrl={category.url}>
                        <p>{category.name}</p>

                        </ContainerItems>
                ))}
            </Carousel>
        </Container>
    );
}