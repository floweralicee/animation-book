export default function Silhouettes() {
  return (
    <svg viewBox="0 0 420 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 380 }}>
      {/* 5 distinct character silhouettes */}

      {/* 1. Round/short character (like Russell) */}
      <g transform="translate(30, 10)">
        <ellipse cx="30" cy="50" rx="28" ry="32" fill="#2c1810" />
        <circle cx="30" cy="22" r="22" fill="#2c1810" />
        <rect x="16" y="80" width="10" height="35" rx="5" fill="#2c1810" />
        <rect x="34" y="80" width="10" height="35" rx="5" fill="#2c1810" />
        <rect x="4" y="52" width="12" height="6" rx="3" fill="#2c1810" />
        <rect x="44" y="52" width="12" height="6" rx="3" fill="#2c1810" />
      </g>

      {/* 2. Tall/thin character (like Linguini) */}
      <g transform="translate(110, 0)">
        <ellipse cx="25" cy="18" rx="16" ry="18" fill="#2c1810" />
        <rect x="17" y="34" width="16" height="55" rx="6" fill="#2c1810" />
        <rect x="10" y="88" width="10" height="40" rx="4" fill="#2c1810" />
        <rect x="30" y="88" width="10" height="40" rx="4" fill="#2c1810" />
        <rect x="1" y="44" width="16" height="5" rx="2.5" fill="#2c1810" />
        <rect x="33" y="44" width="16" height="5" rx="2.5" fill="#2c1810" />
      </g>

      {/* 3. Blocky/square character (like Carl) */}
      <g transform="translate(190, 10)">
        <rect x="5" y="0" width="40" height="38" rx="4" fill="#2c1810" />
        <rect x="2" y="36" width="46" height="50" rx="4" fill="#2c1810" />
        <rect x="12" y="84" width="12" height="32" rx="4" fill="#2c1810" />
        <rect x="28" y="84" width="12" height="32" rx="4" fill="#2c1810" />
        <rect x="-8" y="45" width="16" height="6" rx="3" fill="#2c1810" />
        <rect x="44" y="45" width="16" height="6" rx="3" fill="#2c1810" />
      </g>

      {/* 4. Large/round character (like Sully) */}
      <g transform="translate(270, 5)">
        <circle cx="35" cy="25" r="22" fill="#2c1810" />
        <ellipse cx="35" cy="65" rx="35" ry="38" fill="#2c1810" />
        <rect x="8" y="100" width="14" height="25" rx="6" fill="#2c1810" />
        <rect x="42" y="100" width="14" height="25" rx="6" fill="#2c1810" />
        {/* Horns */}
        <path d="M20 8 L12 -5" stroke="#2c1810" strokeWidth="6" strokeLinecap="round" />
        <path d="M50 8 L58 -5" stroke="#2c1810" strokeWidth="6" strokeLinecap="round" />
      </g>

      {/* 5. Small/compact character (like WALL-E) */}
      <g transform="translate(360, 35)">
        <rect x="5" y="25" width="35" height="30" rx="3" fill="#2c1810" />
        <rect x="10" y="0" width="25" height="20" rx="3" fill="#2c1810" />
        <circle cx="17" cy="10" r="8" fill="#2c1810" />
        <circle cx="28" cy="10" r="8" fill="#2c1810" />
        <rect x="0" y="55" width="15" height="35" rx="3" fill="#2c1810" />
        <rect x="30" y="55" width="15" height="35" rx="3" fill="#2c1810" />
        <rect x="-5" y="35" width="12" height="5" rx="2" fill="#2c1810" />
        <rect x="38" y="35" width="12" height="5" rx="2" fill="#2c1810" />
      </g>

      {/* Label */}
      <text x="210" y="152" fontFamily="Inter, sans-serif" fontSize="9" fill="#8a7b6b" textAnchor="middle" letterSpacing="2">THE SILHOUETTE TEST</text>
    </svg>
  );
}
