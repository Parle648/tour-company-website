import './TopCart.css'
import rhombus from '../../img/rhombus.svg'
import React from 'react';

const TopicCart = ({ttl, margin}) => {
    return (
        <div style={{margin: `${margin}px 0px 0px`}} className='TopicCart' >
            <h2 className='TopicCart__ttl'>{ttl}</h2>
            <img src={rhombus} alt="" />
        </div>
    );
};

export default TopicCart;