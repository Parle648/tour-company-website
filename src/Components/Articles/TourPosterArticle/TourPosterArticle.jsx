import React from 'react';
import TourRatingComponent from '../../TourRatingComponent/TourRatingComponent';
import locationSvg from '../../../img/locationmark.svg';
import './TourPosterArticle.scss';
import WhiteBtn from '../../UI/WhiteBtn/WhiteBtn.jsx';

import { Link } from 'react-router-dom';

const TourPoster = ({backgroundImg, title, rating, minCost, location}) => {
    return (
        <div className='TourPoster'>
            <div className="TourPoster__gradient"></div>
            <div className="TourPoster__props-container">
                {document.body.clientWidth > 780 &&
                    <TourRatingComponent rating={rating} />
                }
                <div className="TourPoster__description">
                    <span className=""><img className="" src={locationSvg} alt="location-mark" />{location}</span>
                    <h2 className="TourPoster__description_ttl">{title}</h2>
                </div>
                {document.body.clientWidth < 780 &&
                    <div className="cost">
                        <h2 className="TourCart__mincost">From</h2>
                        <span className="TourCart__cost">€ {minCost}</span>
                    </div>
                }
            </div>
            {document.body.clientWidth > 780 ? 
                <div className="TourPoster__cost-container">
                    <div className="cost">
                        <h2 className="TourCart__mincost">From</h2>
                        <span className="TourCart__cost">€ {minCost}</span>
                    </div>
                    <button className='TourPoster__customize-tour'>customise</button>
                </div> :
                <TourRatingComponent rating={rating} />
            }
            {document.body.clientWidth > 780 && 
                <Link to='/customise'>
                    <WhiteBtn ttl={'BOOK NOW'} className='TourPoster__book-btn'/>
                </Link>
            }
        </div>
    );
};

export default TourPoster;