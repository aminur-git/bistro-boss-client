import { Parallax } from "react-parallax";
import { motion } from "framer-motion";

const Cover = ({ url, title, description }) => {
  return (
    
      <Parallax
        blur={{ min: -20, max: 20 }}
        bgImage={url}
        bgImageAlt="Cover"
        strength={100}
        bgImageStyle={{ objectFit: "cover", width: "100%",   }}
      >
        <div className="relative h-[400px] md:h-[700px] flex items-center justify-center text-white">
          {/* Gradient Overlay */}

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative z-15 md:w-4/6 mx-auto text-center px-4 md:px-8 py-10 lg:p-20 backdrop-blur-sm  border bg-black/20 border-white/30 rounded-xl shadow-2xl space-y-6"
          >
            <h1 className="uppercase text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide drop-shadow-md cinzel">
              {title}
            </h1>
            <p className="text-sm md:text-lg lg:text-xl font-medium leading-relaxed drop-shadow-sm cinzel">
              {description}
            </p>
          </motion.div>
        </div>
      </Parallax>
  );
};

export default Cover;
