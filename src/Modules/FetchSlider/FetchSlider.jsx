// import { useState } from "react";
import TourCart from "../../Components/TourCart/TourCart";
import getToursList from "./api/FetchDataList";
import axious from 'axios'
import { useState } from "react";
import { useEffect } from "react";

function FetchSlider () {
    const [items, setItems] = useState([])

    useEffect(() => {
        axious.get('https://tour-company-db.onrender.com/Tours')
        .then(res => {
            setItems(res.data)
        })
        .catch(err => console.log(err))
    })
    
    return (
        <div className="">
            <h2 className="FetchSlider__ttl">Top Rated Experiences</h2>
            <div className="slider-line">
                {items.map(item => {
                    return <TourCart location={item.location} ttl={item.title} mincost={item.minCost} rating={item.rating} />
                })}
            </div>
        </div>
    );
}

export default FetchSlider;