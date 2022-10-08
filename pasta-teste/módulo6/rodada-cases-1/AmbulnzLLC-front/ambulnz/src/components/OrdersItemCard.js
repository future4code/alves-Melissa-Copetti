import React from 'react'

function OrderItemCard(props) {
    const { pizza } = props

    return (
        <div>
            <p>
                Pizza {pizza.name}
                - {pizza.price.toLocaleString(
                    'pt-br',
                    { style: 'currency', currency: 'USD' }
                )}
              {" "}  x {pizza.quantity}</p>
            <button onClick={()=>removeFromCart()}>Remover item</button>
        </div>
    )
}

export default OrderItemCard