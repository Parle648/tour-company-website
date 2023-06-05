const getToursList = new Promise((resolve, reject) => {
    fetch('https://tour-company-db.onrender.com/Tours')
    .then(request => request.text())
    .then(result => resolve(JSON.parse(result)))
})

export default getToursList