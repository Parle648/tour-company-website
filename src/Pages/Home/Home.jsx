import React from 'react';
import FindJourney from '../../components/FindJourney/FindJourney';
import background from '../../img/bgtop.jpg';
import backgroundMobile from '../../img/mainbackgroundmobile.png';
import FetchSlider from '../../modules/FetchSlider/FetchSlider';
import TourSliderArticle from '../../components/Articles/TourSliderArticle/TourSliderArticle.jsx';
import BookListArticle from '../../components/Articles/BooklListArticle/BookListArticle';
import WhyWeArticle from '../../components/Articles/WhyWeArticle/WhyWeArticle.jsx';
import CustomizeTripArticle from '../../components/Articles/CustomiseTripArticle/CustomizeTripArticle.jsx';
import SubscribeModule from '../../modules/SubscribeModule/SubscribeModule.jsx';
import ReviewModule from '../../modules/RewiewsModule/RewiewModule.jsx';
import ContactForm from '../../modules/ContactForm/ContactForm.jsx';
import Footer from '../../components/Footer/Footer.jsx';

const Home = props => {
    const marginDesctop = document.body.clientWidth * 0.4548 + 'px';
    const marginMobile = document.body.clientWidth * 1.176 + 'px';

    React.useEffect(() => {
        if(document.body.clientWidth > 800) {
            document.querySelector('.header-background').setAttribute('src', background);
            document.querySelector('header').style.marginBottom = marginDesctop
        } else {
            document.querySelector('.header-background').setAttribute('src', backgroundMobile);
            document.querySelector('header').style.marginBottom = marginMobile
        }
    }, [])

    return (
        <div className='Home'>
            <FindJourney />
            <FetchSlider />
            <TourSliderArticle />
            <BookListArticle />
            <WhyWeArticle />
            <CustomizeTripArticle />
            <SubscribeModule />
            <ReviewModule />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default Home;