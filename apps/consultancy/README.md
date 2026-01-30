# Artemis Consultancy - Production Ready Consulting App

Specialized React application for Artemis Consultants, delivering cost-optimized, compliant, and fast-tracked construction project consulting.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm start

# Build for production
npm run build

# Run tests
npm test
```

## Project Structure

```
src/
├── layouts/              # App structure wrappers
│   └── AppLayout.jsx     # Header + Footer layout
├── pages/                # Route-level components
│   ├── Home.js
│   ├── About.js
│   ├── Services.js
│   ├── Approach.js
│   ├── Projects.js
│   ├── Contact.js
│   ├── WhyArtemis.js
│   └── styles/           # Page-specific CSS
├── components/           # Reusable UI components
│   ├── Header/
│   ├── Footer/
│   ├── Button/
│   └── PageBanner/
├── routes/               # Route configuration
│   └── index.js          # Central route definitions
├── assets/
│   ├── images/
│   └── styles/
│       ├── variables.css # Design tokens (colors, spacing, shadows)
│       ├── global.css    # Global styles
│       └── animations.css # Keyframe animations
├── hooks/                # Custom React hooks
│   └── useScrollAnimation.js
├── utils/                # Utilities and constants
└── App.js                # Root component
```

## Routes

- `/` - Home
- `/about` - About Us
- `/services` - Services Overview
- `/approach` - Our Approach
- `/projects` - Projects & Expertise
- `/why-artemis` - Why Choose Artemis
- `/contact` - Contact Us

## Styling

This app uses **CSS Modules** for component styling and **global CSS** for theme variables.

### Design Tokens (variables.css)
- **Primary**: Deep Maroon (`#722F37`)
- **Accent**: Subtle Gold (`#D4AF37`)
- **Text**: Charcoal (`#36454F`)
- **Background**: Off-white gradients

### Adding Styles
1. Global styles → `src/assets/styles/global.css`
2. Component styles → `Component.module.css` (co-located)
3. Page styles → `pages/PageName.module.css`

## Key Dependencies

- **React 18.3.1** - UI framework
- **React Router 6.30.3** - Client-side routing
- **React Icons 5.5.0** - Icon library
- **Headless UI 2.2.9** - Unstyled, accessible components
- **google-map-react 2.2.5** - Map integration

## Performance Optimizations

- Scroll-triggered animations using `useScrollAnimation` hook
- Image lazy loading
- CSS animations (prefer GPU-accelerated transforms)
- Code splitting via React Router (future: lazy loading)

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11 not supported

## Deployment

### Development Build
```bash
npm start
```

### Production Build
```bash
npm run build
```

Output: `build/` directory with optimized static files.

### Hosting on Apache

Place the `build/` contents in your document root:
```
/var/www/html/consultancy/
├── index.html
├── favicon.ico
├── static/
│   ├── css/
│   ├── js/
│   └── media/
└── manifest.json
```

Ensure Apache is configured for SPA routing:
```apache
<Directory /var/www/html/consultancy>
    FallbackResource /index.html
</Directory>
```

## Available Scripts

- `npm start` - Run dev server
- `npm build` - Create production build
- `npm test` - Run tests
- `npm eject` - Expose Create React App config (irreversible)

## Future Improvements

- [ ] TypeScript adoption
- [ ] Dark mode support
- [ ] Internationalization (i18n)
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] PWA support
- [ ] Performance metrics tracking

## Support

For issues or questions, refer to the main workspace README at the root level.
