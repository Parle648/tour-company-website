import React from 'react';
import CustomizeForm from '../../Modules/Customizeform/CustomizeForm';

const CustomizePage = props => {
    React.useEffect(() => {
        if ( document.querySelector('.active') === null ) {
            document.querySelector('.MainFirstBlock').classList.add('MainFirstBlock_active')
            document.querySelector('.Header').classList.add('Header_active')
        }
    }, [])
    return (
        <div className='CustomizePage'>
            <h2 className='CustomizePage__ttl'>Customize Page</h2>
            <CustomizeForm></CustomizeForm>
        </div>
    );
};

export default CustomizePage;