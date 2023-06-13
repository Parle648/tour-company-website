import React from 'react';
import './TourCatalog.css'
import getTours from './api/fetchTours';
import TourCart from '../../Components/TourCart/TourCart'
import ShowMoreBtn from './Components/ShowMoreBtn/ShowMoreBtn';

const TourCatalog = props => {
    const displayWidth = document.body.clientWidth
    
    const [disabled, setDisabled] = React.useState(true)
    const [btnDisabled, setbtnDisabled] = React.useState(true)
    let [count, setCount] = React.useState((displayWidth > 700 ? 9 : 4))
    const [tourItems, setTourItems] = React.useState([])

    React.useEffect(() => {
        const tours = getTours();
        tours.then(data =>  {
            setTourItems(data)
            setDisabled(false)
        })
        console.log('Fetch function');
    }, [])
    
    const countDisplayToursRef = React.useRef((displayWidth > 700 ? 9 : 4))

    const ShowMore = () => {
        setCount(count += countDisplayToursRef.current)
        console.log('Show more function');
    }

    return (
        <div className='TourCatalog'>
            <div className="TourCatalog__list">
                {disabled && 
                    <span class="loader"></span>
                }
                {tourItems.map(tour => {
                    if (tourItems.indexOf(tour) < count) {
                        return (
                            <TourCart 
                                location={tour.location} 
                                ttl={tour.title} 
                                mincost={tour.minCost} 
                                rating={tour.rating}>
                            </TourCart>
                        )
                    }
                })
                }
            </div>
            {count < tourItems.length && 
                <ShowMoreBtn handleClick={ShowMore}></ShowMoreBtn>
            }
        </div>
    );
};

export default TourCatalog;