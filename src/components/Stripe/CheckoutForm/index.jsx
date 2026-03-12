
// // import {
// //     PaymentElement,
// //     useStripe,
// //     useElements,
// // } from "@stripe/react-stripe-js";
// // import { useLocation, useNavigate } from "react-router-dom";
// // import { useState } from "react";
// // // import "../../styles.css";

// // import { useCart } from "../../../hooks/CartContext";
// // import { api } from "../../../services/api";
// // import { toast } from "react-toastify";

// // export default function CheckoutForm() {
// //     const { cartProducts, clearCart } = useCart();
// //     const navigate = useNavigate();
// //     const stripe = useStripe();
// //     const elements = useElements();
// //     const location = useLocation();
// //     const dpmCheckerLink = location.state?.dpmCheckerLink || "#";
// //     const [message, setMessage] = useState(null);
// //     const [isLoading, setIsLoading] = useState(false);

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();

// //         if (!stripe || !elements) {
// //             console.error("Stripe ou Elements com falha, tente novamente");
// //             return;
// //         }

// //         setIsLoading(true);

// //         const { error, paymentIntent } = await stripe.confirmPayment({
// //             elements,
// //             redirect: "if_required",
// //         });

// //         if (error) {
// //             setMessage(error.message);
// //             toast.error(error.message);
// //         } else if (paymentIntent && paymentIntent.status === "succeeded") {
// //             try {
// //                 const products = cartProducts.map((product) => ({
// //                     id: product.id,
// //                     quantity: product.quantity,
// //                     price: product.price,
// //                 }));

// //                 const { status } = await api.post(
// //                     "/orders",
// //                     { products },
// //                     { validateStatus: () => true }
// //                 );

// //                 if (status === 200 || status === 201) {
// //                     clearCart();
// //                     toast.success("Pedido realizado com sucesso!");
// //                     setTimeout(() => {
                     
// //                     }, 3000);
// //                 } else if (status === 409) {
// //                     toast.error("Falha ao realizar o seu pedido");
// //                 } else {
// //                     throw new Error();
// //                 }
// //             } catch (error) {
// //                 toast.error("Falha no Sistema! Tente novamente");
// //             }
// //         } else {
// //                navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`);
// //         }

// //         setIsLoading(false);
// //     };

// //     const paymentElementOptions = {
// //         layout: "tabs",
// //     };

// //     return (
// //         <div className="container">
// //             <form id="payment-form" onSubmit={handleSubmit}>
// //                 <PaymentElement id="payment-element" options={paymentElementOptions} />
// //                 <button
// //                     disabled={isLoading || !stripe || !elements}
// //                     id="submit"
// //                     className="button"
// //                 >
// //                     <span id="button-text">
// //                         {isLoading ? <div className="spinner" id="spinner"></div> : "Pagar Agora"}
// //                     </span>
// //                 </button>
// //                 {message && <div id="payment-message">{message}</div>}
// //             </form>
// //             <div id="dpm-annotation">
// //                 <p>
// //                     Os métodos de pagamento são disponibilizados de acordo com sua região.&nbsp;
// //                     <a
// //                         href={dpmCheckerLink}
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                         id="dpm-integration-checker"
// //                     >
// //                         Ver métodos de pagamentos
// //                     </a>
// //                 </p>
// //             </div>
// //         </div>
// //     );
// // }






// import {
//     PaymentElement,
//     useStripe,
//     useElements,
// } from "@stripe/react-stripe-js";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useState } from "react";
// // import "../../styles.css";

// import { useCart } from "../../../hooks/CartContext";
// import { api } from "../../../services/api";
// import { toast } from "react-toastify";

// export default function CheckoutForm() {
//     const { cartProducts, clearCart } = useCart();
//     const navigate = useNavigate();
//     const stripe = useStripe();
//     const elements = useElements();
//     const location = useLocation();
//     const dpmCheckerLink = location.state?.dpmCheckerLink || "#";
//     const [message, setMessage] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!stripe || !elements) {
//             console.error("Stripe ou Elements com falha, tente novamente");
//             return;
//         }

//         setIsLoading(true);

//         const { error, paymentIntent } = await stripe.confirmPayment({
//             elements,
//             redirect: "if_required",
//         });

//         if (error) {
//             setMessage(error.message);
//             toast.error(error.message);
//         } else if (paymentIntent && paymentIntent.status === "succeeded") {
//             try {
//                 const products = cartProducts.map((product) => ({
//                     id: product.id,
//                     quantity: product.quantity,
//                     price: product.price,
//                 }));

//                 const { status } = await api.post(
//                     "/orders",
//                     { products },
//                     { validateStatus: () => true }
//                 );

//                 if (status === 200 || status === 201) {
//                     clearCart();
//                     toast.success("Pedido realizado com sucesso!");
//                     // Redireciona para a página de sucesso após 3 segundos
//                     setTimeout(() => {
//                         navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`);
//                     }, 3000);
//                 } else if (status === 409) {
//                     toast.error("Falha ao realizar o seu pedido");
//                 } else {
//                     throw new Error();
//                 }
//             } catch (error) {
//                 toast.error("Falha no Sistema! Tente novamente");
//             }
//         } else {
//             // Se o pagamento não foi bem-sucedido, redireciona
//             navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`);
//         }

//         setIsLoading(false);
//     };

//     const paymentElementOptions = {
//         layout: "tabs",
//     };

//     return (
//         <div className="container">
//             <form id="payment-form" onSubmit={handleSubmit}>
//                 <PaymentElement id="payment-element" options={paymentElementOptions} />
//                 <button
//                     disabled={isLoading || !stripe || !elements}
//                     id="submit"
//                     className="button"
//                 >
//                     <span id="button-text">
//                         {isLoading ? <div className="spinner" id="spinner"></div> : "Pagar Agora"}
//                     </span>
//                 </button>
//                 {message && <div id="payment-message">{message}</div>}
//             </form>
//             <div id="dpm-annotation">
//                 <p>
//                     Os métodos de pagamento são disponibilizados de acordo com sua região.&nbsp;
//                     <a
//                         href={dpmCheckerLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         id="dpm-integration-checker"
//                     >
//                         Ver métodos de pagamentos
//                     </a>
//                 </p>
//             </div>
//         </div>
//     );
// }



/*depois*/
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../../hooks/CartContext";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import Logo from "../../../assets/Logo.svg";
import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #080604 0%, #111 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 16px;
  font-family: 'Poppins', sans-serif;
`;

const Card = styled.div`
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,248,240,.08);
  border-radius: 24px;
  padding: 40px 36px;
  width: 100%;
  max-width: 480px;
  box-shadow: 0 32px 80px rgba(0,0,0,.5);
  opacity: 0;
  animation: ${fadeUp} .6s ease .1s forwards;

  @media (max-width: 480px) {
    padding: 28px 20px;
    border-radius: 16px;
  }
`;

const TopAccent = styled.div`
  height: 2px;
  background: linear-gradient(90deg, transparent, #C8000A, #FF2020, #C8000A, transparent);
  border-radius: 2px;
  margin-bottom: 28px;
  opacity: .7;
`;

const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;

  img { height: 36px; }
`;

const LogoLabel = styled.div`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 10px;
  letter-spacing: 4px;
  color: rgba(255,248,240,.25);
  text-transform: uppercase;
`;

const SectionTitle = styled.h2`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 28px;
  letter-spacing: 3px;
  color: #FFF8F0;
  margin-bottom: 4px;
`;

const SectionSub = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  color: rgba(255,248,240,.25);
  text-transform: uppercase;
  margin-bottom: 28px;
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(255,255,255,.06);
  margin: 24px 0;
`;

const PayButton = styled.button`
  width: 100%;
  padding: 16px;
  margin-top: 20px;
  background: linear-gradient(135deg, #C8000A 0%, #A0000A 100%);
  border: none;
  border-radius: 10px;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 18px;
  letter-spacing: 6px;
  color: #fff;
  cursor: pointer;
  transition: all .22s ease;
  box-shadow: 0 4px 0 #5A0005, 0 8px 30px rgba(200,0,10,.4);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 0 #5A0005, 0 14px 40px rgba(200,0,10,.6);
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
    box-shadow: 0 2px 0 #5A0005;
  }

  &:disabled {
    opacity: .45;
    cursor: not-allowed;
  }
`;

const Spinner = styled.div`
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255,255,255,.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: ${spin} .7s linear infinite;
`;

const PayMessage = styled.p`
  text-align: center;
  font-size: 12px;
  color: #FF6B6B;
  margin-top: 12px;
  font-weight: 600;
  letter-spacing: .3px;
`;

const DpmNote = styled.p`
  text-align: center;
  font-size: 10px;
  color: rgba(255,248,240,.18);
  margin-top: 16px;
  letter-spacing: .5px;

  a {
    color: rgba(200,0,10,.7);
    text-decoration: none;
    font-weight: 600;
    &:hover { color: #FF2020; }
  }
`;

const stripeAppearance = {
  theme: "night",
  variables: {
    colorPrimary: "#C8000A",
    colorBackground: "#1a1a1a",
    colorText: "#FFF8F0",
    colorDanger: "#FF6B6B",
    fontFamily: "Poppins, sans-serif",
    spacingUnit: "4px",
    borderRadius: "8px",
  },
};

export default function CheckoutForm() {
  const { cartProducts, clearCart } = useCart();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const dpmCheckerLink = location.state?.dpmCheckerLink || "#";
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    if (error) {
      setMessage(error.message);
      toast.error(error.message);
    } else if (paymentIntent?.status === "succeeded") {
      try {
        const products = cartProducts.map((p) => ({
          id: p.id,
          quantity: p.quantity,
          price: p.price,
        }));

        const { status } = await api.post("/orders", { products }, { validateStatus: () => true });

        if (status === 200 || status === 201) {
          clearCart();
          toast.success("Pedido realizado com sucesso! 🍔");
          setTimeout(() => {
            navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`);
          }, 2000);
        } else {
          throw new Error();
        }
      } catch {
        toast.error("Falha no sistema! Tente novamente");
      }
    } else if (paymentIntent) {
      navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`);
    }

    setIsLoading(false);
  };

  return (
    <Wrapper>
      <Card>
        <TopAccent />

        <LogoArea>
          <img src={Logo} alt="Dev Burguer" />
          <LogoLabel>Pagamento seguro</LogoLabel>
        </LogoArea>

        <SectionTitle>FINALIZAR PEDIDO</SectionTitle>
        <SectionSub>Insira os dados do cartão abaixo</SectionSub>

        <form onSubmit={handleSubmit}>
          <PaymentElement options={{ layout: "tabs", appearance: stripeAppearance }} />

          <Divider />

          <PayButton disabled={isLoading || !stripe || !elements}>
            {isLoading ? <><Spinner /> Processando...</> : "🔒 PAGAR AGORA"}
          </PayButton>

          {message && <PayMessage>{message}</PayMessage>}
        </form>

        <DpmNote>
          Métodos de pagamento disponíveis conforme sua região.{" "}
          <a href={dpmCheckerLink} target="_blank" rel="noopener noreferrer">
            Ver métodos disponíveis
          </a>
        </DpmNote>
      </Card>
    </Wrapper>
  );
}