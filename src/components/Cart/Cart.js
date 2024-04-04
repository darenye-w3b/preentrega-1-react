import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { cart, clearCart, totalQuantity } = useContext(CartContext);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const querySnapshot = await getDocs(collection(db, "products"));
            const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setItems(data);
        };
        fetchProducts();
    }, []);

    const totalPrice = () => {
        return cart.reduce((prev, item) => {
            const product = items.find(p => p.id === item.id);
            return prev + (product.price * item.quantity);
        }, 0);
    };

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
            {cart.map(cartItem => {
                const product = items.find(p => p.id === cartItem.id);
                return product ? (
                    <CartItem key={product.id} {...product} quantity={cartItem.quantity} />
                ) : null;
            })}
            <h3>Total: ${totalPrice()}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar Carrito</button>
            <Link to="/checkout" className="Option">Checkout</Link>
        </div>
    );
};

export default Cart;











