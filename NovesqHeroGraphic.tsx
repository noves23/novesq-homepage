import React from "react";

type NovesqHeroGraphicProps = {
  className?: string;
};

export default function NovesqHeroGraphic({
  className = "",
}: Readonly<NovesqHeroGraphicProps>) {
  return (
    <svg
      className={`novesq-hero-graphic ${className}`}
      viewBox="0 0 760 620"
      role="img"
      aria-label="NOVESQ quality visual"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="novesqTail" x1="0%" y1="10%" x2="100%" y2="90%">
          <stop offset="0%" stopColor="#C47A5A" stopOpacity="0.25" />
          <stop offset="30%" stopColor="#E9D8C4" stopOpacity="0.94" />
          <stop offset="100%" stopColor="#F7EDDF" stopOpacity="1" />
        </linearGradient>

        <filter id="tailShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#7A624F" floodOpacity="0.12" />
        </filter>

        <filter id="qShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="15" stdDeviation="18" floodColor="#C47A5A" floodOpacity="0.08" />
        </filter>

        <mask id="qOpening">
          <rect width="760" height="620" fill="white" />
          <polygon points="442,332 566,456 514,508 390,384" fill="black" />
        </mask>
      </defs>

      <g stroke="#101C2C" strokeOpacity="0.065" strokeWidth="1">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v-${i}`} x1={175 + i * 78} y1="0" x2={175 + i * 78} y2="620" />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`h-${i}`} x1="0" y1={70 + i * 76} x2="760" y2={70 + i * 76} />
        ))}
      </g>

      <g fill="none" stroke="#101C2C" strokeOpacity="0.13" strokeWidth="1">
        <circle cx="365" cy="282" r="255" />
        <circle cx="375" cy="282" r="205" />
        <circle cx="380" cy="282" r="126" />
      </g>

      <g fill="none" stroke="#101C2C" strokeOpacity="0.15" strokeWidth="1">
        <line x1="0" y1="610" x2="350" y2="155" />
        <line x1="545" y1="35" x2="545" y2="620" />
        <line x1="500" y1="282" x2="760" y2="282" />
      </g>

      <g filter="url(#qShadow)">
        <circle
          cx="365"
          cy="282"
          r="164"
          fill="none"
          stroke="#C47A5A"
          strokeWidth="33"
          mask="url(#qOpening)"
        />

        <polygon
          points="393,340 438,340 573,477 532,477"
          fill="url(#novesqTail)"
          filter="url(#tailShadow)"
        />

      </g>

      <g>
        <circle cx="132" cy="282" r="14" fill="#87998D" stroke="#FCFCFA" strokeWidth="5" />
        <path d="M132 282 L151 282" stroke="#C47A5A" strokeWidth="4" opacity="0.78" />
        <circle cx="455" cy="45" r="15" fill="#87998D" stroke="#FCFCFA" strokeWidth="5" />
        <polygon points="469,43 484,45 469,48" fill="#C47A5A" opacity="0.72" />
        <circle cx="672" cy="282" r="12" fill="#101C2C" stroke="#FCFCFA" strokeWidth="5" />
        <circle cx="230" cy="530" r="12" fill="#C47A5A" stroke="#FCFCFA" strokeWidth="5" />
      </g>

      <g
        fill="#526674"
        fontFamily="Manrope, Arial, sans-serif"
        fontSize="11"
        fontWeight="600"
        letterSpacing="2.35"
      >
        <text x="600" y="184">BETTER</text>
        <text x="600" y="207">TESTING.</text>
        <text x="600" y="230">HIGHER</text>
        <text x="600" y="253">CONFIDENCE.</text>
      </g>

      <line x1="600" y1="274" x2="630" y2="274" stroke="#C47A5A" strokeWidth="2" />
    </svg>
  );
}
