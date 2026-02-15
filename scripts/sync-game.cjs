const fs = require('fs');
const path = require('path');

/**
 * Script to sync game metadata into src/data.js
 * Usage: node scripts/sync-game.js <path-to-metadata.json>
 */

const metadataPath = process.argv[2];
const dataJSPath = path.join(__dirname, '../src/data.js');

if (!metadataPath) {
    console.error('Error: Please provide a path to metadata.json');
    process.exit(1);
}

if (!fs.existsSync(metadataPath)) {
    console.error(`Error: Metadata file not found at ${metadataPath}`);
    process.exit(1);
}

// 1. Read metadata
const newGameMetadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
const gameId = Object.keys(newGameMetadata)[0];
const gameData = newGameMetadata[gameId];

if (!gameId || !gameData) {
    console.error('Error: Invalid metadata format.');
    process.exit(1);
}

// 2. Read src/data.js
let dataJSContent = fs.readFileSync(dataJSPath, 'utf8');

// 3. Find GAMES_DATA object
const gamesDataStartMatch = dataJSContent.match(/const GAMES_DATA = \{/);
if (!gamesDataStartMatch) {
    console.error('Error: Could not find GAMES_DATA in src/data.js');
    process.exit(1);
}

const startIdx = gamesDataStartMatch.index + gamesDataStartMatch[0].length;
// Find the matching closing bracket for GAMES_DATA
// We'll find the next "};" that has no leading indentation (or just the very next one if it's the only object)
const endMatch = dataJSContent.substring(startIdx).match(/\n\};/);
if (!endMatch) {
    console.error('Error: Could not find end of GAMES_DATA in src/data.js');
    process.exit(1);
}
const endIdx = startIdx + endMatch.index;

const currentGamesDataStr = dataJSContent.substring(startIdx, endIdx);

// 4. Update or Add
const gameKey = `    "${gameId}":`;
const gameKeyAlt = `    ${gameId}:`;
let updatedGamesDataStr;

// Find if game already exists
let gameStartIdx = currentGamesDataStr.indexOf(gameKey);
if (gameStartIdx === -1) {
    gameStartIdx = currentGamesDataStr.indexOf(gameKeyAlt);
}

if (gameStartIdx !== -1) {
    console.log(`Updating existing game: ${gameId}`);

    // Find where the entry ends. 
    // It ends at the next line that starts with "    }," or is the end of the object
    // A more robust way is to look for the next entry or the end of the string.
    // Each game entry is:
    //    id: {
    //        ...
    //    },

    // Find the next game entry at the same indentation (4 spaces followed by " or letter)
    let nextGameIdx = currentGamesDataStr.substring(gameStartIdx + 1).search(/\n    ["a-zA-Z]/);

    if (nextGameIdx !== -1) {
        nextGameIdx += gameStartIdx + 1;
        const before = currentGamesDataStr.substring(0, gameStartIdx);
        const after = currentGamesDataStr.substring(nextGameIdx);
        updatedGamesDataStr = before + formatGameEntry(gameId, gameData) + '\n' + after.trimStart();
    } else {
        // It's the last game entry
        const before = currentGamesDataStr.substring(0, gameStartIdx);
        updatedGamesDataStr = before + formatGameEntry(gameId, gameData);
    }
} else {
    console.log(`Adding new game: ${gameId}`);
    updatedGamesDataStr = currentGamesDataStr.trimEnd();
    if (updatedGamesDataStr.length > 0 && !updatedGamesDataStr.endsWith(',')) {
        updatedGamesDataStr += ',';
    }
    updatedGamesDataStr += '\n' + formatGameEntry(gameId, gameData);
}

// 5. Update data.js content
const updatedDataJSContent = dataJSContent.substring(0, startIdx) +
    updatedGamesDataStr +
    dataJSContent.substring(endIdx);

fs.writeFileSync(dataJSPath, updatedDataJSContent, 'utf8');
console.log(`Successfully synced ${gameId} to src/data.js`);

/**
 * Formats the game object into the string format used in data.js
 */
function formatGameEntry(id, data) {
    // Format JSON with 8 spaces indentation (nested inside GAMES_DATA which has 4)
    const json = JSON.stringify(data, null, 4);
    // Indent each line by 4 spaces
    const indented = json.split('\n').map(line => '    ' + line).join('\n');
    // Remove quotes from keys
    const cleanup = indented.replace(/"([^"]+)":/g, '$1:').replace(/"/g, "'");
    return `    ${id}: ${cleanup.substring(4)},`;
}
