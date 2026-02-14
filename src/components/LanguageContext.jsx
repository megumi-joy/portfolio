import React, { createContext, useContext, useState } from 'react';
import { PROFILES } from '../data';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const [tone, setTone] = useState('serious');

    const toggleTone = () => setTone(prev => prev === 'serious' ? 'magical' : 'serious');

    // Access the correct profile based on tone and language
    const activeProfile = PROFILES[tone]?.[language] || PROFILES.serious.en;

    return (
        <LanguageContext.Provider value={{ language, setLanguage, tone, toggleTone, activeProfile }}>
            {children}
        </LanguageContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
