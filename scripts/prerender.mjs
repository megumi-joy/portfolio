import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App.jsx';

const distPath = path.resolve('dist', 'index.html');

try {
    let template = fs.readFileSync(distPath, 'utf-8');

    // Render the App
    const appHtml = renderToString(React.createElement(App));

    // Replace the empty root div with the rendered HTML
    const result = template.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
    );

    fs.writeFileSync(distPath, result);
    console.log('Successfully prerendered index.html with content length:', appHtml.length);
} catch (error) {
    console.error('Failed to prerender:', error);
    process.exit(1);
}
