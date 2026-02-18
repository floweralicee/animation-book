export default function HeroJourney() {
  const steps = [
    { angle: -90, label: 'ordinary\nworld', icon: '🏠' },
    { angle: -45, label: 'call to\nadventure', icon: '📣' },
    { angle: 0, label: 'crossing\nthreshold', icon: '🚪' },
    { angle: 45, label: 'tests &\nallies', icon: '⚔️' },
    { angle: 90, label: 'the\nordeal', icon: '🔥' },
    { angle: 135, label: 'the\nreward', icon: '✨' },
    { angle: 180, label: 'the road\nback', icon: '🛤️' },
    { angle: 225, label: 'return\nchanged', icon: '🦋' },
  ];

  const cx = 190, cy = 140, r = 95;

  return (
    <svg viewBox="0 0 380 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 350 }}>
      {/* Circle path */}
      <circle cx={cx} cy={cy} r={r} stroke="#3d2b1a" strokeWidth="1.2" fill="none" strokeDasharray="5 4" opacity="0.3" />

      {/* Arrow showing direction */}
      <path d={`M${cx} ${cy - r - 8} L${cx + 6} ${cy - r - 2} L${cx - 6} ${cy - r - 2} Z`}
        fill="#b85c3a" opacity="0.5" />

      {/* Steps around the circle */}
      {steps.map((step, i) => {
        const rad = (step.angle * Math.PI) / 180;
        const x = cx + r * Math.cos(rad);
        const y = cy + r * Math.sin(rad);
        const labelR = r + 38;
        const lx = cx + labelR * Math.cos(rad);
        const ly = cy + labelR * Math.sin(rad);

        return (
          <g key={i}>
            {/* Node */}
            <circle cx={x} cy={y} r="14" stroke="#3d2b1a" strokeWidth="1" fill="#f6f0e4" />
            <text x={x} y={y + 5} fontSize="13" textAnchor="middle">{step.icon}</text>
            {/* Label */}
            {step.label.split('\n').map((line, j) => (
              <text key={j} x={lx} y={ly + j * 12 - 4} fontFamily="Caveat, cursive" fontSize="11"
                fill="#8a7b6b" textAnchor="middle">{line}</text>
            ))}
          </g>
        );
      })}

      {/* Center text */}
      <text x={cx} y={cy - 6} fontFamily="Inter, sans-serif" fontSize="9" fill="#b85c3a"
        textAnchor="middle" fontWeight="600" letterSpacing="1.5">HERO&apos;S</text>
      <text x={cx} y={cy + 6} fontFamily="Inter, sans-serif" fontSize="9" fill="#b85c3a"
        textAnchor="middle" fontWeight="600" letterSpacing="1.5">JOURNEY</text>
    </svg>
  );
}
