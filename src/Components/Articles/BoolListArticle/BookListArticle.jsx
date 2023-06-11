import React from 'react';
import background1 from '../../../img/lamborguni.png'
import background2 from '../../../img/hotels.png'
import background3 from '../../../img/villas.png'
import background4 from '../../../img/yachts.png'
import background5 from '../../../img/helicopters.png'
import background6 from '../../../img/jets.png'
import BookCart from '../../BookCart/BookCart';
import './BookArticleList.style.css'

// import bookBackground from '../../../img/bookbackground.png'

const BookListArticle = props => {
    return (
        <div className='BookListArticle'>
            <div className='BookCart__background'></div>
            <h2 className='BookListArticle__ttl'>Book With Us</h2>
            <div className='BookListArticle__grid'>
                <BookCart background={background1} ttl='Supercars'/>
                <BookCart background={background2} ttl='Hotels'/>
                <BookCart background={background3} ttl='Villas'/>
                <BookCart background={background4} ttl='Yachts'/>
                <BookCart background={background5} ttl='Private Helicopter'/>
                <BookCart background={background6} ttl='Private Jet'/>
            </div>
        </div>
    );
};

export default BookListArticle;