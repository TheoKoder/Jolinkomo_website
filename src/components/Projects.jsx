import { images } from "../constants";

const pD = [
  {
    img: images.N14,
    title: "VEA Road maintenance and Civils SANRAL",
    details:
      "Routine road maintenance, North West boarder N14-N12 randwest city",
    date: "May 2023",
  },
  {
    img: images.Ext6_roadworks,
    title: "ProPlan Consulting Engineers",
    details: "Construction of EXT6 (internal roads and stormwater)",
    date: "August 2023",
  },
  {
    img: images.EarthWorks,
    title: "DIPHATSE TRADING AND PROJECTS",
    details: [
      "Extension",
      "Installations maintenance",
      "Water treatment supply",
      "Sewage Works",
      "Sanitation",
      "EarthWorks",
    ],
    date: "June 2020",
  },
];

const Projects = () => {
  return (
    <section
      id="/Projects"
      className="w-full md:h-screen dark:bg-slate-900 mb-14 dark:text-gray-100 duration-100 mt-14 sm:w-11/12 grid grid-flow-row-dense md:w-full height:150px object-contain mx-auto md:gap-x-5 gap-y-6 px-10 py-10 "
    >
      <div className="max-w-[1800px]  mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-3">
          <h1 className="lg:text-7xl text-3xl md:text-xl py-20 mt-16 lg:text-center md:text-left text-blue-700 font-poppins font-bold">
            Projects
          </h1>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pD.map((item, index) => (
              <div
                key={index}
                className="h-96 md:h-auto w-full rounded-md  mb-4 overflow-hidden group relative"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover object-center rounded-lg"
                />
                <div className="absolute top-0 left-0 w-full font-poppins h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center bg-black bg-opacity-75">
                  <span className="text-lg md:text-xl font-bold font-roboto rounded-lg bg-orange-500 text-white tracking-wider">
                    {item.title}
                  </span>
                  <div className="pt-2 text-center text-sm md:text-xl text-white">
                    {Array.isArray(item.details)
                      ? item.details.join(", ")
                      : item.details}
                  </div>
                  <p className="mt-2 font-bold text-xs italic text-white">
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
