import locationSvg from '../../img/locationmark.svg'
import './TourCart.css'
import React from 'react'

const TourCart = React.memo(
    ({location, ttl, mincost, rating, id}) => {

        const style = {
            backgroundImage: "url(/slidercartphoto.webp)"
        }

        const setToLocalStorage = (event) => {
            fetch('https://data-base-second.onrender.com/Tours')
            .then(request => request.text())
            .then(result => {
                console.log(JSON.parse(result))
                localStorage.setItem('choosedTour', JSON.stringify(JSON.parse(result)[id]))
            })
        }
    
        return (
            <div className="TourCart style" onClick={setToLocalStorage} id={id}>
                <div className="TourCart-description">
                    <div className="TourCart__ttl-container">
                        <span className="TourCart__location"><img className="location-mark" src={locationSvg} alt="" />{location}</span>
                        <h2 className="TourCart__ttl">{ttl}</h2>
                    </div>
                    <div className="cost">
                        <h2 className="TourCart__mincost">From</h2>
                        <span className="TourCart__cost">€ {mincost}</span>
                    </div>
                </div>
                <div className="TourCart__rating">
                    <span className="rating-number">{rating}</span>
                </div>
            </div>
        );
    }
)

export default TourCart;