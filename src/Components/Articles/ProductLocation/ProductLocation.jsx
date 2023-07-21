import React from 'react';
import './ProductLocation.scss';
import mapImage from '../../../img/map.png';

const ProductLocation = props => {
    return (
        <div className='ProductLocation'>
            <h2 className='ProductLocation__tll'>Location</h2>
            <p className='ProductLocation__subttl'>
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                Nullam dictum felis eu pede mollis pretium.
            </p>
            <img className='ProductLocation__img' src={mapImage} alt="ProductLocation__img" />
        </div>
    );
};

export default ProductLocation;