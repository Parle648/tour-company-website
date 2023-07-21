import React from 'react';
import sliderArrow from '../../../img/sliderbtn.svg'
import styles from './SliderBtn.module.scss'

const SliderBtn = ({handleClick, style}) => {
    return (
        <div className={styles.SliderBtn} onClick={handleClick}>
            <img className={styles.SliderBtnArrow} src={sliderArrow} alt="SliderBtnArrow" />
        </div>
    );
};

export default SliderBtn;