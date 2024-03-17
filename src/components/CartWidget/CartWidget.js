import { useContext } from "react";
import cart from "./assets/cart.svg";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom"


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return(
        <Link to="/cart" className="CartWidget" style={{ display: totalQuantity > 0 ? "block" : "none"}}>
        <img src={cart} alt="cart-widget" style={{width: "40px", height: "40px"}} />
        { totalQuantity }
        </Link>
    )
}

export default CartWidget