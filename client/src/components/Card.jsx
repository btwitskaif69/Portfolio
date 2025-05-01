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
      className="h-[70vh] flex items-center justify-center sticky top-50"
    >
      <motion.div
        style={{
          scale, // Apply dynamic scaling
          top: `calc(-5vh + ${i * 25}px)`
        }}
        className="flex flex-row w-[90%] h-[90%] rounded-2xl p-5 gap-12 text-white bg-black outline-2"
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
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        {/* Right - Text */}
        <div className="w-1/2 flex flex-col justify-items-start text-left">
          <p className="text-red-500 font-semibold uppercase tracking-widest mb-2">Crate Connect</p>
          <h2 className="text-5xl font-bold mb-6">{title}</h2>

          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p className="text-white font-semibold text-xl">About</p>
            <p>{description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
