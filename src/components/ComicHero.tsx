
import { Image } from "lucide-react";

const ComicHero = () => (
  <header className="pb-10 pt-14 w-full flex flex-col items-center bg-gradient-to-b from-yellow-100 via-white to-blue-100 rounded-b-lg shadow-lg">
    <div className="mx-auto w-full flex flex-col items-center text-center max-w-3xl">
      <div className="flex flex-row justify-center items-center gap-4 mb-4">
        <Image size={56} className="text-yellow-500 drop-shadow-md" />
        <h1 className="comic-title text-6xl sm:text-7xl font-bangers text-blue-700 mb-2 tracking-wide">
          keepics
        </h1>
        <span className="rounded-lg bg-blue-200 px-3 py-1 text-lg font-bold shadow whitespace-nowrap text-blue-900 border-2 border-blue-400">
          AI Comics
        </span>
      </div>
      <p className="text-xl sm:text-2xl mb-6 text-gray-700 font-semibold">
        Turn your memories<span className="mx-1">📸</span>into comics in seconds!
      </p>
      <a
        href="#comic-uploader"
        className="inline-block rounded bg-yellow-400 hover:bg-blue-500 hover:text-white transition-all text-xl font-bangers px-8 py-3 border-2 border-blue-700 shadow-xl hover:scale-105 active:scale-100"
      >
        Create Your Comic
      </a>
      <div className="mt-8">
        <FlipbookDemo />
      </div>
    </div>
  </header>
);

import FlipbookDemo from "./FlipbookDemo";
export default ComicHero;
