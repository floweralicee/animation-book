export default function ShapeLanguage() {
  return (
    <svg viewBox="0 0 420 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 380 }}>
      {/* Circle character — friendly */}
      <circle cx="70" cy="90" r="50" stroke="#3d2b1a" strokeWidth="1.8" fill="#3d2b1a" fillOpacity="0.03" />
      <circle cx="58" cy="82" r="8" fill="#3d2b1a" fillOpacity="0.6" />
      <circle cx="82" cy="82" r="8" fill="#3d2b1a" fillOpacity="0.6" />
      <circle cx="60" cy="80" r="2.5" fill="white" />
      <circle cx="84" cy="80" r="2.5" fill="white" />
      <path d="M56 102 Q70 115 84 102" stroke="#3d2b1a" strokeWidth="1.3" fill="none" strokeLinecap="round" />
      {/* Legs */}
      <line x1="55" y1="138" x2="50" y2="170" stroke="#3d2b1a" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="85" y1="138" x2="90" y2="170" stroke="#3d2b1a" strokeWidth="1.5" strokeLinecap="round" />
      <text x="70" y="192" fontFamily="Caveat, cursive" fontSize="14" fill="#b85c3a" textAnchor="middle">friendly</text>

      {/* Square character — stable */}
      <rect x="170" y="45" width="80" height="90" rx="4" stroke="#3d2b1a" strokeWidth="1.8" fill="#3d2b1a" fillOpacity="0.03" />
      <rect x="186" y="72" width="14" height="10" rx="2" stroke="#3d2b1a" strokeWidth="1.3" fill="#3d2b1a" fillOpacity="0.5" />
      <rect x="220" y="72" width="14" height="10" rx="2" stroke="#3d2b1a" strokeWidth="1.3" fill="#3d2b1a" fillOpacity="0.5" />
      <line x1="196" y1="105" x2="224" y2="105" stroke="#3d2b1a" strokeWidth="1.5" strokeLinecap="round" />
      {/* Legs */}
      <line x1="195" y1="135" x2="192" y2="170" stroke="#3d2b1a" strokeWidth="2" strokeLinecap="round" />
      <line x1="225" y1="135" x2="228" y2="170" stroke="#3d2b1a" strokeWidth="2" strokeLinecap="round" />
      <text x="210" y="192" fontFamily="Caveat, cursive" fontSize="14" fill="#b85c3a" textAnchor="middle">stable</text>

      {/* Triangle character — dynamic/danger */}
      <path d="M350 40 L300 135 L400 135 Z" stroke="#3d2b1a" strokeWidth="1.8" fill="#3d2b1a" fillOpacity="0.03" strokeLinejoin="round" />
      <path d="M336 95 L344 85 L352 95" stroke="#3d2b1a" strokeWidth="1.3" fill="#3d2b1a" fillOpacity="0.5" />
      <path d="M356 95 L364 85 L372 95" stroke="#3d2b1a" strokeWidth="1.3" fill="#3d2b1a" fillOpacity="0.5" />
      <path d="M340 112 L350 108 L360 112" stroke="#3d2b1a" strokeWidth="1.3" fill="none" strokeLinecap="round" />
      {/* Legs */}
      <line x1="330" y1="135" x2="325" y2="170" stroke="#3d2b1a" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="370" y1="135" x2="375" y2="170" stroke="#3d2b1a" strokeWidth="1.5" strokeLinecap="round" />
      <text x="350" y="192" fontFamily="Caveat, cursive" fontSize="14" fill="#b85c3a" textAnchor="middle">danger</text>

      {/* Shape labels above */}
      <text x="70" y="25" fontFamily="Inter, sans-serif" fontSize="10" fill="#8a7b6b" textAnchor="middle" letterSpacing="1.5">CIRCLE</text>
      <text x="210" y="25" fontFamily="Inter, sans-serif" fontSize="10" fill="#8a7b6b" textAnchor="middle" letterSpacing="1.5">SQUARE</text>
      <text x="350" y="25" fontFamily="Inter, sans-serif" fontSize="10" fill="#8a7b6b" textAnchor="middle" letterSpacing="1.5">TRIANGLE</text>
    </svg>
  );
}
