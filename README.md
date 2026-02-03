# Killari Client Desktop — Documentación / Documentation

## Español

Este sitio, generado con [Docusaurus](https://docusaurus.io/), documenta el cliente de escritorio construido con Electron para Killari.

Puedes clonar este repositorio y ver la documentación de forma local, o consultar la versión publicada en GitHub Pages (la URL pública aparece en la sección "Pages" del repositorio en GitHub).

Clonar y ver localmente:

```bat
git clone https://github.com/Killari-LegalTech-HuaweICT/Killari-client-doc.git
cd Killari-client-doc
REM instalar dependencias (yarn o npm)
yarn
REM o
npm install

REM iniciar servidor de desarrollo
yarn start
REM o
npm run start
```

Construir para producción:

```bat
yarn build
REM o
npm run build
```

Despliegue en GitHub Pages (si aplica):

```bat
USE_SSH=true yarn deploy  REM usando SSH
REM o
GIT_USER=<TuUsuarioGitHub> yarn deploy  REM sin SSH
```

Nota: la URL pública de la documentación se puede consultar en GitHub → Settings → Pages del repositorio.

## English

This website, built with [Docusaurus](https://docusaurus.io/), documents the Electron-based desktop client for Killari.

You can clone this repository and view the docs locally, or open the published site on GitHub Pages (the public URL is available under the repository's Pages settings on GitHub).

Clone and view locally:

```bat
git clone https://github.com/Killari-LegalTech-HuaweICT/Killari-client-doc.git
cd Killari-client-doc
REM install dependencies (yarn or npm)
yarn
REM or
npm install

REM start development server
yarn start
REM or
npm run start
```

Build for production:

```bat
yarn build
REM or
npm run build
```

Deploy to GitHub Pages (if used):

```bat
USE_SSH=true yarn deploy  REM using SSH
REM or
GIT_USER=<YourGitHubUsername> yarn deploy  REM without SSH
```

If you host the docs with GitHub Pages, the deploy command will push the built site to the `gh-pages` branch. Check the repository's Pages settings for the exact public URL.

````
