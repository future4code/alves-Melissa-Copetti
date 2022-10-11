
import OrderItemCard from "../components/OrdersItemCard"
import { CardButton, CardCart, CardDetails, TextBody, Title } from "../components/Styled"


function OrderSummary(props) {
    const { cart } = props

    const calculateTotal = () => {
        const total = cart.reduce(
            (acc, item) => acc + (item.price * item.quantity),
            0
        )

        return total.toLocaleString(
            'pt-br',
            { style: 'currency', currency: 'USD' }
        )
    }



    return (
        <CardCart>
            <CardDetails>
            <Title>Resumo do pedido</Title>
<TextBody>
            {cart.map((pizza) => {
                return (
                    <OrderItemCard
                    key={pizza.name} pizza={pizza} />
                )
            })}
</TextBody>
            <Title>Total: {calculateTotal()}</Title>
            </CardDetails>
            <CardButton>Confirmar pedido</CardButton>
        </CardCart>
    )
}

export default OrderSummary