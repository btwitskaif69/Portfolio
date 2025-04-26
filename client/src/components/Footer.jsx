import React from "react";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";
import logo from '@/assets/logo.png'; // Make sure this path is correct

const defaultNavigationLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
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
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-10xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
          {/* Logo Section - Fixed */}
          <div className="flex-shrink-0">
            <a href="/" className="block hover:opacity-80 transition-opacity">
              <img 
                src={logo}  // Use imported logo variable
                alt={`${brandName} Logo`}
                className="h-4 sm:h-6 w-auto" // Adjusted size for better visibility
              />
            </a>
          </div>
          
          {/* Navigation Links */}
          <nav>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
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
          </nav>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-4 text-gray-400">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-5">
          <div className="text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} {brandName}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;