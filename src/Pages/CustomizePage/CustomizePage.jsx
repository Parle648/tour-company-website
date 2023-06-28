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
            <h2 style={{
                width: '100%',
                marginTop: '-139px',
                position: 'absolute',
                textAlign: 'center',
                fontSize: '60px',
                lineHeight: '58px'
            }}>Customize trip</h2>
            <CustomizeForm></CustomizeForm>
        </div>
    );
};

export default CustomizePage;