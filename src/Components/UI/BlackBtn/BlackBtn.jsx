import React from 'react';
import './BlackBtn.scss';
import crownTop from '../../../img/crowntop.svg';
import crownBottom from '../../../img/crownbottom.svg';
import substr from '../../../img/blacksubstract.png';

const BlackBtn = ({innerText, width, styleBackground}) => {
    return (
        <div className='BlackBtn' style={{width: `${width}px`}}>
            {innerText}
            <div className={`crownTop ${styleBackground}`}>
                <img className='crownTop__img' src={crownTop} alt="crownTop" />
            </div>
            <img className='blackSubstract' src={substr} alt='substr'></img>
            <img className='crownBottom' src={crownBottom} alt="crownBottom" />
        </div>
    );
};

export default BlackBtn;