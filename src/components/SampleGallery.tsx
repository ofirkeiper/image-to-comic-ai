
const samples = [
  {
    img: "/placeholder.svg",
    title: "Supercat Rescue",
    lang: "EN",
    style: "Modern",
  },
  {
    img: "/placeholder.svg",
    title: "El Viaje",
    lang: "ES",
    style: "Classic",
  },
  {
    img: "/placeholder.svg",
    title: "L'Aventure Mystérieuse",
    lang: "FR",
    style: "Noir",
  },
  {
    img: "/placeholder.svg",
    title: "Comiclandia",
    lang: "DE",
    style: "Pop Art",
  },
];

const SampleGallery = () => (
  <section className="max-w-6xl mx-auto my-12 px-4">
    <h2 className="comic-title text-3xl text-center mb-8">Sample Comics</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
      {samples.map(({ img, title, lang, style }, idx) => (
        <div key={idx} className="bg-white rounded-xl border-2 border-blue-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all flex flex-col items-center p-4">
          <img src={img} alt={title} className="w-full h-40 object-cover rounded border-2 border-yellow-200 mb-3" />
          <div className="font-bangers text-xl text-blue-800 mb-1">{title}</div>
          <div className="text-xs text-gray-500">{lang} &bull; {style}</div>
        </div>
      ))}
    </div>
  </section>
);

export default SampleGallery;
