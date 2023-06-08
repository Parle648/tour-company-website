import destination from '../../img/icondestination.svg'
import searchIcon from '../../img/searchicon.svg'
import label from '../../img/searchlabel.svg'

function SearchComponent () {
    return (
        <div className="SearchComponent">
            <img className="SearchLabel" src={label} alt="" />
            <div className="Search__block">
                <img src={destination} alt="" />
                <div className="Search__text-block">
                    <h2 className="Search__inner-ttl">Destination</h2>
                    <h2 className="Search__inner-subttl">Where are you going?</h2>
                </div>
            </div>
            <div className="Search__block">
                <img src={destination} alt="" />
                <div className="Search__text-block">
                    <h2 className="Search__inner-ttl">Travel type</h2>
                    <h2 className="Search__inner-subttl">Adventure Travel</h2>
                </div>
            </div>
            <div className="Search__block">
                <img src={destination} alt="" />
                <div className="Search__text-block">
                    <h2 className="Search__inner-ttl">When</h2>
                    <h2 className="Search__inner-subttl">14 Dec 2022</h2>
                </div>
            </div>
            <div className="Search__block">
                <img src={destination} alt="" />
                <div className="Search__text-block">
                    <h2 className="Search__inner-ttl">Travellers</h2>
                    <h2 className="Search__inner-subttl">2 Persons</h2>
                </div>
            </div>
            <button className="SearchBtn"><img src={searchIcon} alt="" /> find</button>
        </div>
    );
}

export default SearchComponent;