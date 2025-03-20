// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rust Modding Community',
  tagline: 'Rust plugins made easy!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://rmc-docs.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Bubbafett5611', // Usually your GitHub org/user name.
  projectName: 'rmc-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: '/',
          editUrl:
            'https://github.com/Rust-Modding-Community/rmc-docs/tree/main',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Rust-Modding-Community/rmc-docs/tree/main',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Rust Modding Community',
        logo: {
          alt: 'Rust Modding Community Logo',
          src: 'img/LogoRMCDark.png', // default (light mode)
          srcDark: 'img/LogoRMCLight.png', // for dark mode
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guides',
          },
          {
            to: '/blog',
            label: 'News',
            position: 'left'
          },
          {
            href: 'https://docs.carbonmod.gg',
            label: 'Carbon',
            position: 'right',
          },
          {
            href: 'https://docs.oxidemod.com',
            label: 'Oxide',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Cobalt Studios',
                href: 'https://discord.gg/cobaltstudios',
              },
            ],
          },
          {
            title: 'Powered by',
            items: [
              {
                label: 'Netlify',
                href: 'https://www.netlify.com',
              },
            ],
          },
          {
            title: 'Project',
            items: [
              {
                label: 'Code of Conduct',
                href: 'https://github.com/Rust-Modding-Community/rmc-docs/blob/main/CODE_OF_CONDUCT.md',
              },
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Rust Modding Community. Rust Modding Community is not associated with Facepunch Studios, Carbon, or Oxide/uMod. This site is powered by <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">Netlify</a>.`,
      },
      announcementBar: {
        id: 'work_in_progress',
        content:
          'This site is a work in progress. Please report any issues on our Discord server.',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['csharp'],
      },
    }),
};

config.plugins = [require.resolve('docusaurus-lunr-search')];

export default config;
