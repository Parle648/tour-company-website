import sliderArrow from '../../../../img/sliderbtn.svg';

export default function SliderBtn ({handleClick, margin, setMargin}) {
    return (
        <div className="SliderBtn" onClick={handleClick}>
            <img className="SliderBtn__arrow" src={sliderArrow} alt="" />
        </div>
    );
}