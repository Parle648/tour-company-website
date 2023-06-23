import React, { Suspense } from 'react';
import TourPoster from '../../Components/Articles/TourPosterArticle/TourPosterArticle';

import ProductInform from '../../Components/Articles/ProductInform/ProductInform';
import {Link, Routes, Route} from 'react-router-dom'
import TourPageNavigation from '../../Components/TourPageNavigation/TourPageNavigation';


const TourPlan = React.lazy(() => import('../../Components/TourPlan/TourPlan.jsx'));
const CancelationPolicy = React.lazy(() => import('../../Components/CancelationPolicy/CancelationPolicy'));
const ProductLocation = React.lazy(() => import('../../Components/ProductLocation/ProductLocation'));

const ProductPage = (props) => {
    const itemData = JSON.parse(localStorage.choosedTour)
    const {rating, location, title, minCost, plan} = itemData 

    React.useEffect(() => {
        if ( document.querySelector('.active') !== null ) {
            document.querySelector('.MainFirstBlock').classList.add('MainFirstBlock_active')
            document.querySelector('.Header').classList.add('Header_active')
        }
    }, [])

    return (
        <div className='ProductPage'>
            <h2 className='ProductPage__ttl'>Romantic Winter Destinations</h2>
            <TourPoster 
                rating={rating}
                location={location}
                title={title}
                minCost={minCost}
            />
            <TourPageNavigation></TourPageNavigation>

            <Routes>
                <Route path='inform' element={<ProductInform objectData={itemData} />}></Route>
                <Route path='tourplan' element={
                    <Suspense fallback={<h2>Loading...</h2>}>
                        <TourPlan dataObject={itemData}/>
                    </Suspense>
                }></Route>
                <Route path='location' element={
                    <Suspense fallback={<h2>Loading...</h2>}>
                        <ProductLocation />
                    </Suspense>
                }></Route>
                <Route path='policy' element={
                    <Suspense fallback={<h2>Loading...</h2>}>
                        <CancelationPolicy />
                    </Suspense>
                }></Route>
            </Routes>
        </div>
    );
};

export default ProductPage;