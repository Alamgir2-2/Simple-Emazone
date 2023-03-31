import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
// const cart = props.cart; //option 1
// const{cart}=props; //option 2

let total = 0;
let totalShipping = 0;
for(const product of cart){
    total = total + product.price;
    totalShipping = totalShipping + product.shipping;
}

const tax = total*7/100;
const grandTotal = total + tax +totalShipping;

    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <p>Selected Item: {cart.length}</p>
            <p>Total Price: <strong>$</strong>{total}</p>
            <p>Total Shipping: <strong>$</strong>{totalShipping}</p>
            <p>Tax: <strong>$</strong>{tax}</p>
            <h6>Grand Total: <strong>$</strong>{grandTotal}</h6>
        </div>
    );
};

export default Cart;