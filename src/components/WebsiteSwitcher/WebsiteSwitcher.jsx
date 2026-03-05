import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './WebsiteSwitcher.module.css';


export default function WebsiteSwitcher() {
  const location = useLocation();
  const navigate = useNavigate();

  const getActiveWebsite = () => {
    if (location.pathname.startsWith('/consultancy')) {
      return 'consultancy';
    } else if (location.pathname.startsWith('/nextgen')) {
      return 'nextgen';
    }
    return 'main';
  };

  const activeWebsite = getActiveWebsite();

  const websites = [
    {
      id: 'main',
      label: 'main',
      path: '/',
    },
    {
      id: 'consultancy',
      label: 'consultancy',
      path: '/consultancy',
    },
    {
      id: 'nextgen',
      label: 'nextgen',
      path: '/nextgen',
    },
  ];

  const handleSwitch = (path) => {
    navigate(path);
  };

  if (activeWebsite === 'main') {
    return null;
  }

  return (
    <div className={styles.switcherContainer}>
      {websites.map((website) => (
        <button
          key={website.id}
          onClick={() => handleSwitch(website.path)}
          className={`${styles.tab} ${
            activeWebsite === website.id ? styles.active : ''
          }`}
          title={website.label}
        >
          {website.label}
        </button>
      ))}
    </div>
  );
}
