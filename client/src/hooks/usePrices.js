import { useQuery } from 'react-query';
import axios from 'axios';

const getPrices = async () => {
  const { data } = await axios.get('http://localhost:3001/prices');
  return data;
};

function usePrices() {
  return useQuery('cart', getPrices);
}

export default usePrices;
