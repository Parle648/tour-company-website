import TourCatalog from "../../Modules/ToursCatalog/TourCatalog"
import SubscribeModule from "../../Modules/SubscribeModule/SubscribeModule"
import SearchComponent from '../../Components/SearchComponent/SearchComponent'
import React from "react"
import bgTopShort from '../../img/bgheaderinner.png'

function Luxury () {

    React.useEffect(() => {
        if ( document.querySelector('.active') !== null ) {
            document.querySelector('.MainFirstBlock').classList.add('MainFirstBlock_active')
            document.querySelector('.Header').classList.add('Header_active')
        }
    }, [])

    return (
        <div className="Luxury">
            <h2 style={{
                width: '100%',
                marginTop: '-139px',
                position: 'absolute',
                textAlign: 'center',
                fontSize: '60px',
                lineHeight: '58px'
            }}>Luxury packages</h2>
            <SearchComponent />
            <TourCatalog/>
            <SubscribeModule style='Luxury-subscribe'/>
        </div>
    )
}
export default Luxury