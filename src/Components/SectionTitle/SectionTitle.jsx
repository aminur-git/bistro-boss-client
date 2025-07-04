import { easeIn, easeInOut, motion } from "framer-motion";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <motion.div
      className="text-center space-y-4 mb-12 max-w-3/4 md:max-w-4/12 mx-auto"
    //   initial={{ opacity: 0 }}
    //   whileInView={{ opacity: 1,  }}
    //   transition={{ duration: 0.6, ease: "easeOut" }}
    //   viewport={{ once: true }}
    >
      <motion.p
        className="text-[#D99904] italic"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease:easeInOut }}
      >
        {subHeading}
      </motion.p>

      <motion.h2
        className="border-y-2 border-base-300 p-4 text-2xl md:text-3xl text-[#151515] uppercase"
        initial={{ x: -30, opacity: 0 }}
        animate={{  x: 0, opacity: 1 }}
        transition={{  duration: 0.5, ease:easeInOut }}
      >
        {heading}
      </motion.h2>
    </motion.div>
  );
};

export default SectionTitle;
