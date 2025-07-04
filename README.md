# Rankly360 - Local Optimization. Simplified.

A modern, responsive one-page website for Rankly360, a Google My Business optimization service company.

## Features

- **Hero Section**: Eye-catching hero with background image and clear CTA
- **What We Do**: Explains the business purpose and GMB optimization focus
- **Services Section**: Comprehensive list of GMB optimization services
- **About Section**: Information about the founder and company mission
- **Footer**: Contact information and social links

## Technologies Used

- React 18
- Tailwind CSS
- Framer Motion (for animations)
- Lucide React (for icons)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── HeroSection.js
│   ├── WhatWeDoSection.js
│   ├── ServicesSection.js
│   ├── AboutSection.js
│   └── Footer.js
├── App.js
├── index.js
└── index.css
```

## Customization

- **Colors**: Modify the primary color scheme in `tailwind.config.js`
- **Content**: Update text content in each component file
- **Images**: Replace `public/eye.jpg` with your own hero background image
- **Contact Info**: Update contact information in the Footer component

## Deployment

This project can be easily deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## License

This project is for demonstration purposes. 