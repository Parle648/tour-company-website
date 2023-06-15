import React from 'react';
import './styles.css/style.css'

import Header from './Components/Header/Header.jsx';
import Main from './Pages/Main/Main.jsx';
import Luxury from './Pages/LuxuryPackages/LuxuryPackages.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import '../../styles.css/style.css'
import './Components/MainFirstBlock/MainFirstBlock.style.css'
import Footer from './Components/Footer/Footer.jsx';
import ProductPage from './Pages/ProductPage/ProductPage.jsx';

function App() {
  return (
    <div className="App">
        <div className="MainFirstBlock">
            <Router>
                <Header />
                <Routes>
                    <Route exaxt path="/" element={<Main/>} ></Route>
                    <Route exaxt path="/luxury" element={<Luxury/>} ></Route>
                    <Route exaxt path="/tour-page" element={<ProductPage></ProductPage>} ></Route>
                </Routes>
            </Router>
            <Footer></Footer>
        </div>
    </div>
  );
}

export default App;