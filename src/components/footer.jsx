import { BiPhone } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import Certificate_ from "../assets/pfds/Certificate_.pdf";
import { images } from "../constants/index";

const details = [
  {
    details: [
      "71 Annan Road",
      "Old Mutual Building",
      "Carletonville",
      "2499",
      "Office no.11&12",
    ],
  },
];

const Footer = () => {
  return (
    <section className=" bg-slate-900 text-white sm:w-11/12 grid grid-flow-row-dense md:w-full height:150px object-contain mx-auto md:gap-x-5 gap-y-6 px-10 py-10 mb-[-1]  dark:bg-yellow-600 dark:text-gray-950 duration">
      <div className=" bg-red-400 dark:bg-blue-500  grid grid-cols-2 w-full  h-5 container justify-between items-center px-3 md:py-24 mx-auto space-y-[-12]  py-6 md:space-y-0 md:flex-row">
        <BiPhone
          size={30}
          className="text-white text-xs rounded-lg dark:bg-blue-500 dark:text-gray-900 duration-100"
        />
        <p className="mt-[-24] text-white text-xs leading-none md:text-3xl font-bold text-center md:max-w-xl md:text-left dark:bg-blue-500 dark:text-gray-900 duration-100">
          069-555-4223
        </p>
      </div>
      <ul className=" grid gap-8 grid-cols-2 md:grid-cols-3 md:justify-between md:items-center sm:px-12 py-7">
        <li className="mb-2">
          <a
            href="mailto:Info@jolinkomo.co.za"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white text-xs  font-bold text-md dark:bg-yellow-600 dark:text-gray-900 duration-100">
              Email
            </p>
            <HiOutlineMail
              size={30}
              className="text-white rounded-lg dark:bg-yellow-600 dark:text-gray-100 duration-100"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100063744766098"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white text-xs font-bold text-md dark:bg-yellow-600 dark:text-gray-900 duration-100">
              Facebook
            </p>
            <BsFacebook
              size={30}
              className="text-white rounded-lg dark:bg-yellow-600 dark:text-gray-100 duration-100"
            />
          </a>
        </li>
        <li>
          <a
            href="https://api.whatsapp.com/send?phone=%2B27780806317&data=ARB6V8l6N-iDeOsijUa0VsMStXdgEH5JF0TWXo1CkimRz_Oe2qjOnpyDzQMbl_gDps_Q3jVlQr3c2IMWegSipk2eCKdLMZHvyibAZRI6eUjEqHgw9QlPf5Ej1ttsea8mo6upgQ611qoR19de0hQKkBW-xA&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR2aCos_nv2tmV4_A06UU4vWnq9bn_Y6lsiuU1tAP0SBOx7G0nA9zbEqEig"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white  text-xs font-bold text-md dark:bg-yellow-600 dark:text-gray-900 duration-100">
              Whatsapp
            </p>
            <FaWhatsapp
              size={30}
              className="text-white rounded-lg dark:bg-yellow-600 dark:text-gray-100 duration-100"
            />
          </a>
        </li>
        <li className="mb-2">
          <a href={Certificate_} target="_blank" rel="noopener noreferrer">
            <p className="text-xs md:max-xl:text-3xl font-alata font-bold">
              NHBRC
            </p>
            <img
              src={images.nhbrc}
              alt="nhbrc"
              className=" w-9 h-8 md:w-28 md:h-20 rounded-lg"
            />
          </a>
        </li>
        <li>
          <p className="text-sm md:max-xl:text-3xl font-alata font-bold">
            CIDB CRS N.O:
          </p>
          <img
            src={images.cidb}
            alt="cidb"
            className="w-9 h-8 md:w-28 md:h-20 rounded-lg"
          />
          <p className="text-sm md:max-xl:text-5xl font-alata font-bold">
            10253998
          </p>
        </li>
        <ul className="list-none p-0 pl-3 mt-1">
          <FaLocationDot
            size={20}
            className="text-white rounded-lg dark:bg-yellow-600 dark:text-gray-100 duration-100"
          />
          {details[0].details.map((detail, detailIndex) => (
            <li
              className="lg:text-3xl flex-col text-sm md:font-poppins mt-2 px-2 font-semibold text-white dark:text-gray-900 col-span-11"
              key={detailIndex}
            >
              {detail}
            </li>
          ))}
        </ul>
        {/* Ts&Cs and Policy links */}
        <li>
          <a
            href="/terms-and-conditions"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white text-xs font-bold text-md dark:bg-yellow-600 dark:text-gray-900 duration-100">
              Terms & Conditions
            </p>
          </a>
        </li>
        <li>
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
            <p className="text-white text-xs font-bold text-md dark:bg-yellow-600 dark:text-gray-900 duration-100">
              Privacy Policy
            </p>
          </a>
        </li>
        <li>
          <p className="text-bold font-poppins italic">
            Desgined and Built by TTR | ™
          </p>
        </li>
      </ul>
      {/* End of Ts&Cs and Policy links */}
    </section>
  );
};

export default Footer;
