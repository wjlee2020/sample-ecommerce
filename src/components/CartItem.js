import React, { useContext } from 'react';
import PropTypes from "prop-types"
import { Context } from '../Context';
import HoverHook from '../customHooks/HoverHook';

function CartItem({ item }) {
    const [hovered, ref] = HoverHook();
    const { removeCartItem, price } = useContext(Context)

    const trashIcon = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item">
            <i className={trashIcon}
                ref={ref}
                onClick={() => removeCartItem(item.id)}></i>
            <img src={item.url} alt={item.id} width="130px" />
            <p>{price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired
    })
}

export default CartItem;