const CodeSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    width="200"
    height="200"
  >
    {/* Recuadro */}
    <rect
      x="50"
      y="50"
      width="100"
      height="100"
      rx="10"
      fill="none"
      stroke="#0288D1"
      strokeWidth="4"
    />

    {/* Código binario */}
    <text x="67" y="77" fontSize="16" fill="#000" fontFamily="monospace">
      1 0 1 0
    </text>
    <text x="67" y="97" fontSize="16" fill="#000" fontFamily="monospace">
      0 1 1 0
    </text>
    <text x="67" y="117" fontSize="16" fill="#000" fontFamily="monospace">
      1 1 0 1
    </text>
    <text x="67" y="137" fontSize="16" fill="#000" fontFamily="monospace">
      0 1 0 1
    </text>
  </svg>
);

export default CodeSVG;
