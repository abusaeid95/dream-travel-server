import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Persons/Person';
import './Main.css';

const Main = () => {
    const [persons, setPersons] = useState([])
    const[count, setCount]=useState([])
    useEffect(() => {
        fetch('./mockturtle.JSON')
        .then(res => res.json())
        .then(data => setPersons(data))
    },[])
    const countHandle = (person) =>{
        const newCount = [...count, person];
        setCount(newCount)
    }
    return (
        <div className='main-container'>
            <div className="card-container">
                {
                    persons.map(person =>
                        <Person 
                        key={person.key}
                        person={person}
                        countHandle={countHandle}></Person>
                    )
                }
            </div>
            <div className="cart-container">
            <div>
            <Cart cart={count}></Cart>
            </div>
            </div>
        </div>
    );
};

export default Main;