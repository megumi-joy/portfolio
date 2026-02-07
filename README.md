# Aurora Sunrise Portfolio

A modern, high-performance portfolio website built with React, Tailwind CSS, and Framer Motion. Features a custom 3D-style design, dark mode aesthetics, and seamless integration with Godot Engine web exports.

## Features

-   **Dynamic Content**: Fully data-driven via `src/data.js`.
-   **Global i18n**: Support for English, Spanish, Russian, and Ukrainian with instant switching.
-   **Resume Generation**: Auto-generated PDF resume from profile data using React-PDF.
-   **Game Integration**: Embedded Godot Engine WebGL exports with custom overlays.

## Development

1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
3.  **Build for Production**:
    ```bash
    npm run build
    ```

## Adding Godot Games

This portfolio is designed to showcase Godot WebGL exports seamlessly.

1.  **Export your Game**:
    -   In Godot, go to **Export > Web**.
    -   Uncheck "Full Page" if you want it to fit in the embed perfectly (optional, handled by iframe).
    -   Name your html file `index.html`.

2.  **Place in Public Folder**:
    -   Create a new folder in `public/games/` (e.g., `public/games/my-new-game`).
    -   Copy your exported files (`index.html`, `.wasm`, `.pck`, etc.) into this folder.

3.  **Register in Data**:
    -   Open `src/data.js`.
    -   Locate the `games` array in `BASE_PROFILE`.
    -   Add a new entry:
        ```javascript
        {
            title: "My New Game",
            description: "Description of the game mechanics.",
            thumbnail: "path/to/thumbnail.jpg", // 600x400 recommended
            path: "/games/my-new-game/index.html", // Path relative to public
            tags: ["Godot", "Genre", "Tag"]
        }
        ```

4.  **Test**:
    -   Run `npm run dev` and click "Play" on the game card in the Projects section.

## Customization

-   **Translations**: Add new keys to `TRANSLATIONS` in `src/data.js` and update components to use `activeProfile.ui.key`.
-   **Styling**: Tailwind configuration is in `tailwind.config.js`. Main styles in `src/index.css`.
