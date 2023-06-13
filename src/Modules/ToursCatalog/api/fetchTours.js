export default function getTours () {
    return new Promise((resolve, reject) => {
        fetch('https://data-base-second.onrender.com/Tours')
        .then(request => request.text())
        .then(result => resolve(JSON.parse(result)))
        .then(data => data)
    })
}