import { images } from "../constants";
import ArticlesItem from "../pages/Container/ArticlesItem";

const data = [
  {
    img: images.AboutUS,
    title: "Who We Are",
    details:
      "JOLINKOMO TRADING & PROJECT (PTY) LTDIs an emerging force in the construction industry which envisage to acquire the aspiration and ambition of the young graduates and those in the business technical fields, putting in place solid working relations with business satisfied. Pioneering new vision on socio paradigms in the future South Africa. JOLINKOMO TRADING AND PROJECTS(PYT) LTD: established in MARCH 2012 AND GROWING STRONG. Our Knowledge, experience and resources allow us to tackle projects of ANY SIZE.We  focus on, BUT NOT LIMITED TO, renovation of BRIDGES and WATER RETICULATION, as well as offering services such as  tunneling, drilling and cutting.",
  },
  {
    img: images.OurVision,
    title: "Our Vision",
    details: [
      "At JOLINKOMO TRADING AND PROJECTS (PTY) LTD, our main initiatives is to ensure full participation of Africans in the world of business.",
      "AIMS:The company aims to provide quality and efficient products and services to  the business community and general public.",
      "Developing areas in which it operates.Operate within prescribed ethical behaviour.",
      "Address and facilitate economic growth and entrepreneurial participation amongst previously Disadvantaged communities.",
      "Through TQM (Total Quality Management) we will strive to uplift those we serve by delivering QUALITY SERVICES AND PRODUCTS. provision of quality services to all clients regardless of project complexities.",
      " Employment of quality practice. Quality assurance is a major priority we can NOT stress enough.",
      " Building mutual, beneficially rewarding partnerships between Directors, Clients and Managment team.",
    ],
  },
  {
    img: images.JkHimself,
    title: "DIRECTOR PROFILE:",
    details:
      "MR V SIMANGA is a young enthusiatic and ethical Entreprenuer with good quality business principles. Focusing on giving the best of his energy, skills, educational qualifications, and knowledge to strive for the success of his business. He has acquired a Higher National Certificate in Financial Planning 12 years in the Financial institution assists in terms of company operations, to establish a better and favorable growth in company finances. 3 years of logistical analytics experience. Hard working and self determined. ",
  },
];

const Articles = () => {
  return (
    <section
      id="/Articles"
      className=" mt-14 sm:w-11/12 grid grid-flow-row-dense md:w-full height:150px bg-orange-700 dark:bg-blue-500 dark:text-gray-100 duration-100 object-cover mx-auto md:gap-x-5 gap-y-6 px-10 py-10 "
    >
      <h1 className="lg:text-7xl text-3xl md:text-xl py-20 mt-16 lg:text-center md:text-left text-blue-700 font-poppins font-bold">
        About us
      </h1>
      {data.map((item, index) => (
        <ArticlesItem
          className="w-full md:w-[calc(50%-20px))] lg:w-[calc(65.5%-20px)]"
          key={index}
          img={item.img} // Change 'image' to 'img'
          title={item.title} // Change 'tit' to 'title'
          details={item.details} // Change 'det' to 'details'
        />
      ))}
    </section>
  );
};

export default Articles;
