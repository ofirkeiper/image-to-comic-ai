
import React, { useEffect, useState } from "react";
import SampleComicPreview from "./SampleComicPreview";
import { generateComicPanels } from "../utils/generateComicPanels";

const OPENAI_API_KEY = "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";

const styleColors = {
  Modern: "from-yellow-300 to-pink-300",
  Classic: "from-pink-200 to-blue-200",
  Noir: "from-gray-600 to-blue-400",
  "Pop Art": "from-blue-400 to-yellow-200"
} as const;

type MarvelSampleItemProps = {
  title: string;
  lang: string;
  style: string;
  panels: { img: string; caption: string }[];
};

const MarvelSampleItem: React.FC<MarvelSampleItemProps> = ({ title, lang, style, panels }) => {
  const [generatedPanels, setGeneratedPanels] = useState<string[]>([]);

  useEffect(() => {
    const generate = async () => {
      const story = panels.map((p) => p.caption).join(" ");
      try {
        const aiPanels = await generateComicPanels(story, OPENAI_API_KEY, panels.length);
        setGeneratedPanels(aiPanels);
      } catch (e) {
        setGeneratedPanels(panels.map((p) => p.caption));
      }
    };
    generate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(panels)]);

  return (
    <div className={`rounded-2xl border-4 border-yellow-300 shadow-xl bg-gradient-to-br ${styleColors[style as keyof typeof styleColors]} flex flex-col items-center p-5 relative comic-outline`}>
      <div className="font-bangers text-2xl text-blue-900 mb-2 text-center comic-outline">{title}</div>
      <div className="text-xs font-bold text-purple-600 mb-1 bg-white/60 px-3 py-1 rounded-lg border-2 border-blue-300 comic-outline">
        {lang} &bull; {style}
      </div>
      <SampleComicPreview
        panels={panels.map((panel, idx) => ({
          img: panel.img,
          caption: generatedPanels[idx] || panel.caption,
        }))}
        title={undefined}
        style={style}
      />
      <span className="absolute -top-3 -right-3 bg-pink-300 text-white text-xs font-bangers px-2 py-[2px] rounded-full border-2 border-blue-400 shadow comic-outline animate-bounce-x z-20">
        AI
      </span>
    </div>
  );
};

export default MarvelSampleItem;
