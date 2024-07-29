Axios Utility
// lib/api.js
import axios from 'axios';

// Create an Axios instance
const apiClient = axios.create({
  baseURL: 'https://your-django-backend.com/api/',  // Replace with your Django API base URL
  headers: {
	'Content-Type': 'application/json',
  },
});

export default apiClient;


// pages/index.js
import { useEffect, useState } from 'react';
import apiClient from '../lib/api';

export default function HomePage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
	const fetchData = async () => {
  	try {
    	const token = 'your-access-token'; // Replace with actual token
    	const response = await apiClient.get('/your-endpoint/', {
      	headers: {
        	Authorization: `Bearer ${token}`, // Add Authorization header
      	},
    	});
    	setData(response.data);
  	} catch (err) {
    	setError(err.message);
  	}
	};

	fetchData();
  }, []);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
	<div>
  	<h1>Data</h1>
  	<pre>{JSON.stringify(data, null, 2)}</pre>
	</div>
  );
}
