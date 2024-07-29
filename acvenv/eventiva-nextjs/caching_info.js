npm install swr

yarn add swr

// pages/events.js
import useSWR from 'swr';
import apiClient from '../lib/api';

const fetcher = (url) => apiClient.get(url, {
  headers: {
    Authorization: `Bearer ${process.env.API_TOKEN}`, // Replace with your token
  },
}).then(res => res.data);

export default function EventsPage() {
  const { data, error } = useSWR('/events/', fetcher, {
    revalidateOnFocus: false, // Adjust as needed
    dedupingInterval: 60000, // Deduplication interval (1 minute)
  });

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Events</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}


npm install react-query

yarn add react-query

// pages/events.js
import { useQuery } from 'react-query';
import apiClient from '../lib/api';

const fetchEvents = async () => {
  const response = await apiClient.get('/events/', {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`, // Replace with your token
    },
  });
  return response.data;
};

export default function EventsPage() {
  const { data, error, isLoading } = useQuery('events', fetchEvents, {
    staleTime: 60 * 60 * 1000, // Cache for 1 hour
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load</div>;

  return (
    <div>
      <h1>Events</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
