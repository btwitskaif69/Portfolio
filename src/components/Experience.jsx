import React from 'react';
import { motion } from "framer-motion";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";
import { ShineBorder } from "./magicui/shine-border";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    duration: "Jan 2023 - Present",
    location: "Remote",
    description: [
      "Led development of microservices architecture using Node.js and React",
      "Implemented CI/CD pipelines reducing deployment time by 40%",
      "Mentored junior developers and conducted code reviews",
      "Optimized database queries improving application performance by 60%"
    ],
    techStack: ["React", "Node.js", "MongoDB", "Docker", "AWS"]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations Inc",
    duration: "Mar 2021 - Dec 2022",
    location: "New York, USA",
    description: [
      "Developed and maintained multiple client-facing web applications",
      "Integrated third-party APIs and payment gateways",
      "Implemented responsive designs and improved mobile UX",
      "Reduced server response time by 45% through caching strategies"
    ],
    techStack: ["Vue.js", "Express.js", "PostgreSQL", "Redis"]
  },
  {
    title: "Frontend Developer",
    company: "WebTech Solutions",
    duration: "Jun 2020 - Feb 2021",
    location: "San Francisco, USA",
    description: [
      "Built interactive user interfaces using React and TypeScript",
      "Collaborated with UI/UX team to implement design systems",
      "Improved website accessibility to WCAG 2.1 standards",
      "Reduced bundle size by 30% through code splitting"
    ],
    techStack: ["React", "TypeScript", "Sass", "Webpack"]
  }
];

const Experience = () => {
  return (
    <div className="relative overflow-hidden flex items-center justify-center min-h-screen bg-black py-20">
      <div className="w-full">
        <div className="w-full flex justify-center text-center px-4 mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium">
            <AnimatedGradientText>
              Experience
            </AnimatedGradientText>
          </h1>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative bg-black text-white rounded-lg p-6 md:p-8"
              >
                <div className="relative overflow-hidden">
                  <ShineBorder 
                    borderWidth={1.5}
                    duration={10}
                    shineColor={["#be57ff", "#8500f5", "#f8dfff"]} 
                    className="rounded-lg"
                  />
                  
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#be57ff] via-[#8500f5] to-[#f8dfff] bg-clip-text text-transparent">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-gray-300">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-400">{exp.duration}</p>
                        <p className="text-sm text-gray-400">{exp.location}</p>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-[#be57ff] to-[#8500f5]"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm rounded-full border border-[#be57ff]/20 bg-[#be57ff]/5 text-[#be57ff]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;