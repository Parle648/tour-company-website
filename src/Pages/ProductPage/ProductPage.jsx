import React from 'react';
import ProductInform from '../../Components/Articles/ProductInform/ProductInform';
import TourPoster from '../../Components/Articles/TourPosterArticle/TourPosterArticle';
import CancelationPolicy from '../../Components/CancelationPolicy/CancelationPolicy';
import ProductLocation from '../../Components/ProductLocation/ProductLocation';
import TourPlan from '../../Components/TourPlan/TourPlan';
import DropDownList from '../../UI/DropDownList/DropDownList';
import RadioInput from '../../UI/RadioInput/RadioInput';

const ProductPage = (props) => {
    const itemData = JSON.parse(localStorage.choosedTour)
    const {rating, location, title, minCost, plan} = itemData 

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
                rating={rating}
                location={location}
                title={title}
                minCost={minCost}
            />
            <ProductInform objectData={itemData}/>
            <ProductLocation/>
            <CancelationPolicy/>
            <TourPlan dataObject={itemData}/>
            <RadioInput></RadioInput>
            <DropDownList width='300px' head='Hello Pidor' body={['row first', 'row second', 'row third', 'row smth else']} title='Model of supercar'/>
        </div>
    );
};

export default ProductPage;