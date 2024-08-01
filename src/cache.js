import LRU from 'lru-cache';
import axios from 'axios';

const cache = new LRU({ max: 100 }); // Cache up to 100 items

export async function fetchData(url) {
  if (cache.has(url)) {
    return cache.get(url);
  }
  try {
    const response = await axios.get(url);
    cache.set(url, response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw error to handle it in the component
  }
}
