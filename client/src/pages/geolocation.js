import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Layout } from '../components';

function GeoLocation() {
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
      console.log(response.data);
      setResponseData(response.data);
    });
  }, []);

  const flag = responseData.countryCode;
  const newFlag = `${flag}`.toLowerCase();

  return (
    <Layout>
      <h1>{responseData.countryName}</h1>
      <img src={`https://flagcdn.com/48x36/${newFlag}.png`} alt="..." />
    </Layout>
  );
}

export default GeoLocation;
