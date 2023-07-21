import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Scss/main.scss';
import Header from './components/Articles/Header/Header';
import background from './img/bgtop.png';
import backgroundMobile from './img/mainbackgroundmobile.png';
import Home from './pages/Home/Home.jsx';
import BookPage from './pages/BookPage/BookPage.jsx';
import Catalog from './pages/Catalog/Catalog';
import OrderPage from './pages/OrderTourPage/OrderPage.jsx';
import ProductPage from './pages/ProductPage/ProductPage.jsx';
import React from 'react';

import CarPage from './pages/CarPage/CarPage.jsx';
import Hotels from './pages/Hotels/Hotels.jsx';

function App() {
  const viewWidth = window.innerWidth;

  return (
    <BrowserRouter>
      <img className='header-background' src={viewWidth > 800 ? background : backgroundMobile} alt='MainBackground' style={{
        position: 'absolute',
        width: '100%',
        zIndex: '-1',
      }}/>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/luxury' element={<Catalog />}></Route>

        <Route path='/tour-page/*' element={<ProductPage />}></Route>

        <Route path='/book' element={<BookPage />}></Route>
        <Route path='/car' element={<CarPage />}></Route>
        <Route path='/hotels' element={<Hotels />}></Route>
        <Route path='/villas' element={<h2>hello</h2>}></Route>
        <Route path='/yachts' element={<h2>hello</h2>}></Route>
        <Route path='/helicopters' element={<h2>hello</h2>}></Route>
        <Route path='/jets' element={<h2>hello</h2>}></Route>

        <Route path='/customise' element={<OrderPage />}></Route>
        
        <Route path='/whyWe' element={<Home />}></Route>
        <Route path='/contancts' element={<Home />}></Route>
        <Route path='/clientPage' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;