import React from 'react';
import styles from './CustomizeTripArticle.module.scss';
import background from '../../../img/customizebackground.png';
import backgroundMobile from '../../../img/bg_strat_trip_mobile.png';
import clouds from '../../../img/clouds.png';

import crownTop from '../../../img/crowntop.svg';
import crownBottom from '../../../img/crownbottom.svg';
import blackSubstract from '../../../img/blacksubstract.png'

const BlackBtn = () => {
    return (
        <div className={styles.BlackBtn}>
            Start a trip request
            <div className={styles.crownTop}>
                <img className={styles.crownTop__img} src={crownTop} alt="crownTop" />
            </div>
            <img src={blackSubstract} className={styles.blackSubstract} alt='blackSubstract'></img>
            <img className={styles.crownBottom} src={crownBottom} alt="crownBottom" />
        </div>
    )
}

const CustomizeTripArticle = props => {
    return (
        <div className={styles.CustomizeTripArticle}>
            <img className={styles.CustomizeTripArticle__clouds} src={clouds} alt="clouds" />
            <h2 className={styles.CustomizeTripArticle__ttl}>Customise <br/> your trip with us</h2>
            <div className={styles.pins_container}>
                <div className={styles.CustomizeTripArticle__block}>
                    <div className={styles.CustomizeTripArticle__pinblock}>
                        <div className={styles.number}>1</div>
                    </div>
                    <h2 className={styles.CustomizeTripArticle__block_ttl}>Describe your dream trip</h2>
                    <p className={styles.CustomizeTripArticle__block_subttl}>Let us know what your perfect vacation is. Destinations, preferences, and personal interests. </p>
                </div>
                <div className={styles.CustomizeTripArticle__block} style={{marginTop: '-6px'}}>
                    <div className={styles.CustomizeTripArticle__pinblock}>
                        <div className={styles.number}>2</div>
                    </div>
                    <h2 className={styles.CustomizeTripArticle__block_ttl}>Get matched</h2>
                    <p className={styles.CustomizeTripArticle__block_subttl}>Our team will create perfect travel itinerary for you, based on your personalized needs and wishes.</p>
                </div>
                <div className={styles.CustomizeTripArticle__block}>
                    <div className={styles.CustomizeTripArticle__pinblock}>
                        <div className={styles.number}>3</div>
                    </div>
                    <h2 className={styles.CustomizeTripArticle__block_ttl}>Book your vacation</h2>
                    <p className={styles.CustomizeTripArticle__block_subttl}>Confirm your trip only when you are completely satisfied with the proposed travel plan. </p>
                </div>
            </div>
            <br/>
            <BlackBtn />
            <h3 className={styles.btnSubttl}>It’s Free! - no credit card required</h3>
            <img className={styles.customizeImg} src={document.body.clientWidth > 800 ? background : backgroundMobile} alt="" />
        </div>
    );
};

export default CustomizeTripArticle;