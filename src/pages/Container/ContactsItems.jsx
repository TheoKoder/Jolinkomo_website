import PropTypes from "prop-types";

const ContactsItems = ({ img, title, descript, icon }) => {
  return (
    <div className="object-cover object-center w-[300px] h-[390px] cursor-pointer bg-transparent group prospect justify-evenly flex flex-col items-center gap-x-6 text-white/20">
      <div className="relative pre-3d group-hover:my-R-y-180 w-full grid grid-cols-2 h-full duration-1000">
        <div className="absolute back-hidden border-2 w-11/12  md:w-full h-full flex flex-col gap-4">
          <img src={img} alt="Info" className='w-fit gap-3 md:w-full h-96 md:h-full object-cover object-center rounded-md shadow-lg shadow-[#040c16]' />
        </div>
        <div className="absolute w-11/12 md:w-full my-R-y-180 back-hidden h-full bg-gray-200">
          <div className="text-black flex flex-col justify-center items-center h-full">
            <h2>{title}</h2>
            <p className="my-12">
              <a href={descript} target="_blank" rel="noopener noreferrer">
                {icon}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

ContactsItems.propTypes = {
  img: PropTypes.shape({
    src: PropTypes.object,
    alt: PropTypes.string,
  }),
  title: PropTypes.string.isRequired,
  descript: PropTypes.string.isRequired,
  icon: PropTypes.object,
};
export default ContactsItems;
