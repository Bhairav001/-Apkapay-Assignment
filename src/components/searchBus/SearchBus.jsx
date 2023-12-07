import React, { useEffect, useState } from "react";
import homeImage from "../../assets/hero.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ListBus from "../listBus/ListBus";
// import useFetch from "../../hooks/useFetch";


const SearchBus = () => {
const [data,setData] = useState([]);
const [searchInput, setSearchInput] = useState("");
  const [searchInputDestination, setSearchInputDestionation] = useState("");
  const [searchInputDate, setSearchInputDate] = useState("");
  const [buses, setBuses] = useState([]);
  const [query, setQuery] = useState("");

  const navigate = useNavigate()
  const searchMovie=async()=>{
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
   .then((res) => setData(res))
   .catch((error) => console.error("Error in useEffect:", error));
},[]);

const searchQueryHandler = (event) => {
  if (event.key == "Enter" && query.length > 0) {
    navigate(`/search/${query}`)
  }
}
console.log("data",data);
  return (
    <>
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
                Frome
              </label>
              <input
                   type="text"
                   placeholder="Enter Source "
                   onChange={(e) => setSearchInputDestionation(e.target.value)}
                   onKeyUp={searchQueryHandler}
                className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-black text-center w-full focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col items-center">
              <label htmlFor="checkIn" className="text-black text-lg mb-2">
                to
              </label>
              <input
                type="text"
                placeholder="Enter destination"
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyUp={searchQueryHandler}
                className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-black text-center w-full focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col items-center">
              <label htmlFor="checkOut" className="text-black text-lg mb-2"
              >
                date
              </label>
              <input
               type="date"
               placeholder="Enter Date "
               onChange={(e) => setSearchInputDate(e.target.value)}
               onKeyUp={searchQueryHandler}
                className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-black text-center w-full focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
          </div>
          <button onClick={()=>navigate(`/search/${query}`)} className="mt-4 px-6 py-3 rounded-md bg-blue-500 text-white text-lg font-semibold uppercase hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring focus:border-blue-500">
            Explore Now
          </button>
        </div>
      </div>
    </section>
    {/* {data.map((el)=>(
        <div key={el.id}>
          <ListBus Service_Name={el.Service_Name}/>
        </div>
      ))} */}
    </>
  );
};

export default SearchBus;
