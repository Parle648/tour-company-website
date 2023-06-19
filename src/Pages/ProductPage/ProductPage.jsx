import React from 'react';
import ProductInform from '../../Components/Articles/ProductInform/ProductInform';
import TourPoster from '../../Components/Articles/TourPosterArticle/TourPosterArticle';
import ProductLocation from '../../Components/ProductLocation/ProductLocation';
import SubscribeModule from '../../Modules/SubscribeModule/SubscribeModule'

const ProductPage = (props) => {
    const itemData = JSON.parse(localStorage.choosedTour)

    React.useEffect(() => {
        if ( document.querySelector('.active') === null ) {
            document.querySelector('.MainFirstBlock').classList.add('MainFirstBlock_active')
            document.querySelector('.Header').classList.add('Header_active')
        }
    }, [])

    return (
        <div className='ProductPage'>
            <h2 className='ProductPage__ttl'>Romantic Winter Destinations</h2>
            <TourPoster 
                rating={itemData.rating}
                location={itemData.location}
                title={itemData.title}
                minCost={itemData.minCost}
            />
            <ProductInform objectData={itemData}/>
            <ProductLocation/>
            {/* <SubscribeModule style=''/> */}
        </div>
    );
};

export default ProductPage;