const IdeaSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    width="200"
    height="200"
  >
    {/* Bombilla */}
    <defs>
      <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "#FFD700", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#FFC107", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <circle
      cx="100"
      cy="80"
      r="40"
      fill="url(#yellowGradient)"
      stroke="#000"
      strokeWidth="2"
    />

    {/* Detalles dentro de la bombilla */}
    <rect x="80" y="77" width="10" height="10" fill="#37474F" />
    <rect x="95" y="77" width="10" height="10" fill="#37474F" />
    <rect x="110" y="77" width="10" height="10" fill="#37474F" />

    {/* Base de la bombilla */}
    <rect x="85" y="115" width="30" height="10" fill="#E0E0E0" />
    <rect x="80" y="125" width="40" height="10" fill="#CFD8DC" />
    <rect x="85" y="135" width="30" height="10" fill="#E0E0E0" />
    <rect x="90" y="145" width="20" height="10" fill="#455A64" />

    {/* Rayos de luz */}
    <rect
      x="40"
      y="115"
      width="15"
      height="5"
      transform="rotate(45 130 90)"
      fill="#FFEB3B"
    />
    <rect x="35" y="80" width="15" height="5" fill="#FFEB3B" />
    <rect
      x="30"
      y="100"
      width="15"
      height="5"
      transform="rotate(-45 55 90)"
      fill="#FFEB3B"
    />

    <rect
      x="90"
      y="120"
      width="15"
      height="5"
      transform="rotate(160 130 90)"
      fill="#FFEB3B"
    />

    <rect x="150" y="80" width="15" height="5" fill="#FFEB3B" />
    <rect
      x="150"
      y="90"
      width="15"
      height="5"
      transform="rotate(45 130 90)"
      fill="#FFEB3B"
    />
  </svg>
);

export default IdeaSVG;
