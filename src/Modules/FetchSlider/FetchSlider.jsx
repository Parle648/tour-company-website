import SliderNavigation from "./components/SliderNavigation/SliderNavigation";
import SliderItemList from "./components/SliderItemList/SliderItemList";
import SliderBar from "./components/SliderBar/SliderBar";
import SliderBtn from "../../UI/SliderBtn/SliderBtn";
import React, { useState, useEffect, useRef } from "react";
import axious from 'axios'

function FetchSlider () {
    // get list of tours
    const [items, setItems] = useState([]);
    const [disabled, setDisabled] = useState(true)
    
    useEffect(() => {
        axious.get('https://data-base-second.onrender.com/Tours')
        .then(res => {
            setItems(res.data)
            setDisabled(!disabled)
        })
        .catch(err => console.log(err))
    }, []);
    
    //slider logic
    const [margin, setMargin] = useState(0);
    let indexSliderBarRef = useRef(0);

    const handleClick = () => {
        if ( document.body.clientWidth > 650 && margin >= -1740 ) {
            indexSliderBarRef.current +=1;
            setMargin(margin - 380);
        } else if (document.body.clientWidth < 650 && margin >= -2570 ) {
            indexSliderBarRef.current +=1;
            setMargin(margin - 370);
        } else {
            setMargin(0);
            indexSliderBarRef.current = 0;
        };
    };

    return (
        <div className="FetchSlider">
            <h2 className="FetchSlider__ttl">Top Rated Experiences</h2>
            <SliderNavigation />
            <SliderItemList margin={margin} items={items}/>
            {!disabled &&
                <SliderBtn handleClick={handleClick}/>
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