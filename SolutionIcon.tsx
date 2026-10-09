import React from "react";

type SolutionIconName =
  | "automation"
  | "quality"
  | "performance"
  | "intelligent";

type SolutionIconProps = {
  name: SolutionIconName;
  className?: string;
};

export default function SolutionIcon({
  name,
  className = "",
}: SolutionIconProps) {
  const common = {
    className: `solution-svg-icon ${className}`,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
    focusable: false,
  };

  if (name === "automation") {
    return (
      <svg {...common}>
        <path
          d="M8 12H18"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M30 12H40"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M8 36H18"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M30 36H40"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M18 12L24 18L30 12"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30 36L24 30L18 36"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 18V30"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "quality") {
    return (
      <svg {...common}>
        <path
          d="M24 6L38 11V21C38 30.5 32.3 37.1 24 41C15.7 37.1 10 30.5 10 21V11L24 6Z"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 23.5L22 28L31 18.5"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "performance") {
    return (
      <svg {...common}>
        <path
          d="M8 29C8 18.5 15.2 11 24 11C32.8 11 40 18.5 40 29"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
        <path
          d="M12 29H9"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
        <path
          d="M39 29H36"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
        <path
          d="M24 11V14"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
        <path
          d="M15.5 16L17.5 18"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
        <path
          d="M32.5 16L30.5 18"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
        <path
          d="M24 28L31 20"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
        <circle
          cx="24"
          cy="29"
          r="2.2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <circle
        cx="24"
        cy="24"
        r="15"
        stroke="currentColor"
        strokeWidth="2.1"
      />
      <circle
        cx="24"
        cy="24"
        r="7"
        stroke="currentColor"
        strokeWidth="2.1"
      />
      <circle cx="24" cy="24" r="2.1" fill="currentColor" />
    </svg>
  );
}
