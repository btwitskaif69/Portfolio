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
  techStack = [],
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
    className="min-h-[35vh] sm:min-h-[45vh] md:h-[60vh] lg:h-[70vh] 
               flex items-center justify-center sticky px-3 sm:px-4 md:px-0"
    style={{
      scale,
      top: `calc(20vh + ${i * 20}px)`
    }}
  >
      
      <motion.div
        className="flex flex-col md:flex-row w-full md:w-[90%] 
        h-[80%] sm:h-[85%] md:h-[90%] 
        rounded-lg sm:rounded-xl md:rounded-2xl 
        p-3 sm:p-4 md:p-7 gap-4 sm:gap-6 md:gap-10 
        text-white bg-black bg-black outline-2"
>
        {/* Left - Image */}
        <div className="w-full md:w-[70%] h-[30vh] sm:h-[35vh] md:h-full 
                rounded-lg overflow-hidden shadow-xl 
                flex items-center justify-center">
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
<div className="w-full md:w-1/2 flex flex-col justify-center justify-start  text-left px-0 md:px-0 min-w-[30%] mb-0">
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
  {techStack?.length > 0 && (
  <div className="flex flex-wrap gap-2 mt-4">
    {techStack.map((tech, index) => (
      <span
        key={index}
        className="px-3 py-1 rounded-full text-sm bg-black text-white outline-1 outline-whitefont-semibold shadow-sm"
      >
        {tech}
      </span>
    ))}
  </div>
)}
</div>
</div>
      </motion.div>
    </div>
  );
};

export default Card;