import React from 'react';
import './BlackBtn.style.css'
import crownTop from '../../img/crowntop.svg'
import crownBottom from '../../img/crownbottom.svg'

const BlackBtn = ({innerText, width, styleBackground}) => {
    return (
        <div className='BlackBtn' style={{width: `${width}px`}}>
            {innerText}
            <div className={`crownTop ${styleBackground}`}>
                <img className='crownTop__img' src={crownTop} alt="crownTop" />
            </div>
            <div className='blackSubstract'></div>
            <img className='crownBottom' src={crownBottom} alt="crownBottom" />
        </div>
    );
};

export default BlackBtn;