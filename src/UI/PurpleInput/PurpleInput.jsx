import React from 'react';
import './PurpleInput.css'

const PurpleInput = ({inputName}) => {
    return (
        <label className='PurpleInputLabel'>
            <h2 className='PurpleInput__title'>{inputName}</h2>
            <input className='PurpleInput' type="text" name={inputName}/>
        </label>
    );
};

export default PurpleInput;