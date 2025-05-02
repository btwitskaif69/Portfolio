'use client';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const Card = ({
  i,
  title = '',
  catagory = '',
  description = '',
  src = '',
  color = '#1e1e1e',
  progress = () => 0,
  range = [0, 1],
  targetScale = 1,
  scale = 1
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const safeRange = Array.isArray(range) && range.length === 2 ? range : [0, 1];
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <div
      ref={container}
      className="min-h-[50vh] md:h-[70vh] flex items-center justify-center sticky px-5 md:px-0" // Added horizontal padding
      style={{
        scale,
        top: `calc(20vh + ${i * (window.innerWidth < 768 ? 15 : 25)}px)`
      }}
    >
      <motion.div
        className="flex flex-col md:flex-row w-full md:w-[90%] h-[85%] md:h-[90%] rounded-xl md:rounded-2xl p-4 md:p-7 gap-6 md:gap-10 text-white bg-black outline-2"
      >
        {/* Left - Image */}
        <div className="w-full md:w-[60%] h-[40vh] md:h-full rounded-xl overflow-hidden shadow-xl flex items-center justify-center">
          <motion.div
            className="w-full h-full flex items-center justify-center"
            style={{ scale: imageScale }}
          >
            <img
              src={src}
              alt={title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Right - Text */}
<div className="w-full md:w-1/2 flex flex-col justify-center justify-start  text-left px-0 md:px-0 min-w-[30%] pt-10 mb-0">
  {/* title */}
  <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl 
              text-red-500 font-semibold uppercase tracking-widest mb-0 md:mb-1
              break-words overflow-hidden">
    {title}
  </p>

  {/* catagory */}
  <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
              font-medium mb-2 md:mb-3 lg:mb-4
              break-words leading-tight">
    {catagory}
  </h2>

  {/* Content */}
  <div className="text-gray-300 leading-relaxed">
  {/* About heading */}
  <p className="text-base md:text-lg lg:text-xl 
              text-white font-semibold mt-5 mb-1">
    About
  </p>
  
  {/* Description */}
  <p className="text-sm xs:text-base sm:text-lg md:text-lg 
             leading-relaxed md:leading-loose break-words
             overflow-hidden">
    {description}
  </p>
</div>
</div>
      </motion.div>
    </div>
  );
};

export default Card;