import React from 'react';
import MainFirstBlock from './Components/MainFirstBlock/MainFirstBlock.jsx'
import FetchSlider from './Modules/FetchSlider/FetchSlider.jsx';
import TourSliderArticle from './Components/Articles/TourSliderArticle/TourSliderArticle.jsx';

function App() {
  return (
    <div className="App">
      <MainFirstBlock />
      <div className='wrapper'>
        <FetchSlider />
        <TourSliderArticle />
      </div>
    </div>
  );
}

export default App;