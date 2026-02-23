
import Home from '../pages/Home';
import Services from '../pages/Services';
import Expertise from '../pages/Expertise';
import Contact from '../pages/Contact';
import Careers from '../pages/Careers';
import About from '../pages/About';
import JobApply from '../pages/JobApply';
import Erp from '../pages/Erp';

export const routeConfig = [
  {
    path: '/',
    component: Home,
    label: 'Home',
  },
  {
    path: '/services',
    component: Services,
    label: 'Services',
  },
  {
    path: '/expertise',
    component: Expertise,
    label: 'Expertise',
  },
  {
    path: '/erp',
    component: Erp,
    label: 'ERP',
  },
  {
    path: '/contact',
    component: Contact,
    label: 'Contact Us',
  },
  {
    path: '/careers',
    component: Careers,
    label: 'Careers',
  },
  {
    path: '/about',
    component: About,
    label: 'About Us',
  },
];

export const hiddenRoutes = [
  {
    path: '/careers/apply/:jobId',
    component: JobApply,
  },
];

export const navItems = routeConfig.map(route => ({
  path: route.path,
  label: route.label,
}));
