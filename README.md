# Animated Hamburger Menu Grid

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/animated-hamburger-menu-grid/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable reconstruction of the uploaded 6.9-second video.

## What the video shows
- Dark/black background and code-window panels.
- Heading “Menu” beside a burger emoji.
- Four small hamburger menu icons arranged in a 2×2 grid.
- The icons animate between three horizontal lines and an X/cross.
- CSS code panels show menu positioning rules and a full-screen CSS grid layout.
- The creator label “Web Developer @coding.stella”.

## Legible code details recreated

The video shows this positioning logic:

```css
.menu--1 label,
.menu--2 label { bottom: 0; }

.menu--3 label,
.menu--4 label { top: 0; }

.menu--1 label,
.menu--3 label { right: 0; }

.menu--2 label,
.menu--4 label { left: 0; }
```

It also shows a full-screen two-by-two grid:

```css
html, body {
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  background-color: #121314;
}

input { display: none; }

.grid {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  height: 100vh;
  position: absolute;
}

.grid > * { position: relative; }
```

## Features in this reconstruction
- Four interactive hamburger toggles.
- Smooth animated line-to-cross transitions.
- Circular SVG outline draw animation.
- Accessible buttons with `aria-expanded` and keyboard Escape support.
- Clicking a toggle opens a small navigation menu.
- Dark code-editor-inspired layout.
- Responsive mobile and desktop styling.
- No dependencies or build step required.

## Run

```bash
python -m http.server 8000
```

Open http://localhost:8000

## Structure

```text
animated-hamburger-menu-grid/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Accuracy note
The video is 720×1280, but the source panels contain small text. The legible HTML/CSS patterns and visible interaction have been recreated. The complete original source was not fully readable, so this is a functional reconstruction rather than a verbatim extraction.
