export function TshirtIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 360"
      className={className}
      role="img"
      aria-label="Illustration of the Staple plain black t-shirt"
    >
      <defs>
        <linearGradient id="tshirtBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#302c28" />
          <stop offset="60%" stopColor="#1c1815" />
          <stop offset="100%" stopColor="#100d0b" />
        </linearGradient>
        <radialGradient id="tshirtGlow" cx="50%" cy="25%" r="65%">
          <stop offset="0%" stopColor="#bd5b34" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#bd5b34" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sleeveShade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </linearGradient>
      </defs>

      <ellipse cx="160" cy="336" rx="120" ry="16" fill="#1c1815" opacity="0.12" />
      <circle cx="160" cy="150" r="170" fill="url(#tshirtGlow)" />

      <path
        d="M118 34
           C 128 22, 146 14, 160 14
           C 174 14, 192 22, 202 34
           L 260 60
           C 272 66, 278 80, 272 92
           L 250 134
           C 246 142, 236 146, 228 142
           L 214 136
           L 214 300
           C 214 308, 208 314, 200 314
           L 120 314
           C 112 314, 106 308, 106 300
           L 106 136
           L 92 142
           C 84 146, 74 142, 70 134
           L 48 92
           C 42 80, 48 66, 60 60
           Z"
        fill="url(#tshirtBody)"
        stroke="#100d0b"
        strokeOpacity="0.5"
        strokeWidth="1.5"
      />

      <path
        d="M118 34 C 128 22, 146 14, 160 14 C 174 14, 192 22, 202 34"
        fill="none"
        stroke="#413b34"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path d="M214 60 L 214 136 L 260 60 Z" fill="url(#sleeveShade)" />

      <text
        x="160"
        y="200"
        textAnchor="middle"
        fill="#bd5b34"
        fontSize="18"
        fontWeight="800"
        fontFamily="Archivo, sans-serif"
        letterSpacing="4"
        opacity="0.9"
      >
        STAPLE
      </text>
    </svg>
  );
}
