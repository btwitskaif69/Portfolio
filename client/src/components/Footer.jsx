import React, { useEffect, useState } from "react";
import { Facebook, Twitter, Linkedin, Github, Mail, Globe } from "lucide-react";
import logo from '@/assets/logo.svg'; // Make sure this path is correct

const defaultNavigationLinks = [
  { href: "/Projects", label: "Projects" },
  { href: "/Projects", label: "Experience" },
  { href: "/services", label: "Contact" },
  { href: "/Projects", label: "Resume" },
];

const defaultSocialLinks = [
  { href: "https://x.com/btwitskaif69", icon: <Twitter size={24} /> },
  { href: "https://www.linkedin.com/in/btwitskaif69", icon: <Linkedin size={24} /> },
  { href: "https://github.com/btwitskaif69", icon: <Github size={24} /> },
];

const Footer = ({
  brandName = "btwitskaif",
  navigationLinks = defaultNavigationLinks,
  socialLinks = defaultSocialLinks,
}) => {
  // Dynamic India time state
  const [indiaTime, setIndiaTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Get time in Asia/Kolkata timezone
      const options = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      };
      setIndiaTime(now.toLocaleTimeString("en-US", options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-black text-gray-300 border-t border-white/20">
      <div className="max-w-10xl mx-auto px-4 pt-8 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-10 sm:gap-0 mb-4">
          {/* Left */}
          <div className="space-y-4 sm:max-w-md w-full">
            <h2 className="text-lg sm:text-base md:text-lg lg:text-2xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-sm sm:text-xs md:text-base lg:text-lg text-gray-300 leading-relaxed">
              I'm happy to connect, help out, or work together on something new. If you have an idea or just want to get in touch, feel free to email me or reach out on social media.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2 mb-2">
              <a href="https://github.com/btwitskaif69" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/btwitskaif69" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://x.com/btwitskaif69"
                target="_blank"
                rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="mailto:mohdkaif18th@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <div className="text-start text-xs sm:text-xs md:text-base lg:text-xl font-medium text-white mb-0">
              <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
            </div>
          </div>

          {/* Right */}
          <nav className="flex flex-col items-start sm:items-end sm:pl-0 sm:max-w-md space-y-4 w-full">
            <h2 className="text-lg sm:text-base md:text-lg lg:text-2xl font-bold text-white mb-4">[NAVIGATION]</h2>
            <div className="flex flex-col justify-start items-start text-base sm:text-sm md:text-base lg:text-xl mb-4 sm:justify-end sm:items-end">
              {navigationLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="hover:text-gray-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            {/* Local Time */}
            <div className="pt-2 mb-2">
              <p className="text-base sm:text-sm md:text-base lg:text-xl font-medium text-white">
                Local time - {indiaTime} (IST)
              </p>
            </div>
            <div className="email flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <p className="text-base sm:text-sm md:text-base lg:text-xl font-medium text-white">
                Open to Work | Global Opportunities
              </p>
            </div>
          </nav>
        </div>

        {/* Logo and copyright */}
        <div className="logo">
          <div className="mb-0">
            <img 
              src={logo}
              alt={`${brandName} Logo`}
              className="h-auto w-full flex items-end"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;