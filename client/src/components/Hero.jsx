import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
// import { useEffect, useState } from "react";
import { ShinyButton } from "@/components/magicui/shiny-button";
import resumeFile from "../assets/Resume.pdf";
import { Spotlight } from "@/components/ui/spotlight-new";
import bg from "../assets/bg2.png";
import { BookText } from "lucide-react";
import { RainbowButton } from "./magicui/rainbow-button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { ShineBorder } from "./magicui/shine-border";

const Hero = () => {
  // const greetings = [
  //   "As-salamu alaykum", // Arabic/Urdu2
  //   "Hello", // English
  //   "नमस्ते", // Hindi (Namaste)
  //   "Hola", // Spanish
  //   "Bonjour", // French
  //   "你好", // Chinese (Nǐ hǎo)
  //   "こんにちは", // Japanese (Konnichiwa)
  //   "안녕하세요", // Korean (Annyeonghaseyo)
  //   "Guten Tag", // German
  //   "Ciao", // Italian
  //   "Olá", // Portuguese
  //   "Привет", // Russian (Privet)
  //   "Salam", // Persian/Azerbaijani
  //   "Sawubona", // Zulu
  //   "Sawasdee", // Thai (สวัสดี)
  //   "Selamat pagi", // Indonesian/Malay (Good morning)
  //   "Habari", // Swahili
  //   "Hej", // Swedish/Danish
  //   "Merhaba", // Turkish
  // ];

  // const [currentGreeting, setCurrentGreeting] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentGreeting((prev) => (prev + 1) % greetings.length);
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      className="relative overflow-hidden flex items-center justify-center min-h-screen bg-black py-20 background-size-110%"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Spotlight />
      {/* Content */}

      <div className="relative z-10 w-full ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 my-auto flex align-center justify-center flex-col items-center">
          <div className="relative inline-flex items-center mb-5">
            <Badge
              variant="secondary"
              className="rounded-full h-11 px-8 py-2 text-base font-medium bg-transparent text-white flex items-center gap-2 transition-all duration-200"
            >
              <div className="w-2 h-2 bg-white rounded-full mr-2" />
              Available for new opportunities
            </Badge>
            <ShineBorder
              borderWidth={1.5}
              duration={10}
              shineColor={["#be57ff", "#8500f5", "#f8dfff"]}
              className="rounded-full"
            />
          </div>
          {/* Animated Greeting
          <div className="w-full flex justify-center mb-2">
            <AnimatedGradientText className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-center max-w-6xl mx-auto">
              {greetings[currentGreeting]}
            </AnimatedGradientText>
          </div> */}

          {/* Heading */}
          <div className="w-full flex flex-col items-center">
            <h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight  text-center  mx-auto 
            "
            >
              Hi, I'm Mohd Kaif
            </h1>

            <h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-center mx-auto 
           bg-gradient-to-b from-[#be57ff] via-[#8500f5] to-[#f8dfff] bg-clip-text text-transparent pb-1 md:pb-2 lg:pb-5"
            >
              Full Stack Developer
            </h1>

            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center max-w-sm md:max-w-xl lg:max-w-3xl mx-auto">
              Building with React.js, Node.js, Express, and MongoDB. Based in
              Delhi, India. Focused on solving problems with clean and practical
              solutions.
            </p>
          </div>

          {/* Buttons */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 mb-5">
            <RainbowButton className="transition-transform duration-300 ease-[cubic-bezier(.4,0,.2,1)] hover:scale-105 hover:-translate-y-1 focus:scale-105 focus:-translate-y-1">
              View Projects
            </RainbowButton>

            <ShinyButton
              onClick={handleDownload}
              className="transition-transform duration-300 ease-[cubic-bezier(.4,0,.2,1)] hover:scale-105 hover:-translate-y-1 focus:scale-105 focus:-translate-y-1"
            >
              <BookText className="mr-2" />
              Resume
            </ShinyButton>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/btwitskaif69"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="w-14 h-14 bg-transparent hover:bg-white/10 hover:backdrop-blur-md transition-all duration-200"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a
              href="https://linkedin.com/in/btwitskaif69"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="w-14 h-14 bg-transparent hover:bg-white/10 hover:backdrop-blur-md transition-all duration-200"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
            <a
              href="https://x.com/btwitskaif69"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="w-14 h-14 bg-transparent hover:bg-white/10 hover:backdrop-blur-md transition-all duration-200"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Button>
            </a>
            <a href="mailto:mohdkaif18th@gmail.com">
              <Button
                variant="outline"
                className="w-14 h-14 bg-transparent hover:bg-white/10 hover:backdrop-blur-md transition-all duration-200"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
