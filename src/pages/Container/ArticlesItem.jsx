import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const ArticlesItem = ({ img, title, details }) => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={itemVariants}
        transition={{ duration: 3 }}
        className="w-full object-cover object-center grid md:grid-cols-1 h-3/4 md:5 lg:flex rounded-lg"
      >
        <img
          src={img}
          alt="banner"
          className="hidden w-1/2 max-h-max object-cover md:5 lg:flex rounded-lg"
        />
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={itemVariants}
        transition={{ duration: 1.2, delay: 0.32 }}
        className="p-6"
      >
        <span className="font-poppins text-md md:text-2xl font-bold md:text-left dark:bg-orange-400 dark:text-black text-white bg-[#001b5e] lg:text-center lg:max-w-[520px] rounded-lg">
          {title}
        </span>
        {Array.isArray(details) ? (
          <ul className="grid grid-rows-1 list-disc pl-4">
            {details.map((detail, detailIndex) => (
              <li
                className="text-sm md:text-xl  font-oswald mt-3 px-2 font-semibold flex-1"
                key={detailIndex}
              >
                {detail}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm md:text-2xl font-oswald mt-8 px-2 font-semibold flex-1">
            {details}
          </p>
        )}
        </motion.div>
      </motion.div>
    </div>
  );
};

ArticlesItem.propTypes = {
  img: PropTypes.shape({
    src: PropTypes.object,
    alt: PropTypes.string,
  }),
  title: PropTypes.string,
  details: PropTypes.string,
};

export default ArticlesItem;
