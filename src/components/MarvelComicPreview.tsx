
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
  panelCaptions?: string[];
  panelImages?: string[];
};

const ComicSpeechBubble = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => (
  <div
    className="font-bold text-sm md:text-base text-black bg-white border-4 border-black rounded-2xl px-3 py-2 relative z-20 shadow-lg"
    style={{
      ...style,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 25% 75%, 15% 100%, 10% 75%, 0% 75%)",
      fontFamily: "'Comic Neue', 'Bangers', cursive",
      letterSpacing: "0.5px",
      lineHeight: "1.2",
      boxShadow: "4px 4px 0px #000000, 0 0 0 4px #000000"
    }}
  >
    <span className="relative z-10">{children}</span>
  </div>
);

const MarvelComicPreview: React.FC<MarvelComicPreviewProps> = ({
  uploadedImg,
  caption,
  onBack,
  panelCaptions,
  panelImages,
}) => {
  // If panelCaptions provided (from OpenAI), use those. Else, fallback to old splitTextToPanels logic.
  const textPanels = panelCaptions && panelCaptions.length >= 2
    ? panelCaptions.slice(0, 6)
    : splitTextToPanels(caption, 6);
  const n = textPanels.length;

  // Use uploadedImg as panelImages[0] and marvelImages for the rest or use explicit panelImages prop.
  const panelImgs = panelImages && panelImages.length === n
    ? panelImages
    : [uploadedImg, ...marvelImages].slice(0, n);

  return (
    <section className="bg-white rounded-lg border-4 border-black shadow-xl max-w-4xl mx-auto mt-12 p-4 relative" style={{ backgroundColor: '#f8f8f8' }}>
      {/* Comic Title Header */}
      <div className="bg-red-600 text-white px-4 py-2 mb-4 relative border-4 border-black">
        <div className="absolute left-2 top-0 bg-white text-red-600 px-2 py-1 text-xs font-bold border-4 border-black" style={{ transform: 'translateY(-50%)' }}>
          MARVEL
        </div>
        <h2 className="text-center text-2xl md:text-3xl font-bold uppercase tracking-wider ml-16" style={{ fontFamily: "'Bangers', cursive" }}>
          Your Epic Story
        </h2>
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-black px-2 py-1 text-xs font-bold border-2 border-black rounded-full">
          #1
        </div>
      </div>

      {/* Comic Panel Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 bg-white p-2 border-4 border-black">
        {panelImgs.map((img, i) => (
          <div
            key={i}
            className="relative border-4 border-black bg-white overflow-hidden"
            style={{ 
              aspectRatio: i === 0 ? '16/10' : '4/3',
              gridColumn: i === 0 && n > 2 ? 'span 2' : 'span 1'
            }}
          >
            <img
              src={img}
              alt={`Panel ${i + 1}`}
              className="w-full h-full object-cover"
              style={{ 
                filter: "contrast(1.3) saturate(1.4) hue-rotate(5deg) brightness(1.1)",
                mixBlendMode: "multiply"
              }}
            />
            {/* Comic book effect overlay */}
            <div 
              className="absolute inset-0 pointer-events-none" 
              style={{
                background: `
                  radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 2px, transparent 2px),
                  radial-gradient(circle at 75% 75%, rgba(0,0,0,0.1) 1px, transparent 1px),
                  linear-gradient(45deg, rgba(255,0,0,0.1) 25%, transparent 25%),
                  linear-gradient(-45deg, rgba(0,0,255,0.1) 25%, transparent 25%)
                `,
                backgroundSize: '8px 8px, 6px 6px, 20px 20px, 20px 20px'
              }}
            />
            
            {/* Panel border effect */}
            <div className="absolute inset-0 border-4 border-black pointer-events-none" />
            
            {/* Speech bubble positioned in corner */}
            <div className="absolute bottom-2 left-2 right-2 z-20">
              <ComicSpeechBubble
                style={{
                  maxWidth: "90%",
                  fontSize: i === 0 ? '14px' : '12px'
                }}
              >
                {textPanels[i]}
              </ComicSpeechBubble>
            </div>

            {/* Panel number */}
            <div className="absolute top-2 left-2 w-8 h-8 bg-yellow-300 text-black text-center text-sm font-bold border-3 border-black rounded-full flex items-center justify-center z-30" style={{ fontFamily: "'Bangers', cursive" }}>
              {i + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Marvel-style footer */}
      <div className="mt-4 flex justify-between items-center text-xs bg-red-600 text-white px-3 py-2 border-4 border-black" style={{ fontFamily: "'Bangers', cursive" }}>
        <span>MARVEL COMICS GROUP</span>
        <span>KEEPICS PRESENTS</span>
        <span>$3.99 US</span>
      </div>

      {onBack && (
        <button
          className="mt-4 font-bold text-lg text-white bg-red-600 rounded-lg px-6 py-3 border-4 border-black shadow-lg hover:bg-red-700 transition-all uppercase"
          onClick={onBack}
          style={{ 
            fontFamily: "'Bangers', cursive",
            boxShadow: "4px 4px 0px #000000"
          }}
        >
          ← Back to Editor
        </button>
      )}
    </section>
  );
};

export default MarvelComicPreview;
