
import React, { useState, useContext } from 'react';
import { Context } from '../Context';

function Image({ className, img }) {
    const [isHovered, setIsHovered] = useState(false)

    const {
        toggleFavorite,
        addCartItem,
        cartItems,
        removeCartItem
    } = useContext(Context)

    function heartIcon() {
        if (img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if (isHovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }

    function cartIcon() {
        const alreadyCarted = cartItems.some(item => item.id === img.id);
        if (alreadyCarted) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeCartItem(img.id)}></i>
        } else if (isHovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addCartItem(img)}></i>;
        }
    }

    return (
        <div
            onMouseEnter={() => {
                setIsHovered(true)
            }}
            onMouseLeave={() => {
                setIsHovered(false)
            }}
            className={`${className} image-container`}>
            <img className='image-grid' src={img.url} alt="stock photos" />
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image;