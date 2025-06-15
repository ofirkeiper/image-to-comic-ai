import { useRef, useState } from "react";
import { Image, ArrowUp, Sparkles } from "lucide-react";
import MarvelComicPreview from "./MarvelComicPreview";

const ComicUploader = () => {
  const [image, setImage] = useState<string | null>(null);
  const [caption, setCaption] = useState<string>("");
  const fileInput = useRef<HTMLInputElement>(null);

  // NEW: state to "generate" comic
  const [showPreview, setShowPreview] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => setImage(ev.target?.result as string);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // Updated button click handler
  const handleGenerateComic = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPreview(true);
  };

  // Reset preview to go back to editing
  const handleBack = () => setShowPreview(false);

  if (showPreview && image) {
    return (
      <MarvelComicPreview
        uploadedImg={image}
        caption={caption}
        onBack={handleBack}
      />
    );
  }

  return (
    <section
      id="comic-uploader"
      className="w-full max-w-4xl mx-auto bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 border-8 border-pink-300 rounded-[2.2rem] drop-shadow-2xl shadow-yellow-200 p-10 mb-12 flex flex-col items-center comic-outline animate-fade-in"
    >
      <h2 className="comic-title text-5xl text-blue-700 mb-4 animate-text-glow">Start Your Comic</h2>
      <p className="mb-5 text-xl text-blue-700 font-semibold bg-gradient-to-r from-yellow-50 via-pink-50 to-blue-50 px-4 py-2 rounded-full shadow-inner border-2 border-yellow-200 comic-outline animate-shake">
        1. Upload an image <br/> 2. Add a caption<br/> 3. Generate!
      </p>
      <form className="flex flex-col sm:flex-row w-full gap-8" onSubmit={handleGenerateComic}>
        <div className="flex flex-col items-center w-full sm:w-1/2">
          <div
            className={`relative w-64 h-52 rounded-2xl border-4 border-yellow-400 bg-gradient-to-tr from-blue-100 via-pink-50 to-yellow-50 flex items-center justify-center shadow-inner cursor-pointer hover:scale-105 hover:shadow-xl hover:border-pink-300 hover:ring-4 hover:ring-yellow-200 transition-all comic-outline overflow-hidden group`}
            onClick={() => fileInput.current?.click()}
            aria-label="Upload image"
          >
            {image ? (
              <img
                src={image}
                alt="Uploaded"
                className="object-cover w-full h-full rounded-xl border-4 border-pink-200 shadow-2xl animate-slide-in-right"
              />
            ) : (
              <div className="flex flex-col items-center">
                <Image size={48} className="text-yellow-500 mb-2 animate-bounce" />
                <span className="text-pink-600 text-xl font-bangers animate-pop-text">Click to upload</span>
                <span className="text-xs text-blue-600">JPG, PNG, or WebP</span>
              </div>
            )}
            <input
              ref={fileInput}
              type="file"
              accept="image/png,image/jpeg,image/webp"
              className="hidden"
              onChange={handleImageChange}
            />
            <span className="absolute -top-4 left-3 bg-gradient-to-r from-yellow-300 via-pink-200 to-blue-200 px-3 py-1 rounded-xl font-bangers text-blue-700 shadow comic-outline border-2 border-pink-400 text-xs animate-wiggle-x">
              comic panel
            </span>
          </div>
        </div>
        <div className="flex flex-col w-full sm:w-1/2">
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Describe what's happening in your image or write a dialogue!"
            className="w-full min-h-[120px] max-h-[180px] shadow appearance-none rounded-xl border-4 border-blue-400 bg-white/90 px-4 py-3 mb-3 text-lg focus:outline-none focus:ring focus:ring-yellow-400 focus:border-yellow-400 resize-none transition-all comic-outline"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-3 px-10 py-4 mt-2 bg-gradient-to-r from-yellow-400 via-pink-200 to-blue-400 text-blue-900 rounded-2xl font-bangers text-2xl border-4 border-blue-700 comic-outline shadow-2xl hover:bg-gradient-to-r hover:from-pink-300 hover:to-yellow-200 hover:text-white hover:scale-110 active:scale-105 transition-all animate-pop-btn relative"
            disabled={!image || !caption}
          >
            <ArrowUp size={32} /> 
            <Sparkles className="inline text-pink-500 animate-shine" size={24} />
            Generate Comic
          </button>
        </div>
      </form>
      {image && (
        <div className="mt-8 text-green-700 font-semibold text-center w-full animate-fade-in">
          Great! Now click <span className="font-bangers comic-outline px-2 py-1 bg-gradient-to-r from-yellow-200 via-pink-100 to-blue-100 rounded-xl">Generate Comic</span> to start.
        </div>
      )}
    </section>
  );
};

export default ComicUploader;
