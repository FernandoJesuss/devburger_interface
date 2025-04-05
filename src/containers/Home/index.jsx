import { CategoryCarousel } from "../../components/CategoryCarousel";
import { Banner, Container, Content } from "./styles";

export function Home() {
    return (
        <main>
            <Banner>
            <h1>Bem-Vindo(a)!</h1>
            </Banner>
            <Container>
                <Content>
                <CategoryCarousel />
                    <div>Carrossel Produtos</div>
                </Content>
            </Container>
        </main>
    );
}