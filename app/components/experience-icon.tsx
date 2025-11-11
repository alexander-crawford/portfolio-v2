import React from "react";
import { FcGraduationCap, FcBriefcase, FcSettings } from "react-icons/fc";

type ExperienceIconProps = {
  type: string;
};

function getIcon(type: string){
  switch (type){
    case 'STUDY': 
      return <FcGraduationCap className="text-2xl"/>;
    case 'WORK': 
      return <FcBriefcase className="text-2xl"/>;
    case 'PROJECT': 
      return <FcSettings className="text-2xl"/>;
    default: 
      return null;

  }
}

export function ExperienceIcon({ type }: ExperienceIconProps) {
  return getIcon(type);
}
