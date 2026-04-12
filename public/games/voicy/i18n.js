const translations = {
    'en': {
        'loader_init': 'Initializing Cognition...',
        'loader_core': 'Loading Sensory Core...',
        'loader_ready': 'System Ready',
        'title': 'Voicy | AI Synthetic Cognition',
        'desc': 'Interactive AI personality engine with multi-modal sensory awareness.'
    },
    'es': {
        'loader_init': 'Iniciando Cognición...',
        'loader_core': 'Cargando Núcleo Sensorial...',
        'loader_ready': 'Sistema Listo',
        'title': 'Voicy | Cognición Sintética IA',
        'desc': 'Motor de personalidad IA interactivo con conciencia sensorial multimodal.'
    },
    'ru': {
        'loader_init': 'Инициализация когнитивных функций...',
        'loader_core': 'Загрузка сенсорного ядра...',
        'loader_ready': 'Система готова',
        'title': 'Voicy | Искусственный когнитивный разум',
        'desc': 'Интерактивный движок ИИ-личности с мультимодальным сенсорным восприятием.'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    let currentLang = localStorage.getItem('voicy_lang') || 'en';
    applyTranslations(currentLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.getAttribute('data-lang');
            applyTranslations(lang);
            localStorage.setItem('voicy_lang', lang);
        });
    });
});

function applyTranslations(lang) {
    if (!translations[lang]) lang = 'en';

    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    const titleEl = document.querySelector('title');
    if (titleEl && translations[lang]['title']) {
        titleEl.innerText = translations[lang]['title'];
    }
}
