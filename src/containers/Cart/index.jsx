// import Logo from "../../assets/Logo.svg";
// import { CartItems } from "../../components/CartItems";
// import { Container } from "../Login/styles";
// import { Banner, Content, Title, Container } from "./styles";



// export function Cart () {
//     return(
//         <Container>
//             <Banner>
//             <img src={Logo} alt="logo devburger" />
//             </Banner>
//             <Title>Checkout - Pedido </Title>
//             <Content>
//                 <CartItems />
//                 {/* <CartResume /> */}
//             </Content>
//         </Container>
//     )
// }


import Logo from "../../assets/Logo.svg";
import { CartItems } from "../../components/CartItems";
import { Banner, Content, Title, Container } from "./styles";

export function Cart() {
    return (
        <Container>
            <Banner>
                <img src={Logo} alt="Logo DevBurger" />
            </Banner>
            <Title>Checkout - Pedido</Title>
            <Content>
                <CartItems />
                {/* <CartResume /> */}
            </Content>
        </Container>
    );
}