import React, {useState , useEffect} from 'react'
import axios from 'axios'


function geoLocation() {
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [responseData, setResponseData] = useState('')

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        })

        let endPoint = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        axios.get(endPoint)
            .then((response) => {
                console.log(response.data);
                setResponseData(response.data);
            })
    }, [])

    return (
        <div>
            <h1>{responseData.countryName}</h1>
        </div>
    )
}

export default geoLocation
