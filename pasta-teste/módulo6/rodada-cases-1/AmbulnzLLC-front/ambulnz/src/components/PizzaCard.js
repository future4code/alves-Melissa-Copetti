import React from 'react'

export const PizzaCard = () => {
  return (
    <div>
    {pizzas.map((pizza)=>{
        return (
        <Container KEY={pizza.name}>
         <h3>{pizza.name}</h3> 
         <p>{pizza.price.toLocaleString('pt-br', style: 'currency', currency:'USD');}</p>
         <p>{pizza.ingredients}</p>
        </Container>
    )  })}</div>
  )
}
