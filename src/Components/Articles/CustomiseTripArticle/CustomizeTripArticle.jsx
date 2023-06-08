import React from 'react';
import './CustomizeTripArticle.style.css'
import background from '../../../img/customizebackground.png'
import BlackBtn from '../../../UI/BlackBtn/BlackBtn';

const CustomizeTripArticle = props => {
    return (
        <div className='CustomizeTripArticle'>
            <h2 className='CustomizeTripArticle__ttl'>Customise <br/> your trip with us</h2>
            <div className="wrapper">
                <div className="CustomizeTripArticle__block">
                    <div className="CustomizeTripArticle__pinblock">
                        <div className="number">1</div>
                    </div>
                    <h2 className="CustomizeTripArticle__block-ttl">Describe your dream trip</h2>
                    <p className="CustomizeTripArticle__block-subttl">Let us know what your perfect vacation is. Destinations, preferences, and personal interests. </p>
                </div>
                <div className="CustomizeTripArticle__block" style={{marginTop: '-6px'}}>
                    <div className="CustomizeTripArticle__pinblock">
                        <div className="number first">2</div>
                    </div>
                    <h2 className="CustomizeTripArticle__block-ttl">Get matched</h2>
                    <p className="CustomizeTripArticle__block-subttl">Our team will create perfect travel itinerary for you, based on your personalized needs and wishes.</p>
                </div>
                <div className="CustomizeTripArticle__block">
                    <div className="CustomizeTripArticle__pinblock">
                        <div className="number">3</div>
                    </div>
                    <h2 className="CustomizeTripArticle__block-ttl">Book your vacation</h2>
                    <p className="CustomizeTripArticle__block-subttl">Confirm your trip only when you are completely satisfied with the proposed travel plan. </p>
                </div>
            </div>
            <br/>
            <BlackBtn innerText={'Start a trip request'} width='540'/>
            <img className='customizeImg' src={background} alt="" />
        </div>
    );
};

export default CustomizeTripArticle;