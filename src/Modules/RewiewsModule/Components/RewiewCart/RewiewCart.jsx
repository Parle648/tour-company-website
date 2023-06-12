import React, { memo } from 'react';
import './RewiewCart.style.css'

import photo from '../../../../img/useronerewiew_1.webp';
import side from '../../../../img/rewiwewsubtract.png'
import topSide from '../../../../img/rewiewtopside.png'

const RewiewCart = memo(({ userphoto }) => {
    return (
        <div className='RewiewCart'>
        <img className='RewiewCart__backgroundSide' src={side} alt="RewiewCart__backgroundSide" />
        <img className='RewiewCart__backgroundTopSide' src={topSide} alt="RewiewCart__backgroundSide" />
        <div className='RewiewCart__inner-block'>
            <img className='RewiewCart__user-photo' src={photo} alt="RewiewCart__user" />
            <p className='RewiewCart__rewiew'>
                “Well organized trip, All arranged well by Arooz. Special thanks to Aijaz Bhai for the service and support given to us, all explained well and take us to all places as per our wish. It was a wonderful experience .... Thank you team”
            </p>
            <h2 className='RewiewCart__username'>- Eduard Hand</h2>
            <h2 className='RewiewCart__trip'>Müller-Egerer</h2>
        </div>
        </div>
    );
})

export default RewiewCart;