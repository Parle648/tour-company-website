import '../../styles.css/style.css'
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../../UI/Logo/Logo';
import BurgerNavigation from '../BurgerNavigation/BurgerNavigation';
import burger from '../../img/burgertrigger.svg'
import React from 'react';

function Header () {
    const [visible, setVisible] = useState(false)

    function setDisabled () {
        setVisible(!visible);
    }

    return (
        <>
        <header className='Header'>
            <Logo/>
            <ul className='header-nav'>
                <li className='header-nav-item'><Link className='header-link' to={'/'} relative="path">Home</Link></li>
                <li className='header-nav-item'><NavLink className='header-link' to={'/luxury'}>Luxury packages</NavLink></li>
                <li className='header-nav-item'><NavLink className='header-link' to={'/luxury'}>Book with us</NavLink></li>
                <li className='header-nav-item'><NavLink className='header-link' to={'/luxury'}>Why Lux Trips</NavLink></li>
                <li className='header-nav-item'><NavLink className='header-link' to={'/luxury'}>Contact</NavLink></li>
                <li className='header-nav-item'><NavLink className='header-link' to={'/luxury'}>Client Area</NavLink></li>
            </ul>
            <button className='callback-btn'>Call Me <span className='rest-word'>Back</span></button>
            <img className='burger-trigger' src={burger} alt="" onClick={setDisabled}/>
        </header>
        <BurgerNavigation visible={visible} setVisible={setVisible}/>
        </>
    );
}

export default Header;