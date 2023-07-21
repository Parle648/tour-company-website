import React from 'react';
import changeBackground from '../../utils/changeBackground';
import TourCatalog from '../../modules/ToursCatalog/TourCatalog.jsx';
import SubscribeModule from '../../modules/SubscribeModule/SubscribeModule.jsx';
import Footer from '../../components/Footer/Footer.jsx';

const Catalog = props => {
    React.useEffect(() => {
        changeBackground()
    }, [])

    return (
        <div>
            <h2>Luxury packages</h2>
            <TourCatalog />
            <SubscribeModule />
            <Footer />
        </div>
    );
};

export default Catalog;