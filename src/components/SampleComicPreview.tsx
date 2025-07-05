
import React from "react";
import { useTranslation } from "@/contexts/TranslationContext";

const SampleComicSpeechBubble = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => (
  <div
    className="font-bold text-xs md:text-sm text-black bg-white border-3 border-black rounded-xl px-2 py-1 relative z-20 shadow-md"
    style={{
      ...style,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 20% 75%, 10% 100%, 8% 75%, 0% 75%)",
      fontFamily: "'Comic Neue', 'Bangers', cursive",
      letterSpacing: "0.3px",
      lineHeight: "1.1",
      boxShadow: "3px 3px 0px #000000, 0 0 0 3px #000000"
    }}
  >
    <span className="relative z-10">{children}</span>
  </div>
);

// Props: panels: [{img, caption}], title?: string, style?: string, onBack?
type SampleComicPreviewProps = {
  panels: { img: string, caption: string }[];
  style?: string; // Optional styling for variant color, etc
  title?: string;
};

const SampleComicPreview: React.FC<SampleComicPreviewProps> = ({
  panels,
  title,
  style = "Modern",
}) => {
  const { t } = useTranslation();
  const n = panels.length;
  
  return (
    <section className="bg-white rounded-lg border-4 border-black shadow-lg max-w-2xl mx-auto p-3" style={{ backgroundColor: '#f8f8f8' }}>
      {title && (
        <div className="bg-red-600 text-white px-3 py-2 mb-3 relative border-3 border-black">
          <div className="absolute left-2 top-0 bg-white text-red-600 px-1 py-0.5 text-xs font-bold border-3 border-black" style={{ transform: 'translateY(-50%)' }}>
            MARVEL
          </div>
          <h3 className="text-center text-lg md:text-xl font-bold uppercase tracking-wide ml-12" style={{ fontFamily: "'Bangers', cursive" }}>
            {title}
          </h3>
        </div>
      )}
      
      <div className="grid grid-cols-2 gap-2 bg-white p-2 border-3 border-black">
        {panels.map((panel, i) => (
          <div
            key={i}
            className="relative border-3 border-black bg-white overflow-hidden"
            style={{ 
              aspectRatio: '4/3',
              gridColumn: i === 0 && n > 2 ? 'span 2' : 'span 1'
            }}
          >
            <img
              src={panel.img}
              alt={`Panel ${i + 1}`}
              className="w-full h-full object-cover"
              style={{ 
                filter: "contrast(1.3) saturate(1.4) hue-rotate(3deg) brightness(1.1)",
                mixBlendMode: "multiply"
              }}
            />
            
            {/* Comic book effect overlay */}
            <div 
              className="absolute inset-0 pointer-events-none" 
              style={{
                background: `
                  radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 1px, transparent 1px),
                  radial-gradient(circle at 70% 70%, rgba(0,0,0,0.1) 1px, transparent 1px),
                  linear-gradient(45deg, rgba(255,0,0,0.08) 25%, transparent 25%),
                  linear-gradient(-45deg, rgba(0,0,255,0.08) 25%, transparent 25%)
                `,
                backgroundSize: '6px 6px, 4px 4px, 15px 15px, 15px 15px'
              }}
            />
            
            {/* Panel border effect */}
            <div className="absolute inset-0 border-3 border-black pointer-events-none" />
            
            {/* Speech bubble */}
            <div className="absolute bottom-1 left-1 right-1 z-20">
              <SampleComicSpeechBubble
                style={{
                  maxWidth: "95%",
                  fontSize: '10px'
                }}
              >
                {panel.caption}
              </SampleComicSpeechBubble>
            </div>

            {/* Panel number */}
            <div className="absolute top-1 left-1 w-6 h-6 bg-yellow-300 text-black text-center text-xs font-bold border-2 border-black rounded-full flex items-center justify-center z-30" style={{ fontFamily: "'Bangers', cursive" }}>
              {i + 1}
            </div>
          </div>
        ))}
      </div>
      
      {/* Mini footer */}
      <div className="mt-2 text-center text-xs bg-red-600 text-white px-2 py-1 border-2 border-black" style={{ fontFamily: "'Bangers', cursive" }}>
        <span>{t('preview.aiGenerated')}</span>
      </div>
    </section>
  );
};

export default SampleComicPreview;
