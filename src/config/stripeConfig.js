import { loadStripe } from "@stripe/stripe-js"; 

const stripePromise = loadStripe(
    "pk_test_51RHahz4COw6hOAUo2DQFD0dp7tjYyVOay3wGdR5WSSkVn3X6E0rIguwPrEARxuLzrwlYlRCh3HiDxdpgvvhyYvMI006RwEbEa5",
);

export default stripePromise;