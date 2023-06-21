import React from 'react';
import { NavLink } from 'react-router-dom'
import activeSvg from '../../img/navigationicon.png'
import './TourPageNavigation.css'

const TourPageNavigation = props => {

    const toggleActiveMark = (event) => {
        document.querySelectorAll('.activeSvg').forEach((icon) => {
            icon.classList.add('nonactive')
        })
        event.target.previousElementSibling.classList.remove('nonactive')
    }

    return (
        <nav className='TourPageNavigation'>
            <ul className='ProductPage__list' >
                <li className='ProductPage__item'><img className='activeSvg' src={activeSvg} alt="activeSvg" /><NavLink className='TourPageNavigation__link' to='inform' onClick={toggleActiveMark}>inform</NavLink></li>
                <li className='ProductPage__item'><img className='activeSvg nonactive' src={activeSvg} alt="activeSvg" /><NavLink className='TourPageNavigation__link' to='tourplan' onClick={toggleActiveMark}>tourplan</NavLink></li>
                <li className='ProductPage__item'><img className='activeSvg nonactive' src={activeSvg} alt="activeSvg" /><NavLink className='TourPageNavigation__link' to='location' onClick={toggleActiveMark}>location</NavLink></li>
                <li className='ProductPage__item'><img className='activeSvg nonactive' src={activeSvg} alt="activeSvg" /><NavLink className='TourPageNavigation__link' to='policy' onClick={toggleActiveMark}>policy</NavLink></li>
            </ul>
        </nav>
    );
};

export default TourPageNavigation;