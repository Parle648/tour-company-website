import TourCart from '../../../../Components/TourCart/TourCart';
import React from 'react';

const SliderItemList = ({ margin, items }) => {
    return (
        <div className="slider-line" 
        style={{
            marginLeft: `${margin}px` 
        }}>
            {items.map(item => {
                return <TourCart key={item.id} location={item.location} ttl={item.title} mincost={item.minCost} rating={item.rating} />
            })}
        </div>
    );
};

export default SliderItemList;