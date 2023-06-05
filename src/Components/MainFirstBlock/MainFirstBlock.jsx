import Header from "../Header/Header";
import SearchComponent from "../SearchComponent/SearchComponent";
import background from '../../img/bgtop.png'
import Main from "../../Pages/Main/Main";
import Luxury from '../../Pages/LuxuryPackages/LuxuryPackages'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../../styles.css/style.css'

function MainFirstBlock () {
    const backgroundImage = {
        background: `url(${background})`,
        'background-repeat': 'no-repeat',
        'background-size': 'cover',
        "background-position": "center",
        'height': '1041px',
        'display': 'flex',
        'flex-direction': 'column',
        'justify-content': 'space-between',
        'align-items': 'center',
    }
    return (
        <div className="MainFirstBlock" style={backgroundImage}>
            <Router>
                <Header />
                <Routes>
                    <Route exaxt path="/" Component={Main}></Route>
                    <Route exaxt path="/luxury" Component={Luxury}></Route>
                </Routes>
            </Router>
            <SearchComponent/>
        </div>
    );
}

export default MainFirstBlock