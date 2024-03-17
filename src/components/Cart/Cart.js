import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { getProducts } from "../../asyncMock";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to="/" className="Option">Productos</Link>
            </div>
        );
    }

    return (
        <div>
            {cart.map(p => {
                const product = products.find(prod => prod.id === p.id);
                if (product) {
                    return <CartItem key={p.id} {...p} img={product.img} />;
                }
                return null;
            })}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar Carrito</button>
            <Link to="/checkout" className="Option">Checkout</Link>
        </div>
    );
};

export default Cart;




