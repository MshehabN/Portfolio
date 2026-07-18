import React from "react";
import type { IconType } from "react-icons";
import {
  SiPython,
  SiJavascript,
  SiKotlin,
  SiHtml5,
  SiCss3,
  SiLua,
  SiReact,
  SiFlask,
  SiSpringboot,
  SiScikitlearn,
  SiPandas,
  SiAndroid,
  SiAndroidstudio,
  SiLinux,
  SiDocker,
  SiGit,
  SiMysql,
  SiMongodb,
  SiOracle,
  SiFirebase,
} from "react-icons/si";
import { IoCodeSlash } from "react-icons/io5";

type Tech =
  | { name: string; kind: "icon"; Icon: IconType; color: string }
  | { name: string; kind: "img"; src: string };

type TechCategory = { label: string; items: Tech[] };

const techCategories: TechCategory[] = [
  {
    label: "Languages",
    items: [
      { name: "Java", kind: "img", src: "/Java.svg" },
      { name: "Python", kind: "icon", Icon: SiPython, color: "#3776AB" },
      { name: "JavaScript", kind: "icon", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "Kotlin", kind: "icon", Icon: SiKotlin, color: "#7F52FF" },
      { name: "HTML", kind: "icon", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", kind: "icon", Icon: SiCss3, color: "#1572B6" },
      { name: "Lua", kind: "icon", Icon: SiLua, color: "#7986CB" },
      { name: "COBOL", kind: "icon", Icon: IoCodeSlash, color: "#CBACF9" },
    ],
  },
  {
    label: "Frameworks & Libraries",
    items: [
      { name: "React", kind: "icon", Icon: SiReact, color: "#61DAFB" },
      // Flask's brand color is black — use a light tint for the dark bg
      { name: "Flask", kind: "icon", Icon: SiFlask, color: "#E4ECFF" },
      { name: "Spring Boot", kind: "icon", Icon: SiSpringboot, color: "#6DB33F" },
      { name: "scikit-learn", kind: "icon", Icon: SiScikitlearn, color: "#F7931E" },
      // Pandas' brand navy (#150458) is invisible on the dark bg — lightened
      { name: "Pandas", kind: "icon", Icon: SiPandas, color: "#8B9DF5" },
      { name: "Matplotlib", kind: "img", src: "/icons8-matplotlib.svg" },
      { name: "Room", kind: "icon", Icon: SiAndroid, color: "#3DDC84" },
    ],
  },
  {
    label: "Tools & Platforms",
    items: [
      { name: "Android Studio", kind: "icon", Icon: SiAndroidstudio, color: "#3DDC84" },
      { name: "Linux", kind: "icon", Icon: SiLinux, color: "#FCC624" },
      { name: "Docker", kind: "icon", Icon: SiDocker, color: "#2496ED" },
      { name: "Git", kind: "icon", Icon: SiGit, color: "#F05032" },
      { name: "MySQL", kind: "icon", Icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", kind: "icon", Icon: SiMongodb, color: "#47A248" },
      { name: "Oracle", kind: "icon", Icon: SiOracle, color: "#F80000" },
      { name: "Firebase", kind: "icon", Icon: SiFirebase, color: "#FFCA28" },
    ],
  },
];

const iconClass = "w-3.5 h-3.5 lg:w-4 lg:h-4 2xl:w-[18px] 2xl:h-[18px] shrink-0";

const TechChip = ({ tech }: { tech: Tech }) => (
  <span
    className="flex items-center gap-1.5 2xl:gap-2 rounded-lg border border-white/[0.08] bg-[#10132E] px-2 py-1 lg:px-2.5 lg:py-1.5 2xl:px-3 2xl:py-2 text-[10px] sm:text-[11px] lg:text-xs 2xl:text-sm text-[#E4ECFF] whitespace-nowrap cursor-default transition-all duration-300 hover:border-[#CBACF9]/50 hover:bg-[#161A31] hover:-translate-y-0.5 hover:shadow-[0_0_14px_rgba(203,172,249,0.28)]"
  >
    {tech.kind === "img" ? (
      <img src={tech.src} alt="" className={iconClass} />
    ) : (
      <tech.Icon className={iconClass} style={{ color: tech.color }} />
    )}
    {tech.name}
  </span>
);

const TechStackGrid = () => (
  <div className="flex flex-col gap-4 lg:gap-5 2xl:gap-6 w-full min-w-0">
    {techCategories.map((cat) => (
      <div key={cat.label} className="flex flex-col gap-2 lg:gap-2.5">
        <h3 className="text-[10px] lg:text-[11px] 2xl:text-xs font-semibold uppercase tracking-[0.2em] text-[#8b91b8]">
          {cat.label}
        </h3>
        <div className="flex flex-wrap gap-1.5 lg:gap-2 2xl:gap-2.5">
          {cat.items.map((tech) => (
            <TechChip key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default TechStackGrid;
