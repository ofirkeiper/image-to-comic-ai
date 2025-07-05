
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
    console.log("Skip button clicked - forcing finish");
    setShow(false);
    setTimeout(() => {
      console.log("Skip timeout completed, calling onFinish");
      onFinish();
    }, 100);
  };

  // Keyboard skip handler
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
        console.log("Keyboard skip triggered:", e.key);
        handleSkip();
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  useEffect(() => {
    console.log("ComicIntro useEffect triggered, page:", page, "show:", show);
    
    // Emergency timeout - force finish after 2 seconds
    const emergencyTimeout = setTimeout(() => {
      console.log("EMERGENCY: Forcing intro to finish after 2 seconds");
      setShow(false);
      setTimeout(() => {
        console.log("Emergency finish calling onFinish");
        onFinish();
      }, 100);
    }, 2000);

    if (page < 3) {
      console.log("Setting timeout for page transition from", page, "to", page + 1);
      const pageTimeout = setTimeout(() => {
        console.log("Page timeout triggered, moving to page:", page + 1);
        setPage(p => {
          console.log("setPage called, current:", p, "new:", p + 1);
          return p + 1;
        });
      }, 600); // Shorter transitions
      
      return () => {
        console.log("Cleaning up timeouts for page:", page);
        clearTimeout(pageTimeout);
        clearTimeout(emergencyTimeout);
      };
    } else {
      // Final page - start fade out
      console.log("Final page reached, starting fade out");
      const fadeTimeout = setTimeout(() => {
        console.log("Fade timeout triggered, hiding intro");
        setShow(false);
        setTimeout(() => {
          console.log("Final timeout calling onFinish");
          onFinish();
        }, 200);
      }, 400);
      
      return () => {
        console.log("Cleaning up final timeouts");
        clearTimeout(fadeTimeout);
        clearTimeout(emergencyTimeout);
      };
    }
  }, [page, onFinish]);

  return (
    <div
      className={`
        fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-yellow-200 via-pink-200 to-blue-300
        transition-all duration-300 ${show ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
      style={{ fontFamily: "'Bangers', cursive, sans-serif" }}
    >
      {/* Multiple skip options */}
      <button
        onClick={handleSkip}
        className="absolute top-4 right-4 z-[10000] bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl border-2 border-red-700 font-bold text-lg transition-all hover:scale-105 animate-pulse"
        style={{ fontFamily: "'Bangers', cursive, sans-serif" }}
      >
        SKIP INTRO
      </button>

      <button
        onClick={handleSkip}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-[10000] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm transition-all"
      >
        Press Enter or Click to Skip
      </button>

      {/* Current page indicator */}
      <div className="absolute top-4 left-4 z-[10000] bg-white/90 px-3 py-1 rounded-lg text-blue-800 font-bold">
        Page {page + 1}/4
      </div>

      {/* Comic pages */}
      <div className="relative w-[350px] h-[500px]">
        {[2, 1, 0].map(i => (
          <div
            key={i}
            className={`
              absolute top-0 left-0 w-full h-full rounded-[2rem] border-[6px] shadow-2xl flex flex-col items-center justify-center
              bg-gradient-to-br ${PAGE_COLORS[i] || PAGE_COLORS[0]}
              transition-transform duration-500
              ${page === i
                ? "z-30 scale-100 rotate-0"
                : page > i
                  ? "z-10 scale-[0.97] rotate-[-18deg] -translate-x-10 opacity-0"
                  : "z-20 scale-95 rotate-6 opacity-80"}
            `}
            style={{
              boxShadow: page === i ? "0 8px 36px #ffae0080" : undefined,
              borderColor: i === page ? "#facc15" : "#ea76f6",
            }}
          >
            <span className="text-[120px] leading-[0.9] text-pink-400 mb-4">
              {PAGE_TEXT[i]?.emoji || "✨"}
            </span>
            <h1 className="text-4xl md:text-5xl text-blue-800 mb-3 font-bold px-3 text-center">
              {PAGE_TEXT[i]?.title || "Welcome!"}
            </h1>
            <p className="text-xl text-pink-700 mb-2 bg-white/50 px-3 py-1 rounded-lg border-2 border-pink-300">
              {PAGE_TEXT[i]?.subtitle || "Let's get started!"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComicIntro;
