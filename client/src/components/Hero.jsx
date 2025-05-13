import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { useEffect, useState } from "react";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import resumeFile from '../assets/Resume.pdf';
import bg from '../assets/bg7.jpg';

const Hero = () => {
    const greetings = [
        "As-salamu alaykum", // Arabic/Urdu
        "Hello", // English
        "नमस्ते", // Hindi (Namaste)
        "Hola", // Spanish
        "Bonjour", // French
        "你好", // Chinese (Nǐ hǎo)
        "こんにちは", // Japanese (Konnichiwa)
        "안녕하세요", // Korean (Annyeonghaseyo)
        "Guten Tag", // German
        "Ciao", // Italian
        "Olá", // Portuguese
        "Привет", // Russian (Privet)
        "Salam", // Persian/Azerbaijani
        "Sawubona", // Zulu
        "Sawasdee", // Thai (สวัสดี)
        "Selamat pagi", // Indonesian/Malay (Good morning)
        "Habari", // Swahili
        "Hej", // Swedish/Danish
        "Merhaba", // Turkish
      ];
      

  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  return (
    <section
      className="relative overflow-hidden flex items-center justify-center min-h-screen bg-black py-20"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 50%', // Shift image down
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Content */}
      <div className="relative z-10 w-full ">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Animated Greeting */}
          <div className="w-full flex justify-center py-2.5">
            <AnimatedGradientText className="text-2xl font-medium tracking-tight lg:text-3xl text-center max-w-6xl mx-auto">
              {greetings[currentGreeting]}
            </AnimatedGradientText>
          </div>

          {/* Heading */}
          <div className="w-full flex flex-col items-center space-y-6">
            <h1
              className="text-4xl font-medium tracking-tight lg:text-8xl text-center max-w-6xl mx-auto 
            bg-gradient-to-b from-gray-600 via-gray-200 to-white 
            bg-clip-text text-transparent"
            >   
              Hi, I'm Mohd Kaif
            </h1>
            <h1
              className="text-4xl font-medium tracking-tight lg:text-8xl text-center max-w-6xl mx-auto 
            bg-gradient-to-b from-purple-600 via-pink-500 to-rose-400 bg-clip-text text-transparent"
            >
              Full Stack Developer
            </h1>
            <p className="text-[#D1D5DB] lg:text-xl text-center max-w-4xl mx-auto">
           I create web applications with React, Node.js, Express, and MongoDB. Based in Delhi, India, I focus on building clean, responsive, and efficient solutions.


            </p>
          </div>

          {/* Buttons */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button className="shadow-sm transition-shadow hover:shadow w-full sm:w-auto">
            <AnimatedGradientText>
              Get Started
              </AnimatedGradientText>
            </Button>

            <InteractiveHoverButton onClick={handleDownload} className="shadow-sm transition-shadow hover:shadow w-full sm:w-auto" >Resume</InteractiveHoverButton>


          </div>


        </div>
      </div>
    </section>
  );
};

export { Hero };
