
export type Language = 'en' | 'es' | 'fr' | 'de' | 'he' | 'it' | 'pt' | 'ru' | 'ja' | 'zh' | 'ar';

export const languages: Record<Language, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  he: 'עברית',
  it: 'Italiano',
  pt: 'Português',
  ru: 'Русский',
  ja: '日本語',
  zh: '中文',
  ar: 'العربية'
};

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.create': 'Create',
    'nav.samples': 'Samples',
    'nav.pricing': 'Pricing',
    'nav.faq': 'FAQ',
    'nav.login': 'Login',
    
    // Hero section
    'hero.title': 'Turn Your Photos Into Amazing Comics!',
    'hero.subtitle': 'Upload a photo, add your story, and watch AI create a personalized comic book just for you.',
    'hero.cta': 'Start Creating',
    
    // Footer
    'footer.faq': 'FAQ',
    'footer.terms': 'Terms and Conditions',
    'footer.privacy': 'Privacy',
    'footer.contact': 'Contact',
    'footer.rights': 'All Rights Reserved',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions (FAQ)',
    'faq.contact': 'Still have questions?',
    'faq.contactLink': 'Contact us!'
  },
  es: {
    // Navigation
    'nav.create': 'Crear',
    'nav.samples': 'Ejemplos',
    'nav.pricing': 'Precios',
    'nav.faq': 'FAQ',
    'nav.login': 'Iniciar Sesión',
    
    // Hero section
    'hero.title': '¡Convierte Tus Fotos En Cómics Increíbles!',
    'hero.subtitle': 'Sube una foto, añade tu historia y observa cómo la IA crea un cómic personalizado solo para ti.',
    'hero.cta': 'Empezar a Crear',
    
    // Footer
    'footer.faq': 'FAQ',
    'footer.terms': 'Términos y Condiciones',
    'footer.privacy': 'Privacidad',
    'footer.contact': 'Contacto',
    'footer.rights': 'Todos los Derechos Reservados',
    
    // FAQ
    'faq.title': 'Preguntas Frecuentes (FAQ)',
    'faq.contact': '¿Aún tienes preguntas?',
    'faq.contactLink': '¡Contáctanos!'
  },
  fr: {
    // Navigation
    'nav.create': 'Créer',
    'nav.samples': 'Exemples',
    'nav.pricing': 'Tarifs',
    'nav.faq': 'FAQ',
    'nav.login': 'Connexion',
    
    // Hero section
    'hero.title': 'Transformez Vos Photos En Bandes Dessinées Incroyables !',
    'hero.subtitle': 'Téléchargez une photo, ajoutez votre histoire et regardez l\'IA créer une bande dessinée personnalisée juste pour vous.',
    'hero.cta': 'Commencer à Créer',
    
    // Footer
    'footer.faq': 'FAQ',
    'footer.terms': 'Conditions Générales',
    'footer.privacy': 'Confidentialité',
    'footer.contact': 'Contact',
    'footer.rights': 'Tous Droits Réservés',
    
    // FAQ
    'faq.title': 'Foire Aux Questions (FAQ)',
    'faq.contact': 'Vous avez encore des questions ?',
    'faq.contactLink': 'Contactez-nous !'
  },
  de: {
    // Navigation
    'nav.create': 'Erstellen',
    'nav.samples': 'Beispiele',
    'nav.pricing': 'Preise',
    'nav.faq': 'FAQ',
    'nav.login': 'Anmelden',
    
    // Hero section
    'hero.title': 'Verwandeln Sie Ihre Fotos In Fantastische Comics!',
    'hero.subtitle': 'Laden Sie ein Foto hoch, fügen Sie Ihre Geschichte hinzu und sehen Sie zu, wie KI einen personalisierten Comic nur für Sie erstellt.',
    'hero.cta': 'Jetzt Erstellen',
    
    // Footer
    'footer.faq': 'FAQ',
    'footer.terms': 'Geschäftsbedingungen',
    'footer.privacy': 'Datenschutz',
    'footer.contact': 'Kontakt',
    'footer.rights': 'Alle Rechte Vorbehalten',
    
    // FAQ
    'faq.title': 'Häufig Gestellte Fragen (FAQ)',
    'faq.contact': 'Haben Sie noch Fragen?',
    'faq.contactLink': 'Kontaktieren Sie uns!'
  },
  he: {
    // Navigation
    'nav.create': 'צור',
    'nav.samples': 'דוגמאות',
    'nav.pricing': 'מחירים',
    'nav.faq': 'שאלות נפוצות',
    'nav.login': 'התחבר',
    
    // Hero section
    'hero.title': '!הפכו את התמונות שלכם לקומיקס מדהים',
    'hero.subtitle': 'העלו תמונה, הוסיפו את הסיפור שלכם וצפו כיצד בינה מלאכותית יוצרת עבורכם קומיקס מותאם אישית.',
    'hero.cta': 'התחל ליצור',
    
    // Footer
    'footer.faq': 'שאלות נפוצות',
    'footer.terms': 'תנאים והגבלות',
    'footer.privacy': 'פרטיות',
    'footer.contact': 'צור קשר',
    'footer.rights': 'כל הזכויות שמורות',
    
    // FAQ
    'faq.title': 'שאלות נפוצות',
    'faq.contact': 'עדיין יש לכם שאלות?',
    'faq.contactLink': '!צרו קשר'
  },
  it: {
    // Navigation
    'nav.create': 'Crea',
    'nav.samples': 'Esempi',
    'nav.pricing': 'Prezzi',
    'nav.faq': 'FAQ',
    'nav.login': 'Accedi',
    
    // Hero section
    'hero.title': 'Trasforma Le Tue Foto In Fumetti Fantastici!',
    'hero.subtitle': 'Carica una foto, aggiungi la tua storia e guarda l\'IA creare un fumetto personalizzato solo per te.',
    'hero.cta': 'Inizia a Creare',
    
    // Footer
    'footer.faq': 'FAQ',
    'footer.terms': 'Termini e Condizioni',
    'footer.privacy': 'Privacy',
    'footer.contact': 'Contatti',
    'footer.rights': 'Tutti i Diritti Riservati',
    
    // FAQ
    'faq.title': 'Domande Frequenti (FAQ)',
    'faq.contact': 'Hai ancora domande?',
    'faq.contactLink': 'Contattaci!'
  },
  pt: {
    // Navigation
    'nav.create': 'Criar',
    'nav.samples': 'Exemplos',
    'nav.pricing': 'Preços',
    'nav.faq': 'FAQ',
    'nav.login': 'Entrar',
    
    // Hero section
    'hero.title': 'Transforme Suas Fotos Em Quadrinhos Incríveis!',
    'hero.subtitle': 'Faça upload de uma foto, adicione sua história e veja a IA criar uma história em quadrinhos personalizada só para você.',
    'hero.cta': 'Começar a Criar',
    
    // Footer
    'footer.faq': 'FAQ',
    'footer.terms': 'Termos e Condições',
    'footer.privacy': 'Privacidade',
    'footer.contact': 'Contato',
    'footer.rights': 'Todos os Direitos Reservados',
    
    // FAQ
    'faq.title': 'Perguntas Frequentes (FAQ)',
    'faq.contact': 'Ainda tem dúvidas?',
    'faq.contactLink': 'Entre em contato!'
  },
  ru: {
    // Navigation
    'nav.create': 'Создать',
    'nav.samples': 'Примеры',
    'nav.pricing': 'Цены',
    'nav.faq': 'FAQ',
    'nav.login': 'Войти',
    
    // Hero section
    'hero.title': 'Превратите Ваши Фото В Потрясающие Комиксы!',
    'hero.subtitle': 'Загрузите фото, добавьте свою историю и смотрите, как ИИ создает персонализированный комикс только для вас.',
    'hero.cta': 'Начать Создание',
    
    // Footer
    'footer.faq': 'FAQ',
    'footer.terms': 'Условия и Положения',
    'footer.privacy': 'Конфиденциальность',
    'footer.contact': 'Контакты',
    'footer.rights': 'Все Права Защищены',
    
    // FAQ
    'faq.title': 'Часто Задаваемые Вопросы (FAQ)',
    'faq.contact': 'Остались вопросы?',
    'faq.contactLink': 'Свяжитесь с нами!'
  },
  ja: {
    // Navigation
    'nav.create': '作成',
    'nav.samples': 'サンプル',
    'nav.pricing': '料金',
    'nav.faq': 'FAQ',
    'nav.login': 'ログイン',
    
    // Hero section
    'hero.title': '写真を素晴らしいコミックに変換！',
    'hero.subtitle': '写真をアップロードし、ストーリーを追加して、AIがあなただけのパーソナライズされたコミックブックを作成するのを見てください。',
    'hero.cta': '作成を開始',
    
    // Footer
    'footer.faq': 'FAQ',
    'footer.terms': '利用規約',
    'footer.privacy': 'プライバシー',
    'footer.contact': 'お問い合わせ',
    'footer.rights': '全著作権所有',
    
    // FAQ
    'faq.title': 'よくある質問 (FAQ)',
    'faq.contact': 'まだ質問がありますか？',
    'faq.contactLink': 'お問い合わせください！'
  },
  zh: {
    // Navigation
    'nav.create': '创建',
    'nav.samples': '示例',
    'nav.pricing': '价格',
    'nav.faq': '常见问题',
    'nav.login': '登录',
    
    // Hero section
    'hero.title': '将您的照片转换成精彩漫画！',
    'hero.subtitle': '上传照片，添加您的故事，观看AI为您创建个性化漫画书。',
    'hero.cta': '开始创建',
    
    // Footer
    'footer.faq': '常见问题',
    'footer.terms': '条款和条件',
    'footer.privacy': '隐私',
    'footer.contact': '联系我们',
    'footer.rights': '版权所有',
    
    // FAQ
    'faq.title': '常见问题 (FAQ)',
    'faq.contact': '还有问题吗？',
    'faq.contactLink': '联系我们！'
  },
  ar: {
    // Navigation
    'nav.create': 'إنشاء',
    'nav.samples': 'عينات',
    'nav.pricing': 'الأسعار',
    'nav.faq': 'الأسئلة الشائعة',
    'nav.login': 'تسجيل الدخول',
    
    // Hero section
    'hero.title': '!حوّل صورك إلى قصص مصورة رائعة',
    'hero.subtitle': 'ارفع صورة، أضف قصتك، وشاهد الذكاء الاصطناعي ينشئ قصة مصورة مخصصة لك فقط.',
    'hero.cta': 'ابدأ الإنشاء',
    
    // Footer
    'footer.faq': 'الأسئلة الشائعة',
    'footer.terms': 'الشروط والأحكام',
    'footer.privacy': 'الخصوصية',
    'footer.contact': 'اتصل بنا',
    'footer.rights': 'جميع الحقوق محفوظة',
    
    // FAQ
    'faq.title': 'الأسئلة الشائعة',
    'faq.contact': 'لا تزال لديك أسئلة؟',
    'faq.contactLink': '!اتصل بنا'
  }
};
