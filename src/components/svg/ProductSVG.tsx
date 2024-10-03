const ProductSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    width="150"
    height="150"
  >
    {/* Monitor */}
    <rect
      x="20"
      y="50"
      width="160"
      height="100"
      rx="10"
      fill="#C4C4C4"
      stroke="#000"
      strokeWidth="3"
    />
    {/* Pantalla del monitor */}
    <rect
      x="30"
      y="60"
      width="140"
      height="70"
      rx="5"
      fill="#8ED9F6"
      stroke="#000"
      strokeWidth="3"
    />
    {/* Base del monitor */}
    <rect
      x="70"
      y="140"
      width="60"
      height="20"
      fill="#C4C4C4"
      stroke="#000"
      strokeWidth="3"
    />
    <ellipse cx="100" cy="160" rx="40" ry="10" fill="#6D6D6D" />
    {/* Código en la pantalla (Visit my work!) */}
    <text x="40" y="81" fontSize="16" fill="#000" fontFamily="monospace">
      ...Your idea
    </text>
    <text x="50" y="99" fontSize="16" fill="#000" fontFamily="monospace">
      ...My code
    </text>{" "}
    <text x="55" y="116" fontSize="16" fill="#000" fontFamily="monospace">
      A solution.
    </text>{" "}
  </svg>
);

export default ProductSVG;
