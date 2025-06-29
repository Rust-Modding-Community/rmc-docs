import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  title: "Rust Modding Community",
  description: "Framework independent modding documentation!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/img/LogoRMCDark.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/welcome' },
      { text: 'Frameworks', items:
        [
          { text: 'Carbon', link: 'https://carbonmod.gg' },
          { text: 'Oxide', link: 'https://docs.oxidemod.com' },
        ]
      }
    ],

    sidebar: [
        { text: 'Getting Started',
          link: '/getting-started/getting-started',
          collapsed: false,
          items: [
            {text: 'Choosing Your Framework', link: '/getting-started/choosing-framework' },
            { text: 'Configuring Your IDE', link: '/getting-started/ide-configuration'},
            { text: 'Plugin Structure', link: '/getting-started/plugin-structure' },
            { text: 'Configuration Files', link: '/getting-started/configuration-files' },
            { text: 'Data Files', link: '/getting-started/data-files' },
            { text: 'Localization (Lang)', link: '/getting-started/localization' },
            { text: 'Troubleshooting', link: '/getting-started/troubleshooting' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Rust-Modding-Community/rmc-docs' }
    ],
    footer: {
      message: 'Released under GPL-3.0 license.',
      copyright: 'Copyright © 2024-Present Rust Modding Community'
    }
  }
})
