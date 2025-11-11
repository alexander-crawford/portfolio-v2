import React from "react";
import { LinkIcon } from './link';
import { ExperienceIcon  } from './experience-icon';

type PositionProps = {
  title : string,
  company : string,
  link : string,
  type: string
};

export function Position({ title,company,link,type }: PositionProps) {

  return (
    <div className="flex items-center gap-1 text-lg flex-wrap">
      <ExperienceIcon type={type}/>
      <span>{title}</span>
      {company && (
        <>
          <span> - </span>
          <span>{company}</span>
        </>
      )}
      <LinkIcon href={link} />
    </div>
  );
}
