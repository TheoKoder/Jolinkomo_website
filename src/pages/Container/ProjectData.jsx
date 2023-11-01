import PropTypes from "prop-types";

const ProjectData = ({ img, title, details, date }) => {
  return (
    <div className="mx-auto md:gap-x-5 gap-y-6 px-4 sm:px-6 md:px-10 py-4 sm:py-6 md:py-10">
      <div className="md:w-full duration-1000">
        <div className="w-full h-64 md:h-96 lg:h-80 md:rounded-lg">
          {img && (
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover rounded-lg"
            />
          )}
        </div>
      </div>
      <div className="p-4 sm:p-6 md:max-w-screen-xl md:max-h-auto">
        <span className="font-poppins text-base md:text-2xl font-bold dark:bg-orange-400 dark:text-black text-white bg-[#001b5e] rounded-lg">
          {title}
        </span>
        {Array.isArray(details) ? (
          <ul className="list-disc pl-4 mt-4">
            {details.map((detail, detailIndex) => (
              <li className="text-xs md:text-md" key={detailIndex}>
                {detail}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xs md:text-md">{details}
          </p>
        )}
        <p className="mt-2 font-bold text-xs italic">{date}</p>
      </div>
    </div>
  );
};

ProjectData.propTypes = {
  img: PropTypes.shape({
    src: PropTypes.object,
    alt: PropTypes.string,
  }),
  title: PropTypes.string,
  details: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  date: PropTypes.string,
};

export default ProjectData;
