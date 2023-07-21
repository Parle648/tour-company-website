import React, { memo } from 'react';
import styles from './RewiewCart.module.scss';

import photo from '../../../../img/useronerewiew_1.webp';
import side from '../../../../img/rewiwewsubtract.png'
import topSide from '../../../../img/rewiewtopside.png'

const RewiewCart = memo(({ userphoto }) => {
    return (
        <div className={styles.RewiewCart}>
        <img className={styles.RewiewCart__backgroundSide} src={side} alt="RewiewCart__backgroundSide" />
        <img className={styles.RewiewCart__backgroundTopSide} src={topSide} alt="RewiewCart__backgroundSide" />
        <div className={styles.RewiewCart__inner_block}>
            <img className={styles.RewiewCart__user_photo} src={photo} alt="RewiewCart__user" />
            <p className={styles.RewiewCart__rewiew}>
                “Well organized trip, All arranged well by Arooz. Special thanks to Aijaz Bhai for the service and support given to us, all explained well and take us to all places as per our wish. It was a wonderful experience .... Thank you team”
            </p>
            <h2 className={styles.RewiewCart__username}>- Eduard Hand</h2>
            <h2 className={styles.RewiewCart__trip}>Müller-Egerer</h2>
        </div>
        </div>
    );
})

export default RewiewCart;