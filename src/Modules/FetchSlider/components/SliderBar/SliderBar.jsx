import React from 'react';
import styles from './slider-bar.module.scss';

const SliderBar = ({items, indexSliderBarRef}) => {
    let indexRef = 0
    return (
        <div className={styles.SliderBar}>
            {items.map(item => {
                ++indexRef;
                return indexRef <= 8 && 
                    <div className={`
                        ${styles.SliderBar__item} 
                        ${items.indexOf(item) === indexSliderBarRef.current ? styles.SliderBar__item_active : ''}`
                    }></div>
            })}
        </div>
    );
}

export default SliderBar;