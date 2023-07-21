import React from 'react';
import changeBackground from '../../utils/changeBackground';

const TourPage = props => {
    React.useEffect(() => {
        changeBackground()
    }, [])
    return (
        <div>
            TourPage
        </div>
    );
};

export default TourPage;