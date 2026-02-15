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

## Game Integration & Automation

This portfolio supports automated building and deployment of Godot games directly from their own repositories.

### 🚀 Automated Workflow (Recommended)

1.  **Grant Access**: Create a [GitHub Personal Access Token (PAT)](https://github.com/settings/tokens) with `repo` scope.
2.  **Set Secret**: In your **Game Repository**, go to `Settings > Secrets and variables > Actions` and add a secret named `PORTFOLIO_PAT` with your token.
3.  **Add Workflow**: Copy [.github/templates/deploy-game.yml.template](file:///.github/templates/deploy-game.yml.template) to `.github/workflows/deploy.yml` in your game repository.
4.  **Metadata (Optional)**: Add a `metadata.json` to your game repo root for custom translations/tags.
5.  **Push**: Every push to `main` will now build the Godot project and automatically register it in the portfolio.

### 🛠️ Manual Workflow

1.  **Export**: Export your Godot project to WebGL (name it `index.html`).
2.  **Place**: Create `public/games/your-game/` and paste the export files.
3.  **Register**: Update `GAMES_DATA` in `src/data.js` manually.

## Customization

-   **Translations**: Add new keys to `TRANSLATIONS` in `src/data.js` and update components to use `activeProfile.ui.key`.
-   **Styling**: Tailwind configuration is in `tailwind.config.js`. Main styles in `src/index.css`.
