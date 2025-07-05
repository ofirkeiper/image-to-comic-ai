
import React from "react";

const SampleComicSpeechBubble = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => (
  <div
    className="font-bold text-xs md:text-sm text-black bg-white border-2 border-black rounded-xl px-2 py-1 relative z-20 shadow-md"
    style={{
      ...style,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 20% 75%, 10% 100%, 8% 75%, 0% 75%)",
      fontFamily: "'Comic Neue', 'Bangers', cursive",
      letterSpacing: "0.3px",
      lineHeight: "1.1"
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
  const n = panels.length;
  
  return (
    <section className="bg-white rounded-lg border-3 border-black shadow-lg max-w-2xl mx-auto p-3" style={{ backgroundColor: '#f8f8f8' }}>
      {title && (
        <div className="bg-red-600 text-white px-3 py-2 mb-3 relative">
          <div className="absolute left-2 top-0 bg-white text-red-600 px-1 py-0.5 text-xs font-bold border border-black" style={{ transform: 'translateY(-50%)' }}>
            MARVEL
          </div>
          <h3 className="text-center text-lg md:text-xl font-bold uppercase tracking-wide ml-12">
            {title}
          </h3>
        </div>
      )}
      
      <div className="grid grid-cols-2 gap-2 bg-white p-2 border-2 border-black">
        {panels.map((panel, i) => (
          <div
            key={i}
            className="relative border-2 border-black bg-white overflow-hidden"
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
                filter: "contrast(1.1) saturate(1.2)",
              }}
            />
            
            {/* Panel border effect */}
            <div className="absolute inset-0 border border-black pointer-events-none" />
            
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
            <div className="absolute top-1 left-1 w-5 h-5 bg-yellow-300 text-black text-center text-xs font-bold border border-black rounded-full flex items-center justify-center z-30">
              {i + 1}
            </div>
          </div>
        ))}
      </div>
      
      {/* Mini footer */}
      <div className="mt-2 text-center text-xs bg-red-600 text-white px-2 py-1">
        <span>AI GENERATED COMIC</span>
      </div>
    </section>
  );
};

export default SampleComicPreview;
