import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Killari Documentation',
  tagline: 'LegalTech Innovation with Huawei AI',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://Killari-LegalTech-HuaweICT.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.NODE_ENV === 'production' ? '/Killari-client-doc/' : '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Killari-LegalTech-HuaweICT', // Nombre de la Organización
  projectName: 'Killari-client-doc', // Nombre del Repo
  // Branch used for deployment (gh-pages will be created by Docusaurus deploy)
  deploymentBranch: 'gh-pages',
  // Disable trailing slashes in generated URLs
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es', 
    locales: ['es', 'en'], // Añadimos 'en' para inglés
    localeConfigs: {
      es: {
        label: 'Español',
      },
      en: {
        label: 'English',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Enlace a edición en tu repo
          editUrl: 'https://github.com/Killari-LegalTech-HuaweICT/Killari-client-doc/edit/main/',
        },
        blog: false, // Desactivado para enfocarnos solo en documentación para el concurso
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark', // Killari se ve mejor en modo oscuro por defecto
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'KILLARI', // Texto estilizado vía CSS (Playfair Display)
      logo: {
        alt: 'Killari Logo',
        src: 'img/logo.svg',
        className: 'custom-navbar-logo',
        // ocultamos la imagen si prefieres solo el texto
        style: { display: 'none' },
      },
      items: [
        {
          type: 'doc',
          docId: 'explanation/project-vision',
          position: 'left',
          label: '🚀 Innovación',
        },
        {
          type: 'doc',
          docId: 'reference/client/index',
          position: 'left',
          label: '💻 Referencia Técnica',
        },
        {
          href: 'https://github.com/Killari-LegalTech-HuaweICT/Killari-client-doc',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Killari Project - Huawei ICT Competition. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'typescript'], // Importante para tus docs técnicos
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
