import React from 'react';
import WhiteBtn from '../../UI/WhiteBtn/WhiteBtn';
import './SubscribeModule.style.css';

const SubscribeModule = ({style}) => {
    const [inputValue, setInputValue] = React.useState('Email adress');

    const changeValue = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className={`SubscribeModule ${style}`}>
            <h2 className='SubscribeModule__ttl'>Get weekly inspiration and expert advice</h2>
            <h2 className='SubscribeModule__subttl'>Sign up for our Weekly Newsletter</h2>
            <label className='SubscribeModule__label'>
                <input className='SubscribeModule__input' type="text" name='mail' value={inputValue} onChange={changeValue}/>
                <WhiteBtn/>
            </label>
        </div>
    );
};

export default SubscribeModule;