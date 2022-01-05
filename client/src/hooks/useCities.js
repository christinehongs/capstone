import { useQuery } from 'react-query';
import axios from 'axios';

const getCities = async () => {
  const { data } = await axios.get('http://localhost:3001/cities');
  return data;
};

function useCities() {
  return useQuery('cities', getCities);
}

export default useCities;
