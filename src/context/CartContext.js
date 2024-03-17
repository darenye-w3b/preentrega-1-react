import { createContext, useState } from "react"

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.error("El producto ya fue agregado")
        }
    }

    const totalPrice = () => {
        return cart.reduce((prev,act)=> prev + act.quantity * act.price,0)
    }

    const totalQuantity = () => cart.reduce((acumulador, productsActual)=> acumulador + productsActual.quantity, 0);

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId) 
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart
        }}>
            { children }
        </CartContext.Provider>
    )
}

