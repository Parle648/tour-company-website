import sliderArrow from '../../img/sliderbtn.svg';

export default function SliderBtn ({handleClick, style}) {
    return (
        <div className={`SliderBtn ${style}`} onClick={handleClick}>
            <img className="SliderBtn__arrow" src={sliderArrow} alt="" />
        </div>
    );
}