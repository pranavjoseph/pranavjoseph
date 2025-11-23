import { useEffect, useState } from "react";

function TerminalAnimation({ code, language = "javascript" }) {
  const [displayedCode, setDisplayedCode] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 30;

    const typeCode = () => {
      if (currentIndex < code.length) {
        setDisplayedCode(code.substring(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeCode, typingSpeed);
      }
    };

    typeCode();

    // Blinking cursor
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, [code]);

  return (
    <div className="bg-gray-900 dark:bg-black rounded-lg p-4 font-mono text-sm overflow-x-auto shadow-2xl border border-gray-700">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-2 text-gray-400 text-xs">terminal</span>
      </div>
      <div className="text-green-400">
        <span className="text-blue-400">$</span>{" "}
        <pre className="inline">
          {displayedCode}
          <span className={showCursor ? "opacity-100" : "opacity-0"}>▊</span>
        </pre>
      </div>
    </div>
  );
}

export default TerminalAnimation;

