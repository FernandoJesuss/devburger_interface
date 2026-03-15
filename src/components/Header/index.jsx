// import { Container, HeaderLink, LinkContainer, Logout, Navigation, Options, Profile, Content } from "./styles";
// import { UserCircle, ShoppingCart } from "@phosphor-icons/react";
// import { useNavigate, useResolvedPath } from "react-router-dom";

// import { useUser } from "../../hooks/UserContext";

// export function Header() {
//     const navigate = useNavigate();
//     const { logout, userInfo } = useUser();
//     const { pathname } = useResolvedPath();

//     function logoutUser() {
//         logout();
//         navigate("/login");
//     }

//     return (
//         <Container>
//             <Content>
//                 <Navigation>
//                     <div>
//                         <HeaderLink to="/" $isActive={pathname === "/"}>
//                             Home
//                         </HeaderLink>
//                         <hr></hr>
//                         <HeaderLink to="/cardapio" $isActive={pathname === "/cardapio"}>
//                             Cardápio
//                         </HeaderLink>
//                     </div>
//                 </Navigation>
//                 <Options>
//                     <Profile>
//                         <UserCircle color="#ffffff" size={24} />
//                         <div>
//                             <p>
//                                 Olá, <span>{userInfo.name}</span>
//                             </p>
//                             <Logout onClick={logoutUser}>Sair</Logout>
//                         </div>
//                     </Profile>
//                     <LinkContainer>
//                         <ShoppingCart color="#ffffff" size={24} />
//                         <HeaderLink to="/carrinho" $isActive={pathname === "/carrinho"}>
//                             Carrinho
//                         </HeaderLink>
//                     </LinkContainer>
//                 </Options>

//             </Content>
//         </Container>
//     );
// }


// /*depois*/
// import { Container, HeaderLink, LinkContainer, Logout, Navigation, Options, Profile, Content, CartBadge } from "./styles";
// import { UserCircle, ShoppingCart } from "@phosphor-icons/react";
// import { useNavigate, useResolvedPath } from "react-router-dom";
// import { useUser } from "../../hooks/UserContext";
// import { useCart } from "../../hooks/CartContext";

// export function Header() {
//     const navigate = useNavigate();
//     const { logout, userInfo } = useUser();
//     const { pathname } = useResolvedPath();
//     const { cartProducts } = useCart();

//     const totalItems = cartProducts.reduce((acc, prd) => acc + prd.quantity, 0);

//     function logoutUser() {
//         logout();
//         navigate("/login");
//     }

//     return (
//         <Container>
//             <Content>
//                 <Navigation>
//                     <div>
//                         <HeaderLink to="/" $isActive={pathname === "/"}>
//                             Home
//                         </HeaderLink>
//                         <hr />
//                         <HeaderLink to="/cardapio" $isActive={pathname === "/cardapio"}>
//                             Cardápio
//                         </HeaderLink>
//                     </div>
//                 </Navigation>
//                 <Options>
//                     <Profile>
//                         <UserCircle color="#ffffff" size={24} />
//                         <div>
//                             <p>
//                                 Olá, <span>{userInfo.name}</span>
//                             </p>
//                             <Logout onClick={logoutUser}>Sair</Logout>
//                         </div>
//                     </Profile>
//                     <LinkContainer onClick={() => navigate("/carrinho")}>
//                         <ShoppingCart color="#ffffff" size={22} />
//                         <HeaderLink to="/carrinho" $isActive={pathname === "/carrinho"}>
//                             Carrinho
//                         </HeaderLink>
//                         {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
//                     </LinkContainer>
//                 </Options>
//             </Content>
//         </Container>
//     );
// }


import { useState } from "react";
import {
  Container, HeaderLink, LinkContainer, Logout, Navigation,
  Options, Profile, Content, CartBadge,
  HamburgerButton, MobileMenu, MobileOverlay, MobileNav,
  MobileMenuHeader, MobileMenuSection, MobileMenuTitle,
  MobileDivider, MobileProfile, MobileCartLink,
} from "./styles";
import { UserCircle, ShoppingCart, List, X } from "@phosphor-icons/react";
import { useNavigate, useResolvedPath } from "react-router-dom";
import { useUser } from "../../hooks/UserContext";
import { useCart } from "../../hooks/CartContext";
import Logo from "../../assets/logo_devburguer.png";

export function Header() {
  const navigate = useNavigate();
  const { logout, userInfo } = useUser();
  const { pathname } = useResolvedPath();
  const { cartProducts } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const totalItems = cartProducts.reduce((acc, prd) => acc + prd.quantity, 0);

  function logoutUser() {
    logout();
    setMenuOpen(false);
    navigate("/login");
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <Container>
        <Content>
          <Navigation>
            <div>
              <HeaderLink to="/" $isActive={pathname === "/"}>Home</HeaderLink>
              <hr />
              <HeaderLink to="/cardapio" $isActive={pathname === "/cardapio"}>Cardápio</HeaderLink>
            </div>
          </Navigation>

          <Options>
            <Profile>
              <UserCircle color="#ffffff" size={24} />
              <div>
                <p>Olá, <span>{userInfo.name}</span></p>
                <Logout onClick={logoutUser}>Sair</Logout>
              </div>
            </Profile>
            <LinkContainer onClick={() => navigate("/carrinho")}>
              <ShoppingCart color="#ffffff" size={22} />
              <HeaderLink to="/carrinho" $isActive={pathname === "/carrinho"}>Carrinho</HeaderLink>
              {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
            </LinkContainer>
          </Options>

          {/* Botão hambúrguer — só aparece no mobile */}
          <HamburgerButton onClick={() => setMenuOpen(true)}>
            <List size={24} color="#fff" />
            {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
          </HamburgerButton>
        </Content>
      </Container>

      {/* Overlay */}
      <MobileOverlay open={menuOpen} onClick={closeMenu} />

      {/* Drawer */}
      <MobileMenu open={menuOpen}>
        <MobileMenuHeader>
          <img src={Logo} alt="Dev Burguer" style={{ height: 30 }} />
          <button onClick={closeMenu} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
            <X size={22} color="rgba(255,248,240,.45)" />
          </button>
        </MobileMenuHeader>

        <MobileProfile>
          <UserCircle size={36} color="rgba(255,248,240,.3)" />
          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>{userInfo.name}</p>
            <p style={{ color: 'rgba(255,248,240,.35)', fontSize: 11, letterSpacing: 1 }}>Cliente</p>
          </div>
        </MobileProfile>

        <MobileDivider />

        <MobileMenuSection>
          <MobileMenuTitle>Navegação</MobileMenuTitle>
          <MobileNav>
            <HeaderLink to="/" $isActive={pathname === "/"} onClick={closeMenu}>🏠 Home</HeaderLink>
            <HeaderLink to="/cardapio" $isActive={pathname === "/cardapio"} onClick={closeMenu}>🍔 Cardápio</HeaderLink>
          </MobileNav>
        </MobileMenuSection>

        <MobileDivider />

        <MobileMenuSection>
          <MobileMenuTitle>Meu Pedido</MobileMenuTitle>
          <MobileCartLink onClick={() => { navigate("/carrinho"); closeMenu(); }}>
            <ShoppingCart size={18} color="#fff" />
            <span>Carrinho</span>
            {totalItems > 0 && (
              <span style={{ background: '#C8000A', color: '#fff', fontSize: 10, fontWeight: 800, padding: '2px 8px', borderRadius: 100, marginLeft: 'auto' }}>
                {totalItems}
              </span>
            )}
          </MobileCartLink>
        </MobileMenuSection>

        <MobileDivider />

        <MobileMenuSection>
          <MobileMenuTitle>Serviços</MobileMenuTitle>
          <MobileNav>
            <span style={{ color: 'rgba(255,248,240,.3)', fontSize: 13 }}>🚚 Rastreio de entrega &nbsp;<span style={{ fontSize: 9, letterSpacing: 2, color: '#C8000A', textTransform: 'uppercase' }}>em breve</span></span>
            <span style={{ color: 'rgba(255,248,240,.3)', fontSize: 13 }}>⭐ Programa de pontos &nbsp;<span style={{ fontSize: 9, letterSpacing: 2, color: '#C8000A', textTransform: 'uppercase' }}>em breve</span></span>
            <span style={{ color: 'rgba(255,248,240,.3)', fontSize: 13 }}>🎁 Cupons e ofertas &nbsp;<span style={{ fontSize: 9, letterSpacing: 2, color: '#C8000A', textTransform: 'uppercase' }}>em breve</span></span>
          </MobileNav>
        </MobileMenuSection>

        <MobileDivider />

        <Logout onClick={logoutUser} style={{ margin: '12px 24px', display: 'block', textAlign: 'left', fontSize: 12 }}>
          Sair da conta
        </Logout>
      </MobileMenu>
    </>
  );
}