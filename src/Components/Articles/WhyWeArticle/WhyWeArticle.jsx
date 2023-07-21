import React from 'react';
import styles from './WhyWeArticle.module.scss';
import pins from '../../../img/Pins.png'
import pinsMob from '../../../img/pinsmobile.png'
import Btn from '../../UI/Btn/Btn';
import planImg from '../../../img/plantourimg.png'

const WhyWeArticle = props => {

    const windowWidth = document.body.clientWidth
    let pinsSrc = (windowWidth < 914 ? pinsMob : pins)
    const Subttl = (
        <p className={`${styles.WhyWeArticle__subttl} ${styles.second__subttl}`}>Our area of expertise ranges from luxury resorts and villas/chalets holiday bookings, private yacht and jet charters, to exclusive tours and personalized journey planning. </p>
    )
    return (
        <>
            <div className={styles.WhyWeArticle}>
                <div className="wrapper">
                    <div className={styles.WhyWeArticle__description}>
                        <h2 className={styles.WhyWeArticle__ttl}>Why<br /> Lux Trips</h2>
                        <p className={styles.WhyWeArticle__subttl}>As Travel Designer, we know the ins and outs of travel from who to work with, where to go, when to book, and which restaurant provides the most authentic cuisine. </p>
                    </div>
                    <img className={styles.WhyWeArticle__pins} src={pinsSrc} alt="pins" />
                    <div className={`${styles.WhyWeArticle__description} ${styles.description__second}`}>
                        <h2 className={`${styles.WhyWeArticle__ttl} ${styles.secon__ttl}`}>Exclusive knowledge to provide the best of the best to clients</h2>
                        {document.body.clientWidth > 880 && Subttl }
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div className={styles.WhyWeArticle__plan__trip}>
                    <img className={styles.WhyWeArticle__img} src={planImg} alt="WhyWeArticle__img" />
                    <div className={styles.WhyWeArticle__plan__container}>
                        {document.body.clientWidth < 880 && Subttl }
                        <h2 className={`${styles.WhyWeArticle__ttl} ${styles.secon__ttl} ${styles.third__ttl}`}>We craft and plan unique itineraries tailored to customers’ interests and with strong attention to detail.</h2>
                        <Btn innertext={'help me plan a trip'} width='214px'/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyWeArticle;