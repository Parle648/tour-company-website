import Header from "../Header/Header";
import SearchComponent from "../SearchComponent/SearchComponent";
import Main from "../../Pages/Main/Main";
import Luxury from '../../Pages/LuxuryPackages/LuxuryPackages'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../../styles.css/style.css'
import './MainFirstBlock.style.css'
import background from '../../img/bgtop.png'

function MainFirstBlock () {

    return (
        <div className="MainFirstBlock">
            {/* <img src={background} alt="" /> */}
            <Router>
                <Header />
                <SearchComponent/>
                <Routes>
                    <Route exaxt path="/" Component={Main} className="absolute"></Route>
                    <Route exaxt path="/luxury" Component={Luxury} className="absolute"></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default MainFirstBlock