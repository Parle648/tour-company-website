import React from "react"
import navigationIcon from '../../../../img/navigationicon.png'

const SliderNavigation = ({chooseCountry}) => {
    return (
        <ul className="FetchSlider__nav">
            <li className="FetchSlider__link">
                <img className="active-link-icon active-link" src={navigationIcon} alt="navigationIcon" />
                <a className="FetchSlider__link " href="#!" onClick={chooseCountry}>World</a>
            </li>
            <li className="FetchSlider__link">
                <img className="active-link-icon" src={navigationIcon} alt="navigationIcon" />
                <a className="FetchSlider__link" href="#!" onClick={chooseCountry}>Africa</a>
            </li>
            <li className="FetchSlider__link">
                <img className="active-link-icon" src={navigationIcon} alt="navigationIcon" />
                <a className="FetchSlider__link" href="#!" onClick={chooseCountry}>Asia</a>
            </li>
            <li className="FetchSlider__link">
                <img className="active-link-icon" src={navigationIcon} alt="navigationIcon" />
                <a className="FetchSlider__link" href="#!" onClick={chooseCountry}>Europe</a>
            </li>
            <li className="FetchSlider__link">
                <img className="active-link-icon" src={navigationIcon} alt="navigationIcon" />
                <a className="FetchSlider__link" href="#!" onClick={chooseCountry}>North America</a>
            </li>
            <li className="FetchSlider__link">
                <img className="active-link-icon" src={navigationIcon} alt="navigationIcon" />
                <a className="FetchSlider__link" href="#!" onClick={chooseCountry}>South America</a>
            </li>
            <li className="FetchSlider__link">
                <img className="active-link-icon" src={navigationIcon} alt="navigationIcon" />
                <a className="FetchSlider__link" href="#!" onClick={chooseCountry}>Antarctica</a>
            </li>
            <li className="FetchSlider__link">
                <img className="active-link-icon" src={navigationIcon} alt="navigationIcon" />
                <a className="FetchSlider__link" href="#!" onClick={chooseCountry}>Australia</a>
            </li>
        </ul>
    )
}

export default SliderNavigation