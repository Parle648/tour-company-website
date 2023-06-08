import locationSvg from '../../img/locationmark.svg'
import slidercartphoto from '../../img/slidercartphoto.png'
import './TourCart.css'

function TourCart ({location, ttl, mincost, rating}) {

    const style = {
        backgroundImage: "url(/slidercartphoto.png)"
    }

    return (
        <div className="TourCart style">
            <div className="">
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

export default TourCart;