import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Person.css'
import Rating from 'react-rating';


const Person = (props) => {
        const{name, experience, image, rate, rating, role} = props.person;
        const fontIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='person-container'>
          <img className='images' src={image} alt="" />
          <h5>Name: {name}</h5>
          <h5>Title: {role}</h5>
          <h5>Experience: {experience}</h5>
          <Rating
            initialRating={rating}
            emptySymbol="far fa-star icon-color"
            fullSymbol="fa fa-star icon-color"
            readonly>
          </Rating>
          <h5>Rate: ${rate}</h5>
          <button onClick={() => props.countHandle(props.person)} className='button'> {fontIcon} Purchase Design</button>

        </div>
    );
};

export default Person;