import React from "react";

const clients = [
  {
    name: "MassageBook",
    country: "USA",
    countryCode: "us",
    image: "/clients/Massagebook.svg",
    description:
      "MassageBook is the leading online platform in the U.S. for massage therapists and bodywork professionals.",
  },
  {
    name: "Hackolade",
    country: "Belgium",
    countryCode: "be",
    image: "/clients/hackolade.svg",
    description:
      "A groundbreaking data modeling tool introducing traditional database design concepts to NoSQL environments.",
  },
  {
    name: "SnapCare",
    country: "USA",
    countryCode: "us",
    image: "/clients/snapcare.svg",
    description:
      "An innovative app enabling real-time healthcare staffing solutions, trusted by many American hospitals.",
  },
  {
    name: "Quicket",
    country: "South Africa",
    countryCode: "za",
    image: "/clients/quicket.svg",
    description:
      "A leading ticketing provider in South Africa, catering to a market of over 50 million people.",
  },
  {
    name: "Datalogics",
    country: "USA",
    countryCode: "us",
    image: "/clients/datalogics.svg",
    description:
      "A top provider of software development kits for PDF and EPUB technologies.",
  },
  {
    name: "Perform Group",
    country: "UK",
    countryCode: "gb",
    image: "/clients/perform.svg",
    description:
      "Perform Group, a global leader in delivering digital sports content.",
  },
  {
    name: "Hummingbird",
    country: "Germany",
    countryCode: "de",
    image: "/clients/hummingbird.svg",
    description:
      "A groundbreaking mobile app facilitating forex and cryptocurrency trades in under a minute.",
  },
  {
    name: "Swissphone",
    country: "Switzerland",
    countryCode: "ch",
    image: "/clients/swissphone.svg",
    description:
      "Swissphone is a top global provider of reliable alerting and communication systems.",
  },
];

const OurClients = () => {
  return (
    <div className="custom-container my-10 sm:my-24">
      <div className="">
        <h2 className="main-heading">Our Clients</h2>
        <p className="text-para mt-2 text-center mb-12">
          Organizations that trust our engineering expertise:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="p-6 bg-secondary shadow-md rounded-lg hover:shadow-lg transition "
            >
              <div>
                <img
                  className="mb-4 h-12 w-36 items-center justify-center"
                  src={client.image}
                  alt=""
                ></img>
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={`https://flagcdn.com/w40/${client.countryCode}.png`}
                    alt={`${client.country} flag`}
                    className="w-7 h-4"
                  />
                  <p className="text-sm font-medium dark-heading">
                    {client.country}
                  </p>
                </div>
              </div>
              <p className="text-para">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClients;
