import styles from './Btn.module.scss';

const Btn = ({innertext, className, width}) => {
    return (
        <button className={`${styles.Btn} ${className}`} style={{width: width}}>{innertext}</button>
    );
};

export default Btn;