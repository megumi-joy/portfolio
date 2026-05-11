import React, { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './components/LanguageContext';
import RootLayout from './components/layout/RootLayout';

// Lazy-loaded pages for performance
const Home = lazy(() => import('./pages/Home'));
const Empresas = lazy(() => import('./pages/Empresas'));
const Voicey = lazy(() => import('./pages/Voicey'));
const Games = lazy(() => import('./pages/Games'));
const Sobre = lazy(() => import('./pages/Sobre'));

const PageLoader = () => (
    <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
    </div>
);

function App() {
    return (
        <HelmetProvider>
            <LanguageProvider>
                <HashRouter>
                    <Suspense fallback={<PageLoader />}>
                        <Routes>
                            <Route element={<RootLayout />}>
                                <Route index element={<Home />} />
                                <Route path="empresas" element={<Empresas />} />
                                <Route path="voicey" element={<Voicey />} />
                                <Route path="games" element={<Games />} />
                                <Route path="sobre" element={<Sobre />} />
                            </Route>
                        </Routes>
                    </Suspense>
                </HashRouter>
            </LanguageProvider>
        </HelmetProvider>
    );
}

export default App;
