import React from 'react';
import TopicCart from '../../../Components/TopicCart/TopicCart'
import SliderBtn from '../../../UI/SliderBtn/SliderBtn';
import SliderBar from '../../../Modules/FetchSlider/components/SliderBar/SliderBar';
import './TourSliderArticle.style.css'
import Btn from '../../../UI/Btn/Btn';
// import background from '../../../img/bookbackground.png'
import img1 from '../../../img/secondtopic.png'
import img2 from '../../../img/firsttopic.png'
import img3 from '../../../img/topiccartbackground_1.webp'
import img4 from '../../../img/thirdtopic.png'
import img5 from '../../../img/fourtopic.png'
import { useState, useRef } from 'react';

const TourSliderArticle = props => {
    const WindowWidth = document.body.clientWidth
    const topicTextContainer = ( 
        <div className='topic-slider-text-container'>
            <h2 className='topic-slider__ttl'>Luxury Packages</h2>
            <Btn innertext='view all' className='tourSlider__btn'/>
        </div>
    )
    
    const [margin, setMargin] = useState(19)
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
            <div className="wrapper">
                {WindowWidth < 880 && topicTextContainer }
                <div className='topic-slider-line' style={{ marginLeft: `${margin}px` }}>
                    {WindowWidth > 880 && topicTextContainer}
                    <TopicCart ttl='Best Winter Destinations' margin={WindowWidth < 1300 ? '0' : '122'} img={img1}/>
                    <TopicCart ttl='The worlds most extraordinary places' margin={WindowWidth < 1300 ? '-323' : '0'} img={img2}/>
                    <TopicCart ttl='New destinations for 2022' margin={WindowWidth < 1300 ? '0' : '-149'} img={img3}/>
                    <TopicCart ttl='Your health is matter' margin={WindowWidth < 1300 ? '-323' : '0'} img={img4}/>
                    <TopicCart ttl='Experiences Away From Crowd' margin={WindowWidth < 1300 ? '0' : '-126'} img={img5}/>
                </div>
                {WindowWidth < 880 && <SliderBtn handleClick={moveSlider} />}
                <SliderBar items={[1, 2, 3, 4, 5]} indexSliderBarRef={indexSliderBarRef} />
            </div>
        </div>
    );
};

export default TourSliderArticle;