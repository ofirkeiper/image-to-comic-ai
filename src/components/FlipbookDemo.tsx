
const pages = [
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
];

const FlipbookDemo = () => (
  <div className="relative w-64 h-44 mx-auto mt-4 mb-6 select-none">
    <div className="absolute -top-8 left-8 z-30">
      <span className="rounded-lg bg-gradient-to-tr from-yellow-400 to-pink-400 px-3 py-1 text-blue-900 font-bangers text-lg border-4 border-blue-400 shadow comic-outline -rotate-6 animate-wiggle-x">
        POP!
      </span>
    </div>
    {pages.map((src, idx) => (
      <img
        key={idx}
        src={src}
        alt={"Comic page " + (idx + 1)}
        className={`absolute top-0 left-0 w-64 h-44 rounded-2xl border-4 border-yellow-300 shadow-2xl pointer-events-none transition-all duration-700 ease-out
          ${idx === 0 ? "z-30 rotate-[-8deg] animate-scale-in" : ""}
          ${idx === 1 ? "z-20 rotate-6 animate-scale-in delay-150" : ""}
          ${idx === 2 ? "z-10 rotate-12 animate-fade-in delay-300" : ""}
        `}
        style={{
          filter: idx === 0 ? "brightness(1.07) drop-shadow(0 0 12px #ffed73)" : "brightness(1) grayscale(0.12) blur(0.5px)",
        }}
      />
    ))}
    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-gradient-to-tr from-blue-200 via-yellow-200 to-pink-200 text-blue-900 font-bangers text-xl rounded-2xl border-4 border-blue-400 shadow comic-outline animate-shake">
      Flipbook preview
    </div>
    <div className="absolute w-12 h-12 right-2 bottom-1 opacity-75 pointer-events-none animate-spin-slow">
      <svg viewBox="0 0 48 48" className="w-full h-full"><circle cx="24" cy="24" r="20" fill="none" stroke="#ffeb3b" strokeWidth="5" strokeDasharray="8 6" /></svg>
    </div>
  </div>
);

export default FlipbookDemo;
