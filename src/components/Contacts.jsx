import { BsFillPersonFill } from "react-icons/bs";
import { FaHelmetSafety } from "react-icons/fa6";
import { GrContact } from "react-icons/gr";
import { images } from "../constants/index";
import ContactsItems from "../pages/Container/ContactsItems";

const Contacts = () => {
  return (
    <section
   id="/Contacts" 
      className="mx-auto md:gap-x-5 gap-y-6 px-10 py-10  mt-14 w-11/12 dark:bg-blue-500 bg-orange-600 dark:text-gray-100 duration-100"
    >
      <div className="pb-3">
        <h1 className="lg:text-7xl text-3xl md:text-xl py-20 mt-16 lg:text-center md:text-left text-blue-700 font-poppins font-bold">
          Contacts
        </h1>
      </div>
      <div className="container grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        <ContactsItems
          img={images.safety}
          title="Safety Contact"
          descript="mailto:Safety@jolinkomo.co.za"
          icon={<FaHelmetSafety size={150} />} 
          className="max-w-[400px] mx-auto p-4 flex flex-col justify-center w-full h-full" 
        />
        <ContactsItems
          img={images.contact}
          title="Contacts"
          descript="mailto:Contracts@jolinkomo.co.za"
          icon={<GrContact size={150} />} 
          className="max-w-[400px] mx-auto p-4 flex flex-col justify-center w-full h-full"  
        />
        <ContactsItems
          img={images.DirectorPic}
          title="Director's Email"
          descript="mailto:Siphosimanga@jolinkomo.co.za"
          icon={<BsFillPersonFill size={150} />}  
          className="max-w-[400px] mx-auto p-4 flex flex-col justify-center w-full h-full"  
        />
      </div>
    </section>
  );
};

export default Contacts;
