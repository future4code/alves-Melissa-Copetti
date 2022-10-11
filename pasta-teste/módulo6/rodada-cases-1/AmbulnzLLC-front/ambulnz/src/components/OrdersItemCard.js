import React from "react";
import { ButtonRemove } from "./Styled";


function OrderItemCard(props) {
  const { pizza, removeFromCart } = props;

  return (
    <div>
      <p>
        Pizza {pizza.name}-{" "}
        {pizza.price.toLocaleString("pt-br", {
          style: "currency",
          currency: "USD",
        })}{" "}
        x {pizza.quantity}
      </p>
      <ButtonRemove onClick={() => removeFromCart()}>Remover item</ButtonRemove>
    </div>
  );
}

export default OrderItemCard;
