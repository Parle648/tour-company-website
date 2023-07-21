import React from 'react';
import './DropDownList.scss';
import arrow from '../../../img/dropdownarow.svg';
import rhombus from '../../../img/icondestination.svg';

const DropDownList = ({width, reset, children, title, refs}) => {
    let [value, setValue] = React.useState(`${children[0]}`)

    const bodyToggle = (event) => {
        event.target.closest('.DropDownList').querySelector('.DropDownList__body').classList.toggle('DropDownList__body_active')
    };
    const headerChange =(event) => {
        event.target.closest('.DropDownList__body').classList.toggle('DropDownList__body_active')
        setValue(event.target.innerText)
        reset({
            name: event.target.innerText,
        })
    };

    return (
        <div className='DropDownList' style={{width: width}}>
            <h2 className="DropDownList__title">{title}</h2>
            <div className="DropDownList__head" onClick={bodyToggle}>
                <select className='DropDownList__select' id={refs.name} {...refs} value={value}>
                    <option>{value}</option>
                </select>
                <img className='DropDownList__head-mark' src={rhombus} alt="rhombus" />
                <span className='DropDownList__head-title'>{value}</span>
                <img className='DropDownList__arrow' src={arrow} alt="DropDownList__arrow" />
            </div>
            <div className="DropDownList__body">
                {children.map(item => {
                    return <div className="DropDownList__item" style={{width: width}} onClick={headerChange}>{item}</div>
                })}
            </div>
        </div>
    );
}
export default DropDownList;