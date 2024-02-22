import cart from "./assets/cart.svg";


const CartWidget = () => {
    return(
        <div>
            <img src={cart} alt="cart-widget" style={{width: "40px", height: "40px"}} />
            0
        </div>
    )
}

export default CartWidget