import styled from "styled-components";
import BannerHamburger from "../../assets/BannerHamburger.svg";
import Background from "../../assets/Background.svg";
import { Link } from "react-router-dom";


export const Container = styled.div `
width: 100%;
min-height: 100vh;
background-color: #f0f0f0;

background: linear-gradient(
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.6)
),
url("${Background}");

`;

export const Banner = styled.div `
display: flex;
justify-content: center;
align-items: center;
height: 480px;
width: 100%;
position: relative;

background: url("${BannerHamburger}") no-repeat;
background-color: ${(props) => props.theme.mainBlack};
background-position: center;
background-size: cover;

h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    line-height: 65px;
    color: ${(props) => props.theme.white};
    position: absolute;

    right: 20%;
    top: 30%;

    span {
        display: block;
        color: ${(props) => props.theme.white};
        font-size: 20px;
    }



}


`;


export const CategoryMenu = styled.div `
display: flex;
justify-content: center;
gap: 50px;
margin-top: 30px;

`;

export const CategoryButton = styled(Link) `
text-decoration: none;
cursor: pointer;
background: none;
color: ${(props) =>
  props.$isActiveCategory
   ? props => props.theme.purple 
   : props => props.theme.dimgray};
font-size: 24px;
font-weight: 500;
padding-bottom: 5px;
line-height: 20px;
border: none;
border-bottom: ${(props) => 
  props.$isActiveCategory && `3px solid ${(props) => props.theme.purple}`};

`;

export const ProductsContainer = styled.div `
display: grid;
grid-template-columns: repeat(3, 1fr);
padding: 40px;
gap: 60px;
justify-content: center;
max-width: 1280px;
margin: 50px auto;

`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; 
  position: relative;
  top: 12px;
  left: 20px;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.purple}; 
  color: ${(props) => props.theme.white}; 
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px; 
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7c4691; 
  }

  &:active {
    background-color: #5e2f6e; 
  }
`;
