/**
 * Central route configuration for Artemis Consultancy app
 * Defines all application routes using React Router
 *
 * This file exports route definitions (path + component).
 * Route element rendering happens in App.js with <Route> from react-router-dom
 */
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import WhyArtemis from '../pages/WhyArtemis';
import TeamPage from '../pages/TeamPage';
/**
 * Route configuration array
 * Each route has: path, component, and label for navigation
 */
export const routeConfig = [
  {
    path: '/',
    component: Home,
    label: 'Home',
  },
  {
    path: 'about',
    component: About,
    label: 'About Us',
  },
  {
    path: 'services',
    component: Services,
    label: 'Services',
  },

  {
    path: 'projects',
    component: Projects,
    label: 'Projects / Expertise',
  },
  {
    path: 'why-artemis',
    component: WhyArtemis,
    label: 'Why Artemis',
  },
   {
    path: 'our-team',
    component: TeamPage,
    label: 'Our Team',
  },
  {
    path: 'contact',
    component: Contact,
    label: 'Contact Us',
  },
];

/**
 * Navigation items (for Header, Footer, etc.)
 * Derived from route config but without component reference
 */
export const navItems = routeConfig.map(route => ({
  path: route.path,
  label: route.label,
}));
