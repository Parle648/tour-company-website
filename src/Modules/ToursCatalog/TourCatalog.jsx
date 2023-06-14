import React from 'react';
import './TourCatalog.css'
import getTours from './api/fetchTours';
import TourCart from '../../Components/TourCart/TourCart'
import ShowMoreBtn from './Components/ShowMoreBtn/ShowMoreBtn';
import { Link } from 'react-router-dom'

const TourCatalog = props => {
    const displayWidth = document.body.clientWidth
    const countDisplayToursRef = React.useRef((displayWidth > 700 ? 9 : 4))
    
    const [tourItems, setTourItems] = React.useState([])
    const [loaderDisabled, setLoaderDisabled] = React.useState(true)
    let [count, setCount] = React.useState((displayWidth > 700 ? 9 : 4))

    React.useEffect(() => {
        const tours = getTours();
        tours.then(data =>  {
            setTourItems(data)
            setLoaderDisabled(false)
        })
    }, [])
    
    const ShowMore = React.useCallback(() => {
        setCount(count += countDisplayToursRef.current)
    }, [])

    return (
        <div className='TourCatalog'>
            <div className="TourCatalog__list">
                {loaderDisabled && <div class="loader"></div>}
                {tourItems.map(tour => {
                    if (tourItems.indexOf(tour) < count) {
                        return (
                            <Link exaxt to='/tour-page'>
                                <TourCart 
                                    key={tour.id}
                                    location={tour.location} 
                                    ttl={tour.title} 
                                    mincost={tour.minCost} 
                                    rating={tour.rating}
                                    id={tour.id}>
                                </TourCart>
                            </Link>
                        )
                    }
                })}
            </div>
            {count < tourItems.length && <ShowMoreBtn handleClick={ShowMore}></ShowMoreBtn>}
        </div>
    );
};

export default TourCatalog;