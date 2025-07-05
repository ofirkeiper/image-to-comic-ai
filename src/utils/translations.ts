
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

    // Comic Preview
    'preview.title': 'Your Epic Story',
    'preview.backToEditor': '← Back to Editor',
    'preview.marvelComics': 'MARVEL COMICS GROUP',
    'preview.presents': 'KEEPICS PRESENTS',
    'preview.price': '$3.99 US',
    'preview.aiGenerated': 'AI GENERATED COMIC',
    
    // Footer
    'footer.faq': 'FAQ',
    'footer.terms': 'Terms and Conditions',
    'footer.privacy': 'Privacy',
    'footer.contact': 'Contact',
    'footer.rights': 'All Rights Reserved',
    'footer.questionsAnswers': 'Questions and Answers',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions (FAQ)',
    'faq.contact': 'Still have questions?',
    'faq.contactLink': 'Contact us!',

    // FAQ Questions and Answers
    'faq.q1': 'How does the comic creation process work?',
    'faq.a1': 'It\'s simple! Upload a photo, add a short description or dialogue, and our AI will generate a unique comic based on your input. You\'ll be able to preview the result and either download it digitally or print it as a physical comic book.',
    'faq.q2': 'What kind of images can I upload?',
    'faq.a2': 'You can upload JPG, PNG, or WebP images. Make sure your image is clear and appropriate for all audiences. The better the quality, the better your comic will look!',
    'faq.q3': 'Can I choose the style of the comic?',
    'faq.a3': 'In the initial version, the comic style is automatically selected by the AI. In future updates, we plan to add style options (manga, cartoon, sketch, etc.).',
    'faq.q4': 'How long does it take to generate a comic?',
    'faq.a4': 'On average, it takes about 30–60 seconds for the AI to generate your comic after you upload your image and enter your text.',
    'faq.q5': 'Can I print my comic as a real book?',
    'faq.a5': 'Absolutely! Once your comic is ready, you\'ll have the option to print it using our integration with Lulu. You\'ll be able to choose your shipping location and see real-time pricing and delivery options.',
    'faq.exclamation': 'WOW!',
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

    // Comic Preview
    'preview.title': 'Tu Historia Épica',
    'preview.backToEditor': '← Volver al Editor',
    'preview.marvelComics': 'GRUPO MARVEL COMICS',
    'preview.presents': 'KEEPICS PRESENTA',
    'preview.price': '$3.99 US',
    'preview.aiGenerated': 'CÓMIC GENERADO POR IA',
    
    // Footer
    'footer.faq': 'FAQ',
    'footer.terms': 'Términos y Condiciones',
    'footer.privacy': 'Privacidad',
    'footer.contact': 'Contacto',
    'footer.rights': 'Todos los Derechos Reservados',
    'footer.questionsAnswers': 'Preguntas y Respuestas',
    
    // FAQ
    'faq.title': 'Preguntas Frecuentes (FAQ)',
    'faq.contact': '¿Aún tienes preguntas?',
    'faq.contactLink': '¡Contáctanos!',

    // FAQ Questions and Answers
    'faq.q1': '¿Cómo funciona el proceso de creación de cómics?',
    'faq.a1': '¡Es simple! Sube una foto, añade una descripción corta o diálogo, y nuestra IA generará un cómic único basado en tu entrada. Podrás previsualizar el resultado y descargarlo digitalmente o imprimirlo como un libro físico.',
    'faq.q2': '¿Qué tipo de imágenes puedo subir?',
    'faq.a2': 'Puedes subir imágenes JPG, PNG o WebP. Asegúrate de que tu imagen sea clara y apropiada para todas las audiencias. ¡Cuanto mejor sea la calidad, mejor se verá tu cómic!',
    'faq.q3': '¿Puedo elegir el estilo del cómic?',
    'faq.a3': 'En la versión inicial, el estilo del cómic es seleccionado automáticamente por la IA. En futuras actualizaciones, planeamos añadir opciones de estilo (manga, caricatura, boceto, etc.).',
    'faq.q4': '¿Cuánto tiempo toma generar un cómic?',
    'faq.a4': 'En promedio, toma alrededor de 30-60 segundos para que la IA genere tu cómic después de subir tu imagen e ingresar tu texto.',
    'faq.q5': '¿Puedo imprimir mi cómic como un libro real?',
    'faq.a5': '¡Absolutamente! Una vez que tu cómic esté listo, tendrás la opción de imprimirlo usando nuestra integración con Lulu. Podrás elegir tu ubicación de envío y ver precios y opciones de entrega en tiempo real.',
    'faq.exclamation': '¡WOW!',
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

    // Comic Preview
    'preview.title': 'Votre Histoire Épique',
    'preview.backToEditor': '← Retour à l\'Éditeur',
    'preview.marvelComics': 'GROUPE MARVEL COMICS',
    'preview.presents': 'KEEPICS PRÉSENTE',
    'preview.price': '3,99 € FR',
    'preview.aiGenerated': 'BD GÉNÉRÉE PAR IA',
    
    // Footer
    'footer.faq': 'FAQ',
    'footer.terms': 'Conditions Générales',
    'footer.privacy': 'Confidentialité',
    'footer.contact': 'Contact',
    'footer.rights': 'Tous Droits Réservés',
    'footer.questionsAnswers': 'Questions et Réponses',
    
    // FAQ
    'faq.title': 'Foire Aux Questions (FAQ)',
    'faq.contact': 'Vous avez encore des questions ?',
    'faq.contactLink': 'Contactez-nous !',

    // FAQ Questions and Answers
    'faq.q1': 'Comment fonctionne le processus de création de BD ?',
    'faq.a1': 'C\'est simple ! Téléchargez une photo, ajoutez une courte description ou dialogue, et notre IA générera une BD unique basée sur votre saisie. Vous pourrez prévisualiser le résultat et le télécharger numériquement ou l\'imprimer comme un livre physique.',
    'faq.q2': 'Quel type d\'images puis-je télécharger ?',
    'faq.a2': 'Vous pouvez télécharger des images JPG, PNG ou WebP. Assurez-vous que votre image soit claire et appropriée pour tous les publics. Meilleure est la qualité, meilleure sera votre BD !',
    'faq.q3': 'Puis-je choisir le style de la BD ?',
    'faq.a3': 'Dans la version initiale, le style de BD est automatiquement sélectionné par l\'IA. Dans les futures mises à jour, nous prévoyons d\'ajouter des options de style (manga, cartoon, esquisse, etc.).',
    'faq.q4': 'Combien de temps faut-il pour générer une BD ?',
    'faq.a4': 'En moyenne, il faut environ 30-60 secondes pour que l\'IA génère votre BD après avoir téléchargé votre image et saisi votre texte.',
    'faq.q5': 'Puis-je imprimer ma BD comme un vrai livre ?',
    'faq.a5': 'Absolument ! Une fois votre BD prête, vous aurez l\'option de l\'imprimer en utilisant notre intégration avec Lulu. Vous pourrez choisir votre lieu de livraison et voir les prix et options de livraison en temps réel.',
    'faq.exclamation': 'WOW !',
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

    // Comic Preview
    'preview.title': 'Ihre Epische Geschichte',
    'preview.backToEditor': '← Zurück zum Editor',
    'preview.marvelComics': 'MARVEL COMICS GRUPPE',
    'preview.presents': 'KEEPICS PRÄSENTIERT',
    'preview.price': '3,99 € DE',
    'preview.aiGenerated': 'KI GENERIERTER COMIC',
    
    // Footer
    'footer.faq': 'FAQ',
    'footer.terms': 'Geschäftsbedingungen',
    'footer.privacy': 'Datenschutz',
    'footer.contact': 'Kontakt',
    'footer.rights': 'Alle Rechte Vorbehalten',
    'footer.questionsAnswers': 'Fragen und Antworten',
    
    // FAQ
    'faq.title': 'Häufig Gestellte Fragen (FAQ)',
    'faq.contact': 'Haben Sie noch Fragen?',
    'faq.contactLink': 'Kontaktieren Sie uns!',

    // FAQ Questions and Answers
    'faq.q1': 'Wie funktioniert der Comic-Erstellungsprozess?',
    'faq.a1': 'Es ist einfach! Laden Sie ein Foto hoch, fügen Sie eine kurze Beschreibung oder Dialog hinzu, und unsere KI wird einen einzigartigen Comic basierend auf Ihrer Eingabe generieren. Sie können das Ergebnis vorschauen und es digital herunterladen oder als physisches Comicbuch drucken.',
    'faq.q2': 'Welche Art von Bildern kann ich hochladen?',
    'faq.a2': 'Sie können JPG-, PNG- oder WebP-Bilder hochladen. Stellen Sie sicher, dass Ihr Bild klar und für alle Zielgruppen geeignet ist. Je besser die Qualität, desto besser wird Ihr Comic aussehen!',
    'faq.q3': 'Kann ich den Stil des Comics wählen?',
    'faq.a3': 'In der ersten Version wird der Comic-Stil automatisch von der KI ausgewählt. In zukünftigen Updates planen wir, Stiloptionen hinzuzufügen (Manga, Cartoon, Skizze, etc.).',
    'faq.q4': 'Wie lange dauert es, einen Comic zu generieren?',
    'faq.a4': 'Im Durchschnitt dauert es etwa 30-60 Sekunden, bis die KI Ihren Comic generiert, nachdem Sie Ihr Bild hochgeladen und Ihren Text eingegeben haben.',
    'faq.q5': 'Kann ich meinen Comic als echtes Buch drucken?',
    'faq.a5': 'Absolut! Sobald Ihr Comic fertig ist, haben Sie die Option, ihn über unsere Integration mit Lulu zu drucken. Sie können Ihren Versandort wählen und Preise und Lieferoptionen in Echtzeit sehen.',
    'faq.exclamation': 'WOW!',
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

    // Comic Preview
    'preview.title': 'הסיפור האפי שלכם',
    'preview.backToEditor': '← חזרה לעורך',
    'preview.marvelComics': 'קבוצת מארוול קומיקס',
    'preview.presents': 'קיפיקס מציג',
    'preview.price': '₪15 ישראל',
    'preview.aiGenerated': 'קומיקס שנוצר ע"י בינה מלאכותית',
    
    // Footer
    'footer.faq': 'שאלות נפוצות',
    'footer.terms': 'תנאים והגבלות',
    'footer.privacy': 'פרטיות',
    'footer.contact': 'צור קשר',
    'footer.rights': 'כל הזכויות שמורות',
    'footer.questionsAnswers': 'שאלות ותשובות',
    
    // FAQ
    'faq.title': 'שאלות נפוצות',
    'faq.contact': 'עדיין יש לכם שאלות?',
    'faq.contactLink': '!צרו קשר',

    // FAQ Questions and Answers
    'faq.q1': 'איך עובד תהליך יצירת הקומיקס?',
    'faq.a1': 'זה פשוט! העלו תמונה, הוסיפו תיאור קצר או דיאלוג, והבינה המלאכותית שלנו תייצר קומיקס ייחודי בהתבסס על הקלט שלכם. תוכלו לראות תצוגה מקדימה של התוצאה ולהוריד אותה דיגיטלית או להדפיס אותה כספר קומיקס פיזי.',
    'faq.q2': 'איזה סוג של תמונות אני יכול להעלות?',
    'faq.a2': 'תוכלו להעלות תמונות JPG, PNG או WebP. וודאו שהתמונה שלכם ברורה ומתאימה לכל הקהלים. ככל שהאיכות טובה יותר, כך הקומיקס שלכם ייראה טוב יותר!',
    'faq.q3': 'האם אני יכול לבחור את הסגנון של הקומיקס?',
    'faq.a3': 'בגרסה הראשונית, סגנון הקומיקס נבחר אוטומטית על ידי הבינה המלאכותית. בעדכונים עתידיים, אנו מתכננים להוסיף אפשרויות סגנון (מנגה, קריקטורה, סקיצה, וכו\').',
    'faq.q4': 'כמה זמן לוקח ליצור קומיקס?',
    'faq.a4': 'בממוצע, לוקח כ-30-60 שניות לבינה המלאכותית ליצור את הקומיקס שלכם לאחר שהעלתם את התמונה והזנתם את הטקסט.',
    'faq.q5': 'האם אני יכול להדפיס את הקומיקס שלי כספר אמיתי?',
    'faq.a5': 'בהחלט! ברגע שהקומיקס שלכם מוכן, תהיה לכם אפשרות להדפיס אותו באמצעות השילוב שלנו עם Lulu. תוכלו לבחור את מיקום המשלוח שלכם ולראות מחירים ואפשרויות משלוח בזמן אמת.',
    'faq.exclamation': '!וואו',
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

    // Comic Preview
    'preview.title': 'La Tua Storia Epica',
    'preview.backToEditor': '← Torna all\'Editor',
    'preview.marvelComics': 'GRUPPO MARVEL COMICS',
    'preview.presents': 'KEEPICS PRESENTA',
    'preview.price': '€3,99 IT',
    'preview.aiGenerated': 'FUMETTO GENERATO DA IA',
    
    // Footer
    'footer.faq': 'FAQ',
    'footer.terms': 'Termini e Condizioni',
    'footer.privacy': 'Privacy',
    'footer.contact': 'Contatti',
    'footer.rights': 'Tutti i Diritti Riservati',
    'footer.questionsAnswers': 'Domande e Risposte',
    
    // FAQ
    'faq.title': 'Domande Frequenti (FAQ)',
    'faq.contact': 'Hai ancora domande?',
    'faq.contactLink': 'Contattaci!',

    // FAQ Questions and Answers
    'faq.q1': 'Come funziona il processo di creazione del fumetto?',
    'faq.a1': 'È semplice! Carica una foto, aggiungi una breve descrizione o dialogo, e la nostra IA genererà un fumetto unico basato sul tuo input. Potrai vedere l\'anteprima del risultato e scaricarlo digitalmente o stamparlo come un libro fisico.',
    'faq.q2': 'Che tipo di immagini posso caricare?',
    'faq.a2': 'Puoi caricare immagini JPG, PNG o WebP. Assicurati che la tua immagine sia chiara e appropriata per tutti i pubblici. Migliore è la qualità, migliore sarà il tuo fumetto!',
    'faq.q3': 'Posso scegliere lo stile del fumetto?',
    'faq.a3': 'Nella versione iniziale, lo stile del fumetto è selezionato automaticamente dall\'IA. Negli aggiornamenti futuri, prevediamo di aggiungere opzioni di stile (manga, cartoon, schizzo, ecc.).',
    'faq.q4': 'Quanto tempo ci vuole per generare un fumetto?',
    'faq.a4': 'In media, ci vogliono circa 30-60 secondi perché l\'IA generi il tuo fumetto dopo aver caricato la tua immagine e inserito il tuo testo.',
    'faq.q5': 'Posso stampare il mio fumetto come un libro vero?',
    'faq.a5': 'Assolutamente! Una volta che il tuo fumetto è pronto, avrai l\'opzione di stamparlo usando la nostra integrazione con Lulu. Potrai scegliere la tua posizione di spedizione e vedere prezzi e opzioni di consegna in tempo reale.',
    'faq.exclamation': 'WOW!',
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

    // Comic Preview
    'preview.title': 'Sua História Épica',
    'preview.backToEditor': '← Voltar ao Editor',
    'preview.marvelComics': 'GRUPO MARVEL COMICS',
    'preview.presents': 'KEEPICS APRESENTA',
    'preview.price': 'R$ 19,99 BR',
    'preview.aiGenerated': 'QUADRINHO GERADO POR IA',
    
    // Footer
    'footer.faq': 'FAQ',
    'footer.terms': 'Termos e Condições',
    'footer.privacy': 'Privacidade',
    'footer.contact': 'Contato',
    'footer.rights': 'Todos os Direitos Reservados',
    'footer.questionsAnswers': 'Perguntas e Respostas',
    
    // FAQ
    'faq.title': 'Perguntas Frequentes (FAQ)',
    'faq.contact': 'Ainda tem dúvidas?',
    'faq.contactLink': 'Entre em contato!',

    // FAQ Questions and Answers
    'faq.q1': 'Como funciona o processo de criação de quadrinhos?',
    'faq.a1': 'É simples! Faça upload de uma foto, adicione uma breve descrição ou diálogo, e nossa IA gerará um quadrinho único baseado na sua entrada. Você poderá visualizar o resultado e baixá-lo digitalmente ou imprimi-lo como um livro físico.',
    'faq.q2': 'Que tipo de imagens posso enviar?',
    'faq.a2': 'Você pode enviar imagens JPG, PNG ou WebP. Certifique-se de que sua imagem seja clara e apropriada para todos os públicos. Quanto melhor a qualidade, melhor será seu quadrinho!',
    'faq.q3': 'Posso escolher o estilo do quadrinho?',
    'faq.a3': 'Na versão inicial, o estilo do quadrinho é selecionado automaticamente pela IA. Em futuras atualizações, planejamos adicionar opções de estilo (mangá, cartoon, esboço, etc.).',
    'faq.q4': 'Quanto tempo leva para gerar um quadrinho?',
    'faq.a4': 'Em média, leva cerca de 30-60 segundos para a IA gerar seu quadrinho após você enviar sua imagem e inserir seu texto.',
    'faq.q5': 'Posso imprimir meu quadrinho como um livro real?',
    'faq.a5': 'Absolutamente! Uma vez que seu quadrinho esteja pronto, você terá a opção de imprimi-lo usando nossa integração com Lulu. Você poderá escolher seu local de entrega e ver preços e opções de entrega em tempo real.',
    'faq.exclamation': 'WOW!',
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

    // Comic Preview
    'preview.title': 'Ваша Эпическая История',
    'preview.backToEditor': '← Назад к Редактору',
    'preview.marvelComics': 'ГРУППА MARVEL COMICS',
    'preview.presents': 'KEEPICS ПРЕДСТАВЛЯЕТ',
    'preview.price': '299 ₽ РФ',
    'preview.aiGenerated': 'КОМИКС СОЗДАН ИИ',
    
    // Footer
    'footer.faq': 'FAQ',
    'footer.terms': 'Условия и Положения',
    'footer.privacy': 'Конфиденциальность',
    'footer.contact': 'Контакты',
    'footer.rights': 'Все Права Защищены',
    'footer.questionsAnswers': 'Вопросы и Ответы',
    
    // FAQ
    'faq.title': 'Часто Задаваемые Вопросы (FAQ)',
    'faq.contact': 'Остались вопросы?',
    'faq.contactLink': 'Свяжитесь с нами!',

    // FAQ Questions and Answers
    'faq.q1': 'Как работает процесс создания комиксов?',
    'faq.a1': 'Это просто! Загрузите фото, добавьте краткое описание или диалог, и наш ИИ создаст уникальный комикс на основе вашего ввода. Вы сможете просмотреть результат и скачать его цифрово или распечатать как физическую книгу.',
    'faq.q2': 'Какие изображения я могу загружать?',
    'faq.a2': 'Вы можете загружать изображения JPG, PNG или WebP. Убедитесь, что ваше изображение четкое и подходящее для всех возрастов. Чем лучше качество, тем лучше будет выглядеть ваш комикс!',
    'faq.q3': 'Могу ли я выбрать стиль комикса?',
    'faq.a3': 'В начальной версии стиль комикса автоматически выбирается ИИ. В будущих обновлениях мы планируем добавить варианты стилей (манга, мультфильм, эскиз и т.д.).',
    'faq.q4': 'Сколько времени занимает создание комикса?',
    'faq.a4': 'В среднем, ИИ требуется около 30-60 секунд для создания вашего комикса после загрузки изображения и ввода текста.',
    'faq.q5': 'Могу ли я напечатать свой комикс как настоящую книгу?',
    'faq.a5': 'Абсолютно! Как только ваш комикс будет готов, у вас будет возможность напечатать его через нашу интеграцию с Lulu. Вы сможете выбрать место доставки и увидеть цены и варианты доставки в реальном времени.',
    'faq.exclamation': 'ВАУ!',
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

    // Comic Preview
    'preview.title': 'あなたの壮大な物語',
    'preview.backToEditor': '← エディターに戻る',
    'preview.marvelComics': 'マーベルコミックスグループ',
    'preview.presents': 'キーピックス プレゼンツ',
    'preview.price': '¥450 日本',
    'preview.aiGenerated': 'AI生成コミック',
    
    // Footer
    'footer.faq': 'FAQ',
    'footer.terms': '利用規約',
    'footer.privacy': 'プライバシー',
    'footer.contact': 'お問い合わせ',
    'footer.rights': '全著作権所有',
    'footer.questionsAnswers': '質問と回答',
    
    // FAQ
    'faq.title': 'よくある質問 (FAQ)',
    'faq.contact': 'まだ質問がありますか？',
    'faq.contactLink': 'お問い合わせください！',

    // FAQ Questions and Answers
    'faq.q1': 'コミック作成プロセスはどのように機能しますか？',
    'faq.a1': '簡単です！写真をアップロードし、短い説明やダイアログを追加すると、私たちのAIがあなたの入力に基づいてユニークなコミックを生成します。結果をプレビューして、デジタルでダウンロードするか、物理的なコミックブックとして印刷することができます。',
    'faq.q2': 'どのような画像をアップロードできますか？',
    'faq.a2': 'JPG、PNG、またはWebP画像をアップロードできます。画像が鮮明で、すべての年齢層に適していることを確認してください。品質が良いほど、コミックの見た目も良くなります！',
    'faq.q3': 'コミックのスタイルを選択できますか？',
    'faq.a3': '初期バージョンでは、コミックスタイルはAIによって自動的に選択されます。将来のアップデートで、スタイルオプション（マンガ、カートゥーン、スケッチなど）を追加する予定です。',
    'faq.q4': 'コミックの生成にはどれくらい時間がかかりますか？',
    'faq.a4': '平均的に、画像をアップロードしてテキストを入力した後、AIがコミックを生成するのに約30-60秒かかります。',
    'faq.q5': 'コミックを実際の本として印刷できますか？',
    'faq.a5': 'もちろんです！コミックが完成したら、Luluとの統合を使用して印刷するオプションがあります。配送場所を選択し、リアルタイムで価格と配送オプションを確認できます。',
    'faq.exclamation': 'ワオ！',
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

    // Comic Preview
    'preview.title': '您的史诗故事',
    'preview.backToEditor': '← 返回编辑器',
    'preview.marvelComics': '漫威漫画集团',
    'preview.presents': 'KEEPICS 出品',
    'preview.price': '¥28 中国',
    'preview.aiGenerated': 'AI生成漫画',
    
    // Footer
    'footer.faq': '常见问题',
    'footer.terms': '条款和条件',
    'footer.privacy': '隐私',
    'footer.contact': '联系我们',
    'footer.rights': '版权所有',
    'footer.questionsAnswers': '问答',
    
    // FAQ
    'faq.title': '常见问题 (FAQ)',
    'faq.contact': '还有问题吗？',
    'faq.contactLink': '联系我们！',

    // FAQ Questions and Answers
    'faq.q1': '漫画创作过程是如何工作的？',
    'faq.a1': '很简单！上传一张照片，添加简短描述或对话，我们的AI将根据您的输入生成独特的漫画。您可以预览结果并数字下载或打印成实体漫画书。',
    'faq.q2': '我可以上传什么类型的图片？',
    'faq.a2': '您可以上传JPG、PNG或WebP图片。确保您的图片清晰且适合所有年龄段。质量越好，您的漫画看起来就越好！',
    'faq.q3': '我可以选择漫画的风格吗？',
    'faq.a3': '在初始版本中，漫画风格由AI自动选择。在未来的更新中，我们计划添加风格选项（漫画、卡通、素描等）。',
    'faq.q4': '生成漫画需要多长时间？',
    'faq.a4': '平均而言，在您上传图片并输入文本后，AI生成漫画大约需要30-60秒。',
    'faq.q5': '我可以将漫画打印成真正的书吗？',
    'faq.a5': '当然可以！一旦您的漫画准备好，您就可以选择使用我们与Lulu的集成来打印它。您可以选择送货地点并实时查看价格和配送选项。',
    'faq.exclamation': '哇！',
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

    // Comic Preview
    'preview.title': 'قصتك الملحمية',
    'preview.backToEditor': '← العودة للمحرر',
    'preview.marvelComics': 'مجموعة مارفل كوميكس',
    'preview.presents': 'كيبيكس يقدم',
    'preview.price': '15 ريال السعودية',
    'preview.aiGenerated': 'قصة مصورة من إنتاج الذكاء الاصطناعي',
    
    // Footer
    'footer.faq': 'الأسئلة الشائعة',
    'footer.terms': 'الشروط والأحكام',
    'footer.privacy': 'الخصوصية',
    'footer.contact': 'اتصل بنا',
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.questionsAnswers': 'الأسئلة والأجوبة',
    
    // FAQ
    'faq.title': 'الأسئلة الشائعة',
    'faq.contact': 'لا تزال لديك أسئلة؟',
    'faq.contactLink': '!اتصل بنا',

    // FAQ Questions and Answers
    'faq.q1': 'كيف تعمل عملية إنشاء القصص المصورة؟',
    'faq.a1': 'الأمر بسيط! ارفع صورة، أضف وصفاً قصيراً أو حواراً، وسيقوم الذكاء الاصطناعي بإنشاء قصة مصورة فريدة بناءً على إدخالك. ستتمكن من معاينة النتيجة وتنزيلها رقمياً أو طباعتها ككتاب قصص مصورة مادي.',
    'faq.q2': 'ما نوع الصور التي يمكنني رفعها؟',
    'faq.a2': 'يمكنك رفع صور JPG أو PNG أو WebP. تأكد من أن صورتك واضحة ومناسبة لجميع الأعمار. كلما كانت الجودة أفضل، كانت قصتك المصورة تبدو أفضل!',
    'faq.q3': 'هل يمكنني اختيار نمط القصة المصورة؟',
    'faq.a3': 'في النسخة الأولية، يتم اختيار نمط القصة المصورة تلقائياً بواسطة الذكاء الاصطناعي. في التحديثات المستقبلية، نخطط لإضافة خيارات الأنماط (مانجا، كرتون، رسم، إلخ).',
    'faq.q4': 'كم من الوقت يستغرق إنشاء قصة مصورة؟',
    'faq.a4': 'في المتوسط، يستغرق الأمر حوالي 30-60 ثانية للذكاء الاصطناعي لإنشاء قصتك المصورة بعد رفع صورتك وإدخال نصك.',
    'faq.q5': 'هل يمكنني طباعة قصتي المصورة ككتاب حقيقي؟',
    'faq.a5': 'بالطبع! بمجرد أن تصبح قصتك المصورة جاهزة، ستحصل على خيار طباعتها باستخدام تكاملنا مع Lulu. ستتمكن من اختيار موقع الشحن ورؤية الأسعار وخيارات التسليم في الوقت الفعلي.',
    'faq.exclamation': '!رائع',
  }
};
