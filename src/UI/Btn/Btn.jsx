import './Btn.style.css';

const Btn = ({innertext, className}) => {
    return (
        <button className={`Btn ${className}`}>{innertext}</button>
    );
};

export default Btn;