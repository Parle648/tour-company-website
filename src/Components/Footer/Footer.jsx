import React from 'react';
import Btn from '../../UI/Btn/Btn';
import footerLogo from '../../img/footerlogo.svg'
import './Footer.css'
import HeaderBtn from '../../UI/HeaderBtn/HeaderBtn';

const Footer = props => {

    const viewWidth = document.body.clientWidth

    return (
        <footer className='Footer'>
            <img src={footerLogo} alt="footerlogo" />
            {viewWidth < 850 &&
                <HeaderBtn text='Call Me Back' />
            }
            <nav className='Footer__nav'>
                <ul className='Footer__list'>
                    <li className='Footer__item'>Luxury packages</li>
                    <li className='Footer__item'>Book with us</li>
                    {viewWidth > 850 &&
                        <HeaderBtn text='Call Me Back' />
                    }
                    <li className='Footer__item'>Why Lux Trips</li>
                    <li className='Footer__item'>Why Lux Trips</li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;