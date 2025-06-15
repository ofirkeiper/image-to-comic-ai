
import { useRef, useState } from "react";
import { Image, ArrowUp } from "lucide-react";

const ComicUploader = () => {
  const [image, setImage] = useState<string | null>(null);
  const [caption, setCaption] = useState<string>("");
  const fileInput = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => setImage(ev.target?.result as string);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <section
      id="comic-uploader"
      className="w-full max-w-4xl mx-auto bg-white border-4 border-blue-200 rounded-2xl shadow-2xl p-8 mb-10 flex flex-col items-center"
    >
      <h2 className="comic-title text-4xl text-blue-700 mb-3">Start Your Comic</h2>
      <p className="mb-4 text-lg text-gray-600">
        1. Upload an image <br/> 2. Add a caption<br/> 3. Generate!
      </p>
      <div className="flex flex-col sm:flex-row w-full gap-8">
        <div className="flex flex-col items-center w-full sm:w-1/2">
          <div
            className={`relative w-64 h-48 rounded-xl border-2 border-dashed border-blue-400 bg-blue-50 flex items-center justify-center shadow-inner cursor-pointer hover:scale-105 transition-all
              ${image ? "ring-4 ring-yellow-200" : ""}`}
            onClick={() => fileInput.current?.click()}
            aria-label="Upload image"
          >
            {image ? (
              <img
                src={image}
                alt="Uploaded"
                className="object-cover w-full h-full rounded-xl"
              />
            ) : (
              <div className="flex flex-col items-center">
                <Image size={42} className="text-blue-400 mb-2" />
                <span className="text-blue-700 text-lg font-bangers">Click to upload</span>
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
          </div>
        </div>
        <div className="flex flex-col w-full sm:w-1/2">
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Describe what's happening in your image or write a dialogue!"
            className="w-full min-h-[120px] max-h-[180px] shadow appearance-none rounded-xl border-2 border-blue-300 bg-blue-50 px-4 py-3 mb-3 text-lg focus:outline-none focus:ring focus:ring-yellow-400 focus:border-yellow-400 resize-none transition-all"
          />
          <button
            className="flex items-center justify-center gap-2 px-8 py-3 mt-2 bg-yellow-400 text-blue-900 rounded-xl font-bangers text-xl border-2 border-blue-700 shadow hover:bg-blue-500 hover:text-white hover:scale-105 transition-all active:scale-100"
            disabled={!image || !caption}
          >
            <ArrowUp size={28} />
            Generate Comic
          </button>
        </div>
      </div>
      {image && (
        <div className="mt-6 text-green-600 font-semibold text-center w-full">
          Great! Now click <span className="font-bangers">Generate Comic</span> to start.
        </div>
      )}
    </section>
  );
};

export default ComicUploader;
