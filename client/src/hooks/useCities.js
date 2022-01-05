import { useQuery } from 'react-query';
import axios from 'axios';

function useCities() {
  return useQuery('posts', async () => {
    const { data } = await axios.get('http://localhost:3001/cities');
    return data;
  });
}
export default useCities;
