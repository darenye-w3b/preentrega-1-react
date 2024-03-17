import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, name, quantity, price, img }) => {
    const { removeItem } = useContext(CartContext);

    if (!img) {
        return null; 
    }

    return (
        <div>
            <picture>
                <img src={img} alt={name} />
            </picture>
            <div>
                <h2>{name}</h2>
                <p>Cantidad: {quantity}</p>
                <p>Subtotal: {quantity * price}</p>
                <button onClick={() => removeItem(id)}>Eliminar</button>
            </div>
        </div>
    );
};

export default CartItem;


