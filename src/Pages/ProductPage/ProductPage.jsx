import React from 'react';
import TourRatingComponent from '../../Components/TourRatingComponent/TourRatingComponent';

const ProductPage = (props) => {
    const [itemRating, setItemRating] = React.useState(JSON.parse(localStorage.choosedTour).rating)

    const referense = React.useRef(0)

    React.useEffect(() => {
        // window.location.reload();
    }, [referense])


    return (
        <div className='ProductPage'>
            <TourRatingComponent 
                rating={itemRating}/>
        </div>
    );
};

export default ProductPage;