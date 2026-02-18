export default function MirrorNeurons() {
  return (
    <svg viewBox="0 0 380 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 350 }}>
      {/* Animated character face (left) */}
      <circle cx="90" cy="100" r="50" stroke="#3d2b1a" strokeWidth="1.5" fill="#3d2b1a" fillOpacity="0.03" />
      {/* Simple cute face — crying happy */}
      <ellipse cx="74" cy="90" rx="10" ry="12" stroke="#3d2b1a" strokeWidth="1.2" fill="#3d2b1a" fillOpacity="0.05" />
      <ellipse cx="106" cy="90" rx="10" ry="12" stroke="#3d2b1a" strokeWidth="1.2" fill="#3d2b1a" fillOpacity="0.05" />
      <circle cx="74" cy="88" r="4" fill="#3d2b1a" fillOpacity="0.6" />
      <circle cx="106" cy="88" r="4" fill="#3d2b1a" fillOpacity="0.6" />
      {/* Tear */}
      <path d="M82 96 Q84 104 82 108" stroke="#3d2b1a" strokeWidth="0.8" fill="none" />
      {/* Smile */}
      <path d="M76 115 Q90 128 104 115" stroke="#3d2b1a" strokeWidth="1.3" fill="none" strokeLinecap="round" />
      <text x="90" y="170" fontFamily="Caveat, cursive" fontSize="13" fill="#8a7b6b" textAnchor="middle">character</text>

      {/* Human viewer face (right) */}
      <ellipse cx="290" cy="100" rx="45" ry="52" stroke="#3d2b1a" strokeWidth="1.5" fill="#3d2b1a" fillOpacity="0.03" />
      {/* Human-like eyes */}
      <path d="M268 88 Q276 80 284 88 Q276 92 268 88" stroke="#3d2b1a" strokeWidth="1.2" fill="#3d2b1a" fillOpacity="0.3" />
      <path d="M296 88 Q304 80 312 88 Q304 92 296 88" stroke="#3d2b1a" strokeWidth="1.2" fill="#3d2b1a" fillOpacity="0.3" />
      {/* Tear */}
      <path d="M284 92 Q286 100 284 106" stroke="#3d2b1a" strokeWidth="0.8" fill="none" />
      {/* Nose */}
      <path d="M288 100 Q290 108 292 100" stroke="#3d2b1a" strokeWidth="0.8" fill="none" />
      {/* Moved smile */}
      <path d="M278 118 Q290 128 302 118" stroke="#3d2b1a" strokeWidth="1.3" fill="none" strokeLinecap="round" />
      <text x="290" y="170" fontFamily="Caveat, cursive" fontSize="13" fill="#8a7b6b" textAnchor="middle">viewer</text>

      {/* Empathy waves between them */}
      <path d="M145 80 Q165 70 185 80 Q205 90 225 80" stroke="#b85c3a" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M145 100 Q165 90 185 100 Q205 110 225 100" stroke="#b85c3a" strokeWidth="1.2" fill="none" opacity="0.6" />
      <path d="M145 120 Q165 110 185 120 Q205 130 225 120" stroke="#b85c3a" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Labels */}
      <text x="190" y="65" fontFamily="Inter, sans-serif" fontSize="9" fill="#b85c3a" textAnchor="middle" letterSpacing="1" fontWeight="500">MIRROR NEURONS</text>
      <text x="190" y="145" fontFamily="Caveat, cursive" fontSize="12" fill="#b85c3a" textAnchor="middle">empathy bridge</text>

      {/* Brain label */}
      <text x="190" y="195" fontFamily="Caveat, cursive" fontSize="11" fill="#8a7b6b" textAnchor="middle">same circuits fire in both</text>
    </svg>
  );
}
