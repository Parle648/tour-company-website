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