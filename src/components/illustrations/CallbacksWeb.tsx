export default function CallbacksWeb() {
  return (
    <svg viewBox="0 0 380 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 340 }}>
      {/* Web strands */}
      <path d="M190 130 L60 40" stroke="#3d2b1a" strokeWidth="0.8" opacity="0.3" />
      <path d="M190 130 L320 40" stroke="#3d2b1a" strokeWidth="0.8" opacity="0.3" />
      <path d="M190 130 L40 180" stroke="#3d2b1a" strokeWidth="0.8" opacity="0.3" />
      <path d="M190 130 L340 180" stroke="#3d2b1a" strokeWidth="0.8" opacity="0.3" />
      <path d="M190 130 L190 20" stroke="#3d2b1a" strokeWidth="0.8" opacity="0.3" />
      <path d="M190 130 L100 240" stroke="#3d2b1a" strokeWidth="0.8" opacity="0.3" />
      <path d="M190 130 L280 240" stroke="#3d2b1a" strokeWidth="0.8" opacity="0.3" />

      {/* Cross strands */}
      <path d="M80 60 Q130 45 180 55 Q230 65 280 55 Q310 50 320 40" stroke="#3d2b1a" strokeWidth="0.6" opacity="0.2" fill="none" />
      <path d="M55 120 Q110 100 170 110 Q230 120 290 110 Q330 105 340 100" stroke="#3d2b1a" strokeWidth="0.6" opacity="0.2" fill="none" />
      <path d="M50 180 Q120 165 190 175 Q260 185 320 175" stroke="#3d2b1a" strokeWidth="0.6" opacity="0.2" fill="none" />

      {/* Center node — PAYOFF */}
      <circle cx="190" cy="130" r="22" stroke="#b85c3a" strokeWidth="1.5" fill="#b85c3a" fillOpacity="0.06" />
      <text x="190" y="127" fontFamily="Inter, sans-serif" fontSize="8" fill="#b85c3a" textAnchor="middle" fontWeight="600" letterSpacing="1">PAY</text>
      <text x="190" y="137" fontFamily="Inter, sans-serif" fontSize="8" fill="#b85c3a" textAnchor="middle" fontWeight="600" letterSpacing="1">OFF</text>

      {/* Node: Guitar */}
      <circle cx="60" cy="40" r="16" stroke="#3d2b1a" strokeWidth="1" fill="#f6f0e4" />
      <text x="60" y="44" fontSize="16" textAnchor="middle">🎸</text>
      <text x="60" y="12" fontFamily="Caveat, cursive" fontSize="11" fill="#8a7b6b" textAnchor="middle">song</text>

      {/* Node: Photo */}
      <circle cx="320" cy="40" r="16" stroke="#3d2b1a" strokeWidth="1" fill="#f6f0e4" />
      <text x="320" y="44" fontSize="16" textAnchor="middle">📷</text>
      <text x="320" y="12" fontFamily="Caveat, cursive" fontSize="11" fill="#8a7b6b" textAnchor="middle">torn photo</text>

      {/* Node: Flower */}
      <circle cx="190" cy="20" r="16" stroke="#3d2b1a" strokeWidth="1" fill="#f6f0e4" />
      <text x="190" y="24" fontSize="16" textAnchor="middle">🌼</text>

      {/* Node: Skull */}
      <circle cx="40" cy="180" r="16" stroke="#3d2b1a" strokeWidth="1" fill="#f6f0e4" />
      <text x="40" y="184" fontSize="16" textAnchor="middle">💀</text>
      <text x="40" y="208" fontFamily="Caveat, cursive" fontSize="11" fill="#8a7b6b" textAnchor="middle">final death</text>

      {/* Node: Memory */}
      <circle cx="340" cy="180" r="16" stroke="#3d2b1a" strokeWidth="1" fill="#f6f0e4" />
      <text x="340" y="184" fontSize="16" textAnchor="middle">💭</text>
      <text x="340" y="208" fontFamily="Caveat, cursive" fontSize="11" fill="#8a7b6b" textAnchor="middle">memory</text>

      {/* Node: Mama Coco */}
      <circle cx="100" cy="240" r="16" stroke="#3d2b1a" strokeWidth="1" fill="#f6f0e4" />
      <text x="100" y="244" fontSize="16" textAnchor="middle">👵</text>
      <text x="100" y="268" fontFamily="Caveat, cursive" fontSize="11" fill="#8a7b6b" textAnchor="middle">Mama Coco</text>

      {/* Node: Bridge */}
      <circle cx="280" cy="240" r="16" stroke="#3d2b1a" strokeWidth="1" fill="#f6f0e4" />
      <text x="280" y="244" fontSize="16" textAnchor="middle">🌉</text>
      <text x="280" y="268" fontFamily="Caveat, cursive" fontSize="11" fill="#8a7b6b" textAnchor="middle">bridge</text>

      {/* Connection highlights */}
      <path d="M75 48 L172 120" stroke="#b85c3a" strokeWidth="1.2" opacity="0.4" strokeDasharray="3 3" />
      <path d="M305 48 L208 120" stroke="#b85c3a" strokeWidth="1.2" opacity="0.4" strokeDasharray="3 3" />
      <path d="M112 232 L178 142" stroke="#b85c3a" strokeWidth="1.2" opacity="0.4" strokeDasharray="3 3" />
    </svg>
  );
}
