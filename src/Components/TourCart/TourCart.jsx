import React from 'react';
import locationSvg from '../../img/locationmark.svg';
import './TourCart.scss';
import TourRatingComponent from '../TourRatingComponent/TourRatingComponent';
import Btn from '../../components/UI/Btn/Btn.jsx';

const TourCart = React.memo(({location, ttl, mincost, rating, id, country}) => {

    const setToLocalStorage = (event) => {
        fetch('https://data-base-second.onrender.com/Tours')
        .then(request => request.text())
        .then(result => {
            localStorage.setItem('choosedTour', JSON.stringify(JSON.parse(result)[id]))
            window.location.replace("/tour-page/inform")
        })
    }

    return (
        <div className="TourCart style" onClick={setToLocalStorage} id={id} data-location={country}>
            <div className="background-linear"></div>
            <Btn innertext='customise' className='TourCart__btn'/>
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
            <TourRatingComponent rating={rating} />
        </div>
    );
})

export default TourCart;