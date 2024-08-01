import axios from 'axios';

export async function fetchData() {
  try {
    const [response1, response2] = await Promise.all([
      axios.get('/api/data1'),
      axios.get('/api/data2'),
    ]);
    return { data1: response1.data, data2: response2.data };
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
