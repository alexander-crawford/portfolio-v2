import React from "react";

type NorwayIconProps = {
  className: string;
};

export function NorwayIcon({ className }: NorwayIconProps) {

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center align-middle pl-1 ${className}`}
    >
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 22 16">
        <title>Flag of Norway</title>
        <rect width="22" height="16" fill="#ba0c2f"/>
        <path d="M0,8h22M8,0v16" stroke="#fff" strokeWidth="4"/>
        <path d="M0,8h22M8,0v16" stroke="#00205b" strokeWidth="2"/>
    </svg>
    </a>
  );
}
