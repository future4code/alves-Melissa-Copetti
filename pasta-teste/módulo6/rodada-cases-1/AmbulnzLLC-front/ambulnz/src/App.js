import axios from "axios";
import React, { useEffect, useState } from "react";
import OrderSucess from "./components/OrderSucess";
// import { ContainerMain } from "./components/Styled";
import { BASE_URL } from "./constants";
import OrderSummary from "./screens/OrderSummary";
import PizzasMenu from "./screens/PizzasMenu";

const App = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const calculateTotal = () => {
    const total = cart.reduce(
        (acc, item) => acc + (item.price * item.quantity),
        0
    )

    setTotal(total)
}
  const [orderSucessPopupState, setOrderSucessPopupState] = useState({
    isActive: false,
    sumary: {
      id: null,
      pizzas: null,
      total: null,
    },
  });
  useEffect(() => {
    calculateTotal();
  }, );
  const addToCart = (pizzaToAdd) => {
    const foundIndex = cart.findIndex((pizzaInCart) => {
      return pizzaInCart.name === pizzaToAdd.name;
    });
    if (foundIndex >= 0) {
      const newCart = [...cart];
      newCart[foundIndex].quantity += 1;
      setCart(newCart);
    } else {
      const newCart = [...cart];
      const newPizza = {
        name: pizzaToAdd.name,
        price: pizzaToAdd.price,
        quantity: 1,
      };
      newCart.push(newPizza);
      setCart(newCart);
    }
  };
  const removeFromCart = (pizzaToRemove) => {
    if (pizzaToRemove.quantity > 1) {
      const newCart = cart.map((pizza) => {
        if (pizza.name === pizzaToRemove.name) {
          pizza.quantity -= 1;
        }

        return pizza;
      });

      setCart(newCart);
    } else {
      const newCart = cart.filter((pizza) => {
        return pizza.name !== pizzaToRemove.name;
      });
      setCart(newCart);
    }
  };

  const confirmOrder = async () => {
    try {
      const body = { pizzas: cart };

      const res = await axios.post(`${BASE_URL}/orders`, body);
      setOrderSucessPopupState({
        isActive: true,
        summary: res.data.order,
      });
      setCart([]);
    } catch (error) {
      console.log(error);
    }
  };
  const closePopup = () => {
    setOrderSucessPopupState({
      isActive: false,
      sumary: {
        id: null,
        pizzas: null,
        total: null,
      },
    });
  };
  return (
    <div>
      <header></header>
      <main>
      <PizzasMenu addToCart={addToCart} />
      </main>
      <div>
      <OrderSummary
        cart={cart}
        removeFromCart={removeFromCart}
        total={total}
        confirmOrder={confirmOrder}
      />
      {orderSucessPopupState.isActive && (
        <OrderSucess
          order={orderSucessPopupState.sumary}
          closePopup={closePopup}
        />
      )}</div>
      
    </div>
  );
};

export default App;
