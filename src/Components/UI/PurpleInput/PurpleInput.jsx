import React from 'react';
import './PurpleInput.scss';

const PurpleInput = React.memo(({inputName, width, refer}) => {
    return (
        <label className='PurpleInputLabel'>
            <h3 className='PurpleInput__title'>{inputName}</h3>
            <input className='PurpleInput' type="text" {...refer} style={{width: width}}/>
        </label>
    );
});

export default PurpleInput;