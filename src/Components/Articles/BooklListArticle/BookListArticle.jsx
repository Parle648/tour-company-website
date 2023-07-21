import React from 'react';
import background1 from '../../../img/lamborguni.webp'
import background2 from '../../../img/hotels.webp'
import background3 from '../../../img/villas_1.webp'
import background4 from '../../../img/yachts_1.webp'
import background5 from '../../../img/helicopters.webp'
import background6 from '../../../img/jets.webp'
import BookCart from '../../BookCart/BookCart';
import styles from './BookArticleList.module.scss';

const BookListArticle = props => {
    return (
        <div className={styles.BookListArticle}>
            <h2 className={styles.BookListArticle__ttl}>Book With Us</h2>
            <div className={styles.BookListArticle__grid}>
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