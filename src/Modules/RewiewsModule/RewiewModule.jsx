import React from 'react';
import './RewiewModule.style.css'
import RewiewCart from './Components/RewiewCart/RewiewCart';
import SliderBtn from '../../UI/SliderBtn/SliderBtn';
import background from '../../img/rewiewbackground.png'

const RewiewModule = (props) => {
    const [marginLeft, setMarginLeft] = React.useState(0)
    const viewWidth = React.useRef(document.body.clientWidth)

    let MarginLeftRef = React.useRef(0)
    
    const sliderMove = () => {
        if (viewWidth.current > 700 && MarginLeftRef.current > -1800) {
            setMarginLeft(MarginLeftRef.current -= 730)
        } 
        else if (viewWidth.current < 700 && MarginLeftRef.current > -1100) {
            setMarginLeft(MarginLeftRef.current -= 380)
        } else {
            setMarginLeft(MarginLeftRef.current = 0)
        }
    }

    return ( 
        <div className='RewiewModule'>
            <div className="RewiewModule__inner-container">
                <h2 className='RewiewModule__ttl'>Customers reviews</h2>
                <div className="RewiewModule__slider-container">
                    <div className="RewiewModule__slider">
                        <div className="RewiewModule__slider-line" style={{ margin: `0px 0px 0px ${MarginLeftRef.current}px` }}>
                            <RewiewCart />
                            <RewiewCart />
                            <RewiewCart />
                            <RewiewCart />
                        </div>
                        <SliderBtn style='rewiew-slider-btn' handleClick={sliderMove} />
                    </div>
                </div>
            </div>
            <img className='RewiewModule__slider__background' src={background} alt="RewiewModule__slider__background" />
        </div>
    );
}

export default RewiewModule;