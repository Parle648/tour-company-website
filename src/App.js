import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles.css/style.css'
import Header from './Components/Header/Header.jsx';
import Main from './Pages/Main/Main.jsx';
import Footer from './Components/Footer/Footer.jsx';
import './Components/MainFirstBlock/MainFirstBlock.style.css'

const CustomizePage = React.lazy(() => import('./Pages/CustomizePage/CustomizePage.jsx'))
const Luxury = React.lazy(() => import('./Pages/LuxuryPackages/LuxuryPackages.jsx'))
const BookPage = React.lazy(() => import('./Pages/Book/BookPage'))
const ProductPage = React.lazy(() => import('./Pages/ProductPage/ProductPage.jsx'))

function App() {
  return (
    <div className="App">
        <div className="MainFirstBlock">
            <Router>
                <Header />
                <Routes>
                    <Route exaxt path="/" element={<Main/>} ></Route>
                    <Route exaxt path="/luxury" element={
                      <Suspense fallback={<h2>Loading...</h2>}>
                        <Luxury/>
                      </Suspense>} >
                    </Route>
                    <Route exaxt path="/book" element={
                      <Suspense fallback={<h2>Loading...</h2>}>
                        <BookPage/>
                      </Suspense>} >
                    </Route>
                    <Route exaxt path="/tour-page/*" element={
                      <Suspense fallback={<h2>Loading...</h2>}>
                        <ProductPage/>
                      </Suspense>} >
                    </Route>
                    <Route exaxt path="/customise" element={
                      <Suspense fallback={<h2>Loading...</h2>}>
                        <CustomizePage/>
                      </Suspense>}>
                    </Route>
                </Routes>
            </Router>
            <Footer></Footer>
        </div>
    </div>
  );
}

export default App;