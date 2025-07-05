
import { useTranslation } from "@/contexts/TranslationContext";

const PricingSection = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-4xl mx-auto my-16 px-4">
      <h2 className="comic-title text-3xl text-center mb-6">{t('pricing.title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white border-4 border-yellow-200 rounded-2xl shadow-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-200">
          <span className="font-bangers text-2xl text-blue-700 mb-3">{t('pricing.digitalTitle')}</span>
          <ul className="list-disc text-lg text-gray-700 pl-5 mb-3 text-left w-full">
            <li>{t('pricing.digitalFeature1')}</li>
            <li>{t('pricing.digitalFeature2')}</li>
            <li>{t('pricing.digitalFeature3')}</li>
          </ul>
          <span className="inline-block px-5 py-1 bg-blue-200 rounded-full font-semibold text-blue-700 mt-auto mb-3">{t('pricing.digitalPrice')}</span>
        </div>
        <div className="bg-white border-4 border-yellow-300 rounded-2xl shadow-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-200">
          <span className="font-bangers text-2xl text-blue-700 mb-3">{t('pricing.printedTitle')}</span>
          <ul className="list-disc text-lg text-gray-700 pl-5 mb-3 text-left w-full">
            <li>{t('pricing.printedFeature1')}</li>
            <li>{t('pricing.printedFeature2')}</li>
            <li>{t('pricing.printedFeature3')}</li>
          </ul>
          <span className="inline-block px-5 py-1 bg-yellow-400 rounded-full font-semibold text-blue-900 mt-auto mb-3">{t('pricing.printedPrice')}</span>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
