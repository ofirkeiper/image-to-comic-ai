
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

  useEffect(() => {
    console.log("ComicIntro useEffect triggered, page:", page);
    if (page < 3) {
      const timeout = setTimeout(() => {
        console.log("Moving to next page:", page + 1);
        setPage(p => p + 1);
      }, 1100);
      return () => clearTimeout(timeout);
    } else {
      // Start fade out effect
      console.log("Starting fade out");
      const timeout = setTimeout(() => {
        setShow(false);
        setTimeout(() => {
          console.log("Calling onFinish");
          onFinish();
        }, 600); // after fade out, call onFinish
      }, 800);
      return () => clearTimeout(timeout);
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
      {/* Comic pages */}
      <div className="relative w-[350px] h-[500px]">
        {[2, 1, 0].map(i => (
          <div
            key={i}
            className={`
              absolute top-0 left-0 w-full h-full rounded-[2rem] border-[6px] shadow-2xl flex flex-col items-center justify-center
              comic-outline bg-gradient-to-br ${PAGE_COLORS[i]}
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
              filter: i === page ? "drop-shadow(0 0 20px #facc15b9)" : undefined
            }}
          >
            <span
              className="text-[120px] leading-[0.9] text-pink-400 drop-shadow-md mb-4 animate-wiggle-x"
              style={{ pointerEvents: "none" }}
            >{PAGE_TEXT[i].emoji}</span>
            <h1 className="text-4xl md:text-5xl text-blue-800 mb-3 text-shadow font-bangers px-3 text-center">
              {PAGE_TEXT[i].title}
            </h1>
            <p className="text-xl text-pink-700 mb-2 drop-shadow bg-white/50 px-3 py-1 rounded-lg border-2 border-pink-300 comic-outline">
              {PAGE_TEXT[i].subtitle}
            </p>
          </div>
        ))}
        {/* Comic panel lines/styles */}
        <div className="absolute inset-0 rounded-[2rem] border-[8px] border-blue-700 pointer-events-none" style={{
          borderStyle: "double"
        }} />
        <div className="absolute -top-4 -left-10 text-yellow-600 text-3xl rotate-[-22deg] drop-shadow comic-outline animate-pop-text">
          POW!
        </div>
        <div className="absolute -bottom-6 right-0 text-pink-400 text-2xl rotate-12 font-bangers animate-bounce-x comic-outline">
          WOW!
        </div>
      </div>
    </div>
  );
};

export default ComicIntro;
