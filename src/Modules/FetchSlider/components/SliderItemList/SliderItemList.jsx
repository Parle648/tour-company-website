import TourCart from '../../../../components/TourCart/TourCart.jsx';
import React from 'react';
import './SliderItemList.scss'

const SliderItemList = ({ margin, items, country }) => {
    let indexRef = 0

    return (
        <div className='sliderContainer'>
            <div className="slider-line" style={{marginLeft: `${margin}px`}}>
            {items.map(item => {
                if (country === 'World') {
                    ++indexRef;
                    if (indexRef <= 8) {
                        return <TourCart key={item.id} location={item.location} ttl={item.title} mincost={item.minCost} rating={item.rating} country={item.country}/>
                    }
                } else if ( item.country === country && indexRef < 8 ) {
                    ++indexRef;
                    return <TourCart key={item.id} location={item.location} ttl={item.title} mincost={item.minCost} rating={item.rating} country={item.country}/>
                }
            })}
            </div>
        </div>
    );
};

export default SliderItemList;