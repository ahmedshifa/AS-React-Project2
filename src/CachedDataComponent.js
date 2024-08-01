import React, { useEffect, useState } from 'react';
import { fetchData } from './cache'; // Make sure the path is correct

function CachedDataComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const result = await fetchData('/api/data');
        setData(result);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <div>{data ? JSON.stringify(data) : 'No data available'}</div>;
}

export default CachedDataComponent;
