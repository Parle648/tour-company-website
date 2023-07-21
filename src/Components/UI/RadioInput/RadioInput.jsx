import React from 'react';
import './ReadioInput.scss';

const RadioInput = ({refer}) => {
    const [choosed, setChoosed] = React.useState(false)

    return (
        <label className='RadioInput'>
            <input className='RadioInput__radio' type='checkbox' {...refer} onChange={() => {
                setChoosed(!choosed)
            }}/>
            <h2 className='fakeRadio__ttl'>Driver</h2>
            <div className="fakeRadio">
                <div className='fakeRadio__choose'>
                    <div className={`fakeRadio__trigger ${choosed && 'fakeRadio__trigger_active'}`}></div>
                    <h3 className='fakeRadio__choise'>Yes</h3>
                    <h3 className='fakeRadio__choise'>No</h3>
                </div>
            </div>
        </label>
    );
};

export default RadioInput;