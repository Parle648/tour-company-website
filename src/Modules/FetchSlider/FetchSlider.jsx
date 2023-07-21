import React, { useState, useEffect, useRef } from "react";
import SliderNavigation from "./components/SliderNavigation/SliderNavigation";
import SliderItemList from "./components/SliderItemList/SliderItemList";
import SliderBtn from '../../components/UI/SliderBtn/SliderBtn.jsx'
import SliderBar from "./components/SliderBar/SliderBar";
import rhombus from '../../img/backgroundttl.svg';
import getToursList from './api/fetchDataList.js';
import navStyles from './components/SliderNavigation/slider-navigation.module.scss';
import styles from './fetch-slider.module.scss';

function FetchSlider () {
    // get list of tours
    const [items, setItems] = useState([]);
    const [disabled, setDisabled] = useState(true)
    
    useEffect(() => {
        getToursList(setItems, setDisabled, disabled);
    }, []);

    //slider logic
    const [margin, setMargin] = useState(0);
    let indexSliderBarRef = useRef(0);

    const handleClick = () => {
        if ( document.body.clientWidth > 650 && margin >= -1740 ) {
            indexSliderBarRef.current +=1;
            setMargin(margin - 380);
        } else if (document.body.clientWidth < 650 && margin >= -2200 ) {
            indexSliderBarRef.current +=1;
            setMargin(margin - 315);
        } else {
            setMargin(0);
            indexSliderBarRef.current = 0;
        };
    };

    // choose country
    const [country, setCountry] = React.useState('World')

    const chooseCountryMarker = React.useCallback((event) => {
        event.preventDefault();
        setCountry(event.target.innerText)
        document.querySelectorAll(`.${navStyles.activeLinkIcon}`).forEach(item => {
            item.classList.remove(`${navStyles.activeLink}`)
        })
        event.target.parentNode.firstElementChild.classList.add(`${navStyles.activeLink}`)
    }, [])

    return (
        <div className={styles.FetchSlider}>
            <h2 className={styles.FetchSliderTtl} style={{background: `url(${rhombus})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'inherit',
        }}>Top Rated Experiences</h2>
            <SliderNavigation chooseCountry={chooseCountryMarker}/>
            <SliderItemList margin={margin} items={items} country={country}/>
            {!disabled &&
                <SliderBtn handleClick={handleClick}/>
            }
            {disabled &&
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
            }
            {document.body.clientWidth < 700 &&
                <SliderBar items={items} indexSliderBarRef={indexSliderBarRef}/>
            }
        </div>
    );
}

export default FetchSlider;