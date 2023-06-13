import TourCatalog from "../../Modules/ToursCatalog/TourCatalog"
import SubscribeModule from "../../Modules/SubscribeModule/SubscribeModule"
import SearchComponent from '../../Components/SearchComponent/SearchComponent'

function Luxury () {
    return (
        <div className="Luxury">
            <SearchComponent />
            <TourCatalog/>
            <SubscribeModule style='Luxury-subscribe'/>
        </div>
    )
}
export default Luxury