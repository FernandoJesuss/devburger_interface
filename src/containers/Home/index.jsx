import { CategoryCarousel } from "../../components/CategoryCarousel";
import { OffersCarousel } from "../../components/OffersCarousel";
import { Banner, Container, } from "./styles";

export function Home() {
    return (
        <main>
            <Banner>
            <h1>Bem-Vindo(a)!</h1>
            </Banner>
            <Container>
                <div>
                <CategoryCarousel />
                <OffersCarousel />
                </div>
            </Container>
        </main>
    );
}