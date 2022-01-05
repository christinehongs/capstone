import { useQuery } from 'react-query';
import axios from 'axios';

const getItems = async () => {
  const { data } = await axios.get('http://localhost:3001/items');
  return data;
};

function useItems() {
  return useQuery('items', getItems);
}

export default useItems;
