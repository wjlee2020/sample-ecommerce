import React, { useContext } from 'react';
import { Context } from '../Context';
import { Link } from 'react-router-dom';

function Header() {
    const { cartItems } = useContext(Context)
    const cartIconClass = cartItems.length > 0 ? "ri-shopping-cart-fill ri-fw ri-2x" : "ri-shopping-cart-line ri-fw ri-2x"

    return (
        <header>
            <Link to="/"><h2>Pic Some</h2></Link>
            <Link to="/cart">
                <i className={cartIconClass}></i></Link>
        </header>
    )
}

export default Header;