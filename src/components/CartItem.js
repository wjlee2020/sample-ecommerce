import React, { useContext, useState } from 'react';
import { Context } from '../Context';

function CartItem({ item }) {
    const [hovered, setHovered] = useState(false)
    const { removeCartItem, price } = useContext(Context)

    const trashIcon = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item">
            <i className={trashIcon}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => removeCartItem(item.id)}></i>
            <img src={item.url} alt={item.id} width="130px" />
            <p>{price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
        </div>
    )
}

export default CartItem;