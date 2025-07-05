
import React from "react";
import ComicFAQDialog from "./ComicFAQDialog";
import PrivacyPolicyDialog from "./PrivacyPolicyDialog";
import TermsAndConditionsDialog from "./TermsAndConditionsDialog";
import LanguageSelector from "./LanguageSelector";

const FooterBar = () => {
  return (
    <footer className="mt-20 w-full py-8 border-t-2 border-blue-200 bg-gradient-to-r from-blue-50 via-white to-yellow-100 shadow-t-sm">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <div className="flex items-center gap-3 mb-6 md:mb-0">
          <span className="font-bangers text-xl text-blue-900 tracking-wide">keepics</span>
          <span className="text-xs text-gray-400">© {new Date().getFullYear()} All Rights Reserved</span>
        </div>
        <ul className="flex flex-wrap gap-5 text-xs text-blue-900 font-semibold items-center">
          <li>
            <ComicFAQDialog />
          </li>
          <li>
            <TermsAndConditionsDialog />
          </li>
          <li>
            <PrivacyPolicyDialog />
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500 underline transition">
              Contact
            </a>
          </li>
          <li>
            <LanguageSelector />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterBar;
