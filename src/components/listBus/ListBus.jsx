import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SingleBus from './SingleBus';
const ListBus = () => {
  const [data, setData] = useState([]);
  const [singleData, setSingleData] = useState([])
  const navigate = useNavigate()
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

  useEffect(() => {
    searchMovie()
      .then((res) => setData(res))
  }, [])
  console.log("listData", data)

  function handleNavigate(bus) {
    setSingleData(bus)
  }


  useEffect(()=>{

    localStorage.setItem("singleData",JSON.stringify(singleData))
    
  },[singleData])
  console.log("singleData", singleData);
  
  return (
    <div>
      <div id="results-container" className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.length === 0 ? (
          <p className="text-3xl font-bold dark:text-white text-center">No buses found for the given destination.</p>
        ) : (
          data.map((bus, index) => (
            <div key={index} className="bus-item border border-blue-500 p-4 rounded-md mb-4 cursor-pointer" onClick={() => handleNavigate(bus)}>
              <p className="text-xl font-semibold text-blue-700">{bus.Traveler_Agent_Name}</p>
              <p className="mb-2 text-gray-600">Route: {bus.Service_Name}</p>
              <p className="text-green-500">Arrival Time: {bus.Arr_Time}</p>
              <p className="text-purple-500">Travel Time: {bus.TravelTime}</p>
              <p className="text-orange-500">Bus Type: {bus.Bus_Type_Name}</p>
              <br />
              <button onClick={()=>navigate("/singleBus")} class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                See Details
              </button>
            </div>
          ))
        )}
      </div>
      <SingleBus singleData={singleData}/>
    </div>
  )
}

export default ListBus