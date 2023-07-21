import React from 'react';
import PropTypes from 'prop-types';
import './BookPageItem.scss';
import BookCart from '../BookCart/BookCart';
import BlackBtn from '../UI/BlackBtn/BlackBtn';

const BookPageItem = ({backgroundUrl, title}) => {
    return (
        <div className="BookPageItem">
            <BookCart background={backgroundUrl} ttl={title}></BookCart>
            <p className='BookPageItem__paragraph'>
                Machu Picchu is situated above a bow of the Urubamba River, which surrounds the site on three sides, where cliffs drop vertically.
            </p>
            <BlackBtn width='254' innerText='Make A Request'/>
        </div>
    )
};

BookPageItem.propTypes = {
    backgroundUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default BookPageItem;