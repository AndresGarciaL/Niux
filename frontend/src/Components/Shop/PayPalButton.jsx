import React from 'react';

import { PayPalButtons } from '@paypal/react-paypal-js';

const PayPalButton = (props) => {
  return (
    <PayPalButtons
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: props.invoice,
              amount: {
                value: props.total,
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order?.capture();
        actions.redirect("/");
        console.log(order);
      }}
    ></PayPalButtons>
  );
};

export default PayPalButton;
