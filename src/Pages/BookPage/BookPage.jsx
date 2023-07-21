import React from 'react';

import changeBackground from '../../utils/changeBackground';

import SubscribeModule from '../../modules/SubscribeModule/SubscribeModule';
import BookPageItem from '../../components/BookPageItem/BookPageItem.jsx';

import styles from './bookpage.module.scss';

import lamborguni from '../../img/lamborguni.png';
import hotels from '../../img/hotels.png';
import villas from '../../img/villas_1.webp';
import helicopters from '../../img/helicopters.png';
import yachts from '../../img/yachts_1.webp';
import jets from '../../img/jets.png';

import Footer from '../../components/Footer/Footer';

import { Link } from 'react-router-dom';

const BookPage = props => {
    React.useEffect(() => {
        changeBackground()
    }, [])

    return (
        <div>
            <h2>Book with us</h2>
            <div className={styles.BookPage}>
                <Link to='/car'><BookPageItem backgroundUrl={lamborguni} title='Supercars'/> </Link>
                <Link to='/hotels'><BookPageItem backgroundUrl={hotels} title='Hotels'/> </Link>
                <Link to='/villas'><BookPageItem backgroundUrl={villas} title='Villas/chalets'/></Link>
                <Link to='/yachts'><BookPageItem backgroundUrl={yachts} title='Yachts/Boats'/> </Link>
                <Link to='/helicopters'><BookPageItem backgroundUrl={helicopters} title='Private Helicopter'/> </Link>
                <Link to='/jets'><BookPageItem backgroundUrl={jets} title='Private Jet'/></Link>
            </div>
            <SubscribeModule />
            <Footer />
        </div>
    );
};

export default BookPage;