import React from "react";
import { Button, CardA, CardLista, Tags, Title } from "./Styled";


const PizzaCard = (props) => {
  const { pizza, addToCart } = props;



  return (
    <CardLista>
      <CardA>
<Tags>
          <Title>{pizza.name}</Title>
          {pizza.ingredients.map((item) => {
              return <span key={item}>{`${item} `}</span>;
            })}
</Tags>
          <p className="card-price">
            {pizza.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "USD",
            })}
          </p>
        
          <Button onClick={() => addToCart(pizza)}>
            Adicionar no carrinho
          </Button>
   </CardA> </CardLista>
  );
};

export default PizzaCard;
