import React, { useState, useEffect, useRef } from "react";
import SliderNavigation from "./components/SliderNavigation/SliderNavigation";
import SliderItemList from "./components/SliderItemList/SliderItemList";
import SliderBtn from "../../UI/SliderBtn/SliderBtn";
import SliderBar from "./components/SliderBar/SliderBar";
import rhombus from '../../img/backgroundttl.svg'
import getToursList from './api/fetchDataList.js'

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
        document.querySelectorAll('.active-link-icon').forEach(item => {
            item.classList.remove('active-link')
        })
        event.target.parentNode.firstElementChild.classList.add('active-link')
    }, [])

    return (
        <div className="FetchSlider">
            <h2 className="FetchSlider__ttl" style={{background: `url(${rhombus})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'inherit',
        }}>Top Rated Experiences</h2>
            <SliderNavigation chooseCountry={chooseCountryMarker}/>
            <SliderItemList margin={margin} items={items} country={country}/>
            {!disabled &&
                <SliderBtn handleClick={handleClick} style='FetchSliderBtn'/>
            }
            {disabled &&
                <div className="loader"></div>
            }
            {document.body.clientWidth < 700 &&
                <SliderBar items={items} indexSliderBarRef={indexSliderBarRef}/>
            }
        </div>
    );
}

export default FetchSlider;