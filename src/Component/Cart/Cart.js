import React from 'react';
import './Cart.css'
import CartShow from '../CartShow/CartShow';

const Cart = (props) => {
    const {cart}= props
    let total = 0;
    for(const product of cart){
        const {rate} = product
        total = total + rate;
    }
    return (
        <div className='cart-container'>
           <h3>Hire Summary:</h3>
            <h5>Hired: {props.cart.length}</h5> 
            <h4>Cost: ${total}</h4>
            <hr />
            {
                cart.map(personinfo => <CartShow personinfo={personinfo}></CartShow>)
            }
        </div>
    
    );
};

export default Cart;