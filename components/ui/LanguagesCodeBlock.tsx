"use client";

import React from "react";
import { SiJavascript, SiCss3, SiPostgresql, SiLua } from "react-icons/si";
import { IoCodeSlash } from "react-icons/io5";

type LocalImg = { kind: "img"; src: string };
type ReactIcon = {
  kind: "icon";
  Icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
};

type Language = { name: string; color: string } & (LocalImg | ReactIcon);

const languages: Language[] = [
  { name: "Java", kind: "img", src: "/Java.svg", color: "#ED8B00" },
  { name: "Python", kind: "img", src: "/icons8-python.svg", color: "#3776AB" },
  { name: "JavaScript", kind: "icon", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML", kind: "img", src: "/HTML5.svg", color: "#E34F26" },
  { name: "CSS", kind: "icon", Icon: SiCss3, color: "#1572B6" },
  { name: "MySQL", kind: "img", src: "/MySQL.svg", color: "#4479A1" },
  { name: "PostgreSQL", kind: "icon", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Lua", kind: "icon", Icon: SiLua, color: "#7986CB" },
  { name: "COBOL", kind: "icon", Icon: IoCodeSlash, color: "#CBACF9" },
];

const LanguageIcon = ({ lang }: { lang: Language }) => {
  const sizeClass = "w-3 h-3 sm:w-3.5 sm:h-3.5 xl:w-4 xl:h-4 2xl:w-4 2xl:h-4 shrink-0";
  if (lang.kind === "img") {
    return <img src={lang.src} alt={lang.name} className={sizeClass} />;
  }
  const Icon = lang.Icon;
  return <Icon className={sizeClass} style={{ color: lang.color }} />;
};

const CodeLine = ({
  n,
  children,
}: {
  n: number;
  children: React.ReactNode;
}) => (
  <div className="flex items-center whitespace-nowrap">
    <span className="w-4 sm:w-5 2xl:w-6 text-right pr-1.5 sm:pr-2 2xl:pr-3 text-[#3a3f6a] select-none shrink-0">
      {n}
    </span>
    <span className="min-w-0 flex-1">{children}</span>
  </div>
);

const LanguagesCodeBlock = () => {
  return (
    <div
      className="w-fit max-w-full rounded-xl overflow-hidden border border-white/[0.08] shadow-2xl bg-[#0a0d24]"
    >
      <div className="flex items-center gap-1 sm:gap-1.5 px-2 py-1.5 sm:px-3 sm:py-2 bg-[#10132E] border-b border-white/[0.06]">
        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 2xl:w-2.5 2xl:h-2.5 rounded-full bg-[#ff5f56]" />
        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 2xl:w-2.5 2xl:h-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 2xl:w-2.5 2xl:h-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-1.5 sm:ml-2 font-mono text-[9px] sm:text-[10px] 2xl:text-xs text-[#8b91b8] truncate">
          techStack.ts
        </span>
      </div>

      <div className="px-2 py-2 sm:px-3 sm:py-3 xl:px-3 xl:py-3 2xl:px-4 2xl:py-4 font-mono text-[9px] sm:text-[10px] xl:text-[11px] 2xl:text-sm leading-relaxed overflow-x-auto">
        <CodeLine n={1}>
          <span className="text-[#CBACF9]">const</span>{" "}
          <span className="text-[#82AAFF]">languages</span>{" "}
          <span className="text-[#BEC1DD]">= [</span>
        </CodeLine>
        {languages.map((lang, i) => (
          <CodeLine key={lang.name} n={i + 2}>
            <span className="inline-flex items-center gap-1 sm:gap-1.5 2xl:gap-2 pl-2 sm:pl-3 2xl:pl-4">
              <LanguageIcon lang={lang} />
              <span className="text-[#E4ECFF]">&quot;{lang.name}&quot;</span>
              <span className="text-[#BEC1DD]">,</span>
            </span>
          </CodeLine>
        ))}
        <CodeLine n={languages.length + 2}>
          <span className="text-[#BEC1DD]">];</span>
        </CodeLine>
      </div>
    </div>
  );
};

export default LanguagesCodeBlock;
