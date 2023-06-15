import React from 'react';
import activeStar from '../../img/staractive.svg'
import nonActiveStar from '../../img/starnonactive.svg'
import './TourRatingComponent.css'

const TourRatingComponent = ({rating}) => {
    const starsArray = []

    for (let i = 1; i <= 5; i++) {
        i <= rating ? starsArray.push(true) : starsArray.push(false)
    }

    return (
        <div className='TourRatingComponent'>
            <div className='rating'>{rating}.0</div>
            <div className='stars'>
                {starsArray.map(star => {
                    return star ? <img src={activeStar} alt="activeStar" /> : <img src={nonActiveStar} alt="nonActiveStar" />
                })}
            </div>
        </div>
    );
};

export default TourRatingComponent;