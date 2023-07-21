import logo from '../../../img/logo.svg';
import styles from './logo.module.scss';

function Logo () {
    return (
        <img className={styles.logo} src={logo} alt="logo" />
    );
}

export default Logo