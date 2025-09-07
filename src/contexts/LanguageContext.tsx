import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = {
  code: string;
  name: string;
  nativeName: string;
};

export const supportedLanguages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
  { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
  { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া' }
];

type Translations = {
  [key: string]: {
    [langCode: string]: string;
  };
};

const translations: Translations = {
  // Chatbot messages
  'chatbot.welcome': {
    en: 'Welcome to AgriConnect! How can I help you today?',
    hi: 'एग्रीकनेक्ट में आपका स्वागत है! आज मैं आपकी कैसे सहायता कर सकता हूँ?',
    or: 'ଏଗ୍ରିକନେକ୍ଟରେ ଆପଣଙ୍କୁ ସ୍ୱାଗତ! ଆଜି ମୁଁ ଆପଣଙ୍କୁ କିପରି ସାହାଯ୍ୟ କରିପାରିବି?',
    mr: 'एग्रीकनेक्टमध्ये आपले स्वागत आहे! आज मी तुमची कशी मदत करू शकतो?',
    gu: 'એગ્રીકનેક્ટમાં તમારું સ્વાગત છે! આજે હું તમારી કેવી રીતે મદદ કરી શકું?',
    bn: 'এগ্রিকানেক্টে আপনাকে স্বাগতম! আজ আমি আপনাকে কীভাবে সাহায্য করতে পারি?',
    ta: 'அக்ரிகனெக்டில் உங்களை வரவேற்கிறோம்! இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?',
    kn: 'ಅಗ್ರಿಕನೆಕ್ಟ್‌ಗೆ ನಿಮ್ಮನ್ನು ಸ್ವಾಗತಿಸುತ್ತೇವೆ! ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?',
    te: 'అగ్రికనెక్ట్‌కు మిమ్మల్ని స్వాగతం! ఈరోజు నేను మీకు ఎలా సహాయం చేయగలను?',
    ml: 'അഗ്രികനെക്റ്റിലേക്ക് സ്വാഗതം! ഇന്ന് എനിക്ക് നിങ്ങളെ എങ്ങനെ സഹായിക്കാനാകും?',
    pa: 'ਐਗਰੀਕਨੈਕਟ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ! ਅੱਜ ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?',
    as: 'এগ্ৰিকনেক্টলৈ আপোনাক স্বাগতম! আজি মই আপোনাক কেনেকৈ সহায় কৰিব পাৰোঁ?'
  },
  'chatbot.placeholder': {
    en: 'Ask me about farming, investments, or insurance...',
    hi: 'मुझसे खेती, निवेश या बीमा के बारे में पूछें...',
    or: 'ମୋତେ ଚାଷ, ବିନିଯୋଗ କିମ୍ବା ବୀମା ବିଷୟରେ ପଚାରନ୍ତୁ...',
    mr: 'मला शेती, गुंतवणूक किंवा विमा बद्दल विचारा...',
    gu: 'મને ખેતી, રોકાણ અથવા વીમા વિશે પૂછો...',
    bn: 'আমাকে কৃষি, বিনিয়োগ বা বীমা সম্পর্কে জিজ্ঞাসা করুন...',
    ta: 'விவசாயம், முதலீடு அல்லது காப்பீடு பற்றி என்னிடம் கேளுங்கள்...',
    kn: 'ಕೃಷಿ, ಹೂಡಿಕೆ ಅಥವಾ ವಿಮೆಯ ಬಗ್ಗೆ ನನ್ನನ್ನು ಕೇಳಿ...',
    te: 'వ్యవసాయం, పెట్టుబడులు లేదా భీమా గురించి నన్ను అడగండి...',
    ml: 'കൃഷി, നിക്ഷേപം അല്ലെങ്കിൽ ഇൻഷുറൻസിനെക്കുറിച്ച് എന്നോട് ചോദിക്കൂ...',
    pa: 'ਮੈਨੂੰ ਖੇਤੀ, ਨਿਵੇਸ਼ ਜਾਂ ਬੀਮੇ ਬਾਰੇ ਪੁੱਛੋ...',
    as: 'মোক কৃষি, বিনিয়োগ বা বীমাৰ বিষয়ে সোধক...'
  },
  'chatbot.send': {
    en: 'Send',
    hi: 'भेजें',
    or: 'ପଠାନ୍ତୁ',
    mr: 'पाठवा',
    gu: 'મોકલો',
    bn: 'পাঠান',
    ta: 'அனுப்பு',
    kn: 'ಕಳುಹಿಸಿ',
    te: 'పంపు',
    ml: 'അയക്കുക',
    pa: 'ਭੇਜੋ',
    as: 'পঠিয়াওক'
  },
  'language.select': {
    en: 'Select Language',
    hi: 'भाषा चुनें',
    or: 'ଭାଷା ବାଛନ୍ତୁ',
    mr: 'भाषा निवडा',
    gu: 'ભાષા પસંદ કરો',
    bn: 'ভাষা নির্বাচন করুন',
    ta: 'மொழியைத் தேர்ந்தெடுக்கவும்',
    kn: 'ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    te: 'భాషను ఎంచుకోండి',
    ml: 'ഭാഷ തിരഞ്ഞെടുക്കുക',
    pa: 'ਭਾਸ਼ਾ ਚੁਣੋ',
    as: 'ভাষা নিৰ্বাচন কৰক'
  }
};

type LanguageContextType = {
  currentLanguage: Language;
  changeLanguage: (language: Language) => void;
  translate: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(supportedLanguages[0]);

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  const translate = (key: string): string => {
    return translations[key]?.[currentLanguage.code] || translations[key]?.['en'] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};