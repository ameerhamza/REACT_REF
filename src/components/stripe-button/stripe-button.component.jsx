import React from "react";
import StripeCheckout from "react-stripe-checkout";

const onToken = (token) => {
  console.log(token);
  alert("Payment Successful !");
};

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publisherKey =
    "pk_test_51KbSafKxRNOWUa0hiMjxrbJfc1s2hgUyyNuCOywfI2Z7DqILcoibZ3obgjBPvDNhlqSED2kFrfOpgK0ZML9DwA8O00r9euyM0s";

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Ltd"
      shippingAddress
      billingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publisherKey}
    />
  );
};

export default StripeCheckoutButton;
