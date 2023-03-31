import React from 'react';
import './Product.css'
const Product = (props) => {
    // console.log(props.product)
    const { name, img, price, seller, shipping, stock, rating } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: <strong>$</strong>{price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {rating} stars</p>
            </div>
            <button className='cart-btn'>Add to Cart</button>
        </div>
    );
};

export default Product;