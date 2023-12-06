import React, { useState } from 'react';

const SearchLayout = () => {
  const [seatingLayout, setSeatingLayout] = useState(null);
  const [error, setError] = useState(null);

  const fetchSeatingLayout = async () => {
    const apiEndpoint = 'https://rightpayonline.com/bus/getSeatingLayout';
    const requestData = {
      sourceId: '3',
      destinationId: '5',
      doj: '2023-12-30',
    };

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch seating layout');
      }

      const responseData = await response.json();
      setSeatingLayout(responseData.services);
    } catch (error) {
      console.error('Error fetching seating layout:', error);
      setError('Failed to fetch seating layout. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Seat Layout Selection</h2>

      {error && <p className="text-red-500">{error}</p>}

      <button onClick={fetchSeatingLayout} className="bg-blue-500 text-white px-4 py-2 mt-4">
        Fetch Seating Layout
      </button>

      {seatingLayout && (
        <div>
          <h3>Seating Layout:</h3>
          <pre>{JSON.stringify(seatingLayout, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default SearchLayout;
