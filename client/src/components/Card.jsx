'use client';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const Card = ({
  i,
  title = '',
  description = '',
  src = '',
  color = '#1e1e1e',
  progress = () => 0,
  range = [0, 1],
  targetScale = 1,
  scale = 1 // New prop for dynamic scaling
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const safeRange = Array.isArray(range) && range.length === 2 ? range : [0, 1];
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

  return (
<div
  ref={container}
  className="h-[70vh] flex items-center justify-center sticky"
  style={{
    scale,
    top: `calc(15vh + ${i * 25}px)` // Adjusted top value
  }}
>
      <motion.div
        
        className="flex flex-row w-[90%] h-[90%] rounded-2xl p-6.5 gap-10 text-white bg-black outline-2"
      >
        {/* Left - Image */}
        <div className="w-[60%] h-[100%] rounded-xl overflow-hidden shadow-xl flex items-center justify-center">
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
        <div className="w-1/2 flex flex-col justify-items-start text-left">
  {/* Subtitle */}
  <p className="text-sm sm:text-base md:text-lg lg:text-xl 
              text-red-500 font-semibold uppercase tracking-widest mb-2">
    Crate Connect
  </p>

  {/* Title */}
  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
               font-bold mb-4 md:mb-6">
    {title}
  </h2>

  {/* Content */}
  <div className="space-y-4 text-gray-300 leading-relaxed">
    {/* About heading */}
    <p className="text-lg md:text-xl lg:text-2xl 
                text-white font-semibold">
      About
    </p>
    
    {/* Description */}
    <p className="text-base sm:text-lg md:text-xl 
               leading-relaxed">
      {description}
    </p>
  </div>
</div>
      </motion.div>
    </div>
  );
};

export default Card;
