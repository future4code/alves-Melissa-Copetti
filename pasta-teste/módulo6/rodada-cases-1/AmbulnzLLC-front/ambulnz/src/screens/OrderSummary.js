
import OrderItemCard from "../components/OrdersItemCard"
import { CardButton, CardCart, CardDetails, TextBody, Title } from "../components/Styled"


function OrderSummary(props) {
    const { cart, removeFromCart, total, confirmOrder } = props




    return (
        <CardCart>
            <CardDetails>
            <Title>Resumo do pedido</Title>
<TextBody>
            {cart.map((pizza) => {
                return (
                    <OrderItemCard
                    key={pizza.name}
                    pizza={pizza}
                    removeFromCart={removeFromCart}/>
                )
            })}
</TextBody>
            <Title>Total: {
                    total.toLocaleString(
                    'pt-br',
                    { style: 'currency', currency: 'USD' }
                )}</Title>
            </CardDetails>
            <CardButton onClick={confirmOrder}>Confirmar pedido</CardButton>
        </CardCart>
    )
}

export default OrderSummary