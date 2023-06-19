import TourCart from '../../../../Components/TourCart/TourCart';
import React from 'react';

const SliderItemList = ({ margin, items, country }) => {

    return (
        <div className="slider-line" style={{marginLeft: `${margin}px`}}>
        {items.map(item => {
            if (country === 'World') {
                return <TourCart key={item.id} location={item.location} ttl={item.title} mincost={item.minCost} rating={item.rating} country={item.country}/>
            }
            return item.country === country  &&
            <TourCart key={item.id} location={item.location} ttl={item.title} mincost={item.minCost} rating={item.rating} country={item.country}/>
        })}
        </div>
    );
};

export default SliderItemList;