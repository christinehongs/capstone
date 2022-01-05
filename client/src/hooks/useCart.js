import { useQuery } from 'react-query';
import axios from 'axios';

const getCart = async () => {
  const { data } = await axios.get('http://localhost:3001/cart');
  return data;
};

function useCart() {
  return useQuery('cart', getCart);
}

export default useCart;
