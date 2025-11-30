const Logo4Track = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative flex items-center gap-3 ${className}`}>
      {/* Logo Icon */}
      <div className="relative w-12 h-12">
        <svg viewBox="0 0 48 48" className="w-full h-full">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(270 100% 65%)" />
              <stop offset="100%" stopColor="hsl(280 80% 45%)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          {/* Outer ring */}
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke="url(#logoGradient)"
            strokeWidth="1.5"
            opacity="0.6"
          />
          
          {/* Cross lines */}
          <path
            d="M 24 8 L 24 40 M 8 24 L 40 24"
            stroke="url(#logoGradient)"
            strokeWidth="1"
            opacity="0.4"
            filter="url(#glow)"
          />
          
          {/* Number 4 stylized */}
          <path
            d="M 18 14 L 18 26 L 30 26 M 26 18 L 26 34"
            fill="none"
            stroke="url(#logoGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#glow)"
          />
          
          {/* Corner dots */}
          <circle cx="12" cy="12" r="2" fill="url(#logoGradient)" opacity="0.8" />
          <circle cx="36" cy="12" r="2" fill="url(#logoGradient)" opacity="0.8" />
          <circle cx="12" cy="36" r="2" fill="url(#logoGradient)" opacity="0.8" />
          <circle cx="36" cy="36" r="2" fill="url(#logoGradient)" opacity="0.8" />
        </svg>
        
        {/* Animated glow */}
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl pulse-glow" />
      </div>
      
      {/* Logo Text */}
      <span className="font-orbitron text-2xl font-bold tracking-wider text-foreground">
        <span className="text-primary text-glow">4</span>Track
      </span>
    </div>
  );
};

export default Logo4Track;
