import React from "react";
import { FaLongArrowAltRight  } from "react-icons/fa";
import { 
  SiReact,
  SiTailwindcss,
  SiPhp,
  SiLaravel,
  SiDocker,
  SiUml,
  SiMysql,
  SiGit,
  SiJavascript,
  SiLinux,
  SiCss,
  SiHtml5,
  SiUbuntu,
  SiGnubash,
  SiNextdotjs,
  SiDelphi,
  SiMarkdown,
  SiTypescript,
  SiApache,
  SiPython
} from '@icons-pack/react-simple-icons';

type TechListProps = {
  tech: string[];
};

const TechIcons: Record<string, React.ElementType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  Tailwind: SiTailwindcss ,
  PHP: SiPhp,
  Laravel: SiLaravel,
  Docker: SiDocker,
  UML: SiUml,
  MySQL: SiMysql,
  Git: SiGit,
  JavaScript: SiJavascript,
  Linux: SiLinux,
  CSS: SiCss,
  HTML: SiHtml5,
  Ubuntu: SiUbuntu,
  Bash: SiGnubash,
  Delphi: SiDelphi,
  Markdown: SiMarkdown,
  TypeScript: SiTypescript,
  Apache: SiApache,
  Python: SiPython
};

const TechIconColours: Record<string, string> = {
  "Next.js": "white",
  Markdown: "white"
};

export function TechList({ tech }: TechListProps) {
  if (!tech || tech.length === 0) return null; 

  return (
    <div className="flex flex-wrap items-center gap-2 text-sm">
      {tech.map((item, index) => {
        const Icon = TechIcons[item];
        const Colour = TechIconColours[item] || 'default';
        return (
          <div key={index} className="flex items-center gap-1 justify-center">
            {Icon ? <Icon className="w-5 h-5 inline-block" color={Colour} /> : <FaLongArrowAltRight />}
            <span className="text-neutral-900 dark:text-neutral-100">{item}</span>
          </div>
        );
      })}
    </div>
  );
}
