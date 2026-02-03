import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Killari Documentation",
  tagline: "LegalTech Innovation with Huawei AI",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://Killari-LegalTech-HuaweICT.github.io",
  baseUrl: "/Killari-client-doc/",
  organizationName: "Killari-LegalTech-HuaweICT",
  projectName: "Killari-client-doc",
  deploymentBranch: "gh-pages",
  trailingSlash: false,
  onBrokenLinks: "throw",
  // onBrokenMarkdownLinks was deprecated in Docusaurus v4 migration path.
  // Move the setting under the `markdown.hooks` namespace to avoid warnings.
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },
  i18n: {
    defaultLocale: "es", // Cambiado a español ya que tu doc es en español
    locales: ["es"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Enlace a edición en tu repo
          editUrl:
            "https://github.com/Killari-LegalTech-HuaweICT/Killari-client-doc/edit/main/",
        },
        blog: false, // Desactivado para enfocarnos solo en documentación para el concurso
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      defaultMode: "dark", // Killari se ve mejor en modo oscuro por defecto
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "KILLARI", // Texto estilizado vía CSS (Playfair Display)
      logo: {
        alt: "Killari Logo",
        src: "img/logo.svg",
        className: "custom-navbar-logo",
        // ocultamos la imagen si prefieres solo el texto
        style: { display: "none" },
      },
      items: [
        {
          type: "doc",
          docId: "explanation/vision-del-proyecto",
          position: "left",
          label: "🚀 Innovación",
        },
        {
          type: "doc",
          docId: "tutorials/index",
          position: "left",
          label: "📖 Tutoriales",
        },
        {
          type: "doc",
          docId: "reference/client/index",
          position: "left",
          label: "💻 Código",
        },
        {
          href: "https://github.com/Killari-LegalTech-HuaweICT",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Killari © ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "json", "typescript"], // Importante para tus docs técnicos
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
