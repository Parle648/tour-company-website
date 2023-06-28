import React from 'react';

const SliderBar = ({items, indexSliderBarRef}) => {
    let indexRef = 0
    return (
        <div className="SliderBar">
            {items.map(item => {
                ++indexRef
                return indexRef<= 8 && <div className={`SliderBar__item ${items.indexOf(item) === indexSliderBarRef.current ? 'SliderBar__item_active' : ''}`}></div>
            })}
        </div>
    );
}

export default SliderBar;