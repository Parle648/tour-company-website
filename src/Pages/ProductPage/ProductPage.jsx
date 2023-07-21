import React from 'react';
import changeBackground from '../../utils/changeBackground';
import TourPoster from '../../components/Articles/TourPosterArticle/TourPosterArticle.jsx';
import TourPageNavigation from '../../components/TourPageNavigation/TourPageNavigation.jsx';
import { Routes, Route } from 'react-router-dom';

import ProductLocation from '../../components/Articles/ProductLocation/ProductLocation.jsx';
import CancelerationPolicy from '../../components/Articles/CancelationPolicy/CancelationPolicy.jsx';
import TourPlan from '../../components/Articles/TourPlan/TourPlan.jsx';
import ProductInform from '../../components/Articles/ProductInform/ProductInform';

import Footer from '../../components/Footer/Footer.jsx';

const ProductPage = props => {
    const itemData = JSON.parse(localStorage.choosedTour)
    const {rating, location, title, minCost, plan} = itemData 

    React.useEffect(() => {
        changeBackground()
    }, [])

    return (
        <div className='ProductPage'>
            <TourPoster 
             rating={rating}
             location={location}
             title={title}
             minCost={minCost}
             />
            <TourPageNavigation />
            <Routes>
                <Route path='inform' element={<ProductInform objectData={itemData}/>}></Route>
                <Route path='tourplan' element={<TourPlan dataObject={itemData}/>}></Route>
                <Route path='location' element={<ProductLocation />}></Route>
                <Route path='policy' element={<CancelerationPolicy />}></Route>
            </Routes>
            <Footer />
        </div>
    );
};

export default ProductPage;