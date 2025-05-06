import React, { useState, useEffect } from 'react';
import { fetchMessages, deleteMessage } from '../api/ContactApi';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); // Boolean for loading state
  const [error, setError] = useState(null); // For error state

  const handleData = async () => {
    setLoading(true); // Set loading to true when fetching data
    try {
      const fetchedData = await fetchMessages();
      if (fetchedData) {
        setData(fetchedData);
      }
    } catch (err) {
      setError('Error fetching data. Please try again later.');
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false); // End loading when data is fetched or error occurs
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await deleteMessage(id);
      if (res && res.status === 200) {
        setData((prevData) => prevData.filter((msg) => msg._id !== id));
      }
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  useEffect(() => {
    handleData();
  }, []); // Fetch data on component mount

  return (
    <section className="relative container mx-auto pt-20 pb-10 md:pt-22 px-4 animate-fade-in h-auto max-w-[1000px] border-l-2 border-r-2 border-dashed border-gray-500 dark:border-gray-700">
    <div className="text-center">
      <h2 className="text-emerald-600 dark:text-gray-400 text-2xl font-bold animate-text mb-2">
        &lt; Messages. /&gt;
      </h2>
      <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-4 animate-text">
        Contact them urgently
      </h1>
    </div>
  
    {/* Loading State */}
    {loading && (
      <div className="text-center text-gray-600 dark:text-gray-400">
        <p>Loading Messages...</p> {/* Display loading message */}
      </div>
    )}
  
    {/* Error State */}
    {error && !loading && (
      <div className="text-center text-red-600 dark:text-red-400">
        <p>{error}</p> {/* Display error message if fetching fails */}
      </div>
    )}
  
    {/* Display Messages */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 px-4">
      {!loading && data.length > 0 ? (
        data.map((msg) => (
          <div
            key={msg._id}
            className="bg-white dark:bg-white/10 backdrop-blur-md p-6 shadow-xl transition-transform duration-300 hover:scale-105"
          >
            <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">{msg.name}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{msg.email}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{msg.message}</p>
            <button
              onClick={() => {
                if (window.confirm('Are you sure you want to delete this message?')) {
                  handleDelete(msg._id);
                }
              }}
              className="inline-block text-sm font-medium text-white bg-red-600 dark:bg-red-500 px-4 py-2 hover:bg-red-700 dark:hover:bg-red-600 transition"
            >
              Delete Message
            </button>
          </div>
        ))
      ) : (
        !loading && (
          <p className="text-center text-gray-500 dark:text-gray-300 col-span-full">
            No messages yet.
          </p>
        )
      )}
    </div>
  </section>
  
  );
};

export default Dashboard;
