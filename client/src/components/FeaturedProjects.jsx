'use client';
import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import Card from "@/components/Card";
import { projects } from "@/components/projects";

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
      {projects.map((project, i) => {
        const scale = useTransform(scrollYProgress, range, [1, targetScale]);

        return (
          <Card
            key={i}
            i={i}
            title={project.title}
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
