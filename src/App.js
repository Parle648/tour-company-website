import React from 'react';
import MainFirstBlock from './Components/MainFirstBlock/MainFirstBlock.jsx'
import FetchSlider from './Modules/FetchSlider/FetchSlider.jsx';
import TourSliderArticle from './Components/Articles/TourSliderArticle/TourSliderArticle.jsx';
import BookListArticle from './Components/Articles/BoolListArticle/BookListArticle.jsx';
import WhyWeArticle from './Components/Articles/WhyWeArticle/WhyWeArticle.jsx';
import CustomizeTripArticle from './Components/Articles/CustomiseTripArticle/CustomizeTripArticle.jsx';
import BlackBtn from './UI/BlackBtn/BlackBtn.jsx';
import SubscribeModule from './Modules/SubscribeModule/SubscribeModule.jsx';
import './styles.css/style.css'

function App() {
  return (
    <div className="App">
      <MainFirstBlock />
      <div className='wrapper'>
        <FetchSlider />
      </div>
      <TourSliderArticle />
      <BookListArticle />
      <WhyWeArticle />
      <CustomizeTripArticle />

      <SubscribeModule />
    </div>
  );
}

export default App;