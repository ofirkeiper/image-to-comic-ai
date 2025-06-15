
const samples = [
  {
    img: "/photo-1517022812141-23620dba5c23", // green field, could suit long trip
    title: "6-Month Adventure in South America",
    lang: "EN",
    style: "Modern",
  },
  {
    img: "/photo-1441057206919-63d19fac2369", // two penguins for a couple trip
    title: "Trip to Rome with Girlfriend",
    lang: "EN",
    style: "Classic",
  },
  {
    img: "/photo-1535268647677-300dbf3d78d1", // grey tabby kitten, playful for birthday
    title: "2nd Birthday Bash!",
    lang: "EN",
    style: "Pop Art",
  },
  {
    img: "/photo-1518877593221-1f28583780b4", // whale in nature for family trip
    title: "Family Nature Retreat",
    lang: "EN",
    style: "Noir",
  },
  {
    img: "/photo-1493962853295-0fd70327578a", // ox on mountain for university achievement
    title: "Graduated Medical University",
    lang: "EN",
    style: "Classic",
  },
  {
    img: "/photo-1469041797191-50ace28483c3", // camels - party week, vibrant
    title: "Party Week in Spain with Friends",
    lang: "EN",
    style: "Modern",
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
