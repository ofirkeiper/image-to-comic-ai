import ComicHero from "@/components/ComicHero";
import ComicUploader from "@/components/ComicUploader";
import SampleGallery from "@/components/SampleGallery";
import PricingSection from "@/components/PricingSection";
import FooterBar from "@/components/FooterBar";
import ComicIntro from "@/components/ComicIntro";
import { useState } from "react";

const Index = () => {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && <ComicIntro onFinish={() => setIntroDone(true)} />}
      <div className={`w-full min-h-screen bg-gradient-to-b from-yellow-50 via-white to-blue-100 transition-opacity duration-700 ${introDone ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <nav className="w-full flex justify-between items-center py-5 px-10 max-w-[120rem] mx-auto border-b-2 border-blue-100 mb-2 bg-white/80 sticky top-0 z-40 shadow-sm">
          <span className="font-bangers text-2xl text-blue-800 tracking-wide">keepics</span>
          <ul className="flex gap-8 font-semibold text-blue-900 text-md">
            <li>
              <a href="#comic-uploader" className="hover:text-yellow-500 transition-all">Create</a>
            </li>
            <li>
              <a href="#samples" className="hover:text-yellow-500 transition-all">Samples</a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-yellow-500 transition-all">Pricing</a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500 transition-all">FAQ</a>
            </li>
          </ul>
          <button className="rounded bg-blue-600 text-white px-6 py-2 font-bangers shadow hover:bg-yellow-400 hover:text-blue-900 border-2 border-blue-700 transition-all">
            Login
          </button>
        </nav>
        <ComicHero />
        <main>
          <ComicUploader />
          <SampleGallery />
          <PricingSection />
        </main>
        <FooterBar />
      </div>
    </>
  );
};

export default Index;
