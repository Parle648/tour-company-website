// import Header from "./Components/Header/Header";
// import Main from "./Pages/Main/Main";
// import Luxury from "./Pages/LuxuryPackages/LuxuryPackages";
import MainFirstBlock from './Components/MainFirstBlock/MainFirstBlock.jsx'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import SearchComponent from './Components/SearchComponent/SearchComponent.jsx'

function App() {
  return (
    <div className="App">
      <MainFirstBlock />
      {/* <Router>
        <Header />
        <Routes>
            <Route exaxt path="/" Component={Main}></Route>
            <Route exaxt path="/luxury" Component={Luxury}></Route>
        </Routes>
      </Router>
      <SearchComponent/> */}
    </div>
  );
}

export default App;