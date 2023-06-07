import React from 'react';
import TopicCart from '../../../Components/TopicCart/TopicCart'
import SliderBtn from '../../../UI/SliderBtn/SliderBtn';
import SliderBar from '../../../Modules/FetchSlider/components/SliderBar/SliderBar';
import './TourSliderArticle.style.css'
import Btn from '../../../UI/Btn/Btn';
import { useState, useRef } from 'react';

const TourSliderArticle = props => {
    const WindowWidth = document.body.clientWidth
    const topicTextContainer = (
        <div className='topic-slider-text-container'>
            <h2 className='topic-slider__ttl'>Luxury Packages</h2>
            <Btn innertext='view all' />
        </div>
    )
    
    const [margin, setMargin] = useState(0)
    let indexSliderBarRef = useRef(0)

    function moveSlider() {
        if (margin >= -800 && WindowWidth < 880) {
            indexSliderBarRef.current += 1
            setMargin(margin - 305)
        } else {
            setMargin(0)
            indexSliderBarRef.current = 0
        }
    }

    return (
        <div className='TourSliderArticle'>
            {WindowWidth < 880 && topicTextContainer }
            <div className='topic-slider-line' style={{ marginLeft: `${margin}px` }}>
                {WindowWidth > 880 && topicTextContainer}
                <TopicCart ttl='Hello World' margin={WindowWidth < 1300 ? '0' : '135'} />
                <TopicCart ttl='Hello World' margin={WindowWidth < 1300 ? '-323' : '0'} />
                <TopicCart ttl='Hello World' margin={WindowWidth < 1300 ? '0' : '-244'} />
                <TopicCart ttl='Hello World' margin={WindowWidth < 1300 ? '-323' : '0'} />
                <TopicCart ttl='Hello World' margin={WindowWidth < 1300 ? '0' : '-140'} />
            </div>
            {WindowWidth < 880 && <SliderBtn handleClick={moveSlider} />}
            <SliderBar items={[1, 2, 3, 4, 5]} indexSliderBarRef={indexSliderBarRef} />
        </div>
    );
};

export default TourSliderArticle;