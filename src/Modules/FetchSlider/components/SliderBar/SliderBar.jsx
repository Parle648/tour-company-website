import React from 'react';

const SliderBar = ({items, indexSliderBarRef}) => {
    return (
        <div className="SliderBar">
            {items.map(item => {
                return <div className={`SliderBar__item ${items.indexOf(item) === indexSliderBarRef.current ? 'SliderBar__item_active' : ''}`}></div>
            })}
        </div>
    );
};

export default SliderBar;