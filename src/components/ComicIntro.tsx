
import { useEffect, useState } from "react";

// Vibrant comic color gradients for each page
const PAGE_COLORS = [
  "from-yellow-200 via-pink-200 to-blue-300",
  "from-pink-200 via-yellow-200 to-blue-200",
  "from-blue-200 via-pink-100 to-yellow-200",
];

const PAGE_TEXT = [
  {
    title: "Welcome to Keepics!",
    subtitle: "Turn your memories into real comics",
    emoji: "💥",
  },
  {
    title: "How?",
    subtitle: "Upload a photo & caption, let AI do the magic!",
    emoji: "🤖",
  },
  {
    title: "Let's get started!",
    subtitle: "Make your first comic now!",
    emoji: "🚀",
  },
];

const ComicIntro = ({ onFinish }: { onFinish: () => void }) => {
  console.log("ComicIntro rendering");
  const [page, setPage] = useState(0);
  const [show, setShow] = useState(true);
  console.log("ComicIntro page:", page, "show:", show);

  // Skip button handler
  const handleSkip = () => {
    console.log("Skip button clicked");
    setShow(false);
    setTimeout(() => onFinish(), 300);
  };

  useEffect(() => {
    console.log("ComicIntro useEffect triggered, page:", page);
    
    // Shorter safety timeout to prevent getting stuck
    const safetyTimeout = setTimeout(() => {
      console.log("Safety timeout triggered, forcing finish");
      setShow(false);
      setTimeout(() => onFinish(), 300);
    }, 3000); // 3 seconds max for entire intro

    if (page < 3) {
      const timeout = setTimeout(() => {
        console.log("Moving to next page:", page + 1);
        setPage(p => p + 1);
      }, 800); // Shorter page transitions
      return () => {
        clearTimeout(timeout);
        clearTimeout(safetyTimeout);
      };
    } else {
      // Start fade out effect
      console.log("Starting fade out");
      const timeout = setTimeout(() => {
        setShow(false);
        setTimeout(() => {
          console.log("Calling onFinish");
          onFinish();
        }, 300);
      }, 600);
      return () => {
        clearTimeout(timeout);
        clearTimeout(safetyTimeout);
      };
    }
  }, [page, onFinish]);

  return (
    <div
      className={`
        fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-yellow-200 via-pink-200 to-blue-300
        transition-all duration-700 ${show ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
      style={{ fontFamily: "'Bangers', cursive" }}
    >
      {/* Skip button */}
      <button
        onClick={handleSkip}
        className="absolute top-4 right-4 z-[10000] bg-white/90 hover:bg-white text-blue-800 px-4 py-2 rounded-xl border-2 border-blue-300 font-bold text-sm transition-all hover:scale-105"
      >
        Skip Intro
      </button>

      {/* Comic pages */}
      <div className="relative w-[350px] h-[500px]">
        {[2, 1, 0].map(i => (
          <div
            key={i}
            className={`
              absolute top-0 left-0 w-full h-full rounded-[2rem] border-[6px] shadow-2xl flex flex-col items-center justify-center
              bg-gradient-to-br ${PAGE_COLORS[i]}
              transition-transform duration-700
              ${page === i
                ? "z-30 scale-100 rotate-0"
                : page > i
                  ? "z-10 scale-[0.97] rotate-[-18deg] -translate-x-10 opacity-0"
                  : "z-20 scale-95 rotate-6 opacity-80"}
              ${i === 2 ? "delay-200" : i === 1 ? "delay-100" : ""}
            `}
            style={{
              boxShadow: page === i ? "0 8px 36px #ffae0080" : undefined,
              borderColor: i === page ? "#facc15" : "#ea76f6",
              filter: i === page ? "drop-shadow(0 0 20px #facc15b9)" : undefined,
              textShadow: "2px 2px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000"
            }}
          >
            <span
              className="text-[120px] leading-[0.9] text-pink-400 mb-4"
              style={{ 
                pointerEvents: "none",
                animation: "wiggleX 1s ease-in-out infinite"
              }}
            >{PAGE_TEXT[i].emoji}</span>
            <h1 className="text-4xl md:text-5xl text-blue-800 mb-3 font-bold px-3 text-center">
              {PAGE_TEXT[i].title}
            </h1>
            <p className="text-xl text-pink-700 mb-2 bg-white/50 px-3 py-1 rounded-lg border-2 border-pink-300">
              {PAGE_TEXT[i].subtitle}
            </p>
          </div>
        ))}
        
        {/* Comic panel border */}
        <div className="absolute inset-0 rounded-[2rem] border-[8px] border-blue-700 pointer-events-none" style={{
          borderStyle: "double"
        }} />
        
        {/* Comic effects */}
        <div className="absolute -top-4 -left-10 text-yellow-600 text-3xl rotate-[-22deg] font-bold" 
             style={{ 
               textShadow: "2px 2px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000",
               animation: "popText 2s ease-in-out infinite"
             }}>
          POW!
        </div>
        <div className="absolute -bottom-6 right-0 text-pink-400 text-2xl rotate-12 font-bold"
             style={{
               textShadow: "2px 2px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000",
               animation: "bounceX 2s ease-in-out infinite"
             }}>
          WOW!
        </div>
      </div>
    </div>
  );
};

export default ComicIntro;
