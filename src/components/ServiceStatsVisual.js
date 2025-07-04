import React from 'react';

const stats = [
  { label: '+120% 5-Star Reviews', color: 'bg-blue-400', icon: '⭐', style: 'top-4 left-1/4' },
  { label: '+180% Phone Calls', color: 'bg-yellow-300', icon: '📞', style: 'top-24 right-1/4' },
  { label: '+200% Direction Requests', color: 'bg-primary-300', icon: '📍', style: 'bottom-24 right-1/4' },
  { label: '+60% Bookings', color: 'bg-green-400', icon: '📅', style: 'bottom-8 left-1/4' },
  { label: '+90% Posts Engagement', color: 'bg-primary-400', icon: '📝', style: 'top-1/2 left-8 -translate-y-1/2' },
];

const ServiceStatsVisual = () => (
  <div className="relative flex justify-center items-center py-8 overflow-visible">
    {/* Google Maps-style background */}
    <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
      <svg className="w-full max-w-5xl h-auto opacity-80" viewBox="0 0 900 500" fill="none">
        {/* Parks/buildings */}
        <rect x="120" y="80" width="120" height="60" rx="12" fill="#e6fffa" />
        <rect x="700" y="320" width="100" height="60" rx="12" fill="#e6fffa" />
        <rect x="300" y="350" width="80" height="40" rx="10" fill="#e6fffa" />
        {/* Main roads */}
        <polyline points="100,100 300,200 800,140" stroke="#5fffd7" strokeWidth="10" fill="none" strokeLinecap="round" />
        <polyline points="250,420 600,350 850,420" stroke="#5fffd7" strokeWidth="10" fill="none" strokeLinecap="round" />
        <polyline points="500,60 500,470" stroke="#5fffd7" strokeWidth="7" fill="none" strokeDasharray="18 12" />
        {/* Route highlight */}
        <polyline points="150,350 300,200 700,300" stroke="#00b894" strokeWidth="8" fill="none" strokeDasharray="16 10" />
        {/* Side roads */}
        <polyline points="300,100 700,100 700,400" stroke="#b3ffe9" strokeWidth="5" fill="none" strokeDasharray="10 8" />
        <polyline points="200,200 200,400 600,400" stroke="#b3ffe9" strokeWidth="5" fill="none" strokeDasharray="10 8" />
        {/* Map pins */}
        <circle cx="300" cy="200" r="18" fill="#5fffd7" stroke="#119c77" strokeWidth="4" />
        <circle cx="600" cy="350" r="14" fill="#b3ffe9" stroke="#119c77" strokeWidth="3" />
        <circle cx="500" cy="60" r="12" fill="#5fffd7" stroke="#119c77" strokeWidth="3" />
        <circle cx="800" cy="140" r="12" fill="#b3ffe9" stroke="#119c77" strokeWidth="3" />
        <circle cx="200" cy="200" r="10" fill="#5fffd7" stroke="#119c77" strokeWidth="3" />
      </svg>
    </div>
    {/* Phone SVG illustration with Google search UI */}
    <div className="relative z-10">
      <svg width="260" height="480" viewBox="0 0 260 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
        {/* Phone body with border */}
        <rect x="10" y="10" width="240" height="460" rx="40" fill="#222" stroke="#bbb" strokeWidth="2" />
        {/* Screen with white background and shadow */}
        <rect x="30" y="60" width="200" height="360" rx="24" fill="#fff" filter="url(#screenShadow)" />
        {/* Search bar */}
        <rect x="45" y="80" width="170" height="32" rx="16" fill="#f3f4f6" />
        <text x="60" y="102" fontSize="15" fill="#444" fontWeight="bold">businesses near me</text>
        {/* Map preview */}
        <rect x="45" y="120" width="170" height="40" rx="8" fill="#e6fffa" />
        <rect x="50" y="125" width="60" height="30" rx="6" fill="#b3ffe9" />
        <rect x="120" y="125" width="90" height="30" rx="6" fill="#80ffec" />
        {/* Business card */}
        <rect x="45" y="170" width="170" height="90" rx="12" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1.5" />
        {/* Stars */}
        <text x="60" y="190" fontSize="15" fill="#222" fontWeight="bold">Your Business</text>
        <text x="60" y="208" fontSize="14" fill="#FFD700">★★★★★</text>
        <text x="120" y="208" fontSize="13" fill="#888">(1.3K)</text>
        <text x="60" y="225" fontSize="12" fill="#888">Brunch · 2431 Main St</text>
        <text x="60" y="240" fontSize="11" fill="#5fffd7">"Delicious, creative menu, fun friendly staff, and beautiful setting."</text>
        {/* Action buttons */}
        <rect x="55" y="255" width="40" height="20" rx="8" fill="#5fffd7" />
        <rect x="105" y="255" width="50" height="20" rx="8" fill="#e6fffa" />
        <rect x="165" y="255" width="40" height="20" rx="8" fill="#e6fffa" />
        <text x="65" y="269" fontSize="11" fill="#222" fontWeight="bold">Call</text>
        <text x="115" y="269" fontSize="11" fill="#222" fontWeight="bold">Directions</text>
        <text x="175" y="269" fontSize="11" fill="#222" fontWeight="bold">Website</text>
        {/* Home button */}
        <circle cx="130" cy="420" r="18" fill="#5fffd7" />
        {/* Speaker */}
        <rect x="110" y="30" width="40" height="8" rx="4" fill="#444" />
        <defs>
          <filter id="screenShadow" x="0" y="60" width="260" height="360" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.08" />
          </filter>
        </defs>
      </svg>
      {/* Stat bubbles, all off the phone */}
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`absolute ${stat.style} px-5 py-2 rounded-full text-base font-extrabold text-gray-900 shadow-xl flex items-center gap-2 ${stat.color} border border-white/80`}
          style={{ zIndex: 20, minWidth: 180, letterSpacing: '0.01em' }}
        >
          <span className="text-lg">{stat.icon}</span> {stat.label}
        </div>
      ))}
    </div>
  </div>
);

export default ServiceStatsVisual; 