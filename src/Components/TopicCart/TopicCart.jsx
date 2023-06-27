import './TopCart.css'
import rhombus from '../../img/rhombus.svg'
import React from 'react';

const TopicCart = ({ttl, margin, img}) => {
    return (
        <div style={{margin: `${margin}px 0px 0px`, background: `url(${img})`, backgroundRepeat: 'no-repeat'}} className='TopicCart' >
            <div className="TopicCart__linear"></div>
            <h2 className='TopicCart__ttl'>{ttl}</h2>
            <img src={rhombus} alt="" />
        </div>
    );
};

export default TopicCart;