
import ComicHero from "@/components/ComicHero";
import ComicUploader from "@/components/ComicUploader";
import SampleGallery from "@/components/SampleGallery";
import PricingSection from "@/components/PricingSection";
import FooterBar from "@/components/FooterBar";
import ComicIntro from "@/components/ComicIntro";
import ErrorBoundary from "@/components/ErrorBoundary";
import { useState, useEffect } from "react";

const Index = () => {
  console.log("Index component rendering");
  
  // Check for emergency bypass
  const shouldSkipIntro = new URLSearchParams(window.location.search).has('skip-intro') || 
                         localStorage.getItem('keepics-skip-intro') === 'true';
  
  const [introDone, setIntroDone] = useState(shouldSkipIntro);
  console.log("introDone state:", introDone, "shouldSkipIntro:", shouldSkipIntro);

  // Emergency timeout to show main content regardless
  useEffect(() => {
    if (!introDone) {
      console.log("Setting emergency timeout for main content");
      const emergencyTimeout = setTimeout(() => {
        console.log("EMERGENCY: Showing main content after 3 seconds");
        setIntroDone(true);
      }, 3000);
      
      return () => clearTimeout(emergencyTimeout);
    }
  }, [introDone]);

  const handleIntroFinish = () => {
    console.log("Intro finish handler called");
    setIntroDone(true);
    // Remember user preference
    localStorage.setItem('keepics-skip-intro', 'true');
  };

  return (
    <ErrorBoundary>
      {!introDone && <ComicIntro onFinish={handleIntroFinish} />}
      <div className={`w-full min-h-screen bg-gradient-to-b from-yellow-50 via-white to-blue-100 transition-opacity duration-500 ${introDone ? "opacity-100" : "opacity-0"}`}>
        {/* Navigation */}
        <nav className="w-full flex justify-between items-center py-5 px-10 max-w-[120rem] mx-auto border-b-2 border-blue-100 mb-2 bg-white/80 sticky top-0 z-40 shadow-sm">
          <span className="font-bold text-2xl text-blue-800 tracking-wide" style={{ fontFamily: "'Bangers', cursive, sans-serif" }}>keepics</span>
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
          <button className="rounded bg-blue-600 text-white px-6 py-2 shadow hover:bg-yellow-400 hover:text-blue-900 border-2 border-blue-700 transition-all font-bold" style={{ fontFamily: "'Bangers', cursive, sans-serif" }}>
            Login
          </button>
        </nav>
        
        {/* Main Content - Always render, just control visibility */}
        <ErrorBoundary>
          <ComicHero />
        </ErrorBoundary>
        
        <main>
          <ErrorBoundary>
            <ComicUploader />
          </ErrorBoundary>
          <ErrorBoundary>
            <SampleGallery />
          </ErrorBoundary>
          <ErrorBoundary>
            <PricingSection />
          </ErrorBoundary>
        </main>
        
        <ErrorBoundary>
          <FooterBar />
        </ErrorBoundary>

        {/* Debug info - remove in production */}
        {process.env.NODE_ENV === 'development' && (
          <div className="fixed bottom-4 left-4 bg-black/80 text-white p-2 rounded text-xs z-50">
            Intro: {introDone ? 'Done' : 'Active'} | Skip available: ?skip-intro
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default Index;
