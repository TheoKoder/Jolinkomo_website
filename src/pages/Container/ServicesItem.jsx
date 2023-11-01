import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer"; // Import useInView from react-intersection-observer

const ServicesItem = ({ img, title, details }) => {
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 30,
  };

  const [ref, inView] = useInView({
    triggerOnce: false, // Remove triggerOnce to allow repeated animations
  });

  const itemRef = useRef(); // Create a ref for the animation element

  useEffect(() => {
    if (inView && itemRef.current) {
      // Only apply the transformation if inView is true and itemRef.current is defined
      itemRef.current.style.transform = "scale(1.2)";
    }
  }, [inView]);

  return (
    <motion.div ref={ref}>
      {" "}
      {/* Attach the ref to the parent container */}
      <motion.div 
      transition={spring} // Apply the spring animation
        animate={inView ? { scale: 1.2 } : { scale: 1 }} // Animate only when in view
        className="sm:w-11/12 grid grid-flow-row-dense md:w-full height:150px object-contain mx-auto md:gap-x-5 gap-y-6 px-10 py-10 gap-8 md:grid-cols-2"
      >
        {/* Image */}
        
        
       <div className="w-full object-center object-contain grid md:grid-cols-1 h-10/12 md:51 lg:flex rounded-lg">
          <img
            src={img}
            alt="End"
            className="hidden md:w-[calc(70%-20px))] lg:w-[calc(85.5%-20px)] mx-auto lg:flex object-cover"
          />
        </div>
        {/* Content */}
          {/* Content */}
      <div className="p-6">
        <span className="font-poppins text-md md:text-2xl font-bold md:text-left dark:bg-orange-400 dark:text-black text-white bg-[#001b5e] lg:text-center lg:max-w-[520px] rounded-lg">
          {title}
        </span>
        {Array.isArray(details) ? (
          <ul className="grid grid-cols-3 mx-auto list-disc">
            {details.map((detail, detailIndex) => (
              <li
                className="md:text-lg columns-1 gap-8 text-xs md:text-left font-oswald mt-6 px-1  flex-1"
                key={detailIndex}
              >
                {detail}
              </li>
            ))}
          </ul>
        ) : (
          <p className="lg:text-xl text-lg lg:font-alata md:font-oswald mt-6 px-2 font-semibold md:text-sm flex-1">
            {details}
          </p>
        )}
      </div>
      </motion.div>
    </motion.div>
  );
};

ServicesItem.propTypes = {
  img: PropTypes.shape({
    src: PropTypes.object,
    alt: PropTypes.string,
  }).isRequired,
  title: PropTypes.string,
  details: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

export default ServicesItem;
