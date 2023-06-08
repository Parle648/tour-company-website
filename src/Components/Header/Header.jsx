import '../../styles.css/style.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../../UI/Logo/Logo';
import BurgerNavigation from '../BurgerNavigation/BurgerNavigation';
import burger from '../../img/burgertrigger.svg'

function Header () {
    const [visible, setVisible] = useState(false)

    function setDisabled () {
        setVisible(!visible)
    }

    return (
        <>
        <header className='Header'>
            <Logo/>
            <ul className='header-nav'>
                <li className='header-nav-item'><Link className='header-link' to={'/'} relative="path">Home</Link></li>
                <li className='header-nav-item'><Link className='header-link' to={'/luxury'}>Luxury packages</Link></li>
                <li className='header-nav-item'><Link className='header-link' to={'/luxury'}>Book with us</Link></li>
                <li className='header-nav-item'><Link className='header-link' to={'/luxury'}>Why Lux Trips</Link></li>
                <li className='header-nav-item'><Link className='header-link' to={'/luxury'}>Contact</Link></li>
                <li className='header-nav-item'><Link className='header-link' to={'/luxury'}>Client Area</Link></li>
            </ul>
            <button className='callback-btn'>Call Me <span className='rest-word'>Back</span></button>
            <img className='burger-trigger' src={burger} alt="" onClick={setDisabled}/>
        </header>
        <BurgerNavigation visible={visible} setVisible={setVisible}/>
        </>
    );
}

export default Header;