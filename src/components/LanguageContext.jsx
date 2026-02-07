import React, { createContext, useContext, useState } from 'react';
import { PROFILES } from '../data';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const activeProfile = PROFILES[language];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, activeProfile }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
