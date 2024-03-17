import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../config/firebase";
import { Timestamp, writeBatch, collection, addDoc } from "firebase/firestore";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { getProducts } from "../../asyncMock";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const { cart, total, clearCart } = useContext(CartContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    const createOrder = async (formData) => {
        setLoading(true);

        try {
            const objOrder = {
                buyer: { ...formData },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            };

            const batch = writeBatch(db);
            const outOfStock = [];

            for (const item of cart) {
                const product = products.find(prod => prod.id === item.id);
                const stockDb = product.stock;
                const prodQuantity = item.quantity;

                if (stockDb >= prodQuantity) {
                    batch.update(collection(db, "products").doc(product.id), { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: product.id, ...product });
                }
            }

            if (outOfStock.length === 0) {
                await batch.commit();
                const orderRef = collection(db, "orders");
                const orderAdded = await addDoc(orderRef, objOrder);
                setOrderId(orderAdded.id);
                clearCart();
            } else {
                console.error("Hay productos que están fuera de stock");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h1>Se está generando su orden....</h1>;
    }

    if (orderId) {
        return <h1>El id de su orden es: {orderId}</h1>;
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={(formData) => createOrder(formData)} />
            <div>
                <h2>Resumen de la orden:</h2>
                <ul>
                    {cart.map(item => {
                        const product = products.find(prod => prod.id === item.id);
                        if (product) {
                            return (
                                <li key={item.id}>
                                    <img src={product.img} alt={product.name} style={{ width: "50px", height: "50px" }} />
                                    {product.name} - Cantidad: {item.quantity} - Precio: ${item.price}
                                </li>
                            );
                        } else {
                            return (
                                <li key={item.id}>
                                    Producto no encontrado
                                </li>
                            );
                        }
                    })}
                </ul>
                <p>Total: ${total}</p>
            </div>
        </div>
    );
};

export default Checkout;









