import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../constants"



function PizzasMenu(props) {
    const { addToCart } = props

    const [ pizzas, setPizzas ] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/pizzas`)
            .then((res) => {
                setPizzas(res.data.pizzas)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <ul>
                {pizzas.map((pizza) => {
                    return (
                        <div
                            key={pizza.name}
                            pizza={pizza}
                            addToCart={addToCart}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default PizzasMenu