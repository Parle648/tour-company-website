import SliderNavigation from "./components/SliderNavigation/SliderNavigation";
import SliderBtn from "../../UI/SliderBtn/SliderBtn";
import SliderItemList from "./components/SliderItemList/SliderItemList";
import SliderBar from "./components/SliderBar/SliderBar";
import axious from 'axios'
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function FetchSlider () {
    const [items, setItems] = useState([])
    
    useEffect(() => {
        axious.get('https://tour-company-db.onrender.com/Tours')
        .then(res => {
            setItems(res.data)
        })
        .catch(err => console.log(err))
    })
    
    let width = 0;
    width = `${items.length * 360}px`
    
    const [margin, setMargin] = useState(0)
    let indexSliderBarRef = useRef(0)

    function handleClick() {
        if (margin >= -1740 && document.body.clientWidth > 650) {
            indexSliderBarRef.current +=1
            setMargin(margin - 380)
        }
        else if (margin >= -2570 && document.body.clientWidth < 650) {
            indexSliderBarRef.current +=1
            setMargin(margin - 370)
        } else {
            setMargin(0)
            indexSliderBarRef.current = 0
        }
    }

    return (
        <div className="FetchSlider">
            <h2 className="FetchSlider__ttl">Top Rated Experiences</h2>
            <SliderNavigation />
            <SliderItemList width={width} margin={margin} items={items}/>
            <SliderBtn handleClick={handleClick}/>
            <SliderBar items={items} indexSliderBarRef={indexSliderBarRef}/>
        </div>
    );
}

export default FetchSlider;