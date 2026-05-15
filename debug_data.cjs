

const lucide = {
    Github: {}, Linkedin: {}, Mail: {}, Cpu: {}, Gamepad2: {},
    Globe: {}, Server: {}, Terminal: {}, Layers: {}, Cuboid: {}
};

// Mock lucide-react
const mockFile = `
const Github = {}, Linkedin = {}, Mail = {}, Cpu = {}, Gamepad2 = {}, 
      Globe = {}, Server = {}, Terminal = {}, Layers = {}, Cuboid = {};
`;

const fs = require('fs');
let content = fs.readFileSync('/home/yip/Documents/GitHub/portfolio/src/data.js', 'utf8');
// Remove imports
content = content.replace(/import {[^}]+} from 'lucide-react';/, mockFile);
// Remove export keywords (to avoid export issues in simple node script)
content = content.replace(/export /g, '');

try {
    eval(content);
    console.log("Success: data.js initialized without errors.");
} catch (e) {
    console.error("Error during data.js initialization:");
    console.error(e);
    process.exit(1);
}
