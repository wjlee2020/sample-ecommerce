import React, { useContext, useState } from 'react';
import { Context } from '../Context';

function Image({ className, img }) {
    const [isHovered, setIsHovered] = useState(false)

    const { toggleFavorite } = useContext(Context)

    function heartIcon() {
        if (img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if (isHovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }

    const cartIcon = isHovered && <i className="ri-add-circle-line cart"></i>;

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
            {cartIcon}
        </div>
    )
}

export default Image;