function DataFlowAnimation() {
  const forwardPath = "M5 22 C 23 10 45 14 62 20 S 82 28 95 20";
  const returnPath = "M95 24 C 78 32 55 30 38 24 S 20 16 5 22";

  return (
    <div className="data-flow relative mx-auto w-full max-w-2xl h-40 overflow-visible">
      <div className="node node-client">💻</div>
      <div className="node node-server">🗄️</div>
      <div className="node node-cloud">☁️</div>

      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 40" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGradWeb" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,59,48,0.85)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.6)" />
            <stop offset="100%" stopColor="rgba(255,59,48,0.4)" />
          </linearGradient>
          <path id="forward" d={forwardPath} />
          <path id="backward" d={returnPath} />
        </defs>

        <path className="zig" d={forwardPath} stroke="url(#lineGradWeb)" />
        <path className="zig" d={returnPath} stroke="url(#lineGradWeb)" />

        <g className="packet">
          <circle r="1.2" fill="#ff3b30">
            <animateMotion dur="4.2s" repeatCount="indefinite" rotate="auto">
              <mpath xlinkHref="#forward" />
            </animateMotion>
          </circle>
          <circle r="1.2" fill="#ff3b30" opacity="0.85">
            <animateMotion dur="4.2s" begin="0.7s" repeatCount="indefinite" rotate="auto">
              <mpath xlinkHref="#forward" />
            </animateMotion>
          </circle>
        </g>

        <g className="packet">
          <circle r="1.2" fill="#ff3b30">
            <animateMotion dur="4.2s" begin="1s" repeatCount="indefinite" rotate="auto">
              <mpath xlinkHref="#backward" />
            </animateMotion>
          </circle>
          <circle r="1.2" fill="#ff3b30" opacity="0.85">
            <animateMotion dur="4.2s" begin="1.6s" repeatCount="indefinite" rotate="auto">
              <mpath xlinkHref="#backward" />
            </animateMotion>
          </circle>
        </g>
      </svg>
    </div>
  );
}

export default DataFlowAnimation;
