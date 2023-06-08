import React from 'react';
import './BookCart.style.css'

const BookCart = ({background, ttl}) => {

    const style = {
        background: `url(${background})`,
        'background-position': 'center'
    }

    return (
        <div className='BookCart' style={style}>
            {ttl}
        </div>
    );
};

export default BookCart;