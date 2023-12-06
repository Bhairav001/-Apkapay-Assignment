import React from "react";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";

const Services = () => {
  const data = [
    {
      icon: service1,
      title: "Get Best Prices",
      subTitle: "Pay through our application and save thousands and get amazing rewards.",
    },
    {
      icon: service2,
      title: "Covid Safe",
      subTitle: "We have all the curated hotels that have all the precautions for a covid safe environment.",
    },
    {
      icon: service3,
      title: "Flexible Payment",
      subTitle: "Enjoy flexible payment through our app and get rewards on every payment.",
    },
    {
      icon: service4,
      title: "Find The Best Near You",
      subTitle: "Find the best hotels and places to visit near you in a single click.",
    },
  ];

  return (
    <section id="services" className="py-16">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {data.map((service, index) => (
          <div
            key={index}
            className="service bg-white rounded-lg p-8 hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-2"
          >
            <div className="icon mb-4">
              <img src={service.icon} alt={service.title} className="h-10" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.subTitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
