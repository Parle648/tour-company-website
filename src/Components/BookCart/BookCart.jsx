import React from 'react';
import styles from './BookCart.module.scss';

const BookCart = ({background, ttl}) => {

    const style = {
        background: `url(${background})`,
        backgroundPosition: 'center', 
    }

    return (
        <div className={styles.BookCart }style={style}>
            <div className={styles.BookCart__ttl}>{ttl}</div> 
        </div>
    );
};

export default BookCart;