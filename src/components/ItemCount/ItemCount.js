import { useState } from "react"
import { Link } from "react-router-dom"



const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, SetQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            SetQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            SetQuantity(quantity - 1)
        }
    }

    return(
        <div className="container">
            <div className="columns buttons are-normal">
                <div className="column is-5">
                    <button className="button is-link is-light" onClick={decrement}>-</button>
                </div>
                <div className="column is-2">
                    <h4 className="number">{quantity}</h4>
                </div>
                <div className="column is-5">
                    <button className="button is-link is-light" onClick={increment}>+</button>
                </div>
            </div>
            <div>
                <button className="button is-link is-light" onClick={() => onAdd(quantity)} disabled={!stock}> Agregar al Carrito </button>
            </div>
            <div>
                <Link to="/" className="button is-link is-light is-medium">Volver</Link>
            </div>
        </div>
    )
}

export default ItemCount