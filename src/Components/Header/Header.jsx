import '../../styles.css/style.css'
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../../UI/Logo/Logo';
import BurgerNavigation from '../BurgerNavigation/BurgerNavigation';
import burger from '../../img/burgertrigger.svg'
import React from 'react';
import HeaderBtn from '../../UI/HeaderBtn/HeaderBtn.jsx';

function Header () {
    const [visible, setVisible] = useState(false)
    
    const bodyRef = React.useRef(document.body)
    function setDisabled () {
        document.body.classList.toggle('body_hidden')
        setVisible(!visible);
    }

    return (
        <>
        <header className='Header'>
            <Logo/>
            <ul className='header-nav'>
                <li className='header-nav-item'><Link className='header-link' to={'/'} relative="path">Home</Link></li>
                <li className='header-nav-item'><NavLink className='header-link' to={'/luxury'}>Luxury packages</NavLink></li>
                <li className='header-nav-item'><NavLink className='header-link' to={'/book'}>Book with us</NavLink></li>
                <li className='header-nav-item'><NavLink className='header-link' to={'/luxury'}>Why Lux Trips</NavLink></li>
                <li className='header-nav-item'><NavLink className='header-link' to={'/luxury'}>Contact</NavLink></li>
                <li className='header-nav-item'><NavLink className='header-link' to={'/luxury'}>Client Area</NavLink></li>
            </ul>
            <HeaderBtn text='Call Me Back' />
            <img className='burger-trigger' src={burger} alt="" onClick={setDisabled}/>
        </header>
        <BurgerNavigation visible={visible} setVisible={setVisible}/>
        </>
    );
}

export default Header;