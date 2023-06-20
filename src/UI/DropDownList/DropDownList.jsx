import React from 'react';
import './DropDownList.css'
import arrow from '../../img/dropdownarow.svg'
import rhombus from '../../img/icondestination.svg'

const DropDownList = ({width ,head, body, title}) => {
    const [headeeTitle, setHeadeeTitle] = React.useState(head)

    const bodyToggle = (event) => {
        event.target.closest('.DropDownList').querySelector('.DropDownList__body').classList.toggle('DropDownList__body_active')
    }
    const headerChange =(event) => {
        event.target.closest('.DropDownList__body').classList.toggle('DropDownList__body_active')
        setHeadeeTitle(event.target.innerText)
    }

    return (
        <div className='DropDownList' style={{width: width}}>
            <h2 className="DropDownList__title">{title}</h2>
            <div className="DropDownList__head" onClick={bodyToggle}>
                <img className='DropDownList__head-mark' src={rhombus} alt="rhombus" />
                <span className='DropDownList__head-title'>{headeeTitle}</span>
                <img className='DropDownList__arrow' src={arrow} alt="DropDownList__arrow" />
            </div>
            <div className="DropDownList__body">
                {body.map(item => {
                    return <div className="DropDownList__item" style={{width: width}} onClick={headerChange}>{item}</div>
                })}
            </div>
        </div>
    );
};

export default DropDownList;