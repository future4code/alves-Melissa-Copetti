import React from "react";

const OrderSucess = (props) => {
  const { order, closePopup } = props;
  return (
    <div>
      <h2>Pedido Realizado com sucesso!</h2>
      <h3>Resumo do Pedido:</h3>
      <p>número do pedido:{order.id}</p>
      {order.pizzas.map((pizza) => (
        <p key={pizza.name}>
          Pizza {pizza.name} -{" "}
          {pizza.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "USD",
          })}{" "}
          X {pizza.quantity}
        </p>
      ))}
      <p>
        Total pago:{" "}
        {order.total.toLocaleString("pt-br", {
          style: "currency",
          currency: "USD",
        })}{" "}
      </p>
      <span className="close-popup" onClick={closePopup}>
        x
      </span>
    </div>
  );
};

export default OrderSucess;
