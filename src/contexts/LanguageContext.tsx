import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "hi" | "mr" | "gu";

export const LANGUAGES: { code: Lang; label: string; native: string }[] = [
  { code: "en", label: "English", native: "English" },
  { code: "hi", label: "Hindi", native: "हिन्दी" },
  { code: "mr", label: "Marathi", native: "मराठी" },
  { code: "gu", label: "Gujarati", native: "ગુજરાતી" },
];

type Dict = Record<string, string>;

const dictionaries: Record<Lang, Dict> = {
  en: {
    "nav.about": "About",
    "nav.materials": "Materials",
    "nav.features": "Features",
    "nav.sizes": "Sizes",
    "nav.contact": "Contact",
    "nav.enquire": "Enquire Now",
    "hero.tag": "Sustainable Solutions",
    "hero.title1": "Replacing Plastic,",
    "hero.title2": "Empowering India",
    "hero.sub":
      "Compostable bags — the future of sustainable packaging. Crafted from corn starch & natural polymers, certified for a cleaner tomorrow.",
    "hero.cta1": "Explore Bag Sizes",
    "hero.cta2": "Learn More",
    "cert.madeIndia": "Made in India",
    "cert.compostable": "100% Compostable",
    "cert.iso": "ISO 17088:2021 Certified",
    "cert.fssai": "FSSAI / CPCB Compliant",
    "about.kicker": "About Ganesha Bag",
    "about.title": "The Future of Sustainable Packaging",
    "about.sub":
      "We are on a mission to replace single-use plastic with truly compostable alternatives — engineered from plant-based materials, designed for everyday use, and certified safe for soil and sea.",
    "materials.kicker": "What's Inside",
    "materials.title": "Crafted from Nature, Returns to Nature",
    "materials.sub":
      "Every Ganesha Bag is a precise blend of plant-derived ingredients — engineered to perform like plastic, then quietly compost back to soil.",
    "features.kicker": "Why Choose Us",
    "features.title": "Better for You. Better for the Planet.",
    "sizes.kicker": "Bag Sizes",
    "sizes.title": "Find Your Perfect Fit",
    "sizes.sub": "All sizes are 100% compostable & ISO 17088:2021 certified — from kirana stores to retail chains.",
    "sizes.chartTitle": "SIZE CHART",
    "sizes.chartSub": "Compostable Carry Bag",
    "sizes.colSize": "Size in Inches",
    "sizes.colMicron": "Micron",
    "sizes.colPcs": "Nos. of Pcs (Apx)",
    "sizes.colLoad": "Load Capacity",
    "sizes.custom": "Need custom sizes or bulk pricing?",
    "cta.enquiry": "Send Requirement Enquiry",
    "contact.kicker": "Our Partners",
    "contact.title": "Meet the Partners",
    "contact.sub": "Reach out to our partners directly — we love hearing from distributors and conscious businesses.",
    "lang.label": "Language",
  },
  hi: {
    "nav.about": "हमारे बारे में",
    "nav.materials": "सामग्री",
    "nav.features": "विशेषताएँ",
    "nav.sizes": "साइज़",
    "nav.contact": "संपर्क",
    "nav.enquire": "पूछताछ करें",
    "hero.tag": "टिकाऊ समाधान",
    "hero.title1": "प्लास्टिक की जगह,",
    "hero.title2": "भारत को सशक्त बनाना",
    "hero.sub": "कम्पोस्टेबल बैग — टिकाऊ पैकेजिंग का भविष्य। मक्के के स्टार्च और प्राकृतिक पॉलिमर से बने, स्वच्छ कल के लिए प्रमाणित।",
    "hero.cta1": "बैग साइज़ देखें",
    "hero.cta2": "और जानें",
    "cert.madeIndia": "मेड इन इंडिया",
    "cert.compostable": "100% कम्पोस्टेबल",
    "cert.iso": "ISO 17088:2021 प्रमाणित",
    "cert.fssai": "FSSAI / CPCB अनुपालन",
    "about.kicker": "गणेश बैग के बारे में",
    "about.title": "टिकाऊ पैकेजिंग का भविष्य",
    "about.sub":
      "हम सिंगल-यूज़ प्लास्टिक को सच्चे कम्पोस्टेबल विकल्पों से बदलने के मिशन पर हैं — पौधों से बने, रोज़मर्रा के लिए डिज़ाइन किए गए, और मिट्टी व समुद्र के लिए सुरक्षित प्रमाणित।",
    "materials.kicker": "अंदर क्या है",
    "materials.title": "प्रकृति से बना, प्रकृति में वापस",
    "materials.sub": "हर गणेश बैग पौध-आधारित सामग्री का सटीक मिश्रण है — प्लास्टिक जैसा प्रदर्शन, फिर चुपचाप मिट्टी में मिल जाता है।",
    "features.kicker": "हमें क्यों चुनें",
    "features.title": "आपके लिए बेहतर। ग्रह के लिए बेहतर।",
    "sizes.kicker": "बैग साइज़",
    "sizes.title": "अपना सही साइज़ चुनें",
    "sizes.sub": "सभी साइज़ 100% कम्पोस्टेबल और ISO 17088:2021 प्रमाणित — किराना दुकान से रिटेल चेन तक।",
    "sizes.chartTitle": "साइज़ चार्ट",
    "sizes.chartSub": "कम्पोस्टेबल कैरी बैग",
    "sizes.colSize": "साइज़ (इंच में)",
    "sizes.colMicron": "माइक्रोन",
    "sizes.colPcs": "पीस की संख्या (लगभग)",
    "sizes.colLoad": "लोड क्षमता",
    "sizes.custom": "कस्टम साइज़ या थोक मूल्य चाहिए?",
    "cta.enquiry": "पूछताछ भेजें",
    "contact.kicker": "हमारे पार्टनर",
    "contact.title": "पार्टनर्स से मिलें",
    "contact.sub": "हमारे पार्टनर्स से सीधे संपर्क करें — हमें वितरकों और जागरूक व्यवसायों से सुनना अच्छा लगता है।",
    "lang.label": "भाषा",
  },
  mr: {
    "nav.about": "आमच्याबद्दल",
    "nav.materials": "साहित्य",
    "nav.features": "वैशिष्ट्ये",
    "nav.sizes": "आकार",
    "nav.contact": "संपर्क",
    "nav.enquire": "चौकशी करा",
    "hero.tag": "शाश्वत उपाय",
    "hero.title1": "प्लास्टिकची जागा,",
    "hero.title2": "भारताला सशक्त बनवणे",
    "hero.sub": "कंपोस्टेबल बॅग्स — शाश्वत पॅकेजिंगचे भविष्य. मक्याच्या स्टार्च व नैसर्गिक पॉलिमरपासून बनवलेले, स्वच्छ उद्यासाठी प्रमाणित.",
    "hero.cta1": "बॅग आकार पहा",
    "hero.cta2": "अधिक जाणून घ्या",
    "cert.madeIndia": "मेड इन इंडिया",
    "cert.compostable": "100% कंपोस्टेबल",
    "cert.iso": "ISO 17088:2021 प्रमाणित",
    "cert.fssai": "FSSAI / CPCB अनुरूप",
    "about.kicker": "गणेश बॅगबद्दल",
    "about.title": "शाश्वत पॅकेजिंगचे भविष्य",
    "about.sub":
      "एकेरी वापराच्या प्लास्टिकला खऱ्या कंपोस्टेबल पर्यायांनी बदलण्याचे आमचे ध्येय आहे — वनस्पतींपासून बनवलेले, दैनंदिन वापरासाठी डिझाइन केलेले, माती व समुद्रासाठी सुरक्षित प्रमाणित.",
    "materials.kicker": "आत काय आहे",
    "materials.title": "निसर्गातून बनलेले, निसर्गाकडे परत",
    "materials.sub": "प्रत्येक गणेश बॅग वनस्पती-आधारित घटकांचे अचूक मिश्रण आहे — प्लास्टिकसारखे काम करते, नंतर शांतपणे मातीत मिसळते.",
    "features.kicker": "आम्हाला का निवडावे",
    "features.title": "तुमच्यासाठी उत्तम. ग्रहासाठी उत्तम.",
    "sizes.kicker": "बॅग आकार",
    "sizes.title": "तुमचा योग्य आकार शोधा",
    "sizes.sub": "सर्व आकार 100% कंपोस्टेबल व ISO 17088:2021 प्रमाणित — किराणा दुकानापासून रिटेल चेनपर्यंत.",
    "sizes.chartTitle": "साइज़ चार्ट",
    "sizes.chartSub": "कंपोस्टेबल कॅरी बॅग",
    "sizes.colSize": "आकार (इंच)",
    "sizes.colMicron": "मायक्रॉन",
    "sizes.colPcs": "नग संख्या (अंदाजे)",
    "sizes.colLoad": "लोड क्षमता",
    "sizes.custom": "कस्टम आकार किंवा घाऊक दर हवे आहेत?",
    "cta.enquiry": "चौकशी पाठवा",
    "contact.kicker": "आमचे पार्टनर",
    "contact.title": "पार्टनर्सना भेटा",
    "contact.sub": "आमच्या पार्टनर्सशी थेट संपर्क साधा — वितरक व जागरूक व्यवसायांकडून ऐकायला आम्हाला आवडते.",
    "lang.label": "भाषा",
  },
  gu: {
    "nav.about": "અમારા વિશે",
    "nav.materials": "સામગ્રી",
    "nav.features": "વિશેષતાઓ",
    "nav.sizes": "સાઈઝ",
    "nav.contact": "સંપર્ક",
    "nav.enquire": "પૂછપરછ કરો",
    "hero.tag": "ટકાઉ ઉકેલો",
    "hero.title1": "પ્લાસ્ટિકનું સ્થાન,",
    "hero.title2": "ભારતને સશક્ત બનાવવું",
    "hero.sub": "કમ્પોસ્ટેબલ બેગ — ટકાઉ પેકેજિંગનું ભવિષ્ય. મકાઈના સ્ટાર્ચ અને કુદરતી પોલિમરમાંથી બનાવેલ, સ્વચ્છ આવતીકાલ માટે પ્રમાણિત.",
    "hero.cta1": "બેગ સાઈઝ જુઓ",
    "hero.cta2": "વધુ જાણો",
    "cert.madeIndia": "મેડ ઇન ઇન્ડિયા",
    "cert.compostable": "100% કમ્પોસ્ટેબલ",
    "cert.iso": "ISO 17088:2021 પ્રમાણિત",
    "cert.fssai": "FSSAI / CPCB અનુરૂપ",
    "about.kicker": "ગણેશ બેગ વિશે",
    "about.title": "ટકાઉ પેકેજિંગનું ભવિષ્ય",
    "about.sub":
      "અમે સિંગલ-યુઝ પ્લાસ્ટિકને સાચા કમ્પોસ્ટેબલ વિકલ્પોથી બદલવાના મિશન પર છીએ — છોડ આધારિત સામગ્રીમાંથી બનાવેલ, રોજિંદા ઉપયોગ માટે ડિઝાઇન કરેલ, માટી અને દરિયા માટે સુરક્ષિત પ્રમાણિત.",
    "materials.kicker": "અંદર શું છે",
    "materials.title": "કુદરતમાંથી બનેલ, કુદરતમાં પાછું",
    "materials.sub": "દરેક ગણેશ બેગ છોડ આધારિત ઘટકોનું ચોક્કસ મિશ્રણ છે — પ્લાસ્ટિક જેવું પ્રદર્શન, પછી શાંતિથી માટીમાં ભળી જાય.",
    "features.kicker": "અમને કેમ પસંદ કરો",
    "features.title": "તમારા માટે વધુ સારું. પૃથ્વી માટે વધુ સારું.",
    "sizes.kicker": "બેગ સાઈઝ",
    "sizes.title": "તમારી યોગ્ય સાઈઝ શોધો",
    "sizes.sub": "બધી સાઈઝ 100% કમ્પોસ્ટેબલ અને ISO 17088:2021 પ્રમાણિત — કિરાણા દુકાનથી રિટેલ ચેન સુધી.",
    "sizes.chartTitle": "સાઈઝ ચાર્ટ",
    "sizes.chartSub": "કમ્પોસ્ટેબલ કેરી બેગ",
    "sizes.colSize": "સાઈઝ (ઇંચમાં)",
    "sizes.colMicron": "માઈક્રોન",
    "sizes.colPcs": "નંગ સંખ્યા (અંદાજે)",
    "sizes.colLoad": "લોડ ક્ષમતા",
    "sizes.custom": "કસ્ટમ સાઈઝ કે જથ્થાબંધ ભાવ જોઈએ છે?",
    "cta.enquiry": "પૂછપરછ મોકલો",
    "contact.kicker": "અમારા પાર્ટનર",
    "contact.title": "પાર્ટનર્સને મળો",
    "contact.sub": "અમારા પાર્ટનર્સનો સીધો સંપર્ક કરો — વિતરકો અને જાગૃત વ્યવસાયોને સાંભળવું અમને ગમે છે.",
    "lang.label": "ભાષા",
  },
};

interface Ctx {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<Ctx | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    const saved = localStorage.getItem("ganesha-lang") as Lang | null;
    return saved && dictionaries[saved] ? saved : "en";
  });

  useEffect(() => {
    localStorage.setItem("ganesha-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (nextLang: Lang) => setLangState(nextLang);
  const t = (key: string) => dictionaries[lang][key] ?? dictionaries.en[key] ?? key;

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
