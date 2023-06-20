import React from 'react';
import includeMark from '../../img/includevector.svg'
import './TourPlan.css'

const TourPlan = ({dataObject}) => {
    const {plan} = dataObject;
    
    return (
        <div className='TourPlan'>
            <h2 className="TourPlan__ttl">Luxury Tour Plan</h2>
            {Object.values(plan).map(item => {
                return (
                    <div className="TourDay">
                        <h2 className='TourDay__ttl'>{item.title}</h2>
                        <div className="TourDay_content-block">
                            <p className='TourDay__description'>
                                {item.description}
                            </p>
                            {item.included.map(item => {
                                return <div className='ProductInform__include'><img className='ProductInform__include-vector' src={includeMark} alt="ProductInform__include" />{item}</div>
                            })}
                        </div>
                    </div>
                ) 
            })}
        </div>
    );
};

export default TourPlan;