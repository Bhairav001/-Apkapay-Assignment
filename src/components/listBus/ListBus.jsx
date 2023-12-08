import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
const ListBus = () => {
  const [data, setData] = useState([]);

  const searchMovie = async () => {
    const response = await axios.post("https://rightpayonline.com/bus/getAvailableServices",
      {
        sourceId: "3",
        destinationId: "5",
        doj: "2023-12-30"
      }
    );
    return response.data.services

  }

  useEffect(()=>{
    searchMovie()
    .then((res)=>setData(res))
  },[])
console.log("listData",data)
  return (
    <div>
     <div id="results-container" className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {data.length === 0 ? (
    <p className="text-3xl font-bold dark:text-white text-center">No buses found for the given destination.</p>
  ) : (
    data.map((bus, index) => (
      <div key={index} className="bus-item border border-blue-500 p-4 rounded-md mb-4 cursor-pointer" onClick={()=>handleNavigate(bus)}>
        <p className="text-xl font-semibold text-blue-700">{bus.Traveler_Agent_Name}</p>
        <p className="mb-2 text-gray-600">Route: {bus.Service_Name}</p>
        <p className="text-green-500">Arrival Time: {bus.Arr_Time}</p>
        <p className="text-purple-500">Travel Time: {bus.TravelTime}</p>
        <p className="text-orange-500">Bus Type: {bus.Bus_Type_Name}</p>
      </div>
    ))
  )}
</div>
    </div>
  )
}

export default ListBus