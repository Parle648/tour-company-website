import Header from "../Header/Header";
import SearchComponent from "../SearchComponent/SearchComponent";
import Main from "../../Pages/Main/Main";
import Luxury from '../../Pages/LuxuryPackages/LuxuryPackages'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../../styles.css/style.css'
import './MainFirstBlock.style.css'
import Footer from "../Footer/Footer";

function MainFirstBlock () {

    return (
        <div className="MainFirstBlock">
            <Router>
                <Header />
                <Routes>
                    <Route exaxt path="/" element={<Main/>} className=""></Route>
                    <Route exaxt path="/luxury" Component={Luxury} className=""></Route>
                </Routes>
            </Router>
            <Footer></Footer>
        </div>
    );
}

export default MainFirstBlock