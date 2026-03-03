import React, { createContext, useContext, useState } from 'react';
import { PROFILES } from '../data';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const [tone, setTone] = useState('serious'); // 'serious' or 'magical'
    const [specialty, setSpecialty] = useState('general'); // 'general', 'gamedev', 'frontend', 'python'

    const toggleTone = () => setTone(prev => prev === 'serious' ? 'magical' : 'serious');

    // Access the correct profile based on tone, specialty (if serious), and language
    const getActiveProfile = () => {
        if (tone === 'magical') {
            return PROFILES.magical?.[language] || PROFILES.magical?.en;
        }

        // Handle the renaming of 'serious' to 'general' or specific specialties
        const category = PROFILES[specialty] || PROFILES.general || PROFILES.serious;
        return category?.[language] || category?.en;
    };

    const activeProfile = getActiveProfile();

    return (
        <LanguageContext.Provider value={{
            language,
            setLanguage,
            tone,
            toggleTone,
            specialty,
            setSpecialty,
            activeProfile
        }}>
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
