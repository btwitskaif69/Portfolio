'use client';
import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import Card from "@/components/Card";
import { projects } from "@/components/projects";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";


const FeaturedProjects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Range for scroll-based scaling per card
  const range = [0, 1];
  const targetScale = 0.9;

  return (
    <div ref={containerRef}>
      {/* Added heading container */}
      <div className="w-full flex justify-center text-center px-4 mb-5 md:mb-7">
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
    <AnimatedGradientText>
    Featured Projects
    </AnimatedGradientText>
    
  </h1>
</div>

      {projects.map((project, i) => {
        const scale = useTransform(scrollYProgress, range, [1, targetScale]);

        return (
          <Card
            key={i}
            i={i}
            title={project.title}
            catagory={project.catagory}
            description={project.description}
            src={project.src}
            url={project.link}
            color={project.color}
            progress={scrollYProgress}
            range={range}
            targetScale={targetScale}
            scale={scale}
          />
        );
      })}
    </div>
  );
};

export default FeaturedProjects;