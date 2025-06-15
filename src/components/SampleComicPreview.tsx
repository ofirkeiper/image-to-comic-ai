
import React from "react";

// Panel layout styles - same as MarvelComicPreview
const comicLayouts = [
  "grid-cols-2", // 2 panels, side by side
  "grid-cols-3", // 3 panels
  "grid-cols-3", // 4 panels
  "grid-cols-6", // 5 panels
  "grid-cols-6", // 6 panels
];

const dramaticAngles = [
  "-rotate-2",
  "rotate-1",
  "-rotate-3",
  "rotate-2",
  "rotate-3",
  "-rotate-1",
];

const SampleComicSpeechBubble = ({
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

// Props: panels: [{img, caption}], title?: string, style?: string, onBack?
type SampleComicPreviewProps = {
  panels: { img: string, caption: string }[];
  style?: string; // Optional styling for variant color, etc
  title?: string;
};

const styleColors = {
  Modern: "from-yellow-300 to-pink-300",
  Classic: "from-pink-200 to-blue-200",
  Noir: "from-gray-600 to-blue-400",
  "Pop Art": "from-blue-400 to-yellow-200"
} as const;

const SampleComicPreview: React.FC<SampleComicPreviewProps> = ({
  panels,
  title,
  style = "Modern",
}) => {
  const n = panels.length;
  return (
    <section className={`bg-gradient-to-tr from-blue-100 via-yellow-100 to-pink-50 rounded-3xl border-8 border-pink-300 shadow-2xl max-w-3xl mx-auto px-3 py-7 comic-outline`}>
      {title && (
        <h3 className="mb-4 comic-title text-3xl md:text-4xl font-bangers text-blue-900 text-center animate-text-glow">
          {title}
        </h3>
      )}
      <div className={`grid gap-4 ${comicLayouts[n - 2] || "grid-cols-2"}`}>
        {panels.map((panel, i) => (
          <div
            key={i}
            className={`rounded-2xl border-4 border-yellow-400 shadow-xl bg-gradient-to-tr from-pink-200 via-yellow-50 to-blue-100 relative flex flex-col items-center p-2 md:p-4 h-[160px] md:h-[195px] justify-end overflow-hidden comic-outline group ${dramaticAngles[i % dramaticAngles.length]} hover:scale-105 transition-transform`}
            style={
              i % 2 === 1
                ? { zIndex: 10 }
                : { zIndex: 0 }
            }
          >
            <img
              src={panel.img}
              alt={`Panel ${i + 1}`}
              className="w-full h-full object-cover rounded-xl border-2 border-blue-300 shadow-lg absolute top-0 left-0 z-0 opacity-80"
              style={{ filter: "drop-shadow(0 4px 24px #ffed73aa) contrast(1.05)" }}
            />
            <div className="absolute inset-0 pointer-events-none" />
            <div className="relative z-20 mt-auto flex justify-center items-end h-full w-full p-2">
              <SampleComicSpeechBubble
                style={{
                  maxWidth: "90%",
                  filter: "url(#comic-shadow)",
                  marginBottom: "0.5em",
                }}
              >
                {panel.caption}
              </SampleComicSpeechBubble>
            </div>
            <div className="absolute left-2 top-2 w-8 h-8 bg-yellow-300 text-blue-800 text-center font-bangers text-lg border-2 border-pink-300 rounded-full shadow comic-outline z-30 opacity-90 animate-pulse">
              {i + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SampleComicPreview;

