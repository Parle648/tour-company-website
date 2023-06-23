import React from 'react';
import './BlackBtn.style.css'
import crownTop from '../../img/crowntop.svg'
import crownBottom from '../../img/crownbottom.svg'
import blackSubstract from '../../img/blacksubtract.jpg'

const BlackBtn = ({innerText, width}) => {
    return (
        <div className='BlackBtn' style={{width: `${width}px`}}>
            {innerText}
            <div className="crownTop">
                <img className='crownTop__img' src={crownTop} alt="crownTop" />
            </div>
            <div className='blackSubstract'></div>
            <img className='crownBottom' src={crownBottom} alt="crownBottom" />
        </div>
    );
};

export default BlackBtn;