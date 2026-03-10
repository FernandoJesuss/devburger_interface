// import { OffersCarousel,CategoryCarousel } from "../../components";
// import { Banner, Container, } from "./styles";


// export function Home() {
//     return (
//         <main>
//             <Banner>
//             <h1>Bem-Vindo(a)!</h1>
//             </Banner>
//             <Container>
//                 <div>
//                 <CategoryCarousel />
//                 <OffersCarousel />
//                 </div>
//             </Container>
//         </main>
//     );
// }




/*depois*/

import { OffersCarousel, CategoryCarousel } from "../../components";
import {
  Banner,
  BannerBadge,
  Container,
  SectionHeader,
  SectionTitle,
  SectionSub,
} from "./styles";

export function Home() {
  return (
    <main>
      <Banner>
        <h1>
          Bem-Vindo(a)!
        </h1>
        <BannerBadge>
          <span />
          <span>Aberto agora</span>
        </BannerBadge>
      </Banner>

      <Container>
        <div>
          <SectionHeader delay=".1s">
            <SectionTitle>Categorias</SectionTitle>
            <SectionSub>Escolha o que você quer hoje</SectionSub>
          </SectionHeader>
          <CategoryCarousel />

          <SectionHeader delay=".2s" style={{ marginTop: 56 }}>
            <SectionTitle>Ofertas do Dia</SectionTitle>
            <SectionSub>Aproveite antes que acabe 🔥</SectionSub>
          </SectionHeader>
          <OffersCarousel />
        </div>
      </Container>
    </main>
  );
}