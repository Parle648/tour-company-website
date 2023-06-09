import React from 'react';
import './WhiteBtn.style.css'
import substract from '../../img/Subtract.svg'
import substractTop from '../../img/substracttop.svg'
import substractBottom from '../../img/substractbottom.svg'

const WhiteBtn = props => {
    return (
        <btn className='WhiteBtn'>
            Subscribe
            <img className='WhiteBtn__substracct top' src={substractTop} alt="" />
            <img className='WhiteBtn__substracct center' src={substract} alt="" />
            <img className='WhiteBtn__substracct bottom' src={substractBottom} alt="" />
        </btn>
    );
};

export default WhiteBtn;