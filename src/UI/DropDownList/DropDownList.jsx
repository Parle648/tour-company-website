import React from 'react';
import './DropDownList.css'
import arrow from '../../img/dropdownarow.svg'
import rhombus from '../../img/icondestination.svg'

const DropDownList = ({width ,head}) => {
    return (
        <div className='DropDownList' style={{width: width}}>
            <div className="DropDownList__head">
                <img src={rhombus} alt="rhombus" />
                <span>{head}</span>
                <img className='DropDownList__arrow' src={arrow} alt="DropDownList__arrow" />
            </div>
        </div>
    );
};

export default DropDownList;