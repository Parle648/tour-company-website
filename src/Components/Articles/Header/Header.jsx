import React from 'react';
import Navigation from '../../Navigation/Navigation';
import HeaderBtn from '../../UI/HeaderBtn/HeaderBtn';
import Logo from '../../UI/Logo/Logo';
import burger from '../../../img/burgertrigger.svg'
import styles from './header.module.scss';
import BurgerNavigation from '../../BurgerNavigation/BurgerNavigation';

const Header = props => {
    const [visible, setVisible] = React.useState(false)
    
    function setDisabled () {
        document.body.classList.toggle(styles.bodyHidden)
        setVisible(!visible);
    }

    return (
        <header className={styles.header}>
            <button className={styles.modileBtn}>CALL ME</button>
            <Logo />
            <Navigation/>
            <HeaderBtn text='Call Me Back' />
            <img className={styles.burgerBtn} src={burger} alt="burgerBtn" onClick={setDisabled}/>
            <BurgerNavigation visible={visible} setVisible={setVisible}/>
        </header>
    );
};

export default Header;