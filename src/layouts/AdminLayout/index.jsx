// import { Outlet, Navigate } from "react-router-dom";
// import { SideNavAdmin } from "../../components";
// import { Container } from "./styles";



// export function AdminLayout() {
//   const { admin: isAdmin } = JSON.parse(localStorage.getItem("devburger:userData"));

//     return isAdmin ?(
//       <Container>
//       <SideNavAdmin />
//      <main>
//       <section>
//          <Outlet />
//       </section>
//      </main>
//       </Container>
//     ): (
//        <Navigate to="/login" />
//     );

// }


/*depois*/

import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { List } from "@phosphor-icons/react";
import { SideNavAdmin } from "../../components";
import Logo from "../../assets/logo_devburguer.png";
import { Container, MobileTopbar, HamburgerButton, Overlay } from "./styles";

export function AdminLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { admin: isAdmin } = JSON.parse(localStorage.getItem("devburger:userData"));

  if (!isAdmin) return <Navigate to="/login" />;

  return (
    <Container>
      {/* Topbar mobile */}
      <MobileTopbar>
        <img src={Logo} alt="Dev Burguer" />
        <HamburgerButton onClick={() => setMenuOpen(true)}>
          <span /><span /><span />
        </HamburgerButton>
      </MobileTopbar>

      {/* Overlay mobile */}
      <Overlay $open={menuOpen} onClick={() => setMenuOpen(false)} />

      {/* Sidebar */}
      <SideNavAdmin menuOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <main>
        <section>
          <Outlet />
        </section>
      </main>
    </Container>
  );
}