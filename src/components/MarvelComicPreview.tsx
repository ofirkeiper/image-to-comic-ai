
import React from "react";

// For demo: an array of Marvel/superhero placeholder action images (unsplash or svg)
const marvelImages = [
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80", // dramatic close-up
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80", // action
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80", // Silhouette w/ glow
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80", // Hacker/cyber
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=400&q=80", // hero squad
];

// Utility: Split text into 2-6 "story" panels
function splitTextToPanels(text: string, maxPanels = 6) {
  const sentences = text
    .replace(/([.!?])\s*(?=[A-Z0-9])/g, "$1|") // Split at punctuation
    .split("|")
    .map((s) => s.trim())
    .filter(Boolean);

  const nPanels = Math.max(2, Math.min(maxPanels, sentences.length));
  if (nPanels <= 1) return [text];

  // Evenly group sentences over nPanels
  const panels: string[] = [];
  let idx = 0;
  for (let i = 0; i < nPanels; i++) {
    const groupLen = Math.ceil((sentences.length - idx) / (nPanels - i));
    panels.push(sentences.slice(idx, idx + groupLen).join(" "));
    idx += groupLen;
  }
  return panels;
}

type MarvelComicPreviewProps = {
  uploadedImg: string;
  caption: string;
  onBack?: () => void;
};

const comicLayouts = [
  "grid-cols-2", // 2 panels, side by side
  "grid-cols-3", // 3 panels
  "grid-cols-3", // 4 panels (some overlap/angles)
  "grid-cols-6", // 5 panels, lots of variety
  "grid-cols-6", // 6 panels
];

const ComicSpeechBubble = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => (
  <div
    className="font-bangers text-lg md:text-xl text-blue-900 bg-white/90 border-2 border-blue-300 shadow comic-outline rounded-xl px-2 py-1 relative z-20 speech-bubble animate-pop-text"
    style={style}
  >
    <span>{children}</span>
    <svg width="0" height="0">
      <filter id="comic-shadow" colorInterpolationFilters="sRGB">
        <feDropShadow stdDeviation="1" dx="1" dy="1" floodColor="#000" floodOpacity="0.15" />
      </filter>
    </svg>
  </div>
);

const MarvelComicPreview: React.FC<MarvelComicPreviewProps> = ({
  uploadedImg,
  caption,
  onBack,
}) => {
  const textPanels = splitTextToPanels(caption, 6);
  const n = textPanels.length;

  // Compose panel images: first is uploaded, rest are marvel-style demo placeholders
  const panelImgs = [uploadedImg, ...marvelImages].slice(0, n);

  // For more Marvel fun: add dramatic panel CSS transforms
  const dramaticAngles = [
    "-rotate-3",
    "rotate-3",
    "-rotate-6",
    "rotate-2",
    "rotate-1",
    "-rotate-2",
  ];

  return (
    <section className="bg-gradient-to-tr from-blue-100 via-yellow-100 to-pink-50 rounded-3xl border-8 border-pink-300 shadow-2xl max-w-3xl mx-auto mt-12 px-3 py-8 comic-outline animate-fade-in relative">
      <h2 className="text-center text-4xl md:text-5xl font-bangers comic-title text-blue-900 mb-5 animate-text-glow">
        Your Marvel-Style Comic!
      </h2>
      <div className="absolute left-3 md:left-8 top-0 font-bangers text-yellow-700 bg-blue-200 px-4 py-2 rounded-xl border-2 border-blue-400 shadow comic-outline text-xl md:text-2xl -rotate-2 animate-shake">
        AI Comic Demo
      </div>
      <div className={`grid gap-4 ${comicLayouts[n - 2] || "grid-cols-2"}`}>
        {panelImgs.map((img, i) => (
          <div
            key={i}
            className={`rounded-2xl border-4 border-yellow-400 shadow-xl bg-gradient-to-tr from-pink-200 via-yellow-50 to-blue-100 relative flex flex-col items-center p-2 md:p-4 h-[180px] md:h-[220px] justify-end overflow-hidden comic-outline group ${dramaticAngles[i % dramaticAngles.length]} hover:scale-105 transition-transform`}
            style={
              i % 2 === 1
                ? { zIndex: 10 }
                : { zIndex: 0 }
            }
          >
            <img
              src={img}
              alt={`Panel ${i + 1}`}
              className="w-full h-full object-cover rounded-xl border-2 border-blue-300 shadow-lg absolute top-0 left-0 z-0 opacity-80"
              style={{ filter: "drop-shadow(0 4px 24px #ffed73aa) contrast(1.05)" }}
            />
            <div className="absolute inset-0 pointer-events-none" />
            <div className="relative z-20 mt-auto flex justify-center items-end h-full w-full p-2">
              <ComicSpeechBubble
                style={{
                  maxWidth: "90%",
                  filter: "url(#comic-shadow)",
                  marginBottom: "0.5em",
                }}
              >
                {textPanels[i]}
              </ComicSpeechBubble>
            </div>
            <div className="absolute left-2 top-2 w-8 h-8 bg-yellow-300 text-blue-800 text-center font-bangers text-lg border-2 border-pink-300 rounded-full shadow comic-outline z-30 opacity-90 animate-pulse">
              {i + 1}
            </div>
          </div>
        ))}
      </div>
      {onBack && (
        <button
          className="mt-6 font-bangers text-lg text-blue-900 bg-yellow-200 rounded-xl px-5 py-2 border-2 border-blue-400 comic-outline shadow hover:bg-pink-200 transition-all"
          onClick={onBack}
        >
          ← Back to Editor
        </button>
      )}
      <div className="mt-6 text-center text-pink-700 text-sm italic opacity-75">
        When you connect your OpenAI or image generation API, this will be a real Marvel-style comic based on your upload & story!
      </div>
    </section>
  );
};

export default MarvelComicPreview;
