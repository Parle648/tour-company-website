import axious from "axios"

export default function getToursList ({setItems}) {
    axious.get('https://tour-company-db.onrender.com/Tours')
    .then(res => {
        setItems(res.data)
    })
    .catch(err => console.log(err))
}