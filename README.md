<h1 align="center">
  <img src="assets/images/favicon.svg" alt="SiliconHub" width="120">
  <br>
  Silicon-Hub
</h1>

<p align="center">
  <strong>A modern, premium storefront for PC enthusiasts to shop state-of-the-art components.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

---

## Overview

**Silicon-Hub** is a clean, blazing-fast front-end eCommerce application designed for PC builders. From cutting-edge Graphic Cards to RGB Cooling Fans, it provides a seamless shopping catalog.

It features a clever, purely client-side architecture—complete with a `localStorage` powered shopping cart, simulated JWT authentication, and automated responsive invoice generation, requiring absolutely no backend!

## Key Features

- **Responsive Product Grids**: Built with modern CSS Grid and Flexbox to guarantee stunning, dynamic layouts across all device formats.
- **Persistent Shopping Cart**: Entirely client-side cart leveraging `localStorage` to preserve selected items between user sessions.
- **Smart Checkout Engine**: Generates professional, printable HTML invoices dynamically when completing a purchase.
- **Simulated Authentication**: Secure mockup of async login flow utilizing JavaScript Promises and `sessionStorage`.
- **Search & Routing**: Fast client-side keyword mapping for near-instant navigation between product categories.
- **Premium Aesthetics**: Smooth micro-animations, text typewriter effects, CSS gradients, dynamic popups, and custom interactive carousels.

## 🛠 Tech Stack

- **HTML5**: Semantic and highly structured markup.
- **CSS3**: Vanilla CSS with advanced Grid mapping, gradients, responsive breakpoints, and custom keyframe animations.
- **Vanilla JS (ES6+)**: Pure DOM manipulation, browser storage management, and modern Promise-based mock architecture.

## Project Structure

```text
SiliconHub/
├── assets/
│   └── images/            # High-res product and brand images
├── css/
│   └── styles.css         # Main stylesheet (layout, typography, breakpoints)
├── js/
│   ├── main.js            # Core UI logic (Carousel, Cart, Search, Invoice)
│   └── auth.js            # Mock Async authentication logic
├── pages/                 # Category-specific storefronts
│   ├── cooling-fans.html
│   ├── graphic-cards.html
│   ├── motherboards.html
│   ├── power-supply.html
│   ├── processors.html
│   ├── ram.html
│   └── ssd.html
├── index.html             # Homepage / Hero Landing
└── login.html             # Admin / Member Login Portal
```

## Getting Started

Since Silicon-Hub is a purely static front-end application, there is no complex build package or backend configuration required to run it!

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RishiBuilds/SiliconHub.git
   ```
2. **Launch the Store:**
   Simply double-click on `index.html` to open it in any modern web browser or use an extension like VSCode Live Server.

## Contributing

Contributions, UI improvements, and feature requests are very welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a GitHub Pull Request

## Author

_Developed with ❤️ by [Rishi](https://github.com/RishiBuilds)_
