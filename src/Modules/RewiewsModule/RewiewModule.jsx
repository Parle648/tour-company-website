import React, { memo } from 'react';
import './RewiewModule.style.css'
import RewiewCart from './Components/RewiewCart/RewiewCart';
import SliderBtn from '../../UI/SliderBtn/SliderBtn';
import { useState } from 'react';
import background from '../../img/rewiewbackground.png'

const RewiewModule = memo((props) => {

    const [marginLeft, setMarginLeft] = useState(0)

    const viewWidth = document.body.clientWidth

    const sliderMove = () => {
        if (marginLeft > -1800) {
            setMarginLeft(marginLeft - 730)
        } else {
            setMarginLeft(0)
        }
    }

    const sliderMoveResponcive = () => {
        if (marginLeft > -1100) {
            setMarginLeft(marginLeft - 380)
        } else {
            setMarginLeft(0)
        }
    }

    return (
        <div className='RewiewModule'>
            <div className="RewiewModule__inner-container">
                <h2 className='RewiewModule__ttl'>Customers reviews</h2>
                <div className="RewiewModule__slider">
                    <div className="RewiewModule__slider-line" style={{ margin: `0px 0px 0px ${marginLeft === 0 ? 20 : marginLeft}px` }}>
                        <RewiewCart />
                        <RewiewCart />
                        <RewiewCart />
                        <RewiewCart />
                    </div>
                    <SliderBtn style='rewiew-slider-btn' handleClick={(viewWidth > 700) ? sliderMove : sliderMoveResponcive} />
                </div>
            </div>
            <img className='RewiewModule__slider__background' src={
                background
            } alt="" />
        </div>
    );
});

export default RewiewModule;