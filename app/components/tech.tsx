import React from "react";
import { FaLongArrowAltRight  } from "react-icons/fa";

type TechListProps = {
  tech: string[];
  icons: Record<string, React.ElementType>;
};

const TechIconColours: Record<string, string> = {
  "Next.js": "white",
  Markdown: "white"
};

export function TechList({ tech, icons }: TechListProps) {
  if (!tech || tech.length === 0) return null; 

  return (
    <div className="flex flex-wrap items-center gap-2 text-sm">
      {tech.map((item, index) => {
        const Icon = icons[item];
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
