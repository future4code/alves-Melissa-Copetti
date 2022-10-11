import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../constants"
import PizzaCard from "../components/PizzaCard"
import { CardLista } from "../components/Styled"




function PizzasMenu(props) {
    const { addToCart } = props

    const [ pizzas, setPizzas ] = useState([])

  
    useEffect(() => {
        axios.get(`${BASE_URL}/pizza`)
            .then((res) => {
                setPizzas(res.data.pizzas)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <CardLista>
                {pizzas.map((pizza) => {
                    return (
                        <PizzaCard
                            key={pizza.name}
                            pizza={pizza}
                            addToCart={addToCart}
                        />
                    )
                })}
            </CardLista>
        </div>
    )
}

export default PizzasMenu