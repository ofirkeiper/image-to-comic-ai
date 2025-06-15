
const pages = [
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
];

const FlipbookDemo = () => (
  <div className="relative w-64 h-40 mx-auto mt-4 mb-4 select-none">
    {pages.map((src, idx) => (
      <img
        key={idx}
        src={src}
        alt={"Comic page " + (idx + 1)}
        className={`absolute top-0 left-0 w-64 h-40 rounded-lg shadow-lg pointer-events-none transition-all duration-700
          ${idx === 0 ? "z-30 rotate-[-8deg] animate-fade-in" : ""}
          ${idx === 1 ? "z-20 rotate-3 animate-fade-in delay-100" : ""}
          ${idx === 2 ? "z-10 rotate-6 animate-fade-in delay-200" : ""}
        `}
        style={{
          filter: idx === 0 ? "brightness(1)" : "brightness(0.95)",
        }}
      />
    ))}
    <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-200 text-blue-900 font-bangers text-lg rounded-lg border-2 border-blue-400 shadow">
      Flipbook preview
    </div>
  </div>
);

export default FlipbookDemo;
