
import { useRef, useState } from "react";
import { Image, ArrowUp, Sparkles } from "lucide-react";
import MarvelComicPreview from "./MarvelComicPreview";
import { generateComicPanels } from "../utils/generateComicPanels";
import { useTranslation } from "@/contexts/TranslationContext";

// Place your API key here (DEMO ONLY!):
const OPENAI_API_KEY = "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";

const ComicUploader = () => {
  const { t } = useTranslation();
  const [image, setImage] = useState<string | null>(null);
  const [caption, setCaption] = useState<string>("");
  const fileInput = useRef<HTMLInputElement>(null);

  // Add loading and AI panel state
  const [showPreview, setShowPreview] = useState(false);
  const [loading, setLoading] = useState(false);
  const [panelCaptions, setPanelCaptions] = useState<string[] | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => setImage(ev.target?.result as string);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // Updated button click handler
  const handleGenerateComic = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setPanelCaptions(null);
    try {
      const panels = await generateComicPanels(caption, OPENAI_API_KEY, 6);
      setPanelCaptions(panels);
      setShowPreview(true);
    } catch (err) {
      alert("Failed to generate comic panels: " + (err as any)?.message);
      setPanelCaptions(null);
    } finally {
      setLoading(false);
    }
  };

  // Reset preview to go back to editing
  const handleBack = () => setShowPreview(false);

  if (showPreview && image) {
    return (
      <MarvelComicPreview
        uploadedImg={image}
        caption={caption}
        onBack={handleBack}
        panelCaptions={panelCaptions ?? undefined}
      />
    );
  }

  return (
    <section
      id="comic-uploader"
      className="w-full max-w-4xl mx-auto bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 border-8 border-pink-300 rounded-[2.2rem] drop-shadow-2xl shadow-yellow-200 p-10 mb-12 flex flex-col items-center comic-outline animate-fade-in"
    >
      <h2 className="comic-title text-5xl text-blue-700 mb-4 animate-text-glow">{t('uploader.title')}</h2>
      <p className="mb-5 text-xl text-blue-700 font-semibold bg-gradient-to-r from-yellow-50 via-pink-50 to-blue-50 px-4 py-2 rounded-full shadow-inner border-2 border-yellow-200 comic-outline animate-shake whitespace-pre-line text-center">
        {t('uploader.steps')}
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
                <span className="text-pink-600 text-xl font-bangers animate-pop-text">{t('uploader.clickUpload')}</span>
                <span className="text-xs text-blue-600">{t('uploader.fileTypes')}</span>
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
              {t('uploader.comicPanel')}
            </span>
          </div>
        </div>
        <div className="flex flex-col w-full sm:w-1/2">
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder={t('uploader.placeholder')}
            className="w-full min-h-[120px] max-h-[180px] shadow appearance-none rounded-xl border-4 border-blue-400 bg-white/90 px-4 py-3 mb-3 text-lg focus:outline-none focus:ring focus:ring-yellow-400 focus:border-yellow-400 resize-none transition-all comic-outline"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-3 px-10 py-4 mt-2 bg-gradient-to-r from-yellow-400 via-pink-200 to-blue-400 text-blue-900 rounded-2xl font-bangers text-2xl border-4 border-blue-700 comic-outline shadow-2xl hover:bg-gradient-to-r hover:from-pink-300 hover:to-yellow-200 hover:text-white hover:scale-110 active:scale-105 transition-all animate-pop-btn relative"
            disabled={!image || !caption || loading}
          >
            {loading ? (
              <>
                <Sparkles className="inline text-pink-500 animate-spin" size={24} />
                {t('uploader.generating')}
              </>
            ) : (
              <>
                <ArrowUp size={32} /> 
                <Sparkles className="inline text-pink-500 animate-shine" size={24} />
                {t('uploader.generateComic')}
              </>
            )}
          </button>
        </div>
      </form>
      {image && !loading && (
        <div className="mt-8 text-green-700 font-semibold text-center w-full animate-fade-in">
          {t('uploader.ready')}
        </div>
      )}
      {loading && (
        <div className="mt-8 text-blue-700 font-semibold text-center w-full animate-fade-in">
          {t('uploader.aiWorking')}
        </div>
      )}
    </section>
  );
};

export default ComicUploader;
