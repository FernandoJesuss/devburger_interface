import PropTypes from "prop-types";

import { useCart } from "../../hooks/CartContext"; 
import { CardImage, Container } from "./styles";
import { CartButton } from "../CartButton";
import { formatPrice } from "../../utils/formatPrice";







export function CardProduct({product}) {
    const { putProductInCart} = useCart();
        return (
        <Container>
            <CardImage src={product.url} alt={product.name}/>
            <div>
                <p>{product.name}</p>
                <strong>{formatPrice(product.price)}</strong>
            </div>
            <CartButton onClick={() => putProductInCart(product)}>Adicionar ao Carrinho</CartButton>
        </Container>
    );
}

CardProduct.propTypes = {
    product: PropTypes.object,
};