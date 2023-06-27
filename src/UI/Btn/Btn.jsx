import './Btn.style.css';

const Btn = ({innertext, className, width}) => {
    return (
        <button className={`Btn ${className}`} style={{width: width}}>{innertext}</button>
    );
};

export default Btn;