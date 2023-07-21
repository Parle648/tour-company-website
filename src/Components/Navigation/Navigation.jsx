import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './navigation.module.scss'

const Navigation = props => {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.navList}>
                <NavLink className={styles.navLink} to={'/'} relative="path">Home</NavLink>
                <Link className={styles.navLink} to={'/luxury'}>Luxury packages</Link>
                <Link className={styles.navLink} to={'/book'}>Book with us</Link>
                <Link className={styles.navLink} to={'/whyWe'}>Why Lux Trips</Link>
                <Link className={styles.navLink} to={'/contancts'}>Contact</Link>
                <Link className={styles.navLink} to={'/clientPage'}>Client Area</Link>
            </ul>
        </nav>
    );
};

export default Navigation;