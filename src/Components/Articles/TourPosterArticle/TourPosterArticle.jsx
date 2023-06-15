import React from 'react';
import TourRatingComponent from '../../TourRatingComponent/TourRatingComponent';

const TourPoster = ({backgroundImg, title, rating, minCost, location}) => {


    return (
        <div className='TourPoster'>
            <TourRatingComponent rating={rating}></TourRatingComponent>
        </div>
    );
};

export default TourPoster;