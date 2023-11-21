import React from 'react';

import { PayPalButtons } from '@paypal/react-paypal-js';
import { OrderService } from '../../services/orderService';
import { productService } from '../../services/productService';
import { useAuthStore } from '../../stores/Auth/authStore';

const PayPalButton = (props) => {
  const useUser = useAuthStore((state) => state.user);

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
        await OrderService.createOrder(props.preOrder);
        await actions.order?.capture();
        await productService.deleteCartUser(useUser);
        actions.redirect('http://localhost:5173/order_summary');
      }}
    ></PayPalButtons>
  );
};

export default PayPalButton;
