import React from 'react';
import sliderArrow from '../../img/sliderbtn.svg';

const SliderBtn = ({handleClick, style}) => {
    return (
        <div className={`SliderBtn ${style}`} onClick={handleClick}>
            <img className="SliderBtn__arrow" src={sliderArrow} alt="" />
        </div>
    );
}

export default SliderBtn;