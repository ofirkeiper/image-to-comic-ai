
import React from "react";
import { useTranslation } from "@/contexts/TranslationContext";

const comicColors = [
  "from-yellow-200 via-pink-100 to-blue-100",
  "from-blue-100 via-yellow-200 to-pink-100",
  "from-pink-100 via-blue-200 to-yellow-100",
  "from-yellow-200 via-blue-100 to-pink-200",
];

const ComicFAQ = () => {
  const { t } = useTranslation();

  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') },
  ];

  return (
    <section id="faq" className="mt-20 mb-12 max-w-4xl mx-auto px-4 bg-gradient-to-br from-yellow-50 via-blue-50 to-pink-50 rounded-3xl border-8 border-blue-200 shadow-xl comic-outline">
      <h2 className="comic-title text-4xl md:text-5xl text-center mb-8 text-blue-800 bg-gradient-to-r from-yellow-100 via-pink-200 to-blue-200 px-6 py-2 rounded-xl inline-block shadow comic-outline animate-text-glow">
        <span className="mr-2">❓</span> {t('faq.title')}
      </h2>
      <ul className="space-y-6">
        {faqs.map((faq, i) => (
          <li
            key={faq.q}
            className={`bg-gradient-to-r ${comicColors[i % comicColors.length]} rounded-xl border-4 border-pink-300 px-6 py-5 shadow comic-outline relative group transition-all duration-200`}
          >
            <div className="flex items-start gap-2">
              <span className="text-pink-500 font-bangers text-3xl drop-shadow comic-outline">Q.</span>
              <span className="font-bangers text-2xl text-blue-900 mb-1 drop-shadow comic-outline">{faq.q}</span>
            </div>
            <div className="mt-2 flex items-start gap-2">
              <span className="text-blue-400 font-bangers text-3xl drop-shadow comic-outline">A.</span>
              <span className="text-lg text-pink-800 font-semibold bg-white/60 px-3 py-2 rounded-lg border-2 border-yellow-200 comic-outline">{faq.a}</span>
            </div>
            <span className="absolute -top-4 -right-4 w-14 h-8 bg-pink-300 text-yellow-50 text-xs font-bangers rounded-full border-2 border-blue-400 shadow comic-outline flex items-center justify-center rotate-6 animate-bounce-x group-hover:scale-110 transition">
              {t('faq.exclamation')}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-8">
        <span className="text-yellow-600 text-2xl rotate-[-12deg] font-bangers comic-outline animate-pop-text bg-pink-100 px-3 py-1 rounded-xl border-2 border-blue-200 shadow">
          {t('faq.contact')} <a href="#" className="text-blue-700 underline hover:text-yellow-600 font-bangers transition">{t('faq.contactLink')}</a>
        </span>
      </div>
    </section>
  );
};

export default ComicFAQ;
