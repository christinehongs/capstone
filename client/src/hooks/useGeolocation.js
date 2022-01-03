import { useEffect, useState } from 'react';
import axios from 'axios';

const useGeolocation = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [responseData, setResponseData] = useState('');

  navigator.geolocation.getCurrentPosition((position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  });

  useEffect(() => {
    let endPoint = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
    axios.get(endPoint).then((response) => {
      setResponseData(response.data);
    });
  }, [latitude, longitude]);

  const flag = responseData.countryCode;
  const newFlag = `${flag}`.toLowerCase();
  const countryName = responseData.countryName;

  return {newFlag, countryName}
};

export default useGeolocation
