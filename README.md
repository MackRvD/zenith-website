# Zenith — Modern Generic Website Platform

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MackRvD/zenith-website)

A lightweight, high-performance, responsive multi-section landing page and generic website template built with standard HTML5, CSS3, and modern Vanilla JavaScript.

* **Live Demo (GitHub Pages)**: [https://mackrvd.github.io/zenith-website/](https://mackrvd.github.io/zenith-website/)
* **Repository**: [https://github.com/MackRvD/zenith-website](https://github.com/MackRvD/zenith-website)

Zero dependencies, zero build steps, and ready to deploy anywhere.

---

## 🚀 Deployment Options

### 1. One-Click Deploy on Vercel
Click the button below to deploy this repository directly to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MackRvD/zenith-website)

### 2. GitHub Pages
This project is already configured and live at:
[https://mackrvd.github.io/zenith-website/](https://mackrvd.github.io/zenith-website/)

### 3. Local Development
```powershell
# Run with Python built-in server
python -m http.server 8000
```
Then visit `http://localhost:8000`.

---

## 📁 Project Structure

```text
├── index.html            # Main semantic HTML5 document
├── assets/
│   ├── css/
│   │   └── style.css     # CSS design tokens, layouts, responsive rules
│   └── js/
│       └── main.js       # Theme toggle, accordion, tabs, forms, mobile nav
├── vercel.json           # Vercel routing and cache control configuration
├── .gitignore            # Ignored files
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
