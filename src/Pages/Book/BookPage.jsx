import React from 'react';
import BookPageItem from '../../Components/BookPageItem/BookPageItem.jsx';
import backgroundUrl from '../../img/lamborguni.png'
import backgroundUrl1 from '../../img/hotels.png'
import backgroundUrl4 from '../../img/villas_1.webp'
import backgroundUr2 from '../../img/helicopters.png'
import backgroundUr3 from '../../img/yachts_1.webp'
import backgroundUr5 from '../../img/jets.png'
import SubscribeModule from '../../Modules/SubscribeModule/SubscribeModule.jsx';

const BookPage = props => {

    React.useEffect(() => {
        if ( document.querySelector('.active') !== null ) {
            document.querySelector('.MainFirstBlock').classList.add('MainFirstBlock_active')
            document.querySelector('.Header').classList.add('Header_active')
        }
    }, [])

    const style =document.body.clientWidth > 1110 ? {
        width: '1110px',
        margin: '0 auto 350px',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: '30px',
    } :
    {
        width: '92%',
        margin: '0 auto 350px',
        display: 'grid',
        alignItems: 'center',
        gridTemplateColumns: 'repeat(1, 1fr)',
        gridGap: '28px',

    }
    return (
        <div className='BookPage'>
            <h2 style={{
                width: '100%',
                marginTop: '-139px',
                position: 'absolute',
                textAlign: 'center',
                fontSize: '60px',
                lineHeight: '58px'
            }}>Book with us</h2>
            <div className='BookPage-container' style={style}>
                <BookPageItem backgroundUrl={backgroundUrl} title='Supercars'/>
                <BookPageItem backgroundUrl={backgroundUrl1} title='Hotels'/>
                <BookPageItem backgroundUrl={backgroundUrl4} title='Villas/chalets'/>
                <BookPageItem backgroundUrl={backgroundUr3} title='Yachts/Boats'/>
                <BookPageItem backgroundUrl={backgroundUr2} title='Private Helicopter'/>
                <BookPageItem backgroundUrl={backgroundUr5} title='Private Jet'/>
            </div>
            <SubscribeModule />
        </div>
    );
};

export default BookPage;