import React from 'react';
import changeBackground from '../../utils/changeBackground';
import CustomiseForm from '../../modules/Customizeform/CustomizeForm.jsx';

const OrderPage = props => {
    React.useEffect(() => {
        changeBackground()
    }, [])

    return (
        <div>
            <h2>Order Page</h2>
            <CustomiseForm />
        </div>
    );
};

export default OrderPage;