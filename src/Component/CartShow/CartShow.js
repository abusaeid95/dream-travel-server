import React from 'react';
import './CartShow.css'

const CartShow = (props) => {
    const {name, image, role} = props.personinfo
    return (
        <div className='show-person'>
           <img src={image} alt="" /> 
           <h4>{name}</h4>
           <h5>{role}</h5>

        </div>
    );
};

export default CartShow;