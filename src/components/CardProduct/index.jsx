// import PropTypes from "prop-types";

// import { useCart } from "../../hooks/CartContext"; 
// import { CardImage, Container } from "./styles";
// import { CartButton } from "../CartButton";
// import { formatPrice } from "../../utils/formatPrice";







// export function CardProduct({product}) {
//     const { putProductInCart} = useCart();
//         return (
//         <Container>
//             <CardImage src={product.url} alt={product.name}/>
//             <div>
//                 <p>{product.name}</p>
//                 <strong>{formatPrice(product.price)}</strong>
//             </div>
//             <CartButton onClick={() => putProductInCart(product)}>Adicionar ao Carrinho</CartButton>
//         </Container>
//     );
// }

// CardProduct.propTypes = {
//     product: PropTypes.object,
// };




/*depois*/

// import { useState } from "react";
// import PropTypes from "prop-types";

// import { useCart } from "../../hooks/CartContext";
// import {
//   Container,
//   CardImage,
//   CardInfo,
//   CardName,
//   CardPrice,
//   CardDivider,
//   OfferBadge,
//   CategoryTag,
//   QuantityRow,
//   QuantityLabel,
//   QuantityControls,
//   QtyBtn,
//   QtyNumber,
// } from "./styles";
// import { CartButton } from "../CartButton";
// import { formatPrice } from "../../utils/formatPrice";

// export function CardProduct({ product }) {
//   const { putProductInCart } = useCart();
//   const [quantity, setQuantity] = useState(1);

//   const decrease = () => setQuantity((q) => Math.max(1, q - 1));
//   const increase = () => setQuantity((q) => q + 1);

//   const handleAddToCart = () => {
//     for (let i = 0; i < quantity; i++) {
//       putProductInCart(product);
//     }
//     setQuantity(1);
//   };

//   return (
//     <Container>
//       {product.offer && <OfferBadge>🔥 Oferta</OfferBadge>}
//       {product.category && <CategoryTag>{product.category.name}</CategoryTag>}

//       <CardImage src={product.url} alt={product.name} />

//       <CardInfo>
//         <CardName>{product.name}</CardName>
//         <CardPrice>{formatPrice(product.price)}</CardPrice>
//       </CardInfo>

//       <CardDivider />

//       <QuantityRow>
//         <QuantityLabel>Qtd.</QuantityLabel>
//         <QuantityControls>
//           <QtyBtn onClick={decrease}>−</QtyBtn>
//           <QtyNumber>{quantity}</QtyNumber>
//           <QtyBtn onClick={increase}>+</QtyBtn>
//         </QuantityControls>
//       </QuantityRow>

//       <CartButton onClick={handleAddToCart} />
//     </Container>
//   );
// }

// CardProduct.propTypes = {
//   product: PropTypes.object,
// };

/*depoi*/

// import PropTypes from "prop-types";
// import { useCart } from "../../hooks/CartContext";
// import {
//   Container,
//   CardImage,
//   CardInfo,
//   CardName,
//   CardPrice,
//   CardDivider,
//   OfferBadge,
//   CategoryTag,
//   QuantityRow,
//   QuantityLabel,
//   QuantityControls,
//   QtyBtn,
//   QtyNumber,
// } from "./styles";
// import { CartButton } from "../CartButton";
// import { formatPrice } from "../../utils/formatPrice";

// export function CardProduct({ product }) {
//   const { putProductInCart, decreaseProduct, cartProducts } = useCart();

//   // Pega a quantidade real do carrinho para este produto
//   const cartItem = cartProducts.find((p) => p.id === product.id);
//   const quantity = cartItem ? cartItem.quantity : 0;

//   const increase = () => putProductInCart(product);
//   const decrease = () => {
//     if (quantity > 0) decreaseProduct(product.id);
//   };

//   return (
//     <Container>
//       {product.offer && <OfferBadge>🔥 Oferta</OfferBadge>}
//       {product.category && <CategoryTag>{product.category.name}</CategoryTag>}

//       <CardImage src={product.url} alt={product.name} />

//       <CardInfo>
//         <CardName>{product.name}</CardName>
//         <CardPrice>{formatPrice(product.price)}</CardPrice>
//       </CardInfo>

//       <CardDivider />

//       <QuantityRow>
//         <QuantityLabel>Qtd.</QuantityLabel>
//         <QuantityControls>
//           <QtyBtn onClick={decrease} disabled={quantity === 0}>−</QtyBtn>
//           <QtyNumber>{quantity}</QtyNumber>
//           <QtyBtn onClick={increase}>+</QtyBtn>
//         </QuantityControls>
//       </QuantityRow>

//       <CartButton onClick={increase} />
//     </Container>
//   );
// }

// CardProduct.propTypes = {
//   product: PropTypes.object,
// };






import PropTypes from "prop-types";
import { useCart } from "../../hooks/CartContext";
import {
  Container,
  CardImage,
  CardInfo,
  CardName,
  CardDescription,
  CardPrice,
  CardDivider,
  OfferBadge,
  CategoryTag,
  QuantityRow,
  QuantityLabel,
  QuantityControls,
  QtyBtn,
  QtyNumber,
} from "./styles";
import { CartButton } from "../CartButton";
import { formatPrice } from "../../utils/formatPrice";
import { generateDescription } from "../../utils/generateDescription";

export function CardProduct({ product }) {
  const { putProductInCart, decreaseProduct, cartProducts } = useCart();

  const cartItem = cartProducts.find((p) => p.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const increase = () => putProductInCart(product);
  const decrease = () => { if (quantity > 0) decreaseProduct(product.id); };

  return (
    <Container>
      {product.offer && <OfferBadge>🔥 Oferta</OfferBadge>}
      {product.category && <CategoryTag>{product.category.name}</CategoryTag>}

      <CardImage src={product.url} alt={product.name} />

      <CardInfo>
        <CardName>{product.name}</CardName>
        <CardDescription>{generateDescription(product.name)}</CardDescription>
        <CardPrice>{formatPrice(product.price)}</CardPrice>
      </CardInfo>

      <CardDivider />

      <QuantityRow>
        <QuantityLabel>Qtd.</QuantityLabel>
        <QuantityControls>
          <QtyBtn onClick={decrease} disabled={quantity === 0}>−</QtyBtn>
          <QtyNumber>{quantity}</QtyNumber>
          <QtyBtn onClick={increase}>+</QtyBtn>
        </QuantityControls>
      </QuantityRow>

      <CartButton onClick={increase} />
    </Container>
  );
}

CardProduct.propTypes = {
  product: PropTypes.object,
};