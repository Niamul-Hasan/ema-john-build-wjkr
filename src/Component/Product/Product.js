import React from 'react';
import './Product.css';

const Product = (props) => {
    const { product, handleAddToCart } = props;
    const { img, name, seller, price, ratings } = product;


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h2>{name}</h2>
                <p>Price: ${price}</p>
                <p>Brand: {seller}</p>
                <p>Ratings: {ratings} star</p>
            </div>
            <div className="product-btn">
                <button onClick={() => handleAddToCart(product)} className='addToCart'>Add To Cart</button>
            </div>

        </div>
    );
};

export default Product;