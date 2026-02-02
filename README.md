# Portfolio - Aurora Sunrise

A premium, interactive portfolio website built for a Creative Technologist & Game Engineer.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## ✨ Features
- **Premium UI**: Dark mode aesthetic with glassmorphism and gradients using TailwindCSS.
- **Animations**: Smooth entry and scroll animations powered by Framer Motion.
- **Dynamic Projects**: Showcases GitHub repositories and freelance work.
- **Editable Roadmap**: A JSON-backed "Plans" section for easy updates.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/aurorasunrisegames/portfolio.git
   ```
2. Navigate to the project folder:
   ```bash
   cd portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## 📝 Configuration

### Updating Plans & Roadmap
You can update the "Roadmap & Current Focus" section by editing `src/plans.json`.
Changes to this file will automatically reflect on the site.

```json
{
  "title": "My Roadmap",
  "items": [
    {
      "title": "New Project",
      "status": "In Progress",
      "date": "Q3 2026",
      "link": "https://github.com/..."
    }
  ]
}
```

### Updating Profile Data
Personal information (Name, Bio, Experience, Socials) is stored in `src/data.js`.

## 📦 Deployment

This project is configured to deploy automatically to **GitHub Pages**.

1. **Push** your changes to the `main` branch.
2. A GitHub Action will automatically build and deploy the site to the `gh-pages` branch.
3. Ensure your repository Settings > Pages source is set to `gh-pages`.

**Note:** If you change the repository name, update the `base` property in `vite.config.js` to match.
