# Zenith — Modern Generic Website Platform

A lightweight, high-performance, responsive multi-section landing page and generic website template built with standard HTML5, CSS3, and modern Vanilla JavaScript.

Zero dependencies, zero build steps, and ready to deploy anywhere.

---

## 🚀 Quick Start

### 1. View Directly
Double-click `index.html` to open it in any web browser.

### 2. Run with Local Python Server
If you'd like to test via localhost:
```bash
python -m http.server 8000
```
Then visit [http://localhost:8000](http://localhost:8000) in your browser.

---

## 📁 Project Structure

```text
c:\Users\USER\Downloads\G\AG\
├── index.html            # Main semantic HTML5 document
├── assets/
│   ├── css/
│   │   └── style.css     # CSS design tokens, layouts, responsive rules
│   └── js/
│       └── main.js       # Theme toggle, accordion, tabs, forms, mobile nav
└── README.md             # Project documentation
```

---

## ✨ Features

- **🌙 Dark / Light Mode**: Instant toggle with `localStorage` persistence and automatic OS `prefers-color-scheme` support.
- **📱 Fully Responsive**: Mobile-first design that scales smoothly from smartphones to 4K displays.
- **⚡ Zero Bloat**: No npm, node, bundlers, or heavy external CDNs required.
- **🎛 Interactive Showcase**: Functional tabbed view switching between Analytics, Automation, and Collaboration.
- **💳 Pricing Plan Switcher**: Real-time monthly vs. annual pricing calculation with a 20% discount badge.
- **❓ FAQ Accordion**: Smooth height-animated accordion with single-open focus.
- **📝 Lead Capture Form**: Clean form controls with client-side field validation and simulated AJAX submission state.
- **🔍 ScrollSpy & Header Blur**: Sticky navigation with active section highlighting on scroll.
- **♿ Accessible**: Uses semantic landmarks, ARIA labels, focus states, and high-contrast color ratios.

---

## 🎨 Customizing Styles & Colors

All branding styles are defined in `assets/css/style.css` using CSS custom properties:

```css
:root {
  --primary-500: #6366f1; /* Main brand color */
  --primary-gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%);
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  ...
}
```

Updating these variables automatically changes colors across cards, buttons, badges, and gradients.
