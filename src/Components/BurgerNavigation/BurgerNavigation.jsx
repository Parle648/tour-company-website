import { Link } from 'react-router-dom'

function BurgerNavigation ({visible, setVisible}) {

    function closeBurger() {
        setVisible()
    }

    return (
        <div className={`BurgerNavigation ${(visible) ? 'burger_disabled' : ''}`}>
            <ul className='burder-nav'>
                <li className='burder-nav-item' onClick={closeBurger}><Link className='burder-nav-link' to={'/'} relative="path">Home</Link></li>
                <li className='burder-nav-item' onClick={closeBurger}><Link className='burder-nav-link' to={'/luxury'}>Luxury packages</Link></li>
                <li className='burder-nav-item' onClick={closeBurger}><Link className='burder-nav-link' to={'/luxury'}>Book with us</Link></li>
                <li className='burder-nav-item' onClick={closeBurger}><Link className='burder-nav-link' to={'/luxury'}>Why Lux Trips</Link></li>
                <li className='burder-nav-item' onClick={closeBurger}><Link className='burder-nav-link' to={'/luxury'}>Contact</Link></li>
                <li className='burder-nav-item' onClick={closeBurger}><Link className='burder-nav-link' to={'/luxury'}>Client Area</Link></li>
            </ul>
        </div>
    );
}

export default BurgerNavigation