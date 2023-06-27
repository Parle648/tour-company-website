import React from 'react';
import './BookCart.style.css'

const BookCart = ({background, ttl}) => {

    const style = {
        background: `url(${background})`,
        backgroundPosition: 'center', 
    }

    return (
        <div className='BookCart' style={style}>
            <div className='BookCart__ttl'>{ttl}</div> 
        </div>
    );
};

export default BookCart;