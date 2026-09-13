export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="VYRO"
    >
      <rect width="200" height="200" fill="#0f5c66" />

      <g stroke="#f4ecd8" strokeWidth="3.5" strokeLinecap="round" fill="none">
        <path d="M62 62 L138 138" />
        <path d="M138 62 L62 138" />
      </g>
      <g fill="#f4ecd8">
        <path d="M62 62 L50 50 L54 66 Z" transform="rotate(-45 58 58)" />
        <path d="M138 62 L150 50 L146 66 Z" transform="rotate(45 142 58)" />
        <path d="M62 138 L50 150 L54 134 Z" transform="rotate(45 58 142)" />
        <path d="M138 138 L150 150 L146 134 Z" transform="rotate(-45 142 142)" />
      </g>

      <text
        x="100"
        y="42"
        textAnchor="middle"
        fill="#f4ecd8"
        fontSize="30"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="600"
      >
        Y
      </text>
      <text
        x="30"
        y="112"
        textAnchor="middle"
        fill="#f4ecd8"
        fontSize="30"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="600"
      >
        V
      </text>
      <text
        x="170"
        y="112"
        textAnchor="middle"
        fill="#f4ecd8"
        fontSize="28"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="600"
      >
        R
      </text>
      <text
        x="100"
        y="182"
        textAnchor="middle"
        fill="#f4ecd8"
        fontSize="28"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="600"
      >
        O
      </text>

      <g stroke="#f4ecd8" strokeWidth="1.6" strokeLinecap="round" fill="none">
        <path d="M156 78 C156 68 156 60 156 54" />
        <path d="M156 62 C150 58 146 60 144 64" />
        <path d="M156 66 C162 62 166 64 168 68" />
        <path d="M156 70 C150 68 147 71 146 75" />
      </g>
    </svg>
  );
}
