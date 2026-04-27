export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I'm passionate about learning and building innovative solutions",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Based in Ottawa, Canada",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "HTML, CSS, JavaScript, Python, Java, MySQL, Lua, PostgreSQL, COBOL",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 lg:row-span-3",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "View my resume to learn more about my skills and experience",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
    hasButton: true,
    buttonText: "View Resume",
    buttonLink: "/MohammedShehabResume.pdf",
  },

  {
    id: 5,
    title: "Always learning new technologies and frameworks",
    description: "Continuous Growth",
    className: "md:col-span-3 md:row-span-2 lg:col-span-3 lg:row-span-1",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "BullBearAI — Stock Prediction",
    des: "Machine learning app forecasting stock price movements from 5,000+ historical records, with preprocessing pipelines and 3 model variants improving validation accuracy from 64% to ~72%.",
    img: "/BullBearAI.png",
    iconLists: ["/icons8-python.svg", "/Flask.svg", "/scikit-learn.svg", "/Pandas.svg"],
    link: "https://github.com/MshehabN/BullBearAI",
    buttonText: "Check Repo",
  },
  {
    id: 2,
    title: "Guardian News Reader",
    des: "Android news reader integrating The Guardian API with keyword search, detailed article views, and offline favorites via Room Database — reducing search latency by 22% and startup time by 18%.",
    img: "/GuardianNewsReader.png",
    iconLists: ["/Java.svg"],
    link: "https://github.com/MshehabN/guardian-news-reader",
    buttonText: "Check Repo",
  },
  {
    id: 3,
    title: "MeetUp — Android Meetup Manager",
    des: "Java Android app for discovering and managing local meetups, with Firebase Authentication for secure sign-in and Room Database for offline-first event storage. Targets Android API 36 with a Material-themed UI.",
    img: "/MeetUp.png",
    iconLists: ["/Java.svg"],
    link: "https://github.com/CodyEdition/MeetUp",
    buttonText: "Check Repo",
  },
  {
    id: 4,
    title: "Honeypot Network Security Monitor",
    des: "Security honeypot that emulates 6+ network services (SSH, HTTP, FTP, Telnet, MySQL, Redis) to detect and log unauthorized connection attempts with Flask dashboard.",
    img: "/honeypotIMG.jpg",
    iconLists: ["/icons8-python.svg", "/Flask.svg", "/HTML5.svg"],
    link: "https://github.com/MshehabN/Honeypot",
    buttonText: "Check Repo",
  },
  {
    id: 5,
    title: "Inventory Management System",
    des: "Role-based inventory platform built with Java, JDBC, and MySQL — admin-restricted CRUD with view-only permissions for regular users, supporting end-to-end inventory workflows.",
    img: "/Inventory-Management.jpg",
    iconLists: ["/Java.svg", "/MySQL.svg", "/Apache Maven.svg"],
    link: "https://github.com/MshehabN/Inventory-Management-System",
    buttonText: "Check Repo",
  },
  {
    id: 6,
    title: "VisionGuard — Face Detection",
    des: "Real-time face detection using OpenCV that detects faces from webcam feed with bounding boxes, confidence scores, and frame-by-frame analytics logging.",
    img: "/FaceDetection.png",
    iconLists: ["/icons8-python.svg"],
    link: "https://github.com/MshehabN/VisionGuard",
    buttonText: "Check Repo",
  },
  {
    id: 7,
    title: "4-Way Pong",
    des: "4-way Pong game built with Python and Pygame — 2-player gameplay where each player controls two paddles (top/left vs bottom/right) with a lives system.",
    img: "/PongIMG.png",
    iconLists: ["/icons8-python.svg"],
    link: "https://github.com/MshehabN/4-wayPong",
    buttonText: "Check Repo",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "BSc CIS Student — Athabasca University",
    desc: "Pursuing a Bachelor of Science in Computing and Information Systems (Expected Sept 2028) after completing a Computer Programming Diploma at Algonquin College in April 2026.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Machine Learning Projects",
    desc: "Developed BullBearAI stock prediction application using Python, Scikit-learn, and data analysis techniques.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "System Administration",
    desc: "Built and managed LMS Admin Mock-Up system with user role management and course tracking functionality.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "IT Support Simulation",
    desc: "Created Help Desk Ticketing Simulator with Excel, Python, and Google Forms for IT operations training.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/MshehabN",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://linkedin.com/in/mohammed-shehab2004900",
  },
];
