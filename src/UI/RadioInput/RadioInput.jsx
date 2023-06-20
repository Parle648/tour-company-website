import React from 'react';
import './ReadioInput.css'

const RadioInput = props => {
    const [checked, setChecked] = React.useState(false)
    const changeRadio = (event) => {
        console.log('w');
        event.preventDefault()
        setChecked(!checked)
    }
    return (
        <label className='RadioInput' onClick={changeRadio}>
            <input className='RadioInput__radio' type='radio' name='driver' checked={checked}/>
            <h2 className='fakeRadio__ttl'>Driver</h2>
            <div className="fakeRadio">
                <div className='fakeRadio__choose'>
                    <div className={`fakeRadio__trigger ${checked && 'fakeRadio__trigger_active'}`}></div>
                    <h2 className='fakeRadio__choise'>Yes</h2>
                    <h2 className='fakeRadio__choise'>No</h2>
                </div>
            </div>
        </label>
    );
};

export default RadioInput;