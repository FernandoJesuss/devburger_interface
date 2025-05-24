import { Route, Routes } from "react-router-dom";

import { Cart, CompletePayment, Checkout, Home, Login, Menu, Register, Admin,  } from "../containers";
import { UserLayout } from "../layouts/UserLayout";
import { AdminLayout } from "../layouts/AdminLayout";


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<UserLayout />}>
             <Route path="/" element={<Home />} />
              <Route path="/cardapio" element={<Menu />} />
               <Route path="/carrinho" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                 <Route path="/complete" element={<CompletePayment />} />
            </Route>

            <Route path="/admin" element={<AdminLayout />}> 
             <Route path="/admin/home" element={<Admin />} /> 
             </Route>

             <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Register />} />


        </Routes>
    )
}

















// export const router = createBrowserRouter([
//     {
//         path: "/",
//         element: (
//             <>
//                 <Header />
//                 <Home />
//                 <Footer />
//             </>
//         ),

//     },
//     {
//         path: "/login",
//         element: <Login />,

//     },
//     {
//         path: "/cadastro",
//         element: <Register />,

//     },

//     {
//         path: "/cardapio",
//         element: (
//             <>
//                 <Header />
//                 <Menu />
//             </>
//         ),
//     },

//     {
//         path: "/carrinho",
//         element: 
            
//                 <Cart />
            
        
//     },

//     {
//         path: "/checkout",
//         element:

//             <Checkout />,


//     },

//     {
//         path: "/complete",
//         element:

//             <CompletePayment />,


//     },


// ]);


























































































































// import { createBrowserRouter } from "react-router-dom";
// // import React from "react";

// import { Footer } from "../components/Footer";
// import { Header } from "../components/Header";
// import { Cart, CompletePayment, Checkout, Home, Login, Menu, Register } from "../containers";

// export const router = createBrowserRouter([
//     {
//         path: "/",
//         element: (
//             <>
//                 <Header />
//                 <Home />
//                 <Footer />
//             </>
//         ),

//     },
//     {
//         path: "/login",
//         element: <Login />,

//     },
//     {
//         path: "/cadastro",
//         element: <Register />,

//     },

//     {
//         path: "/cardapio",
//         element: (
//             <>
//                 <Header />
//                 <Menu />
//             </>
//         ),
//     },

//     {
//         path: "/carrinho",
//         element: 
            
//                 <Cart />
            
        
//     },

//     {
//         path: "/checkout",
//         element:

//             <Checkout />,


//     },

//     {
//         path: "/complete",
//         element:

//             <CompletePayment />,


//     },


// ]);