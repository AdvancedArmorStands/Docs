# Minecraft Plugin Documentation Website

This repository contains the documentation website for our Minecraft plugin, built using [Docusaurus](https://docusaurus.io/).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) version 18 or above
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-github-username/minecraft-plugin-docs.git
cd minecraft-plugin-docs

# Install dependencies
npm install
```

### Local Development

```bash
# Start the development server
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
# Build the static site
npm run build
```

This command generates static content into the `build` directory that can be served by any static hosting service.

### Deployment

```bash
# Deploy to GitHub Pages
GIT_USER=<Your GitHub username> npm run deploy
```

If you're using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## How to Add Pages

### Adding Documentation Pages

1. Create a new Markdown file in the `docs` directory or its subdirectories
2. Add frontmatter at the top of the file:

```md
---
id: unique-id
title: Page Title
sidebar_position: 1
---

# Your Content Here
```

3. The page will automatically appear in the sidebar based on its `sidebar_position`

### Organizing Content

You can organize your documentation using:

1. **Sidebar Categories**: Edit `sidebars.js` to group related pages
2. **Nested Folders**: Create subdirectories in the `docs` folder

Example sidebar structure in `sidebars.js`:

```js
module.exports = {
  someSidebar: {
    'Getting Started': ['introduction', 'installation', 'configuration'],
    'Features': ['commands', 'permissions'],
    'Advanced': ['api', 'development'],
  },
};
```

### Adding Images

1. Place image files in the `static/img` directory
2. Reference them in your Markdown:

```md
![Alt Text](/img/your-image.png)
```

## Customization

### Site Configuration

Edit the `docusaurus.config.js` file to customize:

- Site metadata
- Navigation bar and footer
- Theme settings
- Plugin options

### Styling

- Global CSS: Edit `src/css/custom.css`
- Component-specific CSS: Create `.module.css` files next to your components

## Project Structure

```
minecraft-plugin-docs/
├── blog/                      # [Removed as per requirements]
├── docs/                      # Documentation files
│   ├── getting-started.md     # Main landing page
│   ├── installation.md        # Installation guide
│   └── ...                    # Other documentation pages
├── src/
│   ├── css/                   # CSS files
│   │   └── custom.css         # Custom CSS
│   └── pages/                 # Custom React pages
│       └── index.js           # Homepage
├── static/                    # Static files
│   └── img/                   # Images
├── docusaurus.config.js       # Site configuration
├── sidebars.js                # Sidebar configuration
└── package.json               # NPM dependencies
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.