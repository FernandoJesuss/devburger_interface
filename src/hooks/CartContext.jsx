import { useContext, createContext, useEffect, useState, Children } from "react";

const CartContext = createContext({});

export const CartProvider = ({ Children }) => {
const [cartProducts, setProducts] = useState([])


const putProductInCart = (product) => {


}

const clearCart = () => {



}

const deleteProduct = (product) => {



}


const increaseProduct = (productId) => {



}

const decreaseProduct = (productId) => {




}


    return ( <CartContext.Provider 
        value={{
            cartProducts,
             putProductInCart,
              decreaseProduct,
               clearCart,
                increaseProduct,
                 decreaseProduct,
                  deleteProduct
                }} > 

        { children }
    </CartContext.Provider>
    
);

};

export const useCart = () => {
const context = useContext(CartContext);

if (!context){
    throw new Error("useCart must be used with a context");
}
    return context;
};

