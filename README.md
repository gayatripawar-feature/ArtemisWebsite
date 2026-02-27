# Artemis Web - Unified Monorepo Structure

## Overview
This is a unified React application merging three separate projects:
- **Main App** (src/main-app) - Primary website
- **Consultancy** (src/consultancy) - Consultancy services website  
- **NextGen** (src/nextgen) - NextGen offerings website

## Routing Structure
```
/                 → Main App
/consultancy/*    → Consultancy App (with internal routing)
/nextgen/*        → NextGen App (with internal routing)
```

## Getting Started
3. **No Monorepo Overhead**: No yarn workspaces, no lerna, no build orchestration—each app is self-contained
4. **Subdomain Ready**: Each app assumes it's the root of its document and uses `BrowserRouter` (no basename)
5. **Apache Compatible**: Each app builds independently and can be deployed to any web server

## Directory Structure Per App

```
apps/consultancy/
├── public/                 # Static files (index.html, manifest.json, robots.txt)
├── src/
│   ├── layouts/           # Layout components (Header+Footer wrappers)
│   ├── pages/             # Route-level components (never imported by other pages)
│   ├── components/        # Reusable UI components (Button, Card, Modal, etc.)
│   ├── routes/            # Centralized route configuration
│   ├── assets/
│   │   ├── images/        # Static images and icons
│   │   └── styles/        # Global CSS and theme variables
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions and constants
│   ├── App.js             # Root component (simplified, routes delegated)
│   └── index.js           # React entry point
├── package.json           # App-specific dependencies
└── README.md              # App-specific documentation
```

## Getting Started

### Development

Navigate to the specific app directory:

```bash
cd apps/consultancy
npm install
npm start
```

This starts the app on `http://localhost:3000` with hot reload.

### Production Build

```bash
cd apps/consultancy
npm run build
```

Output is in `build/`. Deploy the contents to your web server's document root for that subdomain.

## Adding a New App

1. Copy `apps/consultancy/` to `apps/newapp/`
2. Update `apps/newapp/package.json` with new app name
3. Modify routes, components, and pages as needed
4. Run `npm install` and `npm start` in the new app directory

## Important Notes

### Routing
- Each app uses `BrowserRouter` without a basename
- Routes are defined in `src/routes/index.js`
- All paths assume the app is at the root of its domain

### Import Guidelines
- ✅ **Components** can import other components
- ✅ **Pages** can import components, layouts, and hooks
- ❌ **Pages** should NOT import other pages
- ✅ **Hooks** and **Utils** are always importable
- ✅ **Styles** are global CSS, imported once in App.js

### Build & Deploy
Each app:
- Builds independently: `npm run build`
- Has its own `node_modules/` and `build/` directory
- Can deploy independently without affecting others
- Works on Apache, Nginx, or any static host

## Future: Shared Code

The `shared/` directory is reserved for:
- Shared utility functions (if needed across multiple apps)
- Shared constants or configuration
- Common types or interfaces (TypeScript)

For now, avoid creating here—keep apps independent unless clear common code emerges.

## Troubleshooting

**Issue**: Imports from other apps not working  
**Solution**: Each app is independent. Copy utilities instead of importing across apps.

**Issue**: Routes not working on production  
**Solution**: Ensure your web server is configured to serve `index.html` for all routes (SPA routing).

**Issue**: Images not loading  
**Solution**: Use relative paths in imports: `import logo from '../assets/images/logo.png'`

## Deployment to Apache with Subdomains

Each app deploys to its own subdomain:

```
consultancy.artemis.com → /var/www/html/consultancy/build/
artemis.com             → /var/www/html/main/build/
nextgen.artemis.com     → /var/www/html/nextgen/build/
```

Apache vhost configuration example:
```apache
<VirtualHost *:80>
    ServerName consultancy.artemis.com
    DocumentRoot /var/www/html/consultancy/build
    <Directory /var/www/html/consultancy/build>
        FallbackResource /index.html
    </Directory>
</VirtualHost>
```

---

For app-specific documentation, see `apps/{appname}/README.md`

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
