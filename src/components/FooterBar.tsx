
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ComicFAQDialog from "./ComicFAQDialog";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "@/contexts/TranslationContext";

const FooterBar = () => {
  const { t } = useTranslation();

  // Generate translated terms text
  const getTermsText = () => {
    const effectiveDate = new Date().toLocaleDateString();
    return `${t('terms.effective')}: ${effectiveDate}

${t('terms.title')}

1. ${t('terms.eligibility')}
${t('terms.eligibilityText')}

2. ${t('terms.userResponsibilities')}
${t('terms.userResponsibilitiesText')}

3. ${t('terms.aiContent')}
${t('terms.aiContentText')}

4. ${t('terms.ownership')}
${t('terms.ownershipText')}

5. ${t('terms.payments')}
${t('terms.paymentsText')}

6. ${t('terms.contact')}
${t('terms.contactText')}`;
  };

  // Generate translated privacy text
  const getPrivacyText = () => {
    const effectiveDate = new Date().toLocaleDateString();
    return `${t('privacy.effective')}: ${effectiveDate}

${t('privacy.title')}

1. ${t('privacy.infoCollect')}
${t('privacy.infoCollectText')}

2. ${t('privacy.howUse')}
${t('privacy.howUseText')}

3. ${t('privacy.sharing')}
${t('privacy.sharingText')}

4. ${t('privacy.dataRetention')}
${t('privacy.dataRetentionText')}

5. ${t('privacy.yourRights')}
${t('privacy.yourRightsText')}

6. ${t('privacy.security')}
${t('privacy.securityText')}

7. ${t('privacy.contact')}
${t('privacy.contactText')}`;
  };

  return (
    <footer className="mt-20 w-full py-8 border-t-2 border-blue-200 bg-gradient-to-r from-blue-50 via-white to-yellow-100 shadow-t-sm">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <div className="flex items-center gap-3 mb-6 md:mb-0">
          <span className="font-bangers text-xl text-blue-900 tracking-wide">keepics</span>
          <span className="text-xs text-gray-400">© {new Date().getFullYear()} {t('footer.rights')}</span>
        </div>
        <ul className="flex flex-wrap gap-5 text-xs text-blue-900 font-semibold items-center">
          <li>
            <ComicFAQDialog />
          </li>
          <li>
            <Dialog>
              <DialogTrigger asChild>
                <button className="hover:text-yellow-500 underline transition bg-transparent border-none cursor-pointer p-0 m-0">
                  {t('footer.terms')}
                </button>
              </DialogTrigger>
              <DialogContent className="max-h-[85vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="mb-4 text-2xl font-bold">{t('footer.terms')}</DialogTitle>
                </DialogHeader>
                <div className="text-xs whitespace-pre-line leading-relaxed text-blue-900 font-medium pr-2">
                  {getTermsText()}
                </div>
              </DialogContent>
            </Dialog>
          </li>
          <li>
            <Dialog>
              <DialogTrigger asChild>
                <button className="hover:text-yellow-500 underline transition bg-transparent border-none cursor-pointer p-0 m-0">
                  {t('footer.privacy')}
                </button>
              </DialogTrigger>
              <DialogContent className="max-h-[85vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="mb-4 text-2xl font-bold">{t('footer.privacy')}</DialogTitle>
                </DialogHeader>
                <div className="text-xs whitespace-pre-line leading-relaxed text-blue-900 font-medium pr-2">
                  {getPrivacyText()}
                </div>
              </DialogContent>
            </Dialog>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500 underline transition">
              {t('footer.contact')}
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
