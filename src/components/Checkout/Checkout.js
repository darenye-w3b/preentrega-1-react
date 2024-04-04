import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../config/firebase";
import { Timestamp, writeBatch, collection, addDoc, getDocs, query, where } from "firebase/firestore";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const { cart, total, clearCart } = useContext(CartContext);
    const [item, setItem] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const querySnapshot = await getDocs(collection(db, "products"));
            const data = querySnapshot.docs.map(doc => doc.data());
            setItem(data);
        };
        fetchProducts();
    }, []);

};

export default Checkout;










