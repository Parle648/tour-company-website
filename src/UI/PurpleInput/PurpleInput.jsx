import React from 'react';
import './PurpleInput.css'

const PurpleInput = React.memo(({inputName, width, refer}) => {
    return (
        <label className='PurpleInputLabel'>
            <h2 className='PurpleInput__title'>{inputName}</h2>
            <input className='PurpleInput' type="text" {...refer} style={{width: width}}/>
        </label>
    );
});

export default PurpleInput;