import styled from "styled-components";
import BannerHome from "../../assets/BannerHome.svg";
import Background from "../../assets/Background.svg";


export const Banner = styled.div `
background: url("${BannerHome}");
background-size: cover;
background-position: center;
height: 480px;

h1 {
    font-family: "Road Rage", sans-serif;
    font-size: 80px;
    color: ${(props) => props.theme.darkWhite};
    position: absolute;
    right: 20%;
    top: 10%;
}
`;

export const Container = styled.section `
background: linear-gradient(rgba(255, 255, 255, 0.5),
rgba(255, 255, 255, 0.4)
),
url("${Background}");
/* height: 500px; */
/* height: 100%; */


`;



