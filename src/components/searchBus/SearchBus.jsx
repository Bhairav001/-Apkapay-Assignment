// SearchBus.js
import React, { useState } from 'react';

const SearchBus = ({ onSearch }) => {
  const [sourceId, setSourceId] = useState('');
  const [destinationId, setDestinationId] = useState('');
  const [doj, setDoj] = useState('');

  const handleSearch = async () => {
    try {
      // Implement API call using sourceId, destinationId, and doj
      // const response = await axios.post('YOUR_API_ENDPOINT', { sourceId, destinationId, doj });
      // onSearch(response.data.services);

      // Mock data for testing
      const mockResponse = {
        services: [
          {
            operatorId: '115551',
            Service_key: '1769344333',
            Service_Name: 'Hyderabad To Amalapuram (VIA)Korukallu,Kalidindi,Juvvalapale',
            Service_Number: '884945339',
            Traveler_Agent_Name: 'RAINBOW TOURS AND TRAVELS',
            Bus_Type_Name: 'NON-AC Seater/Sleeper (2 + 1)',
            Start_time: '10:30 PM',
            Arr_Time: '04:15 AM',
            TravelTime: '05:45:00',
            Source_ID: 3,
            Destination_ID: 5,
            Fare: 1666,
            available_seats: '31',
            jdate: '2023-12-30',
            BUS_START_DATE: '2023-12-30',
            layout_id: 0,
          },
        ],
      };
      onSearch(mockResponse.services);
    } catch (error) {
      console.error('Error searching buses:', error);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Search Bus</h2>
      <div className="flex gap-4 mb-4">
        <label className="flex-1">
          Source ID:
          <input type="text" value={sourceId} onChange={(e) => setSourceId(e.target.value)} className="w-full p-2 border" />
        </label>
        <label className="flex-1">
          Destination ID:
          <input type="text" value={destinationId} onChange={(e) => setDestinationId(e.target.value)} className="w-full p-2 border" />
        </label>
        <label className="flex-1">
          Date of Journey:
          <input type="date" value={doj} onChange={(e) => setDoj(e.target.value)} className="w-full p-2 border" />
        </label>
        <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2">Search Buses</button>
      </div>
    </div>
  );
};

export default SearchBus;
