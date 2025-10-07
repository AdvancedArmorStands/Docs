/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-starteds', 'installation', 'configuration', 'plugin-usage'],
    },
    {
      type: 'category',
      label: 'Menus',
      items: ['armorstand-menu', 'options-menu', 'actions-menu']
    },
    {
      type: 'category',
      label: 'Advanced',
      items: ['animations', 'development'],
    },
    {
      type: 'category',
      label: 'API',
      items: ['api-introduction', 'api-events', 'api-creating-an-armorstand', 'api-open-inventories']
    },
    {
      type: "category",
      label: "Errors",
      items: ['version-support-error', 'config-version-outdated']
    },
    {
      type: "category",
      label: "PlaceHolder Api",
      items: ['placeholders']
    },
    {
      type: 'category',
      label: 'FAQ & Troubleshooting',
      items: ['faq', 'troubleshooting'],
    },
  ],
};

export default sidebars;