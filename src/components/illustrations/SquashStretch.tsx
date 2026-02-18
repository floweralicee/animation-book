export default function SquashStretch() {
  return (
    <svg viewBox="0 0 420 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 380 }}>
      {/* Ground line */}
      <line x1="20" y1="155" x2="400" y2="155" stroke="#8a7b6b" strokeWidth="0.8" strokeDasharray="3 3" />

      {/* Position 1 — stretched up (ascending) */}
      <ellipse cx="60" cy="70" rx="18" ry="35" stroke="#3d2b1a" strokeWidth="1.5" fill="#3d2b1a" fillOpacity="0.04" />
      <path d="M52 62 Q60 55 68 62" stroke="#3d2b1a" strokeWidth="1" fill="none" />
      {/* Motion line */}
      <line x1="60" y1="110" x2="60" y2="150" stroke="#8a7b6b" strokeWidth="0.6" strokeDasharray="2 3" />
      <text x="60" y="172" fontFamily="Caveat, cursive" fontSize="11" fill="#8a7b6b" textAnchor="middle">stretch</text>

      {/* Position 2 — normal at top */}
      <circle cx="140" cy="55" r="24" stroke="#3d2b1a" strokeWidth="1.5" fill="#3d2b1a" fillOpacity="0.04" />
      <path d="M132 50 Q140 44 148 50" stroke="#3d2b1a" strokeWidth="1" fill="none" />
      <text x="140" y="172" fontFamily="Caveat, cursive" fontSize="11" fill="#8a7b6b" textAnchor="middle">normal</text>

      {/* Position 3 — stretched down (descending) */}
      <ellipse cx="220" cy="90" rx="18" ry="35" stroke="#3d2b1a" strokeWidth="1.5" fill="#3d2b1a" fillOpacity="0.04" />
      <path d="M212 82 Q220 76 228 82" stroke="#3d2b1a" strokeWidth="1" fill="none" />
      <line x1="220" y1="50" x2="220" y2="20" stroke="#8a7b6b" strokeWidth="0.6" strokeDasharray="2 3" />
      <text x="220" y="172" fontFamily="Caveat, cursive" fontSize="11" fill="#8a7b6b" textAnchor="middle">stretch</text>

      {/* Position 4 — squashed on impact */}
      <ellipse cx="300" cy="140" rx="35" ry="15" stroke="#3d2b1a" strokeWidth="1.8" fill="#3d2b1a" fillOpacity="0.06" />
      <path d="M288 136 Q300 130 312 136" stroke="#3d2b1a" strokeWidth="1" fill="none" />
      {/* Impact lines */}
      <line x1="270" y1="148" x2="260" y2="155" stroke="#3d2b1a" strokeWidth="0.8" />
      <line x1="330" y1="148" x2="340" y2="155" stroke="#3d2b1a" strokeWidth="0.8" />
      <text x="300" y="172" fontFamily="Caveat, cursive" fontSize="11" fill="#b85c3a" textAnchor="middle" fontWeight="600">squash!</text>

      {/* Position 5 — bouncing back up stretched */}
      <ellipse cx="380" cy="95" rx="16" ry="32" stroke="#3d2b1a" strokeWidth="1.5" fill="#3d2b1a" fillOpacity="0.04" />
      <path d="M372 88 Q380 82 388 88" stroke="#3d2b1a" strokeWidth="1" fill="none" />
      <text x="380" y="172" fontFamily="Caveat, cursive" fontSize="11" fill="#8a7b6b" textAnchor="middle">rebound</text>

      {/* Arc path showing motion */}
      <path d="M60 45 Q100 10 140 45 Q180 100 220 55 Q260 10 300 140 Q310 100 380 60"
        stroke="#b85c3a" strokeWidth="0.8" fill="none" strokeDasharray="4 4" opacity="0.4" />

      {/* Title */}
      <text x="210" y="15" fontFamily="Inter, sans-serif" fontSize="10" fill="#8a7b6b" textAnchor="middle" letterSpacing="2">SQUASH &amp; STRETCH</text>
    </svg>
  );
}
