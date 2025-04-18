import { createBrowserRouter } from "react-router-dom";
// import React from "react";

import { Login } from "../containers/Login"; 
import { Register } from "../containers/Register";

import { Header } from "../components/Header"; 
import { Home } from "../containers/Home";
import { Menu } from "../containers/Menu";
import { Footer } from "../components/Footer";
import { Cart } from "../containers/Cart";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
            <Header />
            <Home />
            <Footer />
            </>
        ),
        
    },
{
    path: "/login",
    element: <Login />,
    
},
{
    path: "/cadastro",
    element: <Register/>,
    
},

{
    path: "/cardapio",
    element:  (
        <>
        <Header />
        <Menu />
        </>
    ),
},

{
    path:"/carrinho",
    element: (
        <>
        <Cart />
        </>
    )
}


]);