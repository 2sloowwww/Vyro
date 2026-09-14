export function TshirtIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 360"
      className={className}
      role="img"
      aria-label="Illustration of the VYRO plain black t-shirt"
    >
      <defs>
        <linearGradient id="tshirtBody" x1="0.1" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor="#38332d" />
          <stop offset="35%" stopColor="#1f1b17" />
          <stop offset="70%" stopColor="#100d0b" />
          <stop offset="100%" stopColor="#050403" />
        </linearGradient>
        <radialGradient id="tshirtGlow" cx="50%" cy="25%" r="65%">
          <stop offset="0%" stopColor="#bd5b34" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#bd5b34" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sleeveShadeL" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="sleeveShadeR" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="chestHighlight" cx="38%" cy="30%" r="45%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="underarmShadowL" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hemShadow" cx="50%" cy="0%" r="70%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="collarRib" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a443b" />
          <stop offset="100%" stopColor="#221d18" />
        </linearGradient>
      </defs>

      <ellipse cx="160" cy="336" rx="120" ry="16" fill="#1c1815" opacity="0.14" />
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
        stroke="#050403"
        strokeOpacity="0.6"
        strokeWidth="1.5"
      />

      <path
        d="M92 142 C 84 146, 74 142, 70 134 L 48 92 C 42 80, 48 66, 60 60 L 78 50"
        fill="url(#sleeveShadeL)"
        opacity="0.9"
      />
      <path
        d="M228 142 C 236 146, 246 142, 250 134 L 272 92 C 278 80, 272 66, 260 60 L 242 50"
        fill="url(#sleeveShadeR)"
        opacity="0.9"
      />

      <ellipse cx="94" cy="126" rx="26" ry="34" fill="url(#underarmShadowL)" />
      <ellipse cx="226" cy="126" rx="26" ry="34" fill="url(#underarmShadowL)" />

      <path
        d="M106 300 C 106 300, 130 306, 160 306 C 190 306, 214 300, 214 300"
        fill="url(#hemShadow)"
        opacity="0.8"
      />

      <path
        d="M132 150 C 128 190, 132 250, 140 300"
        fill="none"
        stroke="#000000"
        strokeOpacity="0.22"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M190 150 C 194 190, 190 250, 182 300"
        fill="none"
        stroke="#000000"
        strokeOpacity="0.2"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M120 96 C 140 108, 180 108, 200 96"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.06"
        strokeWidth="10"
        strokeLinecap="round"
      />

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
        fill="url(#chestHighlight)"
      />

      <path
        d="M118 34 C 128 46, 146 54, 160 54 C 174 54, 192 46, 202 34"
        fill="url(#collarRib)"
        opacity="0.9"
      />
      <path
        d="M118 34 C 128 22, 146 14, 160 14 C 174 14, 192 22, 202 34"
        fill="none"
        stroke="#4a443b"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M124 38 C 133 48, 147 52, 160 52 C 173 52, 187 48, 196 38"
        fill="none"
        stroke="#050403"
        strokeOpacity="0.5"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <ellipse cx="70" cy="96" rx="9" ry="20" fill="#050403" opacity="0.3" />
      <ellipse cx="250" cy="96" rx="9" ry="20" fill="#050403" opacity="0.3" />

      <text
        x="160"
        y="205"
        textAnchor="middle"
        fill="#bd5b34"
        fontSize="16"
        fontWeight="800"
        fontFamily="Archivo, sans-serif"
        letterSpacing="4"
        opacity="0.85"
      >
        STAPLE
      </text>
    </svg>
  );
}
