import React from "react";
import navigationIcon from '../../../../img/navigationicon.png';
import styles from './slider-navigation.module.scss';

const SliderNavigation = React.memo(({chooseCountry}) => {
    return (
        <nav className={styles.navWrapper}>
            <ul className={styles.fetchSliderNav}>
                <li className={styles.fetchSliderLink}>
                    <img className={`${styles.activeLinkIcon} ${styles.activeLink}`} src={navigationIcon} alt="navigationIcon" />
                    <a className={styles.fetchSliderLink} href="#!" onClick={chooseCountry}>World</a>
                </li>
                <li className={styles.fetchSliderLink}>
                    <img className={`${styles.activeLinkIcon}`} src={navigationIcon} alt="navigationIcon" />
                    <a className={styles.fetchSliderLink} href="#!" onClick={chooseCountry}>Africa</a>
                </li>
                <li className={styles.fetchSliderLink}>
                    <img className={`${styles.activeLinkIcon}`} src={navigationIcon} alt="navigationIcon" />
                    <a className={styles.fetchSliderLink} href="#!" onClick={chooseCountry}>Asia</a>
                </li>
                <li className={styles.fetchSliderLink}>
                    <img className={`${styles.activeLinkIcon}`} src={navigationIcon} alt="navigationIcon" />
                    <a className={styles.fetchSliderLink} href="#!" onClick={chooseCountry}>Europe</a>
                </li>
                <li className={styles.fetchSliderLink}>
                    <img className={`${styles.activeLinkIcon}`} src={navigationIcon} alt="navigationIcon" />
                    <a className={styles.fetchSliderLink} href="#!" onClick={chooseCountry}>North America</a>
                </li>
                <li className={styles.fetchSliderLink}>
                    <img className={`${styles.activeLinkIcon}`} src={navigationIcon} alt="navigationIcon" />
                    <a className={styles.fetchSliderLink} href="#!" onClick={chooseCountry}>South America</a>
                </li>
                <li className={styles.fetchSliderLink}>
                    <img className={`${styles.activeLinkIcon}`} src={navigationIcon} alt="navigationIcon" />
                    <a className={styles.fetchSliderLink} href="#!" onClick={chooseCountry}>Antarctica</a>
                </li>
                <li className={styles.fetchSliderLink}>
                    <img className={`${styles.activeLinkIcon}`} src={navigationIcon} alt="navigationIcon" />
                    <a className={styles.fetchSliderLink} href="#!" onClick={chooseCountry}>Australia</a>
                </li>
            </ul>
        </nav>
    )
})

export default SliderNavigation