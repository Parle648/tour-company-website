import axious from "axios"

export default function getToursList (setItems, setDisabled, disabled) {
    axious.get('https://data-base-second.onrender.com/Tours')
    .then(res => {
        setItems(res.data)
        setDisabled(!disabled)
    })
    .catch(err => console.log(err))
}