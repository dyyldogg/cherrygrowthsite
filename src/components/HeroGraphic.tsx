export default function HeroGraphic() {
  return (
    <div
      className="hero-knot relative ml-auto -mt-12 w-full max-w-[1200px] xl:max-w-[1400px]"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
        fill="none"
      >
        <defs>
          <radialGradient id="fade" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#000" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="600" height="600" fill="url(#fade)" opacity="0.07" />

        {/* outer ring set (slow clockwise) */}
        <g stroke="#111" strokeOpacity="0.8" strokeWidth="2" className="spin-slow">
          {Array.from({ length: 8 }).map((_, i) => (
            <circle key={`c-${i}`} cx="420" cy="360" r={(i + 2) * 24} />
          ))}
        </g>

        {/* ellipses (medium counter-clockwise) */}
        <g stroke="#111" strokeWidth="2.4" strokeOpacity="0.9" className="spin-med" style={{ animationDirection: "reverse" }}>
          {[0, 30, 60, 90, 120, 150].map((deg) => (
            <ellipse
              key={`e-${deg}`}
              cx="420"
              cy="360"
              rx="200"
              ry="84"
              transform={`rotate(${deg} 420 360)`}
            />
          ))}
        </g>

        {/* radiating spokes (fast) */}
        <g stroke="#111" strokeOpacity="0.8" strokeWidth="2" className="spin-fast">
          {Array.from({ length: 16 }).map((_, i) => {
            const deg = i * 22.5;
            const rad = (deg * Math.PI) / 180;
            const x = 420 + Math.cos(rad) * 270;
            const y = 360 + Math.sin(rad) * 270;
            return <line key={`r-${deg}`} x1="420" y1="360" x2={x} y2={y} />;
          })}
        </g>
      </svg>
    </div>
  );
}


