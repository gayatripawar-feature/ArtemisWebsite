# Artemis Main - Corporate Website

Main corporate website for Artemis Infratech Consultancy (artemis.com)

## Quick Start

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## Structure

Same as `apps/consultancy/`:
- `src/pages/` - Route components
- `src/components/` - Reusable UI components
- `src/layouts/` - Layout wrappers
- `src/routes/` - Route configuration
- `src/assets/` - Images and global styles
- `src/hooks/` - Custom React hooks
- `src/utils/` - Utilities

## Build

```bash
npm run build
```

Builds to `build/` folder for deployment to artemis.com

## Customization

1. Add new pages to `src/pages/`
2. Update `src/routes/index.js` with new routes
3. Create components as needed in `src/components/`
4. Customize styles in `src/assets/styles/`

This app uses the same architecture as the consultancy app - no monorepo overhead, just independent development and deployment.
