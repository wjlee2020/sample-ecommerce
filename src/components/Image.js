import React, { useState } from 'react';

function Image({ className, img }) {
    const [isHovered, setIsHovered] = useState(false)

    const heartIcon = isHovered && <i className="ri-heart-line favorite"></i>;
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
            {heartIcon}
            {cartIcon}
        </div>
    )
}

export default Image;