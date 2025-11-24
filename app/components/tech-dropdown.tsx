"use client";

import React from "react";

type SelectListProps = {
  items: string[];           // the array you pass in
  value: string;             // currently selected value
  onChange: (value: string) => void;  // callback when user selects item
  label?: string;            // optional label text
  className?: string;        // optional extra styling
};

export function TechDropDown({ items, value, onChange, label, className }: SelectListProps) {
  return (
    <div className={`flex flex-col mb-4 ${className}`}>
      <h1>Filter by tech</h1>
      {label && (
        <label className="mb-1 text-sm text-neutral-500 dark:text-neutral-400">
          {label}
        </label>
      )}

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          p-2 rounded-md border
          border-neutral-300 dark:border-neutral-700
          bg-white dark:bg-neutral-900
          text-sm
        "
      >
        <option value="">Show all</option>
        {items.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
