import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    // const cart = props.cart; //option 1
    // const{cart}=props; //option 2

    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {

        if (product.quantity === 0) {
            product.quantity = 1;
        }
        // product.quantity = product.quantity || 1;

        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = total * 7 / 100;
    const grandTotal = total + tax + totalShipping;

    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <p>Selected Item: {quantity}</p>
            <p>Total Price: <strong>$</strong>{total}</p>
            <p>Total Shipping: <strong>$</strong>{totalShipping}</p>
            <p>Tax: <strong>$</strong>{tax}</p>
            <h6>Grand Total: <strong>$</strong>{grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;