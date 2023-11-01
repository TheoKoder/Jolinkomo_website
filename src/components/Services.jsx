import { images } from "../constants/index";
import ServicesItem from "../pages/Container/ServicesItem";

const info = [
  {
    img: images.eingineers,
    title: "Key Competencies",
    details: [
      "Civil Engineering",
      "Mining engineering",
      "Technical Services",
      "General Construction",
      "Renovations",
      "General Maintenance",
      "Networks & Fiber",
      "Electricity",
      "Paving",
      "Plastering",
      "KERBS",
      "Painting",
      "ROADS",
      "FLEXI PAVE",
    ],
  },{
    img: images.logTrucks,
    title: "Transport Services",
    details: [
      "Transport & Logistics",
      "30-34 TON loads",
      "Movement of goods",
      "Imp & Exp services",
      "Garbage removal",
    ],
  },
  {
    img: images.networkinfra,
    title: " Network Infrastucture",
    details:
      " We provide complete network cabling services, from design, installation and project management through to commissioning management of the infrastructure",
  },
];

const Services = () => {
  return (
    <section id="/Services"  className="w-full h-auto dark:bg-slate-900 mb-14 dark:text-gray-100 duration-100 mt-14 sm:w-11/12 grid grid-flow-row-dense md:w-full height:150px object-contain mx-auto md:gap-x-5 gap-y-6 px-10 py-10 ">

      <h1 className="lg:text-7xl text-3xl md:text-xl py-20 mt-16 lg:text-center md:text-left text-blue-700 font-poppins font-bold">
        Services
      </h1>
      {info.map((item, inx) => (
        <ServicesItem
          className="w-full sm:hidden md:w-[calc(50%-20px))] lg:w-[calc(65.5%-20px)]"
          key={inx}
          img={item.img}
          title={item.title}
          details={item.details}
        />
      ))}
    </section>
  );
};

export default Services;
