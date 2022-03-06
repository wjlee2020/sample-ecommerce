import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";
import HoverHook from "../customHooks/HoverHook";

function Image({ className, img }) {
	const [hovered, ref] = HoverHook();

	const { toggleFavorite, addCartItem, cartItems, removeCartItem } =
		useContext(Context);

	function heartIcon() {
		if (img.isFavorite) {
			return (
				<i
					className="ri-heart-fill favorite"
					onClick={() => toggleFavorite(img.id)}
				></i>
			);
		} else if (hovered) {
			return (
				<i
					className="ri-heart-line favorite"
					onClick={() => toggleFavorite(img.id)}
				></i>
			);
		}
	}

	function cartIcon() {
		const alreadyCarted = cartItems.some((item) => item.id === img.id);
		if (alreadyCarted) {
			return (
				<i
					className="ri-shopping-cart-fill cart"
					onClick={() => removeCartItem(img.id)}
				></i>
			);
		} else if (hovered) {
			return (
				<i
					className="ri-add-circle-line cart"
					onClick={() => addCartItem(img)}
				></i>
			);
		}
	}

	return (
		<div ref={ref} className={`${className} image-container`}>
			<img className="image-grid" src={img.url} alt="stock photos" />
			{heartIcon()}
			{cartIcon()}
		</div>
	);
}

Image.propTypes = {
	className: PropTypes.string,
	img: PropTypes.shape({
		id: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
		isFavorite: PropTypes.bool,
	}),
};

export default Image;
