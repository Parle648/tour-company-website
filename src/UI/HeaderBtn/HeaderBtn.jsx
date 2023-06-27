import React from 'react';
import border from '../../img/headerbtnborder.png';
import crownTop from '../../img/substracttop.svg'
import crownBottom from '../../img/substractbottom.svg'
import styles from './HeaderBtn.module.css'

const HeaderBtn = ({text}) => {
    return (
        <div className={styles.btn}>
            <img className={styles.border} src={border} alt="HeaderBtn" />
            <img className={styles.top} src={crownTop} alt="HeaderBtn" />
            <img className={styles.bottom} src={crownBottom} alt="HeaderBtn" />
            {text}
        </div>
    );
};

export default HeaderBtn;