
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
    'hero.memories': 'memories',
    'hero.createComic': 'Create Your Comic',
    'hero.memoriesSubtext': 'into comics in seconds!',
    
    // Comic Uploader
    'uploader.title': 'Start Your Comic',
    'uploader.steps': '1. Upload an image\n2. Add a caption\n3. Generate!',
    'uploader.clickUpload': 'Click to upload',
    'uploader.fileTypes': 'JPG, PNG, or WebP',
    'uploader.comicPanel': 'comic panel',
    'uploader.placeholder': 'Describe what\'s happening in your image or write a dialogue!',
    'uploader.generating': 'Generating...',
    'uploader.generateComic': 'Generate Comic',
    'uploader.ready': 'Great! Now click Generate Comic to start.',
    'uploader.aiWorking': 'Talking to AI... Creating your comic magic!',
    
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
    'hero.memories': 'recuerdos',
    'hero.createComic': 'Crea Tu Cómic',
    'hero.memoriesSubtext': '¡en cómics en segundos!',
    
    // Comic Uploader
    'uploader.title': 'Comienza Tu Cómic',
    'uploader.steps': '1. Sube una imagen\n2. Añade una descripción\n3. ¡Genera!',
    'uploader.clickUpload': 'Haz clic para subir',
    'uploader.fileTypes': 'JPG, PNG, o WebP',
    'uploader.comicPanel': 'panel de cómic',
    'uploader.placeholder': '¡Describe lo que está pasando en tu imagen o escribe un diálogo!',
    'uploader.generating': 'Generando...',
    'uploader.generateComic': 'Generar Cómic',
    'uploader.ready': '¡Genial! Ahora haz clic en Generar Cómic para comenzar.',
    'uploader.aiWorking': 'Hablando con IA... ¡Creando la magia de tu cómic!',
    
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
    'hero.memories': 'souvenirs',
    'hero.createComic': 'Créez Votre BD',
    'hero.memoriesSubtext': 'en BD en quelques secondes !',
    
    // Comic Uploader
    'uploader.title': 'Commencez Votre BD',
    'uploader.steps': '1. Téléchargez une image\n2. Ajoutez une légende\n3. Générez !',
    'uploader.clickUpload': 'Cliquez pour télécharger',
    'uploader.fileTypes': 'JPG, PNG, ou WebP',
    'uploader.comicPanel': 'panneau de BD',
    'uploader.placeholder': 'Décrivez ce qui se passe dans votre image ou écrivez un dialogue !',
    'uploader.generating': 'Génération...',
    'uploader.generateComic': 'Générer la BD',
    'uploader.ready': 'Parfait ! Maintenant cliquez sur Générer la BD pour commencer.',
    'uploader.aiWorking': 'Discussion avec l\'IA... Création de la magie de votre BD !',
    
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
    'hero.memories': 'Erinnerungen',
    'hero.createComic': 'Erstellen Sie Ihren Comic',
    'hero.memoriesSubtext': 'in Sekunden zu Comics!',
    
    // Comic Uploader
    'uploader.title': 'Starten Sie Ihren Comic',
    'uploader.steps': '1. Bild hochladen\n2. Beschreibung hinzufügen\n3. Generieren!',
    'uploader.clickUpload': 'Klicken zum Hochladen',
    'uploader.fileTypes': 'JPG, PNG, oder WebP',
    'uploader.comicPanel': 'Comic-Panel',
    'uploader.placeholder': 'Beschreiben Sie, was in Ihrem Bild passiert oder schreiben Sie einen Dialog!',
    'uploader.generating': 'Generiere...',
    'uploader.generateComic': 'Comic Generieren',
    'uploader.ready': 'Großartig! Klicken Sie jetzt auf Comic Generieren um zu beginnen.',
    'uploader.aiWorking': 'Spreche mit KI... Erschaffe die Magie Ihres Comics!',
    
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
    'hero.memories': 'זיכרונות',
    'hero.createComic': 'צרו את הקומיקס שלכם',
    'hero.memoriesSubtext': '!לקומיקס בשניות',
    
    // Comic Uploader
    'uploader.title': 'התחילו את הקומיקס שלכם',
    'uploader.steps': 'העלו תמונה .1\nהוסיפו כיתוב .2\n!צרו .3',
    'uploader.clickUpload': 'לחצו להעלאה',
    'uploader.fileTypes': 'JPG, PNG, או WebP',
    'uploader.comicPanel': 'פאנל קומיקס',
    'uploader.placeholder': '!תארו מה קורה בתמונה או כתבו דיאלוג',
    'uploader.generating': '...יוצר',
    'uploader.generateComic': 'צור קומיקס',
    'uploader.ready': '.מעולה! עכשיו לחצו על צור קומיקס כדי להתחיל',
    'uploader.aiWorking': '!מדבר עם בינה מלאכותית... יוצר את הקסם של הקומיקס שלכם',
    
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
    'hero.memories': 'ricordi',
    'hero.createComic': 'Crea Il Tuo Fumetto',
    'hero.memoriesSubtext': 'in fumetti in pochi secondi!',
    
    // Comic Uploader
    'uploader.title': 'Inizia Il Tuo Fumetto',
    'uploader.steps': '1. Carica un\'immagine\n2. Aggiungi una didascalia\n3. Genera!',
    'uploader.clickUpload': 'Clicca per caricare',
    'uploader.fileTypes': 'JPG, PNG, o WebP',
    'uploader.comicPanel': 'pannello fumetto',
    'uploader.placeholder': 'Descrivi cosa sta succedendo nella tua immagine o scrivi un dialogo!',
    'uploader.generating': 'Generando...',
    'uploader.generateComic': 'Genera Fumetto',
    'uploader.ready': 'Ottimo! Ora clicca su Genera Fumetto per iniziare.',
    'uploader.aiWorking': 'Parlando con l\'IA... Creando la magia del tuo fumetto!',
    
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
    'hero.memories': 'memórias',
    'hero.createComic': 'Crie Seu Quadrinho',
    'hero.memoriesSubtext': 'em quadrinhos em segundos!',
    
    // Comic Uploader
    'uploader.title': 'Comece Seu Quadrinho',
    'uploader.steps': '1. Envie uma imagem\n2. Adicione uma legenda\n3. Gere!',
    'uploader.clickUpload': 'Clique para enviar',
    'uploader.fileTypes': 'JPG, PNG, ou WebP',
    'uploader.comicPanel': 'painel de quadrinho',
    'uploader.placeholder': 'Descreva o que está acontecendo na sua imagem ou escreva um diálogo!',
    'uploader.generating': 'Gerando...',
    'uploader.generateComic': 'Gerar Quadrinho',
    'uploader.ready': 'Ótimo! Agora clique em Gerar Quadrinho para começar.',
    'uploader.aiWorking': 'Conversando com IA... Criando a magia do seu quadrinho!',
    
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
    'hero.memories': 'воспоминания',
    'hero.createComic': 'Создайте Свой Комикс',
    'hero.memoriesSubtext': 'в комиксы за секунды!',
    
    // Comic Uploader
    'uploader.title': 'Начните Свой Комикс',
    'uploader.steps': '1. Загрузите изображение\n2. Добавьте подпись\n3. Создайте!',
    'uploader.clickUpload': 'Нажмите для загрузки',
    'uploader.fileTypes': 'JPG, PNG, или WebP',
    'uploader.comicPanel': 'панель комикса',
    'uploader.placeholder': 'Опишите, что происходит на вашем изображении или напишите диалог!',
    'uploader.generating': 'Создаю...',
    'uploader.generateComic': 'Создать Комикс',
    'uploader.ready': 'Отлично! Теперь нажмите Создать Комикс чтобы начать.',
    'uploader.aiWorking': 'Общаюсь с ИИ... Создаю магию вашего комикса!',
    
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
    'hero.memories': '思い出',
    'hero.createComic': 'コミックを作成',
    'hero.memoriesSubtext': 'を数秒でコミックに！',
    
    // Comic Uploader
    'uploader.title': 'コミックを開始',
    'uploader.steps': '1. 画像をアップロード\n2. キャプションを追加\n3. 生成！',
    'uploader.clickUpload': 'クリックしてアップロード',
    'uploader.fileTypes': 'JPG、PNG、またはWebP',
    'uploader.comicPanel': 'コミックパネル',
    'uploader.placeholder': '画像で何が起こっているかを説明するか、ダイアログを書いてください！',
    'uploader.generating': '生成中...',
    'uploader.generateComic': 'コミック生成',
    'uploader.ready': '素晴らしい！今すぐコミック生成をクリックして開始してください。',
    'uploader.aiWorking': 'AIと会話中...あなたのコミックの魔法を作成中！',
    
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
    'hero.memories': '回忆',
    'hero.createComic': '创建您的漫画',
    'hero.memoriesSubtext': '秒内变成漫画！',
    
    // Comic Uploader
    'uploader.title': '开始您的漫画',
    'uploader.steps': '1. 上传图片\n2. 添加标题\n3. 生成！',
    'uploader.clickUpload': '点击上传',
    'uploader.fileTypes': 'JPG、PNG或WebP',
    'uploader.comicPanel': '漫画面板',
    'uploader.placeholder': '描述您图片中发生的事情或写一段对话！',
    'uploader.generating': '生成中...',
    'uploader.generateComic': '生成漫画',
    'uploader.ready': '太好了！现在点击生成漫画开始。',
    'uploader.aiWorking': '正在与AI对话...创造您的漫画魔法！',
    
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
    'hero.memories': 'ذكريات',
    'hero.createComic': 'أنشئ قصتك المصورة',
    'hero.memoriesSubtext': '!إلى قصص مصورة في ثوانٍ',
    
    // Comic Uploader
    'uploader.title': 'ابدأ قصتك المصورة',
    'uploader.steps': 'ارفع صورة .1\nأضف تسمية توضيحية .2\n!أنشئ .3',
    'uploader.clickUpload': 'اضغط للرفع',
    'uploader.fileTypes': 'JPG أو PNG أو WebP',
    'uploader.comicPanel': 'لوحة القصة المصورة',
    'uploader.placeholder': '!صف ما يحدث في صورتك أو اكتب حواراً',
    'uploader.generating': '...جاري الإنشاء',
    'uploader.generateComic': 'أنشئ القصة المصورة',
    'uploader.ready': '.رائع! اضغط الآن على أنشئ القصة المصورة للبدء',
    'uploader.aiWorking': '!أتحدث مع الذكاء الاصطناعي... أنشئ سحر قصتك المصورة',
    
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
