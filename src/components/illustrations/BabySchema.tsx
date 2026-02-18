export default function BabySchema() {
  return (
    <svg viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 360 }}>
      {/* Character with baby schema proportions */}
      {/* Big round head */}
      <ellipse cx="140" cy="95" rx="65" ry="70" stroke="#3d2b1a" strokeWidth="1.8" strokeLinecap="round"
        strokeDasharray="0" style={{ filter: 'url(#sketch)' }} />
      {/* Big eyes */}
      <ellipse cx="118" cy="100" rx="18" ry="20" stroke="#3d2b1a" strokeWidth="1.5" fill="#3d2b1a" fillOpacity="0.06" />
      <ellipse cx="162" cy="100" rx="18" ry="20" stroke="#3d2b1a" strokeWidth="1.5" fill="#3d2b1a" fillOpacity="0.06" />
      <circle cx="112" cy="94" r="6" fill="#3d2b1a" fillOpacity="0.7" />
      <circle cx="156" cy="94" r="6" fill="#3d2b1a" fillOpacity="0.7" />
      <circle cx="114" cy="92" r="2" fill="white" />
      <circle cx="158" cy="92" r="2" fill="white" />
      {/* Small nose */}
      <path d="M138 110 Q140 116 142 110" stroke="#3d2b1a" strokeWidth="1.2" fill="none" />
      {/* Small smile */}
      <path d="M126 125 Q140 135 154 125" stroke="#3d2b1a" strokeWidth="1.3" fill="none" strokeLinecap="round" />
      {/* Small body */}
      <ellipse cx="140" cy="200" rx="35" ry="40" stroke="#3d2b1a" strokeWidth="1.5" fill="none" />
      {/* Short limbs */}
      <path d="M108 190 Q90 195 85 210" stroke="#3d2b1a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M172 190 Q190 195 195 210" stroke="#3d2b1a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M122 235 Q118 260 110 270" stroke="#3d2b1a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M158 235 Q162 260 170 270" stroke="#3d2b1a" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Annotation arrows and labels */}
      {/* Arrow to head */}
      <path d="M240 50 L210 70" stroke="#b85c3a" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arrowhead)" />
      <text x="242" y="48" fontFamily="Caveat, cursive" fontSize="13" fill="#b85c3a">large head</text>
      {/* Arrow to eyes */}
      <path d="M250 100 L185 100" stroke="#b85c3a" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arrowhead)" />
      <text x="252" y="98" fontFamily="Caveat, cursive" fontSize="13" fill="#b85c3a">big eyes</text>
      {/* Arrow to body */}
      <path d="M250 200 L180 200" stroke="#b85c3a" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arrowhead)" />
      <text x="252" y="198" fontFamily="Caveat, cursive" fontSize="13" fill="#b85c3a">small body</text>
      {/* Arrow to limbs */}
      <path d="M250 255 L175 265" stroke="#b85c3a" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arrowhead)" />
      <text x="252" y="253" fontFamily="Caveat, cursive" fontSize="13" fill="#b85c3a">short limbs</text>

      {/* Proportion line */}
      <line x1="50" y1="25" x2="50" y2="165" stroke="#8a7b6b" strokeWidth="0.8" strokeDasharray="2 2" />
      <text x="30" y="95" fontFamily="Caveat, cursive" fontSize="11" fill="#8a7b6b" textAnchor="middle" transform="rotate(-90, 30, 95)">1:2 ratio</text>

      <defs>
        <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0 0 L8 3 L0 6" fill="none" stroke="#b85c3a" strokeWidth="0.8" />
        </marker>
        <filter id="sketch">
          <feTurbulence type="turbulence" baseFrequency="0.03" numOctaves="4" seed="1" />
          <feDisplacementMap in="SourceGraphic" scale="1.5" />
        </filter>
      </defs>
    </svg>
  );
}
