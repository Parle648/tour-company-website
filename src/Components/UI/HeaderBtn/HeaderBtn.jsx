import React from 'react';
import PropTypes from 'prop-types';

import border from '../../../img/headerbtnborder.png';
import crownTop from '../../../img/substracttop.svg';
import crownBottom from '../../../img/substractbottom.svg';

import styles from './headerbtn.module.scss';

const HeaderBtn = ({text}) => {
    return (
        <button className={styles.btn}>
            <img className={styles.border} src={border} alt="HeaderBtn" />
            <img className={styles.top} src={crownTop} alt="HeaderBtn" />
            <img className={styles.bottom} src={crownBottom} alt="HeaderBtn" />
            {text}
        </button>
    );
};

HeaderBtn.propTypes = {
    text: PropTypes.string.isRequired,
};

export default HeaderBtn;