import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { json, useNavigate } from "react-router-dom";
import ListBus from "../listBus/ListBus";

const createData = createContext()
const SearchBus = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchInputDestination, setSearchInputDestionation] = useState("");
  const [searchInputDate, setSearchInputDate] = useState("");
  const navigate = useNavigate("");
  const [singleData, setSingleData] = useState([])
  const [loading, setLoading] = useState(false)
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

  const searchBuses = () => {
      searchMovie().then((res) => setData(res));
  };
  console.log("data", data);

  function handleNavigate(singleBus){
    navigate("/listbus")
    console.log("SingleBus",singleBus)
    setSingleData(singleBus)
    
  }

  console.log("nowdata", singleData)
  return (
    <>
      <section className="relative mt-0 w-full h-screen flex items-center">
        <div className="background absolute inset-0">
          <img src="https://s1.dmcdn.net/v/Dntim1Zej1XIyNDbI/x1080" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="content text-red text-center z-10" style={{ margin: "auto" }}>
          <div className="title mb-2">
            <h1 className="text-4xl text-white font-extrabold tracking-wide leading-tight">
              TRAVEL TO EXPLORE
            </h1>
          </div>
          <div className="search bg-white bg-opacity-50 p-6 rounded-md mx-auto max-w-2xl">
            <div className="grid grid-cols-1  md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <label htmlFor="location" className="text-black text-xl font-extrabold text-lg mb-2">
                  From
                </label>
                <input
                  type="text"
                  placeholder="Enter Source "
                  onChange={(e) => setSearchInputDestionation(e.target.value)}
                  className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-black text-center w-full focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col items-center">
                <label htmlFor="checkIn" className="text-black text-xl font-extrabold text-lg mb-2">
                  to
                </label>
                <input
                  type="text"
                  placeholder="Enter destination"
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-black text-center w-full focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col items-center">
                <label htmlFor="checkOut" className="text-black text-xl font-extrabold text-lg mb-2"
                >
                  date
                </label>
                <input
                  type="date"
                  placeholder="Enter Date "
                  onChange={(e) => setSearchInputDate(e.target.value)}
                  className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-black text-center w-full focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
            </div>
            <button onClick={searchBuses} className="mt-4 px-6 py-3 rounded-md bg-blue-500 text-white text-lg font-semibold uppercase hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring focus:border-blue-500">
              Explore Now
            </button>
          </div>
        </div>
      </section>
      <div id="results-container" className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {data.length === 0 ? (
    <p className="col-span-3 text-center text-gray-500 border border-gray-300 p-4 rounded-md">No buses found for the given destination.</p>
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
     <createData.Provider value={singleData}>
        <ListBus/>
     </createData.Provider>

     </>
  );
};

export default SearchBus;
export {createData}
