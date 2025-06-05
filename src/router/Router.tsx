import React, { useState, useEffect } from 'react';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage';
import TermsPage from '../pages/TermsPage';
import NotFoundPage from '../pages/NotFoundPage';
import { scrollToTop } from '../utils/helpers';

const Router: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(
    window.location.hash ? window.location.hash.substring(1) : '/'
  );

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      // Handle both cases: with and without trailing slash
      const path = hash ? hash.substring(1).replace(/\/$/, '') : '/';
      setCurrentPath(path);
      scrollToTop();
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Handle initial route
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Handle both cases: with and without trailing slash
  const normalizedPath = currentPath.replace(/\/$/, '');

  // Check if the path contains a hash fragment for same-page navigation
  const isHashLink = normalizedPath.includes('#');
  if (isHashLink) {
    const basePath = normalizedPath.split('#')[0] || '/';
    // Only check the base path part for routing
    switch (basePath) {
      case '/':
        return <HomePage />;
      case '/about':
        return <AboutPage />;
      case '/privacy-policy':
        return <PrivacyPolicyPage />;
      case '/terms':
        return <TermsPage />;
      default:
        return <NotFoundPage />;
    }
  }

  // Regular route matching
  switch (normalizedPath) {
    case '':
    case '/':
      return <HomePage />;
    case '/about':
      return <AboutPage />;
    case '/privacy-policy':
      return <PrivacyPolicyPage />;
    case '/terms':
      return <TermsPage />;
    default:
      return <NotFoundPage />;
  }
};

export default Router;