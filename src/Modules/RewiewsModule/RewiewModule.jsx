import React, { memo } from 'react';
import './RewiewModule.style.css'
import RewiewCart from './Components/RewiewCart/RewiewCart';
import SliderBtn from '../../UI/SliderBtn/SliderBtn';

const RewiewModule = memo((props) => {
    return (
        <div className='RewiewModule'>
            <h2 className='RewiewModule__ttl'>Customers reviews</h2>
            <div className="RewiewModule__slider">
                <div className="RewiewModule__slider-line">
                    <RewiewCart />
                    <RewiewCart />
                    <RewiewCart />
                    <RewiewCart />
                    <SliderBtn style='rewiew-slider-btn'/>
                    <div className="RewiewModule__slider-linear"></div>
                </div>
            </div>
        </div>
    );
});

export default RewiewModule;