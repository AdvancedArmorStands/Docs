# Minecraft Plugin Docs (AAS)

This repository contains the source code for the documentation website of the AAS Minecraft Plugin. The website is built using Docusaurus.

## Getting Started

To get a local copy up and running, follow these simple steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd minecraft-plugin-docs
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
4. Start the development server:
   ```bash
   npm run start
   # or
   yarn start
   ```
   This will open the website in your default browser, usually at `http://localhost:3000`.

## Building the Site

To generate a static build of the website, run:

```bash
npm run build
# or
yarn build
```
The build artifacts will be located in the `build` directory.

## Deployment

To deploy the website (e.g., to GitHub Pages if configured), run:

```bash
npm run deploy
# or
yarn deploy
```
Ensure your deployment configuration in `docusaurus.config.js` is set up correctly.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please follow these steps:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Licence

Distributed under the MIT License. See `LICENCE` for more information.