import React from 'react';
import './ShowMoreBtn.css'
import border from '../../../../img/whitebtnborder.png'
import topCrown from '../../../../img/substracttop.svg'
import bottomCrown from '../../../../img/substractbottom.svg'

const ShowMoreBtn = React.memo(({handleClick}) => {
    return (
        <button className='ShowMoreBtn' onClick={handleClick}>
            Load more
            <img className='topCrown' src={topCrown} alt="topCrown" />
            <img className='bottomCrown' src={bottomCrown} alt="bottomCrown" />
            <img className='ShowMoreBtn__background-border' src={border} alt="ShowMoreBtn__background-border" />
        </button>
    );
})

export default ShowMoreBtn;