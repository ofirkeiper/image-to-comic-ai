
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import MarvelSampleItem from "./MarvelSampleItem";
import React from "react";
import { useTranslation } from "@/contexts/TranslationContext";

const SampleGallerySection = () => {
  const { t } = useTranslation();

  // Updated samples with translation keys
  const samples = [
    {
      img: "/photo-1517022812141-23620dba5c23",
      title: t('samples.adventure'),
      lang: "EN",
      style: "Modern",
      mood: "funny",
      customPrompt: "Turn this travel adventure into a funny and light-hearted Marvel-style comic. Make each panel witty, silly, or poke fun at travel mishaps and joys.",
      panels: [
        {
          img: "/photo-1517022812141-23620dba5c23",
          caption: t('samples.adventurePanel1')
        },
        {
          img: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=400&q=80",
          caption: t('samples.adventurePanel2')
        },
        {
          img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=400&q=80",
          caption: t('samples.adventurePanel3')
        },
        {
          img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80",
          caption: t('samples.adventurePanel4')
        },
        {
          img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
          caption: t('samples.adventurePanel5')
        },
        {
          img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80",
          caption: t('samples.adventurePanel6')
        }
      ]
    },
    {
      img: "/photo-1441057206919-63d19fac2369",
      title: t('samples.rome'),
      lang: "EN",
      style: "Classic",
      mood: "emotional",
      customPrompt: "Retell this romantic vacation as a deeply emotional and heartwarming Marvel comic. Focus on sweet, meaningful, love-driven captions in each panel.",
      panels: [
        {
          img: "/photo-1441057206919-63d19fac2369",
          caption: t('samples.romePanel1')
        },
        {
          img: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=400&q=80",
          caption: t('samples.romePanel2')
        },
        {
          img: "https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?auto=format&fit=crop&w=400&q=80",
          caption: t('samples.romePanel3')
        },
        {
          img: "https://images.unsplash.com/photo-1433878455169-4698b20b6be9?auto=format&fit=crop&w=400&q=80",
          caption: t('samples.romePanel4')
        }
      ]
    },
    {
      img: "/photo-1535268647677-300dbf3d78d1",
      title: t('samples.birthday'),
      lang: "EN",
      style: "Pop Art",
      mood: "funny",
      customPrompt: "Transform this toddler's birthday into a comical, over-the-top Marvel comic that makes parents and kids laugh out loud!",
      panels: [
        {
          img: "/photo-1535268647677-300dbf3d78d1",
          caption: t('samples.birthdayPanel1')
        },
        {
          img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
          caption: t('samples.birthdayPanel2')
        },
        {
          img: "https://images.unsplash.com/photo-1465101178521-c1a9136a65b6?auto=format&fit=crop&w=400&q=80",
          caption: t('samples.birthdayPanel3')
        },
        {
          img: "https://images.unsplash.com/photo-1519223400710-6da919e73c24?auto=format&fit=crop&w=400&q=80",
          caption: t('samples.birthdayPanel4')
        }
      ]
    },
    {
      img: "/photo-1518877593221-1f28583780b4",
      title: t('samples.nature'),
      lang: "EN",
      style: "Noir",
      mood: "emotional",
      customPrompt: "Rewrite this vacation as an emotionally resonant Marvel comic. Make it touching, focusing on family love, bonding, and the beauty of nature.",
      panels: [
        {
          img: "/photo-1518877593221-1f28583780b4",
          caption: t('samples.naturePanel1')
        },
        {
          img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
          caption: t('samples.naturePanel2')
        },
        {
          img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
          caption: t('samples.naturePanel3')
        },
        {
          img: "https://images.unsplash.com/photo-1519121781604-8721e783870c?auto=format&fit=crop&w=400&q=80",
          caption: t('samples.naturePanel4')
        }
      ]
    },
    {
      img: "/photo-1493962853295-0fd70327578a",
      title: t('samples.graduation'),
      lang: "EN",
      style: "Classic",
      mood: "emotional",
      customPrompt: "Make this story about graduating med school uplifting and moving—focus on pride, relief, family, and dreams coming true. Make it Marvel-epic but heartfelt.",
      panels: [
        {
          img: "/photo-1493962853295-0fd70327578a",
          caption: t('samples.graduationPanel1')
        },
        {
          img: "https://images.unsplash.com/photo-1417733403748-83bbc7c05140?auto=format&fit=crop&w=400&q=80",
          caption: t('samples.graduationPanel2')
        },
        {
          img: "https://images.unsplash.com/photo-1465101178521-c1a9136a65b6?auto=format&fit=crop&w=400&q=80",
          caption: t('samples.graduationPanel3')
        },
        {
          img: "https://images.unsplash.com/photo-1458576222361-7d9c1a0bcd31?auto=format&fit=crop&w=400&q=80",
          caption: t('samples.graduationPanel4')
        }
      ]
    },
    {
      img: "/photo-1469041797191-50ace28483c3",
      title: t('samples.party'),
      lang: "EN",
      style: "Modern",
      mood: "funny",
      customPrompt: "Reimagine this wild party trip as a Marvel comic full of slapstick, jokes, and over-the-top fun. Make each panel zany and energetic.",
      panels: [
        {
          img: "/photo-1469041797191-50ace28483c3",
          caption: t('samples.partyPanel1')
        },
        {
          img: "https://images.unsplash.com/photo-1465101178521-c1a9136a65b6?auto=format&fit=crop&w=400&q=80",
          caption: t('samples.partyPanel2')
        },
        {
          img: "https://images.unsplash.com/photo-1469796466635-455ede028aca?auto=format&fit=crop&w=400&q=80",
          caption: t('samples.partyPanel3')
        },
        {
          img: "https://images.unsplash.com/photo-1519121781604-8721e783870c?auto=format&fit=crop&w=400&q=80",
          caption: t('samples.partyPanel4')
        }
      ]
    }
  ];

  return (
    <section className="max-w-2xl mx-auto my-16 px-4 bg-gradient-to-br from-blue-50 via-yellow-50 to-pink-50 rounded-3xl pt-12 pb-7 border-8 border-pink-300 shadow-2xl comic-outline" id="samples">
      <h2 className="comic-title text-4xl text-center mb-8 text-blue-800 drop-shadow comic-outline bg-gradient-to-r from-yellow-100 via-pink-200 to-blue-200 px-4 py-2 rounded-xl inline-block animate-text-glow">
        {t('samples.title')}
      </h2>
      <div className="relative w-full">
        <Carousel className="relative">
          <CarouselContent>
            {samples.map((props, idx) => (
              <CarouselItem key={idx}>
                <MarvelSampleItem 
                  {...props}
                  customPrompt={props.customPrompt}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default SampleGallerySection;
