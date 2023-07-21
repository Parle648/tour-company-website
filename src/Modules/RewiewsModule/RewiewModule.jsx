import React from 'react';
import styles from './RewiewModule.module.scss';
import RewiewCart from './Components/RewiewCart/RewiewCart';
import SliderBtn from '../../components/UI/SliderBtn/SliderBtn';
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
        <div className={styles.RewiewModule}>
            <div className={styles.RewiewModule__inner_container}>
                <h2 className={styles.RewiewModule__ttl}>Customers reviews</h2>
                <div className={styles.RewiewModule__slider_container}>
                    <div className={styles.RewiewModule__slider}>
                        <div className={styles.RewiewModule__slider_line} style={{ margin: `0px 0px 0px ${MarginLeftRef.current}px` }}>
                            <RewiewCart />
                            <RewiewCart />
                            <RewiewCart />
                            <RewiewCart />
                        </div>
                        <SliderBtn style={styles.rewiew_slider_btn} handleClick={sliderMove} />
                    </div>
                </div>
            </div>
            <img className={styles.RewiewModule__slider__background} src={background} alt="RewiewModule__slider__background" />
        </div>
    );
}

export default RewiewModule;