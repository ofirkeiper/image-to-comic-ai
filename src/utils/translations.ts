export type Language = 'en' | 'fr' | 'es' | 'de' | 'it' | 'pt' | 'ru' | 'zh' | 'ja' | 'ar' | 'ko';

export const languages: Record<Language, string> = {
  en: 'English',
  fr: 'Français',
  es: 'Español',
  de: 'Deutsch',
  it: 'Italiano',
  pt: 'Português',
  ru: 'Русский',
  zh: '中文',
  ja: '日本語',
  ar: 'العربية',
  ko: '한국어'
};

export const translations = {
  en: {
    // Navigation
    nav: {
      create: "Create",
      samples: "Samples",
      pricing: "Pricing",
      faq: "FAQ",
      login: "Login"
    },
    
    // Hero Section
    hero: {
      memories: "memories",
      memoriesSubtext: "into epic Marvel-style comics!",
      createComic: "Create My Comic"
    },
    
    // Comic Uploader
    uploader: {
      title: "Create Your Comic",
      steps: "1. Upload a photo 📸\n2. Describe your story ✍️\n3. Get your Marvel comic! 🦸‍♂️",
      clickUpload: "Click to Upload",
      fileTypes: "PNG, JPG, WEBP",
      comicPanel: "Comic Panel",
      placeholder: "Describe your story, adventure, or memory here... The more details, the better your comic will be!",
      generating: "Generating...",
      generateComic: "Generate Comic",
      ready: "✅ Ready to create your comic!",
      aiWorking: "🤖 AI is working its magic..."
    },
    
    // Preview
    preview: {
      title: "Your Epic Adventure",
      aiGenerated: "AI Generated Comic",
      marvelComics: "MARVEL COMICS",
      presents: "PRESENTS",
      price: "$3.99",
      backToEditor: "← Back to Editor"
    },
    
    // Pricing
    pricing: {
      title: "Choose Your Comic Style",
      digitalTitle: "Digital Comic",
      digitalFeature1: "High-quality PDF download",
      digitalFeature2: "Perfect for sharing online",
      digitalFeature3: "Instant delivery",
      digitalPrice: "$4.99",
      printedTitle: "Printed Comic",
      printedFeature1: "Professional print quality",
      printedFeature2: "Shipped to your door",
      printedFeature3: "Collector's edition feel",
      printedPrice: "$12.99"
    },
    
    // FAQ
    faq: {
      title: "Questions & Answers",
      q1: "How does the AI create my comic?",
      a1: "Our AI analyzes your photo and story to create Marvel-style panels with dynamic captions and layouts!",
      q2: "Can I customize my comic after it's generated?",
      a2: "Yes! You can edit text, adjust panels, and choose different comic styles before finalizing.",
      q3: "What image formats do you accept?",
      a3: "We support PNG, JPG, and WEBP formats. For best results, use high-resolution images!",
      q4: "How long does it take to generate a comic?",
      a4: "Most comics are ready in 30-60 seconds! Complex stories might take a bit longer.",
      q5: "Can I create comics in different languages?",
      a5: "Absolutely! Our AI supports multiple languages for both input and comic generation.",
      exclamation: "WOW!",
      contact: "Still have questions?",
      contactLink: "Contact us!"
    },
    
    // Footer
    footer: {
      rights: "All rights reserved",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      contact: "Contact",
      questionsAnswers: "Q&A"
    },
    
    // Terms of Service
    terms: {
      effective: "Effective Date",
      title: "Terms of Service",
      eligibility: "Eligibility",
      eligibilityText: "You must be at least 13 years old to use our service. By using keepics, you agree to these terms.",
      userResponsibilities: "User Responsibilities",
      userResponsibilitiesText: "You are responsible for the content you upload. Do not upload copyrighted material, inappropriate content, or content that violates others' rights.",
      aiContent: "AI-Generated Content",
      aiContentText: "Comics are generated using AI technology. While we strive for quality, results may vary. You own the rights to your final comic.",
      ownership: "Ownership",
      ownershipText: "You retain ownership of your uploaded photos. keepics owns the AI-generated comic elements and styling.",
      payments: "Payments",
      paymentsText: "All payments are processed securely. Digital comics are delivered instantly. Physical comics ship within 5-7 business days.",
      contact: "Contact Information",
      contactText: "For questions about these terms, contact us at legal@keepics.com"
    },
    
    // Privacy Policy
    privacy: {
      effective: "Effective Date",
      title: "Privacy Policy",
      infoCollect: "Information We Collect",
      infoCollectText: "We collect photos you upload, story descriptions, and basic usage analytics to improve our service.",
      howUse: "How We Use Your Information",
      howUseText: "Your data is used solely to generate your comics and improve our AI. We never sell your personal information.",
      sharing: "Information Sharing",
      sharingText: "We do not share your personal information with third parties except as required by law.",
      dataRetention: "Data Retention",
      dataRetentionText: "Uploaded photos are deleted after 30 days. Generated comics are stored for your account access.",
      yourRights: "Your Rights",
      yourRightsText: "You can request deletion of your data, access your information, or correct inaccuracies at any time.",
      security: "Security",
      securityText: "We use industry-standard encryption and security measures to protect your data.",
      contact: "Contact Us",
      contactText: "For privacy questions, email us at privacy@keepics.com"
    },
    
    // Sample Gallery
    samples: {
      title: "Sample Comics",
      adventure: "6-Month Adventure in South America",
      rome: "Trip to Rome with Girlfriend",
      birthday: "2nd Birthday Bash!",
      nature: "Family Nature Retreat",
      graduation: "Graduated Medical University",
      party: "Party Week in Spain with Friends",
      
      // Adventure panels
      adventurePanel1: "Day 1: Ready for the wild!",
      adventurePanel2: "Patagonia: endless trails",
      adventurePanel3: "Surfing at sunrise",
      adventurePanel4: "Friends from every country",
      adventurePanel5: "Rainforest adventures",
      adventurePanel6: "Back home, hearts full",
      
      // Rome panels
      romePanel1: "Ciao, Roma!",
      romePanel2: "Gelato every morning",
      romePanel3: "Trevi Fountain wishes",
      romePanel4: "Sunset by the Colosseum",
      
      // Birthday panels
      birthdayPanel1: "Birthday superstar!",
      birthdayPanel2: "Rainbow cake smiles",
      birthdayPanel3: "Balloons everywhere!",
      birthdayPanel4: "Nap with a new teddy",
      
      // Nature panels
      naturePanel1: "Whale watch begins",
      naturePanel2: "Camp under the stars",
      naturePanel3: "Forest wanderings",
      naturePanel4: "Endless laughter",
      
      // Graduation panels
      graduationPanel1: "Finally, Doctor!",
      graduationPanel2: "Caps in the air",
      graduationPanel3: "Proud family hugs",
      graduationPanel4: "Next stop: hospital!",
      
      // Party panels
      partyPanel1: "Vamos a la playa!",
      partyPanel2: "Sandy feet & sunsets",
      partyPanel3: "Dancing all night",
      partyPanel4: "Memories forever"
    }
  },
  fr: {
    // Navigation
    nav: {
      create: "Créer",
      samples: "Exemples",
      pricing: "Tarifs",
      faq: "FAQ",
      login: "Connexion"
    },
    
    // Hero Section
    hero: {
      memories: "souvenirs",
      memoriesSubtext: "en BD épiques style Marvel !",
      createComic: "Créer Ma BD"
    },
    
    // Comic Uploader
    uploader: {
      title: "Créez Votre BD",
      steps: "1. Téléchargez une photo 📸\n2. Décrivez votre histoire ✍️\n3. Obtenez votre BD Marvel ! 🦸‍♂️",
      clickUpload: "Cliquez pour télécharger",
      fileTypes: "PNG, JPG, WEBP",
      comicPanel: "Case de BD",
      placeholder: "Décrivez votre histoire, aventure ou souvenir ici... Plus de détails = meilleure BD !",
      generating: "Génération...",
      generateComic: "Générer la BD",
      ready: "✅ Prêt à créer votre BD !",
      aiWorking: "🤖 L'IA fait sa magie..."
    },
    
    // Preview
    preview: {
      title: "Votre Aventure Épique",
      aiGenerated: "BD Générée par IA",
      marvelComics: "MARVEL COMICS",
      presents: "PRÉSENTE",
      price: "3,99€",
      backToEditor: "← Retour à l'éditeur"
    },
    
    // Pricing
    pricing: {
      title: "Choisissez Votre Style de BD",
      digitalTitle: "BD Numérique",
      digitalFeature1: "Téléchargement PDF haute qualité",
      digitalFeature2: "Parfait pour partager en ligne",
      digitalFeature3: "Livraison instantanée",
      digitalPrice: "4,99€",
      printedTitle: "BD Imprimée",
      printedFeature1: "Qualité d'impression professionnelle",
      printedFeature2: "Livrée à votre porte",
      printedFeature3: "Sensation d'édition collector",
      printedPrice: "12,99€"
    },
    
    // FAQ
    faq: {
      title: "Questions & Réponses",
      q1: "Comment l'IA crée-t-elle ma BD ?",
      a1: "Notre IA analyse votre photo et histoire pour créer des cases style Marvel avec des légendes dynamiques !",
      q2: "Puis-je personnaliser ma BD après génération ?",
      a2: "Oui ! Vous pouvez éditer le texte, ajuster les cases et choisir différents styles avant finalisation.",
      q3: "Quels formats d'image acceptez-vous ?",
      a3: "Nous supportons PNG, JPG et WEBP. Pour de meilleurs résultats, utilisez des images haute résolution !",
      q4: "Combien de temps pour générer une BD ?",
      a4: "La plupart des BD sont prêtes en 30-60 secondes ! Les histoires complexes peuvent prendre plus de temps.",
      q5: "Puis-je créer des BD en différentes langues ?",
      a5: "Absolument ! Notre IA supporte plusieurs langues pour l'entrée et la génération de BD.",
      exclamation: "WOW !",
      contact: "Encore des questions ?",
      contactLink: "Contactez-nous !"
    },
    
    // Footer
    footer: {
      rights: "Tous droits réservés",
      terms: "Conditions d'utilisation",
      privacy: "Politique de confidentialité",
      contact: "Contact",
      questionsAnswers: "Q&R"
    },
    
    // Terms of Service
    terms: {
      effective: "Date d'entrée en vigueur",
      title: "Conditions d'utilisation",
      eligibility: "Éligibilité",
      eligibilityText: "Vous devez avoir au moins 13 ans pour utiliser notre service. En utilisant keepics, vous acceptez ces conditions.",
      userResponsibilities: "Responsabilités de l'utilisateur",
      userResponsibilitiesText: "Vous êtes responsable du contenu que vous téléchargez. Ne téléchargez pas de matériel protégé par des droits d'auteur, de contenu inapproprié ou de contenu qui viole les droits d'autrui.",
      aiContent: "Contenu généré par IA",
      aiContentText: "Les BD sont générées à l'aide de la technologie IA. Bien que nous nous efforcions d'obtenir la qualité, les résultats peuvent varier. Vous possédez les droits sur votre BD finale.",
      ownership: "Propriété",
      ownershipText: "Vous conservez la propriété de vos photos téléchargées. keepics possède les éléments de BD générés par IA et le style.",
      payments: "Paiements",
      paymentsText: "Tous les paiements sont traités de manière sécurisée. Les BD numériques sont livrées instantanément. Les BD physiques sont expédiées dans les 5-7 jours ouvrables.",
      contact: "Informations de contact",
      contactText: "Pour des questions sur ces conditions, contactez-nous à legal@keepics.com"
    },
    
    // Privacy Policy
    privacy: {
      effective: "Date d'entrée en vigueur",
      title: "Politique de confidentialité",
      infoCollect: "Informations que nous collectons",
      infoCollectText: "Nous collectons les photos que vous téléchargez, les descriptions d'histoires et les analyses d'utilisation de base pour améliorer notre service.",
      howUse: "Comment nous utilisons vos informations",
      howUseText: "Vos données sont utilisées uniquement pour générer vos BD et améliorer notre IA. Nous ne vendons jamais vos informations personnelles.",
      sharing: "Partage d'informations",
      sharingText: "Nous ne partageons pas vos informations personnelles avec des tiers sauf si requis par la loi.",
      dataRetention: "Conservation des données",
      dataRetentionText: "Les photos téléchargées sont supprimées après 30 jours. Les BD générées sont stockées pour l'accès à votre compte.",
      yourRights: "Vos droits",
      yourRightsText: "Vous pouvez demander la suppression de vos données, accéder à vos informations ou corriger les inexactitudes à tout moment.",
      security: "Sécurité",
      securityText: "Nous utilisons un chiffrement standard de l'industrie et des mesures de sécurité pour protéger vos données.",
      contact: "Contactez-nous",
      contactText: "Pour les questions de confidentialité, envoyez-nous un e-mail à privacy@keepics.com"
    },
    
    // Sample Gallery
    samples: {
      title: "Exemples de BD",
      adventure: "Aventure de 6 mois en Amérique du Sud",
      rome: "Voyage à Rome avec ma copine",
      birthday: "Fête des 2 ans !",
      nature: "Retraite familiale dans la nature",
      graduation: "Diplômé de l'université de médecine",
      party: "Semaine de fête en Espagne avec les amis",
      
      // Adventure panels
      adventurePanel1: "Jour 1 : Prêt pour l'aventure !",
      adventurePanel2: "Patagonie : sentiers infinis",
      adventurePanel3: "Surf au lever du soleil",
      adventurePanel4: "Des amis de tous les pays",
      adventurePanel5: "Aventures en forêt tropicale",
      adventurePanel6: "De retour, le cœur plein",
      
      // Rome panels
      romePanel1: "Ciao, Roma !",
      romePanel2: "Gelato tous les matins",
      romePanel3: "Vœux à la fontaine de Trevi",
      romePanel4: "Coucher de soleil près du Colisée",
      
      // Birthday panels
      birthdayPanel1: "Superstar d'anniversaire !",
      birthdayPanel2: "Sourires de gâteau arc-en-ciel",
      birthdayPanel3: "Des ballons partout !",
      birthdayPanel4: "Sieste avec un nouveau nounours",
      
      // Nature panels
      naturePanel1: "L'observation des baleines commence",
      naturePanel2: "Camper sous les étoiles",
      naturePanel3: "Randonnées en forêt",
      naturePanel4: "Rires sans fin",
      
      // Graduation panels
      graduationPanel1: "Enfin, Docteur !",
      graduationPanel2: "Toques en l'air",
      graduationPanel3: "Câlins de famille fière",
      graduationPanel4: "Prochaine étape : hôpital !",
      
      // Party panels
      partyPanel1: "Vamos a la playa !",
      partyPanel2: "Pieds sablonneux et couchers de soleil",
      partyPanel3: "Danser toute la nuit",
      partyPanel4: "Souvenirs pour toujours"
    }
  },
  es: {
    // Navigation
    nav: {
      create: "Crear",
      samples: "Ejemplos",
      pricing: "Precios",
      faq: "FAQ",
      login: "Iniciar Sesión"
    },
    
    // Hero Section
    hero: {
      memories: "recuerdos",
      memoriesSubtext: "¡en cómics épicos estilo Marvel!",
      createComic: "Crear Mi Cómic"
    },
    
    // Comic Uploader
    uploader: {
      title: "Crea Tu Cómic",
      steps: "1. Sube una foto 📸\n2. Describe tu historia ✍️\n3. ¡Obtén tu cómic Marvel! 🦸‍♂️",
      clickUpload: "Haz clic para subir",
      fileTypes: "PNG, JPG, WEBP",
      comicPanel: "Panel de Cómic",
      placeholder: "Describe tu historia, aventura o recuerdo aquí... ¡Más detalles = mejor cómic!",
      generating: "Generando...",
      generateComic: "Generar Cómic",
      ready: "✅ ¡Listo para crear tu cómic!",
      aiWorking: "🤖 La IA está haciendo su magia..."
    },
    
    // Preview
    preview: {
      title: "Tu Aventura Épica",
      aiGenerated: "Cómic Generado por IA",
      marvelComics: "MARVEL COMICS",
      presents: "PRESENTA",
      price: "3,99€",
      backToEditor: "← Volver al Editor"
    },
    
    // Pricing
    pricing: {
      title: "Elige Tu Estilo de Cómic",
      digitalTitle: "Cómic Digital",
      digitalFeature1: "Descarga PDF de alta calidad",
      digitalFeature2: "Perfecto para compartir online",
      digitalFeature3: "Entrega instantánea",
      digitalPrice: "4,99€",
      printedTitle: "Cómic Impreso",
      printedFeature1: "Calidad de impresión profesional",
      printedFeature2: "Enviado a tu puerta",
      printedFeature3: "Sensación de edición de coleccionista",
      printedPrice: "12,99€"
    },
    
    // FAQ
    faq: {
      title: "Preguntas y Respuestas",
      q1: "¿Cómo crea la IA mi cómic?",
      a1: "¡Nuestra IA analiza tu foto e historia para crear paneles estilo Marvel con leyendas dinámicas!",
      q2: "¿Puedo personalizar mi cómic después de generarlo?",
      a2: "¡Sí! Puedes editar texto, ajustar paneles y elegir diferentes estilos antes de finalizar.",
      q3: "¿Qué formatos de imagen aceptan?",
      a3: "¡Soportamos PNG, JPG y WEBP. Para mejores resultados, usa imágenes de alta resolución!",
      q4: "¿Cuánto tiempo tarda en generar un cómic?",
      a4: "¡La mayoría de cómics están listos en 30-60 segundos! Las historias complejas pueden tardar más.",
      q5: "¿Puedo crear cómics en diferentes idiomas?",
      a5: "¡Absolutamente! Nuestra IA soporta múltiples idiomas para entrada y generación de cómics.",
      exclamation: "¡WOW!",
      contact: "¿Aún tienes preguntas?",
      contactLink: "¡Contáctanos!"
    },
    
    // Footer
    footer: {
      rights: "Todos los derechos reservados",
      terms: "Términos de Servicio",
      privacy: "Política de Privacidad",
      contact: "Contacto",
      questionsAnswers: "P&R"
    },
    
    // Terms of Service
    terms: {
      effective: "Fecha de vigencia",
      title: "Términos de Servicio",
      eligibility: "Elegibilidad",
      eligibilityText: "Debes tener al menos 13 años para usar nuestro servicio. Al usar keepics, aceptas estos términos.",
      userResponsibilities: "Responsabilidades del Usuario",
      userResponsibilitiesText: "Eres responsable del contenido que subes. No subas material con derechos de autor, contenido inapropiado o contenido que viole los derechos de otros.",
      aiContent: "Contenido Generado por IA",
      aiContentText: "Los cómics se generan usando tecnología IA. Aunque nos esforzamos por la calidad, los resultados pueden variar. Posees los derechos de tu cómic final.",
      ownership: "Propiedad",
      ownershipText: "Mantienes la propiedad de tus fotos subidas. keepics posee los elementos de cómic generados por IA y el estilo.",
      payments: "Pagos",
      paymentsText: "Todos los pagos se procesan de forma segura. Los cómics digitales se entregan instantáneamente. Los cómics físicos se envían en 5-7 días hábiles.",
      contact: "Información de Contacto",
      contactText: "Para preguntas sobre estos términos, contáctanos en legal@keepics.com"
    },
    
    // Privacy Policy
    privacy: {
      effective: "Fecha de vigencia",
      title: "Política de Privacidad",
      infoCollect: "Información que Recopilamos",
      infoCollectText: "Recopilamos fotos que subes, descripciones de historias y análisis básicos de uso para mejorar nuestro servicio.",
      howUse: "Cómo Usamos Tu Información",
      howUseText: "Tus datos se usan únicamente para generar tus cómics y mejorar nuestra IA. Nunca vendemos tu información personal.",
      sharing: "Compartir Información",
      sharingText: "No compartimos tu información personal con terceros excepto cuando lo requiere la ley.",
      dataRetention: "Retención de Datos",
      dataRetentionText: "Las fotos subidas se eliminan después de 30 días. Los cómics generados se almacenan para el acceso de tu cuenta.",
      yourRights: "Tus Derechos",
      yourRightsText: "Puedes solicitar eliminación de tus datos, acceder a tu información o corregir inexactitudes en cualquier momento.",
      security: "Seguridad",
      securityText: "Usamos encriptación estándar de la industria y medidas de seguridad para proteger tus datos.",
      contact: "Contáctanos",
      contactText: "Para preguntas de privacidad, envíanos un email a privacy@keepics.com"
    },
    
    // Sample Gallery
    samples: {
      title: "Cómics de Muestra",
      adventure: "Aventura de 6 meses en Sudamérica",
      rome: "Viaje a Roma con mi novia",
      birthday: "¡Fiesta de 2º cumpleaños!",
      nature: "Retiro familiar en la naturaleza",
      graduation: "Graduado de la Universidad de Medicina",
      party: "Semana de fiesta en España con amigos",
      
      // Adventure panels
      adventurePanel1: "Día 1: ¡Listos para lo salvaje!",
      adventurePanel2: "Patagonia: senderos infinitos",
      adventurePanel3: "Surfeando al amanecer",
      adventurePanel4: "Amigos de todos los países",
      adventurePanel5: "Aventuras en la selva",
      adventurePanel6: "De vuelta a casa, corazones llenos",
      
      // Rome panels
      romePanel1: "¡Ciao, Roma!",
      romePanel2: "Gelato todas las mañanas",
      romePanel3: "Deseos en la Fontana di Trevi",
      romePanel4: "Atardecer junto al Coliseo",
      
      // Birthday panels
      birthdayPanel1: "¡Súper estrella de cumpleaños!",
      birthdayPanel2: "Sonrisas de pastel arcoíris",
      birthdayPanel3: "¡Globos por todas partes!",
      birthdayPanel4: "Siesta con un nuevo osito",
      
      // Nature panels
      naturePanel1: "Comienza la observación de ballenas",
      naturePanel2: "Acampar bajo las estrellas",
      naturePanel3: "Vagando por el bosque",
      naturePanel4: "Risas infinitas",
      
      // Graduation panels
      graduationPanel1: "¡Por fin, Doctor!",
      graduationPanel2: "Birretes al aire",
      graduationPanel3: "Abrazos de familia orgullosa",
      graduationPanel4: "¡Siguiente parada: hospital!",
      
      // Party panels
      partyPanel1: "¡Vamos a la playa!",
      partyPanel2: "Pies arenosos y atardeceres",
      partyPanel3: "Bailando toda la noche",
      partyPanel4: "Recuerdos para siempre"
    }
  },
  de: {
    // Navigation
    nav: {
      create: "Erstellen",
      samples: "Beispiele",
      pricing: "Preise",
      faq: "FAQ",
      login: "Anmelden"
    },
    
    // Hero Section
    hero: {
      memories: "Erinnerungen",
      memoriesSubtext: "in epische Marvel-Comics!",
      createComic: "Meinen Comic Erstellen"
    },
    
    // Comic Uploader
    uploader: {
      title: "Erstelle Deinen Comic",
      steps: "1. Foto hochladen 📸\n2. Geschichte beschreiben ✍️\n3. Marvel-Comic erhalten! 🦸‍♂️",
      clickUpload: "Zum Hochladen klicken",
      fileTypes: "PNG, JPG, WEBP",
      comicPanel: "Comic-Panel",
      placeholder: "Beschreibe deine Geschichte, dein Abenteuer oder deine Erinnerung hier... Mehr Details = besserer Comic!",
      generating: "Generiere...",
      generateComic: "Comic Generieren",
      ready: "✅ Bereit, deinen Comic zu erstellen!",
      aiWorking: "🤖 KI arbeitet ihre Magie..."
    },
    
    // Preview
    preview: {
      title: "Dein Episches Abenteuer",
      aiGenerated: "KI-Generierter Comic",
      marvelComics: "MARVEL COMICS",
      presents: "PRÄSENTIERT",
      price: "3,99€",
      backToEditor: "← Zurück zum Editor"
    },
    
    // Pricing
    pricing: {
      title: "Wähle Deinen Comic-Stil",
      digitalTitle: "Digitaler Comic",
      digitalFeature1: "Hochwertiger PDF-Download",
      digitalFeature2: "Perfekt zum Online-Teilen",
      digitalFeature3: "Sofortige Lieferung",
      digitalPrice: "4,99€",
      printedTitle: "Gedruckter Comic",
      printedFeature1: "Professionelle Druckqualität",
      printedFeature2: "Direkt vor deine Tür geliefert",
      printedFeature3: "Sammlerausgabe-Gefühl",
      printedPrice: "12,99€"
    },
    
    // FAQ
    faq: {
      title: "Fragen & Antworten",
      q1: "Wie erstellt die KI meinen Comic?",
      a1: "Unsere KI analysiert dein Foto und deine Geschichte, um Marvel-Panels mit dynamischen Bildunterschriften zu erstellen!",
      q2: "Kann ich meinen Comic nach der Generierung anpassen?",
      a2: "Ja! Du kannst Text bearbeiten, Panels anpassen und verschiedene Comic-Stile vor der Fertigstellung wählen.",
      q3: "Welche Bildformate akzeptiert ihr?",
      a3: "Wir unterstützen PNG, JPG und WEBP. Für beste Ergebnisse verwende hochauflösende Bilder!",
      q4: "Wie lange dauert es, einen Comic zu generieren?",
      a4: "Die meisten Comics sind in 30-60 Sekunden fertig! Komplexe Geschichten können etwas länger dauern.",
      q5: "Kann ich Comics in verschiedenen Sprachen erstellen?",
      a5: "Absolut! Unsere KI unterstützt mehrere Sprachen für Eingabe und Comic-Generierung.",
      exclamation: "WOW!",
      contact: "Noch Fragen?",
      contactLink: "Kontaktiere uns!"
    },
    
    // Footer
    footer: {
      rights: "Alle Rechte vorbehalten",
      terms: "Nutzungsbedingungen",
      privacy: "Datenschutzrichtlinie",
      contact: "Kontakt",
      questionsAnswers: "F&A"
    },
    
    // Terms of Service
    terms: {
      effective: "Gültigkeitsdatum",
      title: "Nutzungsbedingungen",
      eligibility: "Berechtigung",
      eligibilityText: "Du musst mindestens 13 Jahre alt sein, um unseren Service zu nutzen. Durch die Nutzung von keepics stimmst du diesen Bedingungen zu.",
      userResponsibilities: "Benutzerverantwortlichkeiten",
      userResponsibilitiesText: "Du bist für die Inhalte verantwortlich, die du hochlädst. Lade keine urheberrechtlich geschützten Materialien, unangemessene Inhalte oder Inhalte hoch, die die Rechte anderer verletzen.",
      aiContent: "KI-Generierte Inhalte",
      aiContentText: "Comics werden mit KI-Technologie generiert. Obwohl wir uns um Qualität bemühen, können die Ergebnisse variieren. Du besitzt die Rechte an deinem finalen Comic.",
      ownership: "Eigentum",
      ownershipText: "Du behältst das Eigentum an deinen hochgeladenen Fotos. keepics besitzt die KI-generierten Comic-Elemente und das Styling.",
      payments: "Zahlungen",
      paymentsText: "Alle Zahlungen werden sicher verarbeitet. Digitale Comics werden sofort geliefert. Physische Comics werden innerhalb von 5-7 Werktagen versandt.",
      contact: "Kontaktinformationen",
      contactText: "Für Fragen zu diesen Bedingungen kontaktiere uns unter legal@keepics.com"
    },
    
    // Privacy Policy
    privacy: {
      effective: "Gültigkeitsdatum",
      title: "Datenschutzrichtlinie",
      infoCollect: "Informationen, die wir sammeln",
      infoCollectText: "Wir sammeln Fotos, die du hochlädst, Geschichtsbeschreibungen und grundlegende Nutzungsanalysen zur Verbesserung unseres Services.",
      howUse: "Wie wir deine Informationen verwenden",
      howUseText: "Deine Daten werden ausschließlich zur Generierung deiner Comics und Verbesserung unserer KI verwendet. Wir verkaufen niemals deine persönlichen Informationen.",
      sharing: "Informationsaustausch",
      sharingText: "Wir teilen deine persönlichen Informationen nicht mit Dritten, außer wenn gesetzlich vorgeschrieben.",
      dataRetention: "Datenspeicherung",
      dataRetentionText: "Hochgeladene Fotos werden nach 30 Tagen gelöscht. Generierte Comics werden für den Zugang zu deinem Konto gespeichert.",
      yourRights: "Deine Rechte",
      yourRightsText: "Du kannst jederzeit die Löschung deiner Daten beantragen, auf deine Informationen zugreifen oder Ungenauigkeiten korrigieren.",
      security: "Sicherheit",
      securityText: "Wir verwenden branchenübliche Verschlüsselung und Sicherheitsmaßnahmen zum Schutz deiner Daten.",
      contact: "Kontaktiere uns",
      contactText: "Für Datenschutzfragen sende uns eine E-Mail an privacy@keepics.com"
    },
    
    // Sample Gallery
    samples: {
      title: "Beispiel-Comics",
      adventure: "6-Monats-Abenteuer in Südamerika",
      rome: "Reise nach Rom mit Freundin",
      birthday: "2. Geburtstags-Party!",
      nature: "Familien-Naturausflug",
      graduation: "Medizinstudium abgeschlossen",
      party: "Party-Woche in Spanien mit Freunden",
      
      // Adventure panels
      adventurePanel1: "Tag 1: Bereit für die Wildnis!",
      adventurePanel2: "Patagonien: endlose Pfade",
      adventurePanel3: "Surfen bei Sonnenaufgang",
      adventurePanel4: "Freunde aus jedem Land",
      adventurePanel5: "Regenwald-Abenteuer",
      adventurePanel6: "Zurück zuhause, Herzen voller Freude",
      
      // Rome panels
      romePanel1: "Ciao, Roma!",
      romePanel2: "Gelato jeden Morgen",
      romePanel3: "Wünsche am Trevi-Brunnen",
      romePanel4: "Sonnenuntergang am Kolosseum",
      
      // Birthday panels
      birthdayPanel1: "Geburtstags-Superstar!",
      birthdayPanel2: "Regenbogen-Kuchen-Lächeln",
      birthdayPanel3: "Ballons überall!",
      birthdayPanel4: "Nickerchen mit neuem Teddy",
      
      // Nature panels
      naturePanel1: "Walbeobachtung beginnt",
      naturePanel2: "Campen unter den Sternen",
      naturePanel3: "Waldwanderungen",
      naturePanel4: "Endloses Lachen",
      
      // Graduation panels
      graduationPanel1: "Endlich, Doktor!",
      graduationPanel2: "Hüte in die Luft",
      graduationPanel3: "Stolze Familienumarmungen",
      graduationPanel4: "Nächster Halt: Krankenhaus!",
      
      // Party panels
      partyPanel1: "Vamos a la playa!",
      partyPanel2: "Sandige Füße & Sonnenuntergänge",
      partyPanel3: "Die ganze Nacht tanzen",
      partyPanel4: "Erinnerungen für immer"
    }
  },
  it: {
    // Navigation
    nav: {
      create: "Crea",
      samples: "Esempi",
      pricing: "Prezzi",
      faq: "FAQ",
      login: "Accedi"
    },
    
    // Hero Section
    hero: {
      memories: "ricordi",
      memoriesSubtext: "in fumetti epici stile Marvel!",
      createComic: "Crea Il Mio Fumetto"
    },
    
    // Comic Uploader
    uploader: {
      title: "Crea Il Tuo Fumetto",
      steps: "1. Carica una foto 📸\n2. Descrivi la tua storia ✍️\n3. Ottieni il tuo fumetto Marvel! 🦸‍♂️",
      clickUpload: "Clicca per caricare",
      fileTypes: "PNG, JPG, WEBP",
      comicPanel: "Pannello Fumetto",
      placeholder: "Descrivi la tua storia, avventura o ricordo qui... Più dettagli = fumetto migliore!",
      generating: "Generando...",
      generateComic: "Genera Fumetto",
      ready: "✅ Pronto per creare il tuo fumetto!",
      aiWorking: "🤖 L'IA sta facendo la sua magia..."
    },
    
    // Preview
    preview: {
      title: "La Tua Avventura Epica",
      aiGenerated: "Fumetto Generato da IA",
      marvelComics: "MARVEL COMICS",
      presents: "PRESENTA",
      price: "3,99€",
      backToEditor: "← Torna all'Editor"
    },
    
    // Pricing
    pricing: {
      title: "Scegli Il Tuo Stile di Fumetto",
      digitalTitle: "Fumetto Digitale",
      digitalFeature1: "Download PDF di alta qualità",
      digitalFeature2: "Perfetto per condividere online",
      digitalFeature3: "Consegna istantanea",
      digitalPrice: "4,99€",
      printedTitle: "Fumetto Stampato",
      printedFeature1: "Qualità di stampa professionale",
      printedFeature2: "Spedito alla tua porta",
      printedFeature3: "Sensazione da edizione da collezione",
      printedPrice: "12,99€"
    },
    
    // FAQ
    faq: {
      title: "Domande e Risposte",
      q1: "Come crea l'IA il mio fumetto?",
      a1: "La nostra IA analizza la tua foto e storia per creare pannelli stile Marvel con didascalie dinamiche!",
      q2: "Posso personalizzare il mio fumetto dopo la generazione?",
      a2: "Sì! Puoi modificare il testo, regolare i pannelli e scegliere diversi stili prima di finalizzare.",
      q3: "Quali formati di immagine accettate?",
      a3: "Supportiamo PNG, JPG e WEBP. Per risultati migliori, usa immagini ad alta risoluzione!",
      q4: "Quanto tempo ci vuole per generare un fumetto?",
      a4: "La maggior parte dei fumetti è pronta in 30-60 secondi! Storie complesse potrebbero richiedere più tempo.",
      q5: "Posso creare fumetti in diverse lingue?",
      a5: "Assolutamente! La nostra IA supporta più lingue per input e generazione di fumetti.",
      exclamation: "WOW!",
      contact: "Hai ancora domande?",
      contactLink: "Contattaci!"
    },
    
    // Footer
    footer: {
      rights: "Tutti i diritti riservati",
      terms: "Termini di Servizio",
      privacy: "Politica sulla Privacy",
      contact: "Contatto",
      questionsAnswers: "D&R"
    },
    
    // Terms of Service
    terms: {
      effective: "Data di entrata in vigore",
      title: "Termini di Servizio",
      eligibility: "Idoneità",
      eligibilityText: "Devi avere almeno 13 anni per utilizzare il nostro servizio. Utilizzando keepics, accetti questi termini.",
      userResponsibilities: "Responsabilità dell'Utente",
      userResponsibilitiesText: "Sei responsabile del contenuto che carichi. Non caricare materiale protetto da copyright, contenuto inappropriato o contenuto che viola i diritti altrui.",
      aiContent: "Contenuto Generato da IA",
      aiContentText: "I fumetti sono generati utilizzando la tecnologia IA. Anche se ci sforziamo per la qualità, i risultati possono variare. Possiedi i diritti del tuo fumetto finale.",
      ownership: "Proprietà",
      ownershipText: "Mantieni la proprietà delle tue foto caricate. keepics possiede gli elementi del fumetto generati da IA e lo styling.",
      payments: "Pagamenti",
      paymentsText: "Tutti i pagamenti sono elaborati in modo sicuro. I fumetti digitali vengono consegnati istantaneamente. I fumetti fisici vengono spediti entro 5-7 giorni lavorativi.",
      contact: "Informazioni di Contatto",
      contactText: "Per domande su questi termini, contattaci a legal@keepics.com"
    },
    
    // Privacy Policy
    privacy: {
      effective: "Data di entrata in vigore",
      title: "Politica sulla Privacy",
      infoCollect: "Informazioni che Raccogliamo",
      infoCollectText: "Raccogliamo foto che carichi, descrizioni di storie e analisi di utilizzo di base per migliorare il nostro servizio.",
      howUse: "Come Utilizziamo le Tue Informazioni",
      howUseText: "I tuoi dati sono utilizzati esclusivamente per generare i tuoi fumetti e migliorare la nostra IA. Non vendiamo mai le tue informazioni personali.",
      sharing: "Condivisione delle Informazioni",
      sharingText: "Non condividiamo le tue informazioni personali con terze parti tranne quando richiesto dalla legge.",
      dataRetention: "Conservazione dei Dati",
      dataRetentionText: "Le foto caricate vengono eliminate dopo 30 giorni. I fumetti generati vengono conservati per l'accesso al tuo account.",
      yourRights: "I Tuoi Diritti",
      yourRightsText: "Puoi richiedere la cancellazione dei tuoi dati, accedere alle tue informazioni o correggere inesattezze in qualsiasi momento.",
      security: "Sicurezza",
      securityText: "Utilizziamo crittografia standard del settore e misure di sicurezza per proteggere i tuoi dati.",
      contact: "Contattaci",
      contactText: "Per domande sulla privacy, inviaci un'email a privacy@keepics.com"
    },
    
    // Sample Gallery
    samples: {
      title: "Fumetti di Esempio",
      adventure: "Avventura di 6 mesi in Sud America",
      rome: "Viaggio a Roma con la fidanzata",
      birthday: "Festa del 2° compleanno!",
      nature: "Ritiro familiare nella natura",
      graduation: "Laureato in Medicina",
      party: "Settimana di festa in Spagna con gli amici",
      
      // Adventure panels
      adventurePanel1: "Giorno 1: Pronti per il selvaggio!",
      adventurePanel2: "Patagonia: sentieri infiniti",
      adventurePanel3: "Surf all'alba",
      adventurePanel4: "Amici da ogni paese",
      adventurePanel5: "Avventure nella foresta pluviale",
      adventurePanel6: "Tornati a casa, cuori pieni",
      
      // Rome panels
      romePanel1: "Ciao, Roma!",
      romePanel2: "Gelato ogni mattina",
      romePanel3: "Desideri alla Fontana di Trevi",
      romePanel4: "Tramonto al Colosseo",
      
      // Birthday panels
      birthdayPanel1: "Superstar del compleanno!",
      birthdayPanel2: "Sorrisi di torta arcobaleno",
      birthdayPanel3: "Palloncini ovunque!",
      birthdayPanel4: "Pisolino con nuovo orsacchiotto",
      
      // Nature panels
      naturePanel1: "Inizia l'osservazione delle balene",
      naturePanel2: "Campeggio sotto le stelle",
      naturePanel3: "Vagabondaggi nella foresta",
      naturePanel4: "Risate infinite",
      
      // Graduation panels
      graduationPanel1: "Finalmente, Dottore!",
      graduationPanel2: "Tocchi in aria",
      graduationPanel3: "Abbracci della famiglia orgogliosa",
      graduationPanel4: "Prossima tappa: ospedale!",
      
      // Party panels
      partyPanel1: "Vamos a la playa!",
      partyPanel2: "Piedi sabbiosi e tramonti",
      partyPanel3: "Ballando tutta la notte",
      partyPanel4: "Ricordi per sempre"
    }
  },
  pt: {
    // Navigation
    nav: {
      create: "Criar",
      samples: "Exemplos",
      pricing: "Preços",
      faq: "FAQ",
      login: "Entrar"
    },
    
    // Hero Section
    hero: {
      memories: "memórias",
      memoriesSubtext: "em quadrinhos épicos estilo Marvel!",
      createComic: "Criar Meu Quadrinho"
    },
    
    // Comic Uploader
    uploader: {
      title: "Crie Seu Quadrinho",
      steps: "1. Envie uma foto 📸\n2. Descreva sua história ✍️\n3. Receba seu quadrinho Marvel! 🦸‍♂️",
      clickUpload: "Clique para enviar",
      fileTypes: "PNG, JPG, WEBP",
      comicPanel: "Painel de Quadrinho",
      placeholder: "Descreva sua história, aventura ou memória aqui... Mais detalhes = melhor quadrinho!",
      generating: "Gerando...",
      generateComic: "Gerar Quadrinho",
      ready: "✅ Pronto para criar seu quadrinho!",
      aiWorking: "🤖 IA está fazendo sua mágica..."
    },
    
    // Preview
    preview: {
      title: "Sua Aventura Épica",
      aiGenerated: "Quadrinho Gerado por IA",
      marvelComics: "MARVEL COMICS",
      presents: "APRESENTA",
      price: "R$ 19,99",
      backToEditor: "← Voltar ao Editor"
    },
    
    // Pricing
    pricing: {
      title: "Escolha Seu Estilo de Quadrinho",
      digitalTitle: "Quadrinho Digital",
      digitalFeature1: "Download PDF de alta qualidade",
      digitalFeature2: "Perfeito para compartilhar online",
      digitalFeature3: "Entrega instantânea",
      digitalPrice: "R$ 24,99",
      printedTitle: "Quadrinho Impresso",
      printedFeature1: "Qualidade de impressão profissional",
      printedFeature2: "Enviado para sua porta",
      printedFeature3: "Sensação de edição de colecionador",
      printedPrice: "R$ 64,99"
    },
    
    // FAQ
    faq: {
      title: "Perguntas e Respostas",
      q1: "Como a IA cria meu quadrinho?",
      a1: "Nossa IA analisa sua foto e história para criar painéis estilo Marvel com legendas dinâmicas!",
      q2: "Posso personalizar meu quadrinho após a geração?",
      a2: "Sim! Você pode editar texto, ajustar painéis e escolher diferentes estilos antes de finalizar.",
      q3: "Quais formatos de imagem vocês aceitam?",
      a3: "Suportamos PNG, JPG e WEBP. Para melhores resultados, use imagens de alta resolução!",
      q4: "Quanto tempo leva para gerar um quadrinho?",
      a4: "A maioria dos quadrinhos fica pronta em 30-60 segundos! Histórias complexas podem demorar mais.",
      q5: "Posso criar quadrinhos em diferentes idiomas?",
      a5: "Absolutamente! Nossa IA suporta múltiplos idiomas para entrada e geração de quadrinhos.",
      exclamation: "UAU!",
      contact: "Ainda tem dúvidas?",
      contactLink: "Entre em contato!"
    },
    
    // Footer
    footer: {
      rights: "Todos os direitos reservados",
      terms: "Termos de Serviço",
      privacy: "Política de Privacidade",
      contact: "Contato",
      questionsAnswers: "P&R"
    },
    
    // Terms of Service
    terms: {
      effective: "Data de vigência",
      title: "Termos de Serviço",
      eligibility: "Elegibilidade",
      eligibilityText: "Você deve ter pelo menos 13 anos para usar nosso serviço. Ao usar keepics, você concorda com estes termos.",
      userResponsibilities: "Responsabilidades do Usuário",
      userResponsibilitiesText: "Você é responsável pelo conteúdo que envia. Não envie material protegido por direitos autorais, conteúdo inadequado ou conteúdo que viole os direitos de outros.",
      aiContent: "Conteúdo Gerado por IA",
      aiContentText: "Quadrinhos são gerados usando tecnologia IA. Embora nos esforcemos pela qualidade, os resultados podem variar. Você possui os direitos do seu quadrinho final.",
      ownership: "Propriedade",
      ownershipText: "Você mantém a propriedade de suas fotos enviadas. keepics possui os elementos de quadrinho gerados por IA e o estilo.",
      payments: "Pagamentos",
      paymentsText: "Todos os pagamentos são processados com segurança. Quadrinhos digitais são entregues instantaneamente. Quadrinhos físicos são enviados em 5-7 dias úteis.",
      contact: "Informações de Contato",
      contactText: "Para perguntas sobre estes termos, entre em contato conosco em legal@keepics.com"
    },
    
    // Privacy Policy
    privacy: {
      effective: "Data de vigência",
      title: "Política de Privacidade",
      infoCollect: "Informações que Coletamos",
      infoCollectText: "Coletamos fotos que você envia, descrições de histórias e análises básicas de uso para melhorar nosso serviço.",
      howUse: "Como Usamos Suas Informações",
      howUseText: "Seus dados são usados apenas para gerar seus quadrinhos e melhorar nossa IA. Nunca vendemos suas informações pessoais.",
      sharing: "Compartilhamento de Informações",
      sharingText: "Não compartilhamos suas informações pessoais com terceiros, exceto quando exigido por lei.",
      dataRetention: "Retenção de Dados",
      dataRetentionText: "Fotos enviadas são excluídas após 30 dias. Quadrinhos gerados são armazenados para acesso da sua conta.",
      yourRights: "Seus Direitos",
      yourRightsText: "Você pode solicitar exclusão de seus dados, acessar suas informações ou corrigir imprecisões a qualquer momento.",
      security: "Segurança",
      securityText: "Usamos criptografia padrão da indústria e medidas de segurança para proteger seus dados.",
      contact: "Entre em Contato",
      contactText: "Para perguntas sobre privacidade, envie-nos um email para privacy@keepics.com"
    },
    
    // Sample Gallery
    samples: {
      title: "Quadrinhos de Exemplo",
      adventure: "Aventura de 6 meses na América do Sul",
      rome: "Viagem a Roma com a namorada",
      birthday: "Festa de 2º aniversário!",
      nature: "Retiro familiar na natureza",
      graduation: "Formado na Universidade de Medicina",
      party: "Semana de festa na Espanha com amigos",
      
      // Adventure panels
      adventurePanel1: "Dia 1: Prontos para o selvagem!",
      adventurePanel2: "Patagônia: trilhas infinitas",
      adventurePanel3: "Surf ao nascer do sol",
      adventurePanel4: "Amigos de todos os países",
      adventurePanel5: "Aventuras na floresta",
      adventurePanel6: "De volta para casa, corações cheios",
      
      // Rome panels
      romePanel1: "Ciao, Roma!",
      romePanel2: "Gelato todas as manhãs",
      romePanel3: "Desejos na Fontana di Trevi",
      romePanel4: "Pôr do sol no Coliseu",
      
      // Birthday panels
      birthdayPanel1: "Superstar de aniversário!",
      birthdayPanel2: "Sorrisos de bolo arco-íris",
      birthdayPanel3: "Balões em todo lugar!",
      birthdayPanel4: "Soneca com novo ursinho",
      
      // Nature panels
      naturePanel1: "Observação de baleias começa",
      naturePanel2: "Acampar sob as estrelas",
      naturePanel3: "Vagando pela floresta",
      naturePanel4: "Risadas infinitas",
      
      // Graduation panels
      graduationPanel1: "Finalmente, Doutor!",
      graduationPanel2: "Chapéus no ar",
      graduationPanel3: "Abraços da família orgulhosa",
      graduationPanel4: "Próxima parada: hospital!",
      
      // Party panels
      partyPanel1: "Vamos a la playa!",
      partyPanel2: "Pés arenosos e pores do sol",
      partyPanel3: "Dançando a noite toda",
      partyPanel4: "Memórias para sempre"
    }
  },
  ru: {
    // Navigation
    nav: {
      create: "Создать",
      samples: "Примеры",
      pricing: "Цены",
      faq: "FAQ",
      login: "Войти"
    },
    
    // Hero Section
    hero: {
      memories: "воспоминания",
      memoriesSubtext: "в эпические комиксы в стиле Marvel!",
      createComic: "Создать Мой Комикс"
    },
    
    // Comic Uploader
    uploader: {
      title: "Создайте Свой Комикс",
      steps: "1. Загрузите фото 📸\n2. Опишите историю ✍️\n3. Получите комикс Marvel! 🦸‍♂️",
      clickUpload: "Нажмите для загрузки",
      fileTypes: "PNG, JPG, WEBP",
      comicPanel: "Панель Комикса",
      placeholder: "Опишите свою историю, приключение или воспоминание здесь... Больше деталей = лучший комикс!",
      generating: "Генерация...",
      generateComic: "Создать Комикс",
      ready: "✅ Готов создать ваш комикс!",
      aiWorking: "🤖 ИИ творит магию..."
    },
    
    // Preview
    preview: {
      title: "Ваше Эпическое Приключение",
      aiGenerated: "Комикс, Созданный ИИ",
      marvelComics: "MARVEL COMICS",
      presents: "ПРЕДСТАВЛЯЕТ",
      price: "299₽",
      backToEditor: "← Назад к Редактору"
    },
    
    // Pricing
    pricing: {
      title: "Выберите Стиль Комикса",
      digitalTitle: "Цифровой Комикс",
      digitalFeature1: "Высококачественная загрузка PDF",
      digitalFeature2: "Идеально для онлайн-обмена",
      digitalFeature3: "Мгновенная доставка",
      digitalPrice: "399₽",
      printedTitle: "Печатный Комикс",
      printedFeature1: "Профессиональное качество печати",
      printedFeature2: "Доставка к вашей двери",
      printedFeature3: "Ощущение коллекционного издания",
      printedPrice: "999₽"
    },
    
    // FAQ
    faq: {
      title: "Вопросы и Ответы",
      q1: "Как ИИ создает мой комикс?",
      a1: "Наш ИИ анализирует ваше фото и историю для создания панелей в стиле Marvel с динамичными подписями!",
      q2: "Могу ли я настроить комикс после генерации?",
      a2: "Да! Вы можете редактировать текст, настраивать панели и выбирать разные стили перед финализацией.",
      q3: "Какие форматы изображений вы принимаете?",
      a3: "Мы поддерживаем PNG, JPG и WEBP. Для лучших результатов используйте изображения высокого разрешения!",
      q4: "Сколько времени занимает создание комикса?",
      a4: "Большинство комиксов готовы за 30-60 секунд! Сложные истории могут занять больше времени.",
      q5: "Могу ли я создавать комиксы на разных языках?",
      a5: "Абсолютно! Наш ИИ поддерживает множество языков для ввода и генерации комиксов.",
      exclamation: "ВАУ!",
      contact: "Остались вопросы?",
      contactLink: "Свяжитесь с нами!"
    },
    
    // Footer
    footer: {
      rights: "Все права защищены",
      terms: "Условия Обслуживания",
      privacy: "Политика Конфиденциальности",
      contact: "Контакты",
      questionsAnswers: "В&О"
    },
    
    // Terms of Service
    terms: {
      effective: "Дата вступления в силу",
      title: "Условия Обслуживания",
      eligibility: "Право на использование",
      eligibilityText: "Вам должно быть не менее 13 лет для использования нашего сервиса. Используя keepics, вы соглашаетесь с этими условиями.",
      userResponsibilities: "Обязанности Пользователя",
      userResponsibilitiesText: "Вы несете ответственность за загружаемый контент. Не загружайте материалы, защищенные авторским правом, неподходящий контент или контент, нарушающий права других.",
      aiContent: "Контент, Созданный ИИ",
      aiContentText: "Комиксы создаются с использованием технологии ИИ. Хотя мы стремимся к качеству, результаты могут варьироваться. Вы владеете правами на свой финальный комикс.",
      ownership: "Собственность",
      ownershipText: "Вы сохраняете права на загруженные фотографии. keepics владеет элементами комикса, созданными ИИ, и стилизацией.",
      payments: "Платежи",
      paymentsText: "Все платежи обрабатываются безопасно. Цифровые комиксы доставляются мгновенно. Физические комиксы отправляются в течение 5-7 рабочих дней.",
      contact: "Контактная Информация",
      contactText: "По вопросам об этих условиях свяжитесь с нами по адресу legal@keepics.com"
    },
    
    // Privacy Policy
    privacy: {
      effective: "Дата вступления в силу",
      title: "Политика Конфиденциальности",
      infoCollect: "Информация, Которую Мы Собираем",
      infoCollectText: "Мы собираем фотографии, которые вы загружаете, описания историй и базовую аналитику использования для улучшения нашего сервиса.",
      howUse: "Как Мы Используем Вашу Информацию",
      howUseText: "Ваши данные используются исключительно для создания ваших комиксов и улучшения нашего ИИ. Мы никогда не продаем вашу личную информацию.",
      sharing: "Обмен Информацией",
      sharingText: "Мы не делимся вашей личной информацией с третьими лицами, кроме случаев, требуемых законом.",
      dataRetention: "Хранение Данных",
      dataRetentionText: "Загруженные фотографии удаляются через 30 дней. Созданные комиксы хранятся для доступа к вашему аккаунту.",
      yourRights: "Ваши Права",
      yourRightsText: "Вы можете запросить удаление ваших данных, получить доступ к вашей информации или исправить неточности в любое время.",
      security: "Безопасность",
      securityText: "Мы используем стандартное для индустрии шифрование и меры безопасности для защиты ваших данных.",
      contact: "Свяжитесь с Нами",
      contactText: "По вопросам конфиденциальности отправьте нам email на privacy@keepics.com"
    },
    
    // Sample Gallery
    samples: {
      title: "Примеры комиксов",
      adventure: "6-месячное приключение в Южной Америке",
      rome: "Поездка в Рим с девушкой",
      birthday: "Праздник 2-го дня рождения!",
      nature: "Семейный отдых на природе",
      graduation: "Окончил медицинский университет",
      party: "Неделя вечеринок в Испании с друзьями",
      
      // Adventure panels
      adventurePanel1: "День 1: Готовы к дикой природе!",
      adventurePanel2: "Патагония: бесконечные тропы",
      adventurePanel3: "Серфинг на рассвете",
      adventurePanel4: "Друзья из каждой страны",
      adventurePanel5: "Приключения в тропическом лесу",
      adventurePanel6: "Дома, сердца полны",
      
      // Rome panels
      romePanel1: "Чао, Рома!",
      romePanel2: "Джелато каждое утро",
      romePanel3: "Желания у фонтана Треви",
      romePanel4: "Закат у Колизея",
      
      // Birthday panels
      birthdayPanel1: "Суперзвезда дня рождения!",
      birthdayPanel2: "Улыбки радужного торта",
      birthdayPanel3: "Шарики везде!",
      birthdayPanel4: "Дремота с новым мишкой",
      
      // Nature panels
      naturePanel1: "Наблюдение за китами начинается",
      naturePanel2: "Лагерь под звездами",
      naturePanel3: "Лесные прогулки",
      naturePanel4: "Бесконечный смех",
      
      // Graduation panels
      graduationPanel1: "Наконец, доктор!",
      graduationPanel2: "Шапки в воздухе",
      graduationPanel3: "Объятия гордой семьи",
      graduationPanel4: "Следующая остановка: больница!",
      
      // Party panels
      partyPanel1: "Вамос а ла плайя!",
      partyPanel2: "Песчаные ноги и закаты",
      partyPanel3: "Танцы всю ночь",
      partyPanel4: "Воспоминания навсегда"
    }
  },
  zh: {
    // Navigation
    nav: {
      create: "创建",
      samples: "示例",
      pricing: "价格",
      faq: "常见问题",
      login: "登录"
    },
    
    // Hero Section
    hero: {
      memories: "回忆",
      memoriesSubtext: "变成史诗般的漫威风格漫画！",
      createComic: "创建我的漫画"
    },
    
    // Comic Uploader
    uploader: {
      title: "创建您的漫画",
      steps: "1. 上传照片 📸\n2. 描述您的故事 ✍️\n3. 获得您的漫威漫画！ 🦸‍♂️",
      clickUpload: "点击上传",
      fileTypes: "PNG, JPG, WEBP",
      comicPanel: "漫画面板",
      placeholder: "在这里描述您的故事、冒险或回忆...更多细节=更好的漫画！",
      generating: "生成中...",
      generateComic: "生成漫画",
      ready: "✅ 准备创建您的漫画！",
      aiWorking: "🤖 AI正在施展魔法..."
    },
    
    // Preview
    preview: {
      title: "您的史诗冒险",
      aiGenerated: "AI生成的漫画",
      marvelComics: "漫威漫画",
      presents: "呈现",
      price: "¥29.99",
      backToEditor: "← 返回编辑器"
    },
    
    // Pricing
    pricing: {
      title: "选择您的漫画风格",
      digitalTitle: "数字漫画",
      digitalFeature1: "高质量PDF下载",
      digitalFeature2: "完美的在线分享",
      digitalFeature3: "即时交付",
      digitalPrice: "¥39.99",
      printedTitle: "印刷漫画",
      printedFeature1: "专业印刷质量",
      printedFeature2: "送货上门",
      printedFeature3: "收藏版感觉",
      printedPrice: "¥99.99"
    },
    
    // FAQ
    faq: {
      title: "问题与答案",
      q1: "AI如何创建我的漫画？",
      a1: "我们的AI分析您的照片和故事，创建具有动态字幕的漫威风格面板！",
      q2: "生成后我可以自定义我的漫画吗？",
      a2: "是的！您可以编辑文本、调整面板并在完成前选择不同的漫画风格。",
      q3: "您接受什么图像格式？",
      a3: "我们支持PNG、JPG和WEBP。为了获得最佳效果，请使用高分辨率图像！",
      q4: "生成漫画需要多长时间？",
      a4: "大多数漫画在30-60秒内准备就绪！复杂的故事可能需要更长时间。",
      q5: "我可以用不同语言创建漫画吗？",
      a5: "绝对可以！我们的AI支持多种语言的输入和漫画生成。",
      exclamation: "哇！",
      contact: "还有问题吗？",
      contactLink: "联系我们！"
    },
    
    // Footer
    footer: {
      rights: "版权所有",
      terms: "服务条款",
      privacy: "隐私政策",
      contact: "联系",
      questionsAnswers: "问答"
    },
    
    // Terms of Service
    terms: {
      effective: "生效日期",
      title: "服务条款",
      eligibility: "资格",
      eligibilityText: "您必须年满13岁才能使用我们的服务。通过使用keepics，您同意这些条款。",
      userResponsibilities: "用户责任",
      userResponsibilitiesText: "您对上传的内容负责。请勿上传受版权保护的材料、不当内容或侵犯他人权利的内容。",
      aiContent: "AI生成的内容",
      aiContentText: "漫画使用AI技术生成。虽然我们努力追求质量，但结果可能有所不同。您拥有最终漫画的权利。",
      ownership: "所有权",
      ownershipText: "您保留上传照片的所有权。keepics拥有AI生成的漫画元素和样式。",
      payments: "付款",
      paymentsText: "所有付款都经过安全处理。数字漫画即时交付。实体漫画在5-7个工作日内发货。",
      contact: "联系信息",
      contactText: "有关这些条款的问题，请通过legal@keepics.com联系我们"
    },
    
    // Privacy Policy
    privacy: {
      effective: "生效日期",
      title: "隐私政策",
      infoCollect: "我们收集的信息",
      infoCollectText: "我们收集您上传的照片、故事描述和基本使用分析以改进我们的服务。",
      howUse: "我们如何使用您的信息",
      howUseText: "您的数据仅用于生成您的漫画和改进我们的AI。我们从不出售您的个人信息。",
      sharing: "信息共享",
      sharingText: "除法律要求外，我们不与第三方共享您的个人信息。",
      dataRetention: "数据保留",
      dataRetentionText: "上传的照片在30天后删除。生成的漫画存储以供您的账户访问。",
      yourRights: "您的权利",
      yourRightsText: "您可以随时请求删除您的数据、访问您的信息或纠正不准确之处。",
      security: "安全",
      securityText: "我们使用行业标准加密和安全措施来保护您的数据。",
      contact: "联系我们",
      contactText: "有关隐私问题，请发送电子邮件至privacy@keepics.com"
    },
    
    // Sample Gallery
    samples: {
      title: "漫画样本",
      adventure: "南美6个月冒险",
      rome: "与女友的罗马之旅",
      birthday: "2岁生日派对！",
      nature: "家庭自然度假",
      graduation: "医学院毕业",
      party: "与朋友在西班牙的派对周",
      
      // Adventure panels
      adventurePanel1: "第1天：准备野外探险！",
      adventurePanel2: "巴塔哥尼亚：无尽的小径",
      adventurePanel3: "日出冲浪",
      adventurePanel4: "来自各国的朋友",
      adventurePanel5: "雨林冒险",
      adventurePanel6: "回到家，心满意足",
      
      // Rome panels
      romePanel1: "你好，罗马！",
      romePanel2: "每天早上都有冰淇淋",
      romePanel3: "特雷维喷泉许愿",
      romePanel4: "斗兽场的日落",
      
      // Birthday panels
      birthdayPanel1: "生日超级明星！",
      birthdayPanel2: "彩虹蛋糕的笑容",
      birthdayPanel3: "气球到处都是！",
      birthdayPanel4: "和新泰迪熊一起小憩",
      
      // Nature panels
      naturePanel1: "观鲸开始",
      naturePanel2: "在星空下露营",
      naturePanel3: "森林漫步",
      naturePanel4: "无尽的欢声笑语",
      
      // Graduation panels
      graduationPanel1: "终于，医生！",
      graduationPanel2: "学士帽飞向空中",
      graduationPanel3: "骄傲家庭的拥抱",
      graduationPanel4: "下一站：医院！",
      
      // Party panels
      partyPanel1: "去海滩吧！",
      partyPanel2: "沙脚和日落",
      partyPanel3: "整夜跳舞",
      partyPanel4: "永远的回忆"
    }
  },
  ja: {
    // Navigation
    nav: {
      create: "作成",
      samples: "サンプル",
      pricing: "価格",
      faq: "よくある質問",
      login: "ログイン"
    },
    
    // Hero Section
    hero: {
      memories: "思い出",
      memoriesSubtext: "を壮大なマーベル風コミックに！",
      createComic: "マイコミックを作成"
    },
    
    // Comic Uploader
    uploader: {
      title: "コミックを作成",
      steps: "1. 写真をアップロード 📸\n2. ストーリーを説明 ✍️\n3. マーベルコミックを取得！ 🦸‍♂️",
      clickUpload: "クリックしてアップロード",
      fileTypes: "PNG, JPG, WEBP",
      comicPanel: "コミックパネル",
      placeholder: "ここにあなたのストーリー、冒険、思い出を説明してください...詳細が多いほど良いコミックになります！",
      generating: "生成中...",
      generateComic: "コミック生成",
      ready: "✅ コミック作成の準備完了！",
      aiWorking: "🤖 AIが魔法をかけています..."
    },
    
    // Preview
    preview: {
      title: "あなたの壮大な冒険",
      aiGenerated: "AI生成コミック",
      marvelComics: "マーベルコミックス",
      presents: "プレゼンツ",
      price: "¥499",
      backToEditor: "← エディターに戻る"
    },
    
    // Pricing
    pricing: {
      title: "コミックスタイルを選択",
      digitalTitle: "デジタルコミック",
      digitalFeature1: "高品質PDFダウンロード",
      digitalFeature2: "オンライン共有に最適",
      digitalFeature3: "即座に配信",
      digitalPrice: "¥599",
      printedTitle: "印刷コミック",
      printedFeature1: "プロ品質の印刷",
      printedFeature2: "ご自宅まで配送",
      printedFeature3: "コレクター版の感覚",
      printedPrice: "¥1,299"
    },
    
    // FAQ
    faq: {
      title: "質問と回答",
      q1: "AIはどのようにコミックを作成しますか？",
      a1: "私たちのAIはあなたの写真とストーリーを分析して、ダイナミックなキャプション付きのマーベル風パネルを作成します！",
      q2: "生成後にコミックをカスタマイズできますか？",
      a2: "はい！テキストの編集、パネルの調整、完成前の異なるコミックスタイルの選択ができます。",
      q3: "どの画像フォーマットを受け付けますか？",
      a3: "PNG、JPG、WEBPをサポートしています。最良の結果のために高解像度画像を使用してください！",
      q4: "コミック生成にはどのくらい時間がかかりますか？",
      a4: "ほとんどのコミックは30-60秒で準備完了！複雑なストーリーはもう少し時間がかかる場合があります。",
      q5: "異なる言語でコミックを作成できますか？",
      a5: "もちろんです！私たちのAIは入力とコミック生成の両方で複数の言語をサポートしています。",
      exclamation: "ワオ！",
      contact: "まだ質問がありますか？",
      contactLink: "お問い合わせください！"
    },
    
    // Footer
    footer: {
      rights: "全著作権所有",
      terms: "利用規約",
      privacy: "プライバシーポリシー",
      contact: "お問い合わせ",
      questionsAnswers: "Q&A"
    },
    
    // Terms of Service
    terms: {
      effective: "発効日",
      title: "利用規約",
      eligibility: "利用資格",
      eligibilityText: "当サービスを利用するには13歳以上である必要があります。keepicsを使用することで、これらの規約に同意したものとみなされます。",
      userResponsibilities: "ユーザーの責任",
      userResponsibilitiesText: "アップロードするコンテンツについて責任を負います。著作権で保護された素材、不適切なコンテンツ、他者の権利を侵害するコンテンツをアップロードしないでください。",
      aiContent: "AI生成コンテンツ",
      aiContentText: "コミックはAI技術を使用して生成されます。品質を追求していますが、結果は異なる場合があります。最終的なコミックの権利はあなたが所有します。",
      ownership: "所有権",
      ownershipText: "アップロードした写真の所有権を保持します。keepicsはAI生成されたコミック要素とスタイリングを所有します。",
      payments: "支払い",
      paymentsText: "すべての支払いは安全に処理されます。デジタルコミックは即座に配信されます。物理的なコミックは5-7営業日以内に発送されます。",
      contact: "連絡先情報",
      contactText: "これらの規約に関する質問は、legal@keepics.comまでお問い合わせください"
    },
    
    // Privacy Policy
    privacy: {
      effective: "発効日",
      title: "プライバシーポリシー",
      infoCollect: "収集する情報",
      infoCollectText: "サービス向上のため、アップロードされた写真、ストーリーの説明、基本的な使用分析を収集します。",
      howUse: "情報の使用方法",
      howUseText: "あなたのデータはコミック生成とAI改善のためのみに使用されます。個人情報を販売することはありません。",
      sharing: "情報の共有",
      sharingText: "法律で要求される場合を除き、第三者と個人情報を共有することはありません。",
      dataRetention: "データ保持",
      dataRetentionText: "アップロードされた写真は30日後に削除されます。生成されたコミックはアカウントアクセスのために保存されます。",
      yourRights: "あなたの権利",
      yourRightsText: "いつでもデータの削除要求、情報へのアクセス、不正確な情報の修正ができます。",
      security: "セキュリティ",
      securityText: "業界標準の暗号化とセキュリティ対策を使用してデータを保護しています。",
      contact: "お問い合わせ",
      contactText: "プライバシーに関する質問は、privacy@keepics.comまでメールでお問い合わせください"
    },
    
    // Sample Gallery
    samples: {
      title: "サンプルコミック",
      adventure: "南米6ヶ月の冒険",
      rome: "恋人とのローマ旅行",
      birthday: "2歳の誕生日パーティー！",
      nature: "家族自然リトリート",
      graduation: "医学部卒業",
      party: "友達とのスペインでのパーティー週間",
      
      // Adventure panels
      adventurePanel1: "1日目：野生の準備完了！",
      adventurePanel2: "パタゴニア：無限のトレイル",
      adventurePanel3: "日の出でサーフィン",
      adventurePanel4: "世界中からの友達",
      adventurePanel5: "熱帯雨林の冒険",
      adventurePanel6: "家に帰って、心は満たされて",
      
      // Rome panels
      romePanel1: "チャオ、ローマ！",
      romePanel2: "毎朝ジェラート",
      romePanel3: "トレビの泉での願い事",
      romePanel4: "コロッセオでの夕日",
      
      // Birthday panels
      birthdayPanel1: "誕生日のスーパースター！",
      birthdayPanel2: "レインボーケーキの笑顔",
      birthdayPanel3: "風船がいっぱい！",
      birthdayPanel4: "新しいテディベアとお昼寝",
      
      // Nature panels
      naturePanel1: "ホエールウォッチング開始",
      naturePanel2: "星空の下でキャンプ",
      naturePanel3: "森の散策",
      naturePanel4: "無限の笑い",
      
      // Graduation panels
      graduationPanel1: "ついに、ドクター！",
      graduationPanel2: "帽子を空に投げて",
      graduationPanel3: "誇らしい家族のハグ",
      graduationPanel4: "次の目的地：病院！",
      
      // Party panels
      partyPanel1: "ビーチに行こう！",
      partyPanel2: "砂の足と夕日",
      partyPanel3: "一晩中踊る",
      partyPanel4: "永遠の思い出"
    }
  },
  ar: {
    // Navigation
    nav: {
      create: "إنشاء",
      samples: "عينات",
      pricing: "الأسعار",
      faq: "الأسئلة الشائعة",
      login: "تسجيل الدخول"
    },
    
    // Hero Section
    hero: {
      memories: "الذكريات",
      memoriesSubtext: "إلى قصص مصورة ملحمية بأسلوب مارفل!",
      createComic: "إنشاء قصتي المصورة"
    },
    
    // Comic Uploader
    uploader: {
      title: "أنشئ قصتك المصورة",
      steps: "1. ارفع صورة 📸\n2. اوصف قصتك ✍️\n3. احصل على قصة مارفل المصورة! 🦸‍♂️",
      clickUpload: "انقر للرفع",
      fileTypes: "PNG, JPG, WEBP",
      comicPanel: "لوحة القصة المصورة",
      placeholder: "اوصف قصتك أو مغامرتك أو ذكرياتك هنا... كلما زادت التفاصيل = قصة مصورة أفضل!",
      generating: "جاري الإنشاء...",
      generateComic: "إنشاء القصة المصورة",
      ready: "✅ جاهز لإنشاء قصتك المصورة!",
      aiWorking: "🤖 الذكاء الاصطناعي يعمل سحره..."
    },
    
    // Preview
    preview: {
      title: "مغامرتك الملحمية",
      aiGenerated: "قصة مصورة مولدة بالذكاء الاصطناعي",
      marvelComics: "مارفل كوميكس",
      presents: "يقدم",
      price: "14.99 ريال",
      backToEditor: "← العودة للمحرر"
    },
    
    // Pricing
    pricing: {
      title: "اختر نمط قصتك المصورة",
      digitalTitle: "قصة مصورة رقمية",
      digitalFeature1: "تحميل PDF عالي الجودة",
      digitalFeature2: "مثالي للمشاركة عبر الإنترنت",
      digitalFeature3: "تسليم فوري",
      digitalPrice: "18.99 ريال",
      printedTitle: "قصة مصورة مطبوعة",
      printedFeature1: "جودة طباعة احترافية",
      printedFeature2: "يتم شحنها إلى بابك",
      printedFeature3: "إحساس الإصدار المحدود",
      printedPrice: "48.99 ريال"
    },
    
    // FAQ
    faq: {
      title: "الأسئلة والأجوبة",
      q1: "كيف ينشئ الذكاء الاصطناعي قصتي المصورة؟",
      a1: "يحلل ذكاؤنا الاصطناعي صورتك وقصتك لإنشاء لوحات بأسلوب مارفل مع تسميات توضيحية ديناميكية!",
      q2: "هل يمكنني تخصيص قصتي المصورة بعد الإنشاء؟",
      a2: "نعم! يمكنك تحرير النص وتعديل اللوحات واختيار أنماط مختلفة قبل الانتهاء.",
      q3: "ما هي تنسيقات الصور التي تقبلونها؟",
      a3: "ندعم PNG و JPG و WEBP. للحصول على أفضل النتائج، استخدم صور عالية الدقة!",
      q4: "كم من الوقت يستغرق إنشاء قصة مصورة؟",
      a4: "معظم القصص المصورة جاهزة في 30-60 ثانية! القصص المعقدة قد تستغرق وقتاً أطول قليلاً.",
      q5: "هل يمكنني إنشاء قصص مصورة بلغات مختلفة؟",
      a5: "بالطبع! يدعم ذكاؤنا الاصطناعي لغات متعددة للإدخال وإنشاء القصص المصورة.",
      exclamation: "رائع!",
      contact: "لا تزال لديك أسئلة؟",
      contactLink: "اتصل بنا!"
    },
    
    // Footer
    footer: {
      rights: "جميع الحقوق محفوظة",
      terms: "شروط الخدمة",
      privacy: "سياسة الخصوصية",
      contact: "اتصل",
      questionsAnswers: "س&ج"
    },
    
    // Terms of Service
    terms: {
      effective: "تاريخ السريان",
      title: "شروط الخدمة",
      eligibility: "الأهلية",
      eligibilityText: "يجب أن تكون 13 عاماً على الأقل لاستخدام خدمتنا. باستخدام keepics، فإنك توافق على هذه الشروط.",
      userResponsibilities: "مسؤوليات المستخدم",
      userResponsibilitiesText: "أنت مسؤول عن المحتوى الذي ترفعه. لا ترفع مواد محمية بحقوق الطبع والنشر أو محتوى غير لائق أو محتوى ينتهك حقوق الآخرين.",
      aiContent: "المحتوى المولد بالذكاء الاصطناعي",
      aiContentText: "يتم إنشاء القصص المصورة باستخدام تقنية الذكاء الاصطناعي. بينما نسعى للجودة، قد تختلف النتائج. أنت تملك حقوق قصتك المصورة النهائية.",
      ownership: "الملكية",
      ownershipText: "تحتفظ بملكية صورك المرفوعة. keepics تملك عناصر القصة المصورة المولدة بالذكاء الاصطناعي والتصميم.",
      payments: "المدفوعات",
      paymentsText: "جميع المدفوعات تتم معالجتها بأمان. القصص المصورة الرقمية يتم تسليمها فوراً. القصص المصورة المطبوعة يتم شحنها خلال 5-7 أيام عمل.",
      contact: "معلومات الاتصال",
      contactText: "للأسئلة حول هذه الشروط، اتصل بنا على legal@keepics.com"
    },
    
    // Privacy Policy
    privacy: {
      effective: "تاريخ السريان",
      title: "سياسة الخصوصية",
      infoCollect: "المعلومات التي نجمعها",
      infoCollectText: "نجمع الصور التي ترفعها ووصف القصص والتحليلات الأساسية للاستخدام لتحسين خدمتنا.",
      howUse: "كيف نستخدم معلوماتك",
      howUseText: "بياناتك تُستخدم فقط لإنشاء قصصك المصورة وتحسين ذكائنا الاصطناعي. لا نبيع معلوماتك الشخصية أبداً.",
      sharing: "مشاركة المعلومات",
      sharingText: "لا نشارك معلوماتك الشخصية مع أطراف ثالثة إلا عند الطلب القانوني.",
      dataRetention: "الاحتفاظ بالبيانات",
      dataRetentionText: "الصور المرفوعة يتم حذفها بعد 30 يوماً. القصص المصورة المولدة يتم تخزينها لوصول حسابك.",
      yourRights: "حقوقك",
      yourRightsText: "يمكنك طلب حذف بياناتك أو الوصول لمعلوماتك أو تصحيح الأخطاء في أي وقت.",
      security: "الأمان",
      securityText: "نستخدم التشفير المعياري في الصناعة وإجراءات الأمان لحماية بياناتك.",
      contact: "اتصل بنا",
      contactText: "لأسئلة الخصوصية، أرسل لنا إيميل على privacy@keepics.com"
    },
    
    // Sample Gallery
    samples: {
      title: "نماذج القصص المصورة",
      adventure: "مغامرة 6 أشهر في أمريكا الجنوبية",
      rome: "رحلة إلى روما مع الصديقة",
      birthday: "حفلة عيد الميلاد الثاني!",
      nature: "رحلة العائلة في الطبيعة",
      graduation: "تخرجت من كلية الطب",
      party: "أسبوع الحفلات في إسبانيا مع الأصدقاء",
      
      // Adventure panels
      adventurePanel1: "اليوم الأول: جاهزون للبرية!",
      adventurePanel2: "باتاغونيا: مسارات لا نهائية",
      adventurePanel3: "ركوب الأمواج عند شروق الشمس",
      adventurePanel4: "أصدقاء من كل بلد",
      adventurePanel5: "مغامرات الغابات المطيرة",
      adventurePanel6: "عودة للمنزل، قلوب مليئة",
      
      // Rome panels
      romePanel1: "تشاو، روما!",
      romePanel2: "جيلاتو كل صباح",
      romePanel3: "أمنيات نافورة تريفي",
      romePanel4: "غروب الشمس عند الكولوسيوم",
      
      // Birthday panels
      birthdayPanel1: "نجم عيد الميلاد!",
      birthdayPanel2: "ابتسامات كعكة قوس قزح",
      birthdayPanel3: "بالونات في كل مكان!",
      birthdayPanel4: "قيلولة مع دبدوب جديد",
      
      // Nature panels
      naturePanel1: "مراقبة الحيتان تبدأ",
      naturePanel2: "تخييم تحت النجوم",
      naturePanel3: "تجول في الغابة",
      naturePanel4: "ضحك لا نهائي",
      
      // Graduation panels
      graduationPanel1: "أخيراً، دكتور!",
      graduationPanel2: "القبعات في الهواء",
      graduationPanel3: "عناق العائلة الفخورة",
      graduationPanel4: "المحطة التالية: المستشفى!",
      
      // Party panels
      partyPanel1: "فاموس أ لا بلايا!",
      partyPanel2: "أقدام رملية وغروب",
      partyPanel3: "رقص طوال الليل",
      partyPanel4: "ذكريات إلى الأبد"
    }
  },
  ko: {
    // Navigation
    nav: {
      create: "만들기",
      samples: "샘플",
      pricing: "가격",
      faq: "자주 묻는 질문",
      login: "로그인"
    },
    
    // Hero Section
    hero: {
      memories: "추억",
      memoriesSubtext: "을 장대한 마블 스타일 만화로!",
      createComic: "내 만화 만들기"
    },
    
    // Comic Uploader
    uploader: {
      title: "만화 만들기",
      steps: "1. 사진 업로드 📸\n2. 스토리 설명 ✍️\n3. 마블 만화 받기! 🦸‍♂️",
      clickUpload: "클릭하여 업로드",
      fileTypes: "PNG, JPG, WEBP",
      comicPanel: "만화 패널",
      placeholder: "여기에 당신의 이야기, 모험 또는 추억을 설명하세요... 더 많은 세부사항 = 더 좋은 만화!",
      generating: "생성 중...",
      generateComic: "만화 생성",
      ready: "✅ 만화 만들 준비 완료!",
      aiWorking: "🤖 AI가 마법을 부리고 있습니다..."
    },
    
    // Preview
    preview: {
      title: "당신의 장대한 모험",
      aiGenerated: "AI 생성 만화",
      marvelComics: "마블 코믹스",
      presents: "프레젠츠",
      price: "₩5,900",
      backToEditor: "← 편집기로 돌아가기"
    },
    
    // Pricing
    pricing: {
      title: "만화 스타일 선택",
      digitalTitle: "디지털 만화",
      digitalFeature1: "고품질 PDF 다운로드",
      digitalFeature2: "온라인 공유에 완벽",
      digitalFeature3: "즉시 배송",
      digitalPrice: "₩7,900",
      printedTitle: "인쇄 만화",
      printedFeature1: "전문 인쇄 품질",
      printedFeature2: "문앞까지 배송",
      printedFeature3: "수집가 에디션 느낌",
      printedPrice: "₩19,900"
    },
    
    // FAQ
    faq: {
      title: "질문과 답변",
      q1: "AI는 어떻게 내 만화를 만드나요?",
      a1: "우리 AI는 당신의 사진과 이야기를 분석하여 역동적인 캡션이 있는 마블 스타일 패널을 만듭니다!",
      q2: "생성 후 만화를 사용자 정의할 수 있나요?",
      a2: "네! 텍스트 편집, 패널 조정, 완성 전 다른 만화 스타일 선택이 가능합니다.",
      q3: "어떤 이미지 형식을 받나요?",
      a3: "PNG, JPG, WEBP를 지원합니다. 최상의 결과를 위해 고해상도 이미지를 사용하세요!",
      q4: "만화 생성에 얼마나 걸리나요?",
      a4: "대부분의 만화는 30-60초 안에 준비됩니다! 복잡한 이야기는 조금 더 걸릴 수 있습니다.",
      q5: "다른 언어로 만화를 만들 수 있나요?",
      a5: "물론입니다! 우리 AI는 입력과 만화 생성 모두에서 여러 언어를 지원합니다.",
      exclamation: "와우!",
      contact: "아직 질문이 있나요?",
      contactLink: "문의하세요!"
    },
    
    // Footer
    footer: {
      rights: "모든 권리 보유",
      terms: "서비스 약관",
      privacy: "개인정보 보호정책",
      contact: "연락처",
      questionsAnswers: "Q&A"
    },
    
    // Terms of Service
    terms: {
      effective: "발효일",
      title: "서비스 약관",
      eligibility: "자격",
      eligibilityText: "서비스를 이용하려면 13세 이상이어야 합니다. keepics를 사용함으로써 이 약관에 동의하는 것입니다.",
      userResponsibilities: "사용자 책임",
      userResponsibilitiesText: "업로드하는 콘텐츠에 대해 책임집니다. 저작권이 있는 자료, 부적절한 콘텐츠, 타인의 권리를 침해하는 콘텐츠를 업로드하지 마세요.",
      aiContent: "AI 생성 콘텐츠",
      aiContentText: "만화는 AI 기술을 사용하여 생성됩니다. 품질을 위해 노력하지만 결과는 다를 수 있습니다. 최종 만화의 권리는 당신이 소유합니다.",
      ownership: "소유권",
      ownershipText: "업로드한 사진의 소유권을 유지합니다. keepics는 AI 생성된 만화 요소와 스타일링을 소유합니다.",
      payments: "결제",
      paymentsText: "모든 결제는 안전하게 처리됩니다. 디지털 만화는 즉시 배송됩니다. 실물 만화는 5-7 영업일 내에 배송됩니다.",
      contact: "연락처 정보",
      contactText: "이 약관에 대한 질문은 legal@keepics.com으로 문의하세요"
    },
    
    // Privacy Policy
    privacy: {
      effective: "발효일",
      title: "개인정보 보호정책",
      infoCollect: "수집하는 정보",
      infoCollectText: "서비스 개선을 위해 업로드한 사진, 스토리 설명, 기본 사용 분석을 수집합니다.",
      howUse: "정보 사용 방법",
      howUseText: "데이터는 만화 생성과 AI 개선을 위해서만 사용됩니다. 개인정보를 판매하지 않습니다.",
      sharing: "정보 공유",
      sharingText: "법적으로 요구되는 경우를 제외하고 제3자와 개인정보를 공유하지 않습니다.",
      dataRetention: "데이터 보관",
      dataRetentionText: "업로드된 사진은 30일 후 삭제됩니다. 생성된 만화는 계정 접근을 위해 저장됩니다.",
      yourRights: "당신의 권리",
      yourRightsText: "언제든지 데이터 삭제 요청, 정보 접근, 부정확한 정보 수정이 가능합니다.",
      security: "보안",
      securityText: "업계 표준 암호화와 보안 조치를 사용하여 데이터를 보호합니다.",
      contact: "문의하기",
      contactText: "개인정보 보호 질문은 privacy@keepics.com으로 이메일 보내주세요"
    },
    
    // Sample Gallery
    samples: {
      title: "샘플 만화",
      adventure: "남미 6개월 모험",
      rome: "여자친구와 함께한 로마 여행",
      birthday: "2살 생일 파티!",
      nature: "가족 자연 휴양",
      graduation: "의대 졸업",
      party: "친구들과 함께한 스페인 파티 주간",
      
      // Adventure panels
      adventurePanel1: "1일차: 야생 준비 완료!",
      adventurePanel2: "파타고니아: 끝없는 길",
      adventurePanel3: "일출 서핑",
      adventurePanel4: "모든 나라의 친구들",
      adventurePanel5: "열대우림 모험",
      adventurePanel6: "집으로 돌아와, 마음이 가득",
      
      // Rome panels
      romePanel1: "챠오, 로마!",
      romePanel2: "매일 아침 젤라또",
      romePanel3: "트레비 분수 소원",
      romePanel4: "콜로세움의 석양",
      
      // Birthday panels
      birthdayPanel1: "생일 슈퍼스타!",
      birthdayPanel2: "무지개 케이크 미소",
      birthdayPanel3: "풍선이 가득!",
      birthdayPanel4: "새 테디베어와 낮잠",
      
      // Nature panels
      naturePanel1: "고래 관찰 시작",
      naturePanel2: "별 아래 캠핑",
      naturePanel3: "숲속 산책",
      naturePanel4: "끝없는 웃음",
      
      // Graduation panels
      graduationPanel1: "드디어, 의사!",
      graduationPanel2: "모자를 하늘로",
      graduationPanel3: "자랑스러운 가족의 포옹",
      graduationPanel4: "다음 목적지: 병원!",
      
      // Party panels
      partyPanel1: "바모스 아 라 플라야!",
      partyPanel2: "모래 발과 석양",
      partyPanel3: "밤새 춤추기",
      partyPanel4: "영원한 추억"
    }
  }
};
