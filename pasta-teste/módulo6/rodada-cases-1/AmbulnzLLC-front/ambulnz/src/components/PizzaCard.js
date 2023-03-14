import React from "react";
import { Button, CardA, Tags, TicketPrice, Title,  } from "./Styled";


const PizzaCard = (props) => {
  const { pizza, addToCart } = props;



  return (
    <div>
      
      <CardA>
<Tags>
          <Title>{pizza.name}</Title>
          {pizza.ingredients.map((item) => {
              return <span key={item}>{`${item} `}</span>;
            })}
</Tags>
<TicketPrice>
          <h3>
            {pizza.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "USD",
            })}
          </h3>
        </TicketPrice>
          <Button onClick={() => addToCart(pizza)}>
            Adicionar no carrinho
          </Button>
   </CardA> </div>
  );
};

export default PizzaCard;
