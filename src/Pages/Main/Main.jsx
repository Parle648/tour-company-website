import FetchSlider from "../../Modules/FetchSlider/FetchSlider"
import TourSliderArticle from "../../Components/Articles/TourSliderArticle/TourSliderArticle"
import BookListArticle from "../../Components/Articles/BoolListArticle/BookListArticle"
import WhyWeArticle from "../../Components/Articles/WhyWeArticle/WhyWeArticle"
import CustomizeTripArticle from "../../Components/Articles/CustomiseTripArticle/CustomizeTripArticle"
import SubscribeModule from "../../Modules/SubscribeModule/SubscribeModule"
import RewiewModule from "../../Modules/RewiewsModule/RewiewModule"
import ContactForm from "../../Modules/ContactForm/ContactForm"
import SearchComponent from "../../Components/SearchComponent/SearchComponent"

function Main () {
    return (
        <div className="Main">
            <SearchComponent/>
            <div className='wrapper'>
                <FetchSlider />
            </div>
            <TourSliderArticle />
            <BookListArticle />
            <WhyWeArticle />
            <CustomizeTripArticle />
            <SubscribeModule />
            <RewiewModule/>
            <ContactForm/>
        </div>
    )
}
export default Main