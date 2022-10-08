import OrderItemCard from "../components/OrdersItemCard"


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
        <div>
            <h1>Resumo do pedido</h1>

            {cart.map((pizza) => {
                return (
                    <OrderItemCard
                    key={pizza.name} pizza={pizza} />
                )
            })}

            <h2>Total: {calculateTotal()}</h2>
            <button>Confirmar pedido</button>
        </div>
    )
}

export default OrderSummary