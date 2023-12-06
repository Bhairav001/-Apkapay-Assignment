import React, { useEffect, useState } from "react";
import homeImage from "../../assets/hero.png";
import axios from "axios";

const searchMovie=async()=>{
    const response = axios.post("https://rightpayonline.com/bus/getAvailableServices");
    return response.json()
    
}
const SearchBus = () => {
const [data,setData] = useState([])
useEffect(()=>{
   searchMovie().then((res)=>res.json())
   .then((res)=>console.log("res",res))
   .catch((err)=>console.log(err))
},[])
  return (
    <section id="searchBus" className="relative mt-8 w-full h-screen flex items-center">
      <div className="background absolute inset-0">
        <img src={homeImage} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="content text-white text-center z-10">
        <div className="title mb-4">
          <h1 className="text-4xl font-extrabold tracking-wide leading-tight">
            TRAVEL TO EXPLORE
          </h1>
          <p className="text-lg mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            natus, enim ipsam magnam odit deserunt itaque? Minima earum velit
            tenetur!
          </p>
        </div>
        <div className="search bg-white bg-opacity-80 p-6 rounded-md mx-auto max-w-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <label htmlFor="location" className="text-black text-lg mb-2">
                Where you want to go
              </label>
              <input
                type="text"
                id="location"
                placeholder="Search Your location"
                className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-black text-center w-full focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col items-center">
              <label htmlFor="checkIn" className="text-black text-lg mb-2">
                Check-in
              </label>
              <input
                type="date"
                id="checkIn"
                className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-black text-center w-full focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col items-center">
              <label htmlFor="checkOut" className="text-black text-lg mb-2">
                Check-out
              </label>
              <input
                type="date"
                id="checkOut"
                className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-black text-center w-full focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
          </div>
          <button className="mt-4 px-6 py-3 rounded-md bg-blue-500 text-white text-lg font-semibold uppercase hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring focus:border-blue-500">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchBus;
