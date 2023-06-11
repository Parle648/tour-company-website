import TourCart from '../../../../Components/TourCart/TourCart';
import React from 'react';

const SliderItemList = ({width, margin, items}) => {
    return (
        <div className="slider-line" 
        style={{
            marginLeft: `${margin}px`
        }}>
            {items.map(item => {
                return <TourCart location={item.location} ttl={item.title} mincost={item.minCost} rating={item.rating} />
            })}
        </div>
    );
};

export default SliderItemList;