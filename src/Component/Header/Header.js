import React from 'react';
import './Header.css';

const Header = () => {
    return (
         <div className='header'>
                <h1 className='big-text'>SDC</h1>
                <div className='header2p'>
                    <h3 className='header-h'>Make Your Home Awesome!</h3>
                    <p className='header-p'>We are always ready to make you luxurious</p>
                    <h3 className='header-p'>Budget $20k</h3>
                </div>
        </div>    
    );
};

export default Header;