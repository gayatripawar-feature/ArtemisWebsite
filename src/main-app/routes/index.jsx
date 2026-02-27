import Home from '../pages/Home';

export const routeConfig = [
  {
    path: '/',
    component: Home,
    label: 'Home',
  },
];

export const navItems = routeConfig.map(route => ({
  path: route.path,
  label: route.label,
}));
