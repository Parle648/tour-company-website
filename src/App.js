import MainFirstBlock from './Components/MainFirstBlock/MainFirstBlock.jsx'
import FetchSlider from './Modules/FetchSlider/FetchSlider.jsx';

function App() {
  return (
    <div className="App">
      <MainFirstBlock />
      <div className='wrapper'>
        <FetchSlider />
      </div>
    </div>
  );
}

export default App;