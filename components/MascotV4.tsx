/* Hand-authored cleaning mascot — a round "bubble buddy": white body,
   blue cap with a house emblem, green CITY CLEAN apron, yellow gloves,
   a raised spray bottle and a thumbs-up. Semi-3D via soft gradients so it
   reads close to the reference render while staying crisp at any size.
   (Swap for an AI-generated PNG once one is available — see HomeV4.) */
export function MascotV4({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 380 460"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="v4m-body" cx="40%" cy="32%" r="78%">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.62" stopColor="#f3f9ff" />
          <stop offset="1" stopColor="#d3e6f7" />
        </radialGradient>
        <linearGradient id="v4m-cap" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0" stopColor="#4aa6ff" />
          <stop offset="1" stopColor="#1f6fd6" />
        </linearGradient>
        <linearGradient id="v4m-brim" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2f8bf0" />
          <stop offset="1" stopColor="#1a5fbf" />
        </linearGradient>
        <linearGradient id="v4m-apron" x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0" stopColor="#3ad58c" />
          <stop offset="1" stopColor="#1fa869" />
        </linearGradient>
        <linearGradient id="v4m-bottle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6bbcff" />
          <stop offset="1" stopColor="#2d8cf0" />
        </linearGradient>
        <linearGradient id="v4m-glove" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffd95a" />
          <stop offset="1" stopColor="#f8b91f" />
        </linearGradient>
      </defs>

      {/* ground shadow */}
      <ellipse cx="196" cy="432" rx="118" ry="18" fill="#1f6fd6" opacity="0.14" />

      {/* legs + shoes */}
      <g>
        <rect x="158" y="356" width="26" height="60" rx="13" fill="url(#v4m-apron)" />
        <rect x="200" y="356" width="26" height="60" rx="13" fill="url(#v4m-apron)" />
        <ellipse cx="166" cy="420" rx="26" ry="15" fill="#2d8cf0" />
        <ellipse cx="218" cy="420" rx="26" ry="15" fill="#2d8cf0" />
        <ellipse cx="166" cy="415" rx="26" ry="9" fill="#ffffff" />
        <ellipse cx="218" cy="415" rx="26" ry="9" fill="#ffffff" />
      </g>

      {/* LEFT arm raised with spray bottle */}
      <g>
        <path d="M104 268C72 262 40 236 26 196" stroke="url(#v4m-body)" strokeWidth="30" strokeLinecap="round" />
        <path d="M104 268C72 262 40 236 26 196" stroke="#cfe2f3" strokeWidth="30" strokeLinecap="round" opacity="0.35" />
        {/* spray bottle held in glove */}
        <g transform="rotate(-20 40 150)">
          <rect x="16" y="120" width="46" height="66" rx="14" fill="url(#v4m-bottle)" />
          <rect x="23" y="132" width="20" height="30" rx="6" fill="#eaf6ff" opacity="0.8" />
          <path d="M28 120l4-22h22l4 22z" fill="#1f6fd6" />
          <rect x="30" y="92" width="24" height="12" rx="4" fill="#1f6fd6" />
          <path d="M54 96l30-12v12l-30 6z" fill="#2d8cf0" />
          <rect x="50" y="86" width="10" height="22" rx="4" fill="#1a5fbf" />
        </g>
        {/* glove */}
        <circle cx="34" cy="176" r="24" fill="url(#v4m-glove)" />
        <path d="M14 172c-8 0-12 8-6 14 4 4 10 2 12-2" fill="url(#v4m-glove)" stroke="#eaa90f" strokeWidth="2" />
        {/* spray sparkles */}
        <g fill="#ffffff">
          <path d="M96 58l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" />
          <circle cx="120" cy="86" r="4" />
          <circle cx="78" cy="92" r="3" />
        </g>
      </g>

      {/* RIGHT arm thumbs-up */}
      <g>
        <path d="M288 270c32-2 64-22 80-56" stroke="url(#v4m-body)" strokeWidth="30" strokeLinecap="round" />
        <path d="M288 270c32-2 64-22 80-56" stroke="#cfe2f3" strokeWidth="30" strokeLinecap="round" opacity="0.3" />
        <circle cx="372" cy="208" r="24" fill="url(#v4m-glove)" />
        {/* thumb */}
        <path d="M366 186c2-14 18-16 20-4 1 7-2 13-2 13" fill="url(#v4m-glove)" stroke="#eaa90f" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* BODY */}
      <path
        d="M190 92c78 0 128 54 128 138 0 90-58 138-128 138S62 320 62 230C62 146 112 92 190 92Z"
        fill="url(#v4m-body)"
        stroke="#cbe0f2"
        strokeWidth="3"
      />
      {/* body highlight */}
      <ellipse cx="140" cy="170" rx="34" ry="44" fill="#ffffff" opacity="0.55" />

      {/* APRON */}
      <path
        d="M138 244h104c9 0 16 7 16 16v44c0 30-26 48-68 48s-68-18-68-48v-44c0-9 7-16 16-16Z"
        fill="url(#v4m-apron)"
      />
      <path d="M152 244c0-18 16-30 38-30s38 12 38 30" stroke="#178a55" strokeWidth="11" fill="none" strokeLinecap="round" />
      <rect x="160" y="316" width="60" height="34" rx="8" fill="#178a55" opacity="0.35" />
      <text x="190" y="296" fill="#ffffff" fontFamily="var(--font-mono, monospace)" fontSize="19" fontWeight="800" letterSpacing="2" textAnchor="middle">CITY</text>
      <text x="190" y="316" fill="#ffffff" fontFamily="var(--font-mono, monospace)" fontSize="19" fontWeight="800" letterSpacing="1.5" textAnchor="middle">CLEAN</text>

      {/* CAP */}
      <path d="M92 156c0-54 44-84 98-84s98 30 98 84c0 7-5 12-12 12H104c-7 0-12-5-12-12Z" fill="url(#v4m-cap)" />
      <path d="M104 152c2-30 36-58 86-58s84 28 86 58" stroke="#69b4ff" strokeWidth="4" opacity="0.5" fill="none" />
      {/* brim */}
      <path d="M92 162c-30 2-52 14-58 30 0 0 34-10 74-10 6 0 10-4 10-10s-12-10-26-10Z" fill="url(#v4m-brim)" />
      {/* house emblem */}
      <circle cx="190" cy="96" r="17" fill="#eaf6ff" />
      <path d="M190 84l13 11v15h-26V95z" fill="#2d8cf0" />
      <rect x="185" y="102" width="10" height="8" rx="1.5" fill="#eaf6ff" />

      {/* FACE */}
      {/* left eye open */}
      <ellipse cx="156" cy="206" rx="16" ry="20" fill="#2b3a4f" />
      <circle cx="150" cy="199" r="5.5" fill="#ffffff" />
      <circle cx="160" cy="212" r="2.5" fill="#ffffff" opacity="0.7" />
      {/* right eye wink */}
      <path d="M210 210c6-10 20-10 26 0" stroke="#2b3a4f" strokeWidth="7" strokeLinecap="round" fill="none" />
      {/* cheeks */}
      <ellipse cx="128" cy="232" rx="15" ry="10" fill="#ff9bb0" opacity="0.72" />
      <ellipse cx="248" cy="234" rx="15" ry="10" fill="#ff9bb0" opacity="0.72" />
      {/* open smile */}
      <path d="M160 236c12 20 44 20 58 2-4 24-52 28-58-2Z" fill="#e2486a" />
      <path d="M172 250c10 7 26 6 34-1" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

/* Small cleaning supplies bucket for the hero scene. */
export function BucketV4({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 160 150" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="v4b-bucket" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#56b1ff" />
          <stop offset="1" stopColor="#2070d8" />
        </linearGradient>
      </defs>
      {/* bottles sticking out */}
      <g transform="rotate(-8 60 70)">
        <rect x="46" y="40" width="26" height="48" rx="7" fill="#37cd86" />
        <rect x="52" y="28" width="14" height="16" rx="4" fill="#1fa869" />
        <rect x="50" y="50" width="18" height="14" rx="3" fill="#eafff5" opacity="0.85" />
      </g>
      <g transform="rotate(10 96 64)">
        <rect x="84" y="34" width="24" height="52" rx="7" fill="#ffd23f" />
        <rect x="90" y="22" width="12" height="16" rx="4" fill="#f2b300" />
      </g>
      {/* brush */}
      <g transform="rotate(16 120 70)">
        <rect x="116" y="44" width="10" height="40" rx="4" fill="#9b8cf5" />
        <rect x="110" y="36" width="22" height="12" rx="4" fill="#7c6ae6" />
      </g>
      {/* bucket */}
      <path d="M28 78h104l-12 60c-1 6-6 10-12 10H52c-6 0-11-4-12-10z" fill="url(#v4b-bucket)" />
      <rect x="24" y="74" width="112" height="14" rx="7" fill="#1f6fd6" />
      <path d="M44 78c0-26 72-26 72 0" stroke="#1f6fd6" strokeWidth="6" fill="none" opacity="0.6" />
      <rect x="60" y="100" width="40" height="20" rx="6" fill="#ffffff" opacity="0.2" />
    </svg>
  );
}
