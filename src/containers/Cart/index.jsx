import Logo from "../../assets/Logo.svg";
import { CartItems, CartResume } from "../../components";
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
                <CartResume />
            </Content>
        </Container>
    );
}