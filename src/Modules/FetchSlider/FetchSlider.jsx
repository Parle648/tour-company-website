import SliderNavigation from "./components/SliderNavigation/SliderNavigation";
import SliderItemList from "./components/SliderItemList/SliderItemList";
import SliderBar from "./components/SliderBar/SliderBar";
import SliderBtn from "../../UI/SliderBtn/SliderBtn";
import React, { useState, useEffect, useRef } from "react";
import axious from 'axios'

function FetchSlider () {
    // get list of tours
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        axious.get('https://data-base-second.onrender.com/Tours')
        .then(res => {
            setItems(res.data)
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
            <SliderBtn handleClick={handleClick}/>
            {document.body.clientWidth < 700 &&
                <SliderBar items={items} indexSliderBarRef={indexSliderBarRef}/>
            }
        </div>
    );
}

export default FetchSlider;