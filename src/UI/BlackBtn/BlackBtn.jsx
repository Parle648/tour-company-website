import React from 'react';
import './BlackBtn.style.css'
import crownTop from '../../img/crowntop.svg'
import crownBottom from '../../img/crownbottom.svg'

const BlackBtn = ({innerText, width}) => {
    return (
        <div className='BlackBtn' style={{width: `${width}px`}}>
            {innerText}
            <img className='crownTop' src={crownTop} alt="" />
            <img className='crownBottom' src={crownBottom} alt="" />
        </div>
    );
};

export default BlackBtn;