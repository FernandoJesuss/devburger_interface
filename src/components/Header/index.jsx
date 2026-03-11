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


/*depois*/
import { Container, HeaderLink, LinkContainer, Logout, Navigation, Options, Profile, Content, CartBadge } from "./styles";
import { UserCircle, ShoppingCart } from "@phosphor-icons/react";
import { useNavigate, useResolvedPath } from "react-router-dom";
import { useUser } from "../../hooks/UserContext";
import { useCart } from "../../hooks/CartContext";

export function Header() {
    const navigate = useNavigate();
    const { logout, userInfo } = useUser();
    const { pathname } = useResolvedPath();
    const { cartProducts } = useCart();

    const totalItems = cartProducts.reduce((acc, prd) => acc + prd.quantity, 0);

    function logoutUser() {
        logout();
        navigate("/login");
    }

    return (
        <Container>
            <Content>
                <Navigation>
                    <div>
                        <HeaderLink to="/" $isActive={pathname === "/"}>
                            Home
                        </HeaderLink>
                        <hr />
                        <HeaderLink to="/cardapio" $isActive={pathname === "/cardapio"}>
                            Cardápio
                        </HeaderLink>
                    </div>
                </Navigation>
                <Options>
                    <Profile>
                        <UserCircle color="#ffffff" size={24} />
                        <div>
                            <p>
                                Olá, <span>{userInfo.name}</span>
                            </p>
                            <Logout onClick={logoutUser}>Sair</Logout>
                        </div>
                    </Profile>
                    <LinkContainer onClick={() => navigate("/carrinho")}>
                        <ShoppingCart color="#ffffff" size={22} />
                        <HeaderLink to="/carrinho" $isActive={pathname === "/carrinho"}>
                            Carrinho
                        </HeaderLink>
                        {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
                    </LinkContainer>
                </Options>
            </Content>
        </Container>
    );
}