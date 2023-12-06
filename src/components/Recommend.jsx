import React, { useState } from "react";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

const Recommend = () => {
  const data = [
    {
      image: Destination1,
      title: "Singapore",
      subTitle: "Singapore, officialy thr Republic of Singapore, is a",
      cost: "38,800",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination2,
      title: "Thailand",
      subTitle: "Thailand is a Southeast Asia country. It's known for",
      cost: "54,200",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination3,
      title: "Paris",
      subTitle: "Paris, France's capital, is a major European city and a",
      cost: "45,500",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination4,
      title: "New Zealand",
      subTitle: "New Zealand is an island country in the",
      cost: "24,100",
      duration: "Approx 1 night trip",
    },
    {
      image: Destination5,
      title: "Bora Bora",
      subTitle: "Bora Bora is a small South Pacific island northwest of",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip",
    },
    {
      image: Destination6,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
    },
  ];

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  const [active, setActive] = useState(1);

  return (
    <section id="recommend" className="py-8">
      <div className="title text-center mb-4">
        <h2 className="text-3xl font-semibold">Recommended Destinations</h2>
      </div>
      <div className="packages flex justify-center mb-8">
        <ul className="flex">
          {packages.map((pkg, index) => (
            <li
              key={index}
              className={`px-4 py-2 cursor-pointer transition ${
                active === index + 1
                  ? "border-b-2 border-purple-600 text-purple-600"
                  : ""
              }`}
              onClick={() => setActive(index + 1)}
            >
              {pkg}
            </li>
          ))}
        </ul>
      </div>
      <div className="destinations grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((destination, index) => (
          <div
            key={index}
            className="destination p-4 bg-purple-100 rounded-lg transition-transform duration-300 transform hover:translate-x-2 hover:-translate-y-1 hover:shadow-lg"
          >
            <img src={destination.image} alt={destination.title} className="w-full mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">{destination.title}</h3>
            <p className="text-gray-600 mb-2">{destination.subTitle}</p>
            <div className="info flex justify-between items-center mb-2">
              <div className="services flex gap-1">
                <img src={info1} alt="" className="rounded-full bg-purple-500 p-1" />
                <img src={info2} alt="" className="rounded-full bg-purple-500 p-1" />
                <img src={info3} alt="" className="rounded-full bg-purple-500 p-1" />
              </div>
              <h4 className="text-purple-700 font-semibold">{destination.cost}</h4>
            </div>
            <div className="distance flex justify-between">
              <span className="text-gray-700">1000 Kms</span>
              <span className="text-gray-700">{destination.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommend;
