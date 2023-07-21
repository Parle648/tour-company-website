import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Articles/Header/header.module.scss';
import './burger-navigation.scss';

const BurgerNavigation = ({visible, setVisible}) => {
    function closeBurger() {
        document.body.classList.toggle(styles.bodyHidden)
        setVisible()
    }

    return (
        <div className={`BurgerNavigation ${(visible) ? 'burger_disabled' : ''}`}>
            <ul className='burder-nav'>
                <li className='burder-nav-item' onClick={closeBurger}><Link className='burder-nav-link' to={'/'} relative="path">Home</Link></li>
                <li className='burder-nav-item' onClick={closeBurger}><Link className='burder-nav-link' to={'/luxury'}>Luxury packages</Link></li>
                <li className='burder-nav-item' onClick={closeBurger}><Link className='burder-nav-link' to={'/book'}>Book with us</Link></li>
                <li className='burder-nav-item' onClick={closeBurger}><Link className='burder-nav-link' to={'/book'}>Why Lux Trips</Link></li>
                <li className='burder-nav-item' onClick={closeBurger}><Link className='burder-nav-link' to={'/book'}>Contact</Link></li>
                <li className='burder-nav-item' onClick={closeBurger}><Link className='burder-nav-link' to={'/book'}>Client Area</Link></li>
            </ul>
        </div>
    );
};

export default BurgerNavigation;