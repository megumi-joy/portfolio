import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App.jsx';
import { generateProfile } from '../src/data.js';

const distPath = path.resolve('dist', 'index.html');

try {
    let template = fs.readFileSync(distPath, 'utf-8');

    // Render the App (Default view state)
    const appHtml = renderToString(React.createElement(App));

    // Generate massive hidden SEO content block containing all translated variants
    const langs = ['en', 'es', 'ru', 'uk'];
    const specialties = ['general', 'gamedev', 'frontend', 'backend', 'embedded'];

    let seoHtml = '\n<!-- ATS & SEO HIDDEN BLOCK -->\n<div class="sr-only" style="clip: rect(0, 0, 0, 0); clip-path: inset(50%); height: 1px; width: 1px; margin: -1px; overflow: hidden; padding: 0; position: absolute;">';

    langs.forEach(lang => {
        specialties.forEach(spec => {
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
        });
    });

    seoHtml += '</div>\n<!-- END ATS & SEO HIDDEN BLOCK -->\n';

    // Replace the empty root div with the rendered HTML and the SEO block
    const result = template.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>${seoHtml}`
    );

    fs.writeFileSync(distPath, result);
    console.log('Successfully prerendered index.html with App length:', appHtml.length, 'and SEO block length:', seoHtml.length);
} catch (error) {
    console.error('Failed to prerender:', error);
    process.exit(1);
}
