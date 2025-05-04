import image1 from '../assets/Project1.jpg';
import image2 from '../assets/Project2.jpg';
import image3 from '../assets/Project3.jpg';




export const projects = [
  {
    title: "Skill Set",
    catagory: "Online Learning Platform",
    description:
      "Skill Set is a global online learning platform that offers anyone, anywhere, access to online courses and degrees from leading universities and companies.",
    src: image1,
    techStack: ["React", "Node.js", "MongoDB","Express", "RESTful API", "JWT", "Bootstrap"],
  },
  {
    title: "LibraryHub",
    catagory: "Library Management System",
    description:
      "LibraryHub is a comprehensive library management system that streamlines the process of managing library resources, including books, members, and transactions.",
    src: image2,
    techStack: ["Laravel", "Bootstrap", "Axios", "MongoDB"],
  },
  {
    title: "Pro Text Editor",
    catagory: "Text Utility",
    description:
      "Pro Text Editor is a versatile text utility tool that allows you to edit, format, and manipulate text with ease. It includes features like word count, character count, and more.",
    src: image3,
    techStack: ["React", "Bootstrap"],
  },
];