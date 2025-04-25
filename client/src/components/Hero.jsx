import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 flex items-center justify-center min-h-screen bg-black">
      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center w-full gap-8">
            {/* Logo container */}
            <div className="w-full flex justify-center">
             <HoverBorderGradient>Web Developer based in Delhi, India. </HoverBorderGradient>
            </div>

            {/* Heading */}
            <div className="w-full flex flex-col items-center space-y-6">
              <h1 className="text-3xl font-semibold tracking-tight text-white lg:text-6xl text-center max-w-5xl mx-auto">
              Hi, I'm Mohd Kaif👋{" "}
                <span className="text-red-500">Greeting</span>
              </h1>
              <p className="text-muted-foreground lg:text-xl text-center max-w-3xl mx-auto">
                Software Engineer passionate about building cool things, helping people with tech, and sharing the journey online!
              </p>
            </div>

            {/* Buttons */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Button className="shadow-sm transition-shadow hover:shadow w-full sm:w-auto">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="group gap-2 w-full sm:w-auto justify-center"
              >
                Learn more
                <ExternalLink className="h-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>

            {/* Technology logos */}
            <div className="w-full flex flex-col items-center gap-5 mt-20">
              <p className="font-medium text-muted-foreground text-center">
                Built with open-source technologies
              </p>
              <div className="w-full flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                {[
                  "https://shadcnblocks.com/images/block/logos/shadcn-ui-icon.svg",
                  "https://shadcnblocks.com/images/block/logos/typescript-icon.svg",
                  "https://shadcnblocks.com/images/block/logos/react-icon.svg",
                  "https://shadcnblocks.com/images/block/logos/tailwind-icon.svg",
                ].map((logo, index) => (
                  <a
                    key={index}
                    href="#"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "group flex aspect-square h-12 items-center justify-center p-0"
                    )}
                    aria-label="Technology logo"
                  >
                    <img
                      src={logo}
                      alt=""
                      className="h-6 opacity-70 transition-all group-hover:opacity-100 mx-auto"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };