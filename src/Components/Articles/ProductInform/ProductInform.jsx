import React from 'react';
import './ProductInform.css'
import includeMark from '../../../img/includevector.svg'
import notIncludeMark from '../../../img/notincludemark.svg'
import WhiteBtn from '../../../UI/WhiteBtn/WhiteBtn';

const ProductInform = ({ objectData }) => {
    const { title, included, notIncluded, destination, country, departure, dressCode } = objectData

    return (
        <div className='ProductInform'>
            {document.body.clientWidth > 1110 &&
                <div className="ProductInform__aside-cart">
                    <div className="ProductInform__aside-cart__linear"></div>
                    <WhiteBtn ttl='BOOK NOW' className='ProductInform__book-btn'/>
                </div>
            }
            <div className="ProductInform__content-block">
                <h2 className='ProductInform__ttl'>{title}</h2>
                <p className='ProductInform__description'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi dolor sed delectus, saepe consectetur eaque earum cupiditate. Soluta doloribus, 
                    deserunt asperiores quas a pariatur sapiente eveniet corporis commodi cupiditate magnam nam nulla. Quisquam in quos nostrum ut, architecto nihil
                    corrupti sequi, porro officiis eligendi consequatur, iste sit quae! Facere error vitae officiis tenetur. Vero aspernatur hic inventore modi nisi
                </p>

                <h2 className='ProductInform__topic-ttl'>Destination: <span className='ProductInform__topic-value'>{destination}</span></h2>
                <h2 className='ProductInform__topic-ttl'>Country: <span className='ProductInform__topic-value'>{country}</span></h2>
                <h2 className='ProductInform__topic-ttl'>Departure: <span className='ProductInform__topic-value'>{departure}</span></h2>
                <h2 className='ProductInform__topic-ttl'>DressCode: <span className='ProductInform__topic-value'>{dressCode}</span></h2>

                <h2 className='ProductInform__included-title'>Included</h2>
                {included.map(item => {
                    return <div className='ProductInform__include'><img className='ProductInform__include-vector' src={includeMark} alt="ProductInform__include" />{item}</div>
                })}
                <h2 className='ProductInform__not-included-title'>Not Included</h2>
                {notIncluded.map(item => {
                    return <div className='ProductInform__include'><img className='ProductInform__include-vector' src={notIncludeMark} alt="ProductInform__include" />{item}</div>
                })}
            </div>
        </div>
    );
};

export default ProductInform;