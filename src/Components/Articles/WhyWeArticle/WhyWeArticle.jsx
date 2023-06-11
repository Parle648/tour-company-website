import React from 'react';
import './WhyWeArticle.style.css'
import pins from '../../../img/Pins.png'
import pinsMob from '../../../img/pinsmobile.png'
import Btn from '../../../UI/Btn/Btn';
import planImg from '../../../img/plantourimg.png'

const WhyWeArticle = props => {

    const windowWidth = document.body.clientWidth
    let pinsSrc = (windowWidth < 914 ? pinsMob : pins)

    return (
        <>
            <div className='WhyWeArticle'>
                <div className="wrapper">
                    <div className="WhyWeArticle__description">
                        <h2 className='WhyWeArticle__ttl'>Why<br /> Lux Trips</h2>
                        <p className='WhyWeArticle__subttl'>As Travel Designer, we know the ins and outs of travel from who to work with, where to go, when to book, and which restaurant provides the most authentic cuisine. </p>
                    </div>
                    <img className='WhyWeArticle__pins' src={pinsSrc} alt="pins" />
                    <div className="WhyWeArticle__description description-second">
                        <h2 className='WhyWeArticle__ttl secon__ttl'>Exclusive knowledge to provide the best of the best to clients</h2>
                        {document.body.clientWidth > 880 &&
                            <p className='WhyWeArticle__subttl second-subttl'>Our area of expertise ranges from luxury resorts and villas/chalets holiday bookings, private yacht and jet charters, to exclusive tours and personalized journey planning. </p>
                        }
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="WhyWeArticle__plan-trip">
                    <img className='WhyWeArticle__img' src={planImg} alt="WhyWeArticle__img" />
                    <div className="WhyWeArticle__plan-container">
                        {document.body.clientWidth < 880 &&
                            <p className='WhyWeArticle__subttl second-subttl'>Our area of expertise ranges from luxury resorts and villas/chalets holiday bookings, private yacht and jet charters, to exclusive tours and personalized journey planning. </p>
                        }
                        <h2 className='WhyWeArticle__ttl secon__ttl third__ttl'>We craft and plan unique itineraries tailored to customers’ interests and with strong attention to detail.</h2>
                        <Btn innertext={'help me plan a trip'}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyWeArticle;