import axios from 'axios';

export default function getTours () {
    return new Promise((resolve, reject) => {
        axios.get('https://data-base-second.onrender.com/Tours')
        .then(result => resolve(result))
        .catch(error => console.log(error))
    })
}