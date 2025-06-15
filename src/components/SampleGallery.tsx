
const samples = [
  {
    img: "/placeholder.svg",
    title: "Supercat Rescue",
    lang: "EN",
    style: "Modern",
  },
  {
    img: "/placeholder.svg",
    title: "Rocket Squirrel Adventure",
    lang: "EN",
    style: "Classic",
  },
  {
    img: "/placeholder.svg",
    title: "Mystery of the Lost Robot",
    lang: "EN",
    style: "Noir",
  },
  {
    img: "/placeholder.svg",
    title: "Comicland Showdown",
    lang: "EN",
    style: "Pop Art",
  },
];

const styleColors = {
  Modern: "from-yellow-300 to-pink-300",
  Classic: "from-pink-200 to-blue-200",
  Noir: "from-gray-600 to-blue-400",
  "Pop Art": "from-blue-400 to-yellow-200"
} as const;

const SampleGallery = () => (
  <section className="max-w-6xl mx-auto my-16 px-4 bg-gradient-to-br from-blue-50 via-yellow-50 to-pink-50 rounded-3xl pt-12 pb-7 border-8 border-pink-300 shadow-2xl comic-outline">
    <h2 className="comic-title text-4xl text-center mb-10 text-blue-800 drop-shadow comic-outline bg-gradient-to-r from-yellow-100 via-pink-200 to-blue-200 px-4 py-2 rounded-xl inline-block animate-text-glow">
      Sample Comics
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {samples.map(({ img, title, lang, style }, idx) => (
        <div
          key={idx}
          className={`bg-gradient-to-br ${styleColors[style as keyof typeof styleColors]} rounded-2xl border-4 border-yellow-300 shadow-xl hover:shadow-2xl hover:scale-110 hover:border-pink-400 transition-all duration-300 flex flex-col items-center p-5 relative comic-outline group`}
        >
          <img src={img} alt={title} className="w-full h-44 object-cover rounded-lg border-4 border-pink-200 mb-3 shadow comic-outline animate-fade-in" />
          <div className="font-bangers text-2xl text-blue-900 mb-0 comic-outline">{title}</div>
          <div className="text-xs font-bold text-purple-600 mt-1 bg-white/60 px-3 py-1 rounded-lg border-2 border-blue-300 comic-outline">
            {lang} &bull; {style}
          </div>
          <span className="absolute -top-3 -right-3 bg-pink-300 text-white text-xs font-bangers px-2 py-[2px] rounded-full border-2 border-blue-400 shadow comic-outline animate-bounce-x group-hover:animate-pop-text z-20">
            NEW
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default SampleGallery;
