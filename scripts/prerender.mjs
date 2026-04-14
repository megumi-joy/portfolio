import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App.jsx';
import { generateProfile } from '../src/data.js';

const distPath = path.resolve('dist', 'index.html');

try {
    let template = fs.readFileSync(distPath, 'utf-8');

    // Render the App (Default view state) - with error handling
    let appHtml = '';
    try {
        appHtml = renderToString(React.createElement(App));
    } catch (renderError) {
        console.warn('Warning: Could not render App component to string. SEO block will still be injected. Error:', renderError.message);
        // Fallback to empty string for App, but continue with SEO block
    }

    // Generate massive hidden SEO content block containing all translated variants
    const langs = ['en', 'es', 'ru', 'uk', 'ca'];
    const specialties = ['general', 'gamedev', 'frontend', 'backend', 'embedded'];

    let seoHtml = '\n<!-- ATS & SEO HIDDEN BLOCK -->\n<div class="sr-only" style="clip: rect(0, 0, 0, 0); clip-path: inset(50%); height: 1px; width: 1px; margin: -1px; overflow: hidden; padding: 0; position: absolute;">';

    langs.forEach(lang => {
        specialties.forEach(spec => {
            try {
                const profile = generateProfile(spec, lang);
                seoHtml += `<article>`;
                seoHtml += `<h1>${profile.name} - ${profile.title}</h1>`;
                seoHtml += `<p>${profile.about}</p>`;

                // Experience
                seoHtml += `<h2>Experience</h2>`;
                if (profile.experience) {
                    profile.experience.forEach(exp => {
                        seoHtml += `<section>`;
                        seoHtml += `<h3>${exp.role} at ${exp.company} (${exp.period})</h3>`;
                        seoHtml += `<p>${exp.description}</p>`;
                        seoHtml += `<ul>`;
                        if (exp.achievements) {
                            exp.achievements.forEach(ach => {
                                seoHtml += `<li>${ach}</li>`;
                            });
                        }
                        seoHtml += `</ul>`;
                        if (exp.technologies) {
                            seoHtml += `<p>Technologies: ${exp.technologies.join(', ')}</p>`;
                        }
                        seoHtml += `</section>`;
                    });
                }

                // Projects
                seoHtml += `<h2>Projects</h2>`;
                if (profile.projects) {
                    profile.projects.forEach(proj => {
                        seoHtml += `<section>`;
                        seoHtml += `<h3>${proj.title}</h3>`;
                        seoHtml += `<p>${proj.description}</p>`;
                        if (proj.achievements) {
                            seoHtml += `<ul>`;
                            proj.achievements.forEach(ach => seoHtml += `<li>${ach}</li>`);
                            seoHtml += `</ul>`;
                        }
                        if (proj.tags) {
                            seoHtml += `<p>Skills: ${proj.tags.join(', ')}</p>`;
                        }
                        seoHtml += `</section>`;
                    });
                }

                // Skills
                seoHtml += `<h2>Skills</h2>`;
                if (profile.skills) {
                    seoHtml += `<ul>`;
                    profile.skills.forEach(skill => {
                        seoHtml += `<li>${skill.name}</li>`;
                    });
                    seoHtml += `</ul>`;
                }

                seoHtml += `</article>`;
            } catch (profileError) {
                console.error(`Error generating profile for ${spec}/${lang}:`, profileError.message);
            }
        });
    });

    seoHtml += '</div>\n<!-- END ATS & SEO HIDDEN BLOCK -->\n';

    // Replace the empty root div with the rendered HTML and the SEO block
    // Handle both <div id="root"></div> and <div id="root">...</div>
    const rootMarker = '<div id="root"></div>';
    let result = '';
    if (template.includes(rootMarker)) {
        result = template.replace(rootMarker, `<div id="root">${appHtml}</div>${seoHtml}`);
    } else {
        // Fallback: append before </body> if root marker is missing or different
        result = template.replace('</body>', `${seoHtml}</body>`);
        console.warn('Warning: <div id="root"></div> not found in template. Appended SEO block to </body> instead.');
    }

    fs.writeFileSync(distPath, result);
    console.log('Successfully prerendered index.html');
    console.log('- App HTML length:', appHtml.length);
    console.log('- SEO block length:', seoHtml.length);
} catch (error) {
    console.error('Failed to prerender:', error);
    process.exit(1);
}
