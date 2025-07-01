import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShinyButton } from "@/components/magicui/shiny-button";
import resumeFile from "../assets/Resume.pdf";
import { Spotlight } from "@/components/ui/spotlight-new";
import bg from "../assets/bg.jpg";
import { BookText } from "lucide-react";
import { RainbowButton } from "./magicui/rainbow-button";
import { Github, Linkedin, Mail} from "lucide-react";
import { ShineBorder } from "./magicui/shine-border";

const Hero = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Add scroll handler for "Visit Projects"
  const handleScrollToProjects = () => {
    const section = document.getElementById("featured-projects-section");
    if (section) {
      setTimeout(() => {
        // Custom smooth and slow scroll
        const targetY = section.getBoundingClientRect().top + window.scrollY;
        const startY = window.scrollY;
        const distance = targetY - startY;
        const duration = 2000; // duration in ms (increase for slower scroll)
        let startTime = null;

        function animateScroll(currentTime) {
          if (!startTime) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / duration, 1);
          window.scrollTo(0, startY + distance * easeInOutQuad(progress));
          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          }
        }

        function easeInOutQuad(t) {
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }

        requestAnimationFrame(animateScroll);
      }, 350); // delay before scrolling
    }
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
          <div className="relative inline-flex items-center mb-2 sm:mb-5">
            <Badge
              variant="secondary"
              className="rounded-full bg-transparent text-white flex items-center transition-all duration-200
               h-7 px-4 py-1.5 text-sm gap-1.5
               sm:h-11 sm:px-8 sm:py-2 sm:text-base sm:gap-2">

          <div className="w-1.5 h-1.5 bg-white rounded-full mr-1 sm:w-2 sm:h-2 sm:mr-2" />
              <span className="whitespace-nowrap text-[0.7rem] sm:text-lg">Available for new opportunities</span>
            </Badge>
            <ShineBorder
              borderWidth={1.5}
              duration={10}
              shineColor={["#be57ff", "#8500f5", "#f8dfff"]}
              className="rounded-full"
            />
          </div>

          {/* Heading */}
          <div className="w-full flex flex-col items-center">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight  text-center  mx-auto">
              Hi, I'm Mohd Kaif
            </h1>

            <h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-center mx-auto 
           bg-gradient-to-b from-[#be57ff] via-[#8500f5] to-[#f8dfff] bg-clip-text text-transparent pb-1 md:pb-2 lg:pb-5"
            >
              Full Stack Developer
            </h1>

            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center max-w-sm md:max-w-xl lg:max-w-3xl mx-auto">
              Based in Delhi, 23 years old, currently pursuing a BCA. Skilled in React.js, Node.js, Express, and MongoDB. Focused on building reliable and maintainable web applications.
            </p>
          </div>

          {/* Buttons */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 mb-5">
            <RainbowButton
              onClick={handleScrollToProjects}
              className="transition-transform duration-300 ease-[cubic-bezier(.4,0,.2,1)] hover:scale-105 hover:-translate-y-1 focus:scale-105 focus:-translate-y-1"
            >
              Visit Projects
            </RainbowButton>
            <ShinyButton
              onClick={handleDownload}
              className="transition-transform duration-300 ease-[cubic-bezier(.4,0,.2,1)] hover:scale-105 hover:-translate-y-1 focus:scale-105 focus:-translate-y-1"
            >
              <BookText className="w-5 h-5 mr-2" />
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
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="sr-only">X</span>
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
