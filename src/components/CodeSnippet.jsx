import { useState } from "react";

function CodeSnippet({ code, language = "javascript", title }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="bg-gray-900 dark:bg-black rounded-lg overflow-hidden shadow-xl border border-gray-700">
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 dark:bg-gray-900 border-b border-gray-700">
          <span className="text-xs text-gray-400 font-mono">{title || language}</span>
          <button
            onClick={copyToClipboard}
            className="text-xs text-gray-400 hover:text-white transition-colors px-2 py-1 rounded hover:bg-gray-700"
          >
            {copied ? "✓ Copied!" : "📋 Copy"}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto text-sm">
          <code className="text-green-400 font-mono">{code}</code>
        </pre>
      </div>
    </div>
  );
}

export default CodeSnippet;



