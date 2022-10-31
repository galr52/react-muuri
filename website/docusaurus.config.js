module.exports = {
  title: 'React Muuri Official',
  tagline: 'The layout engine for React',
  url: 'https://galr52.github.io',
  baseUrl: '/react-muuri-official/',
  favicon: 'logo/muuri-transparent.png',
  organizationName: 'paol-imi',
  projectName: 'react-muuri-official',
  themeConfig: {
    announcementBar: {
      id: 'supportus',
      content:
        '⭐️ If you like react-muuri-official, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/galr52/react-muuri-official">GitHub</a>! ⭐️',
    },
    algolia: {
      apiKey: 'cc417223ab762185c5fb6de237deaba0',
      indexName: 'react-muuri-official',
    },
    navbar: {
      title: 'React Muuri Official',
      logo: {
        alt: 'React Muuri Official Logo',
        src: 'logo/muuri-transparent.png',
      },
      links: [
        {
          to: 'docs/main-concepts/components',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'showcase', label: 'Showcase', position: 'left'},
        {
          href: 'https://github.com/galr52/react-muuri-official',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Paol-imi. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/galr52/react-muuri-official/edit/master/website',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
