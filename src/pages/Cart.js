import React, { useContext, useState } from 'react';
import { Context } from '../Context';
import CartItem from '../components/CartItem';

function Cart() {
    const { cartItems, price, emptyCart } = useContext(Context)
    const [buttonText, setButtonText] = useState('Place your Order')

    const cartImgs = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    const totalPrice = (price * cartItems.length).toLocaleString('en-US', { style: 'currency', currency: 'USD' })

    function handlePurchaseClick() {
        if (cartItems.length >= 1) {
            setButtonText('placing your order...')
            setTimeout(() => {
                alert("Your Order Has Been Placed!")
                setButtonText('Place your Order')
                emptyCart()
            }, 3000)
        }
    }

    function displayButton() {
        if (cartItems.length >= 1) {
            return <button onClick={handlePurchaseClick}>{buttonText}</button>
        } else {
            return "Place some items into your Cart!"
        }
    }
    return (
        <main className="cart-page">
            {cartImgs}
            <p className="total-cost">Total: {totalPrice}</p>
            <div className="order-button">
                {displayButton()}
            </div>
        </main>
    )
}

export default Cart;