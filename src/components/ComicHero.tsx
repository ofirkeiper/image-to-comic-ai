
import { Image, Sparkles, Zap } from "lucide-react";
import FlipbookDemo from "./FlipbookDemo";

const ComicHero = () => (
  <header className="relative pb-12 pt-16 w-full flex flex-col items-center bg-gradient-to-br from-pink-200 via-yellow-100 to-blue-300 shadow-2xl rounded-b-[2rem] overflow-hidden">
    {/* Comic pop background */}
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="absolute top-4 left-9 w-40 h-40 bg-gradient-to-tr from-yellow-400/40 via-pink-300/20 to-blue-500/30 rounded-full blur-[60px]"></div>
      <div className="absolute bottom-0 right-0 w-48 h-44 bg-gradient-to-bl from-blue-400/50 via-purple-300/20 to-pink-400/40 rounded-full blur-[60px]"></div>
      <div className="absolute top-12 right-1/2 w-32 h-24 bg-gradient-to-br from-yellow-200/80 via-orange-200/40 to-rose-100/70 rounded-full blur-[24px] rotate-12"></div>
    </div>
    <div className="mx-auto w-full flex flex-col items-center text-center max-w-3xl z-10 relative">
      <div className="flex flex-row justify-center items-center gap-4 mb-4 animate-hero-pop">
        <span className="rounded-full bg-gradient-to-tr from-yellow-300 to-pink-200 p-2 shadow-lg">
          <Image size={56} className="text-yellow-500 drop-shadow-md" />
        </span>
        <h1 className="comic-title text-7xl sm:text-8xl font-bangers text-blue-700 mb-2 drop-shadow-comic tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-yellow-400 to-pink-400 animate-gradient-move">
          keepics
        </h1>
        <span className="rounded-2xl bg-gradient-to-r from-yellow-300 via-pink-200 to-blue-200 px-5 py-2 text-xl font-bold shadow comic-outline whitespace-nowrap border-4 border-blue-500 animate-bounce-slow relative">
          <Zap className="inline-block text-yellow-500 mr-1 animate-hero-sparkle" size={22} /> 
          AI Comics
        </span>
      </div>
      <p className="text-2xl sm:text-3xl mb-7 text-gray-800 font-semibold animate-fade-in" style={{ letterSpacing: "1.5px" }}>
        Turn your <span className="inline-block animate-bounce-x">memories</span> <span className="mx-1 animate-pop-text">📸</span> 
        into comics in seconds!
      </p>
      <a
        href="#comic-uploader"
        className="inline-block rounded-xl bg-gradient-to-r from-yellow-400 via-pink-300 to-blue-400 hover:from-blue-500 hover:via-yellow-300 hover:to-pink-500 hover:text-white transition-all text-2xl font-bangers px-10 py-4 border-4 border-blue-900 shadow-2xl comic-outline animate-pop-btn hover:scale-110 active:scale-105"
        style={{ boxShadow: "0 8px 24px 0 #facf39aa, 0 1.5px 0 #1e3a8a" }}
      >
        <Sparkles className="inline-block mr-2 text-blue-500 animate-shine" size={28} />
        Create Your Comic
      </a>
      <div className="mt-12">
        <FlipbookDemo />
      </div>
    </div>
  </header>
);

export default ComicHero;
