import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const Stripe = () => {
  const [product, setProduct] = React.useState({
    name: "UUTT",
    price: 10,
    productBy: "UUTT",
  });

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    return axios
      .post("http://localhost:4500/api/stripe", body)
      .then((res) => {
        console.log("Res", res);
        const { status } = res;
        console.log("Status", status);
      })
      .catch((err) => console.log(err));
  };
  return (
    <StripeCheckout
      //   stripeKey={process.env.REACT_APP_KEY}
      stripeKey="pk_test_7O7L2gvc9YEZ3Mdta6v0QtoO00yBNxrDXu"
      token={makePayment}
      amount={product.price * 100}
      shippingAddress
      billingAddress
      name="Buy React"
    >
      <button className="btn">Download</button>
    </StripeCheckout>
  );
};

export default Stripe;
