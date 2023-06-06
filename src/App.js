import MainFirstBlock from './Components/MainFirstBlock/MainFirstBlock.jsx'
import FetchSlider from './Modules/FetchSlider/FetchSlider.jsx';
import TopicCart from './Components/TopicCart/TopicCart.jsx';
import SliderBtn from './Modules/FetchSlider/components/SliderBtn/SliderBtn.jsx';
import SliderBar from './Modules/FetchSlider/components/SliderBar/SliderBar.jsx';
import Btn from './UI/Btn/Btn.jsx';
import React from 'react';

function App() {
  return (
    <div className="App">
      <MainFirstBlock />
      <div className='wrapper'>
        <FetchSlider />
        <div className='topic-slider-wrapper'>
          <div className='topic-slider-line'>
            { document.body.clientWidth > 880 && 
              <div className='topic-slider-text-container'>
                <h2 className='topic-slider__ttl'>Luxury Packages</h2>
                <Btn innertext='view all'/>
              </div>
            }
            <TopicCart ttl='Hello World' margin={document.body.clientWidth < 1300 ? '0' :'135'}/>
            <TopicCart ttl='Hello World' margin={document.body.clientWidth < 1300 ? '-323' : '0'}/>
            <TopicCart ttl='Hello World' margin={document.body.clientWidth < 1300 ? '0' : '-244'}/>
            <TopicCart ttl='Hello World' margin={document.body.clientWidth < 1300 ? '-323' : '0'}/>
            <TopicCart ttl='Hello World' margin={document.body.clientWidth < 1300 ? '0' : '-140'}/>
          </div>
          <SliderBtn />
        </div>
      </div>
    </div>
  );
}

export default App;