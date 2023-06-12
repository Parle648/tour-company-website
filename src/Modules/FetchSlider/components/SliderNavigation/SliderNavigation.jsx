import React from "react"

const SliderNavigation = React.memo(
    () => {
        console.log('rerender nav')
        return (
            <ul className="FetchSlider__nav">
                <li className="FetchSlider__link"><a className="FetchSlider__link" href="">World</a></li>
                <li className="FetchSlider__link"><a className="FetchSlider__link" href="">Africa</a></li>
                <li className="FetchSlider__link"><a className="FetchSlider__link" href="">Asia</a></li>
                <li className="FetchSlider__link"><a className="FetchSlider__link" href="">Europe</a></li>
                <li className="FetchSlider__link"><a className="FetchSlider__link" href="">North America</a></li>
                <li className="FetchSlider__link"><a className="FetchSlider__link" href="">South America</a></li>
                <li className="FetchSlider__link"><a className="FetchSlider__link" href="">Antarctica</a></li>
                <li className="FetchSlider__link"><a className="FetchSlider__link" href="">Australia</a></li>
            </ul>
        )
    }
)

export default SliderNavigation