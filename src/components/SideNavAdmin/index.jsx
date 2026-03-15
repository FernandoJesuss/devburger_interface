// import { SignOut } from "@phosphor-icons/react";
// import { useResolvedPath } from "react-router-dom";

// import Logo from '../../assets/Logo.svg';
// import { useUser } from "../../hooks/UserContext";
// import { navLinks } from "./navLinks";
// import { Container, NavLink, Footer, NavLinkContainer } from "./styles";


// export function SideNavAdmin() {
//     const { logout } = useUser();
//     const { pathname } = useResolvedPath();
//     return (
//         <Container>
//             <img src={Logo} alt="Hamburger Logo DevBurger" />
//             <NavLinkContainer>
//              {navLinks.map( (link) =>(

// <NavLink key={link.id} to={link.path}
// $isActive={pathname === link.path}
// >
//     {link.icon}
//     <span>
//     {link.label}
//     </span>

// </NavLink>
//              ))}

//             </NavLinkContainer>

//             <Footer>
//                 <NavLink to="/login" onClick={logout}>
//                     <SignOut />
//                     <span>Sair</span>
//                 </NavLink>
//             </Footer>
//         </Container>
//     )
// }


/*depois*/

import { SignOut, X } from "@phosphor-icons/react";
import { useResolvedPath } from "react-router-dom";

import Logo from '../../assets/logo_devburguer.png';
import { useUser } from "../../hooks/UserContext";
import { navLinks } from "./navLinks";
import { Container, NavLink, Footer, NavLinkContainer, CloseButton, AdminBadge } from "./styles";

export function SideNavAdmin({ menuOpen, onClose }) {
  const { logout } = useUser();
  const { pathname } = useResolvedPath();

  return (
    <Container $open={menuOpen}>
      <CloseButton onClick={onClose}><X size={16} /></CloseButton>

      <img src={Logo} alt="Dev Burguer Logo" />

      <AdminBadge><span>Painel Admin</span></AdminBadge>

      <NavLinkContainer>
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            $isActive={pathname === link.path}
            onClick={onClose}
          >
            {link.icon}
            <span>{link.label}</span>
          </NavLink>
        ))}
      </NavLinkContainer>

      <Footer>
        <NavLink to="/login" onClick={() => { logout(); onClose?.(); }}>
          <SignOut />
          <span>Sair</span>
        </NavLink>
      </Footer>
    </Container>
  );
}