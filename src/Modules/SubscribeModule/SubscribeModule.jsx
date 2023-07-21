import React from 'react';
import styles from './SubscribeModule.module.scss';
import substractTop from '../../img/substracttop.svg';
import substractBottom from '../../img/substractbottom.svg';
import substract from '../../img/Subtract.svg';
import border from '../../img/subscribeborder.png';

const SendBtn = () => {
    return (
        <btn className={styles.WhiteBtn}>
            Subscribe
            <img className={styles.top} src={substractTop} alt="top" />
            <img className={styles.center} src={substract} alt="center" />
            <img className={styles.bottom} src={substractBottom} alt="bottom" />
        </btn>
    );
}

const SubscribeModule = ({style}) => {
    const [inputValue, setInputValue] = React.useState('Email adress');

    const changeValue = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className={styles.SubscribeModule}>
            <img className={styles.border} src={border} alt="" />
            <h2 className={styles.SubscribeModule__ttl}>Get weekly inspiration and expert advice</h2>
            <h2 className={styles.SubscribeModule__subttl}>Sign up for our Weekly Newsletter</h2>
            <label className={styles.SubscribeModule__label}>
                <input className={styles.SubscribeModule__input} type="text" name='mail' value={inputValue} onChange={changeValue}/>
                <SendBtn /> 
            </label>
        </div>
    );
};

export default SubscribeModule;