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
      const path = window.location.hash ? window.location.hash.substring(1) : '/';
      setCurrentPath(path);
      scrollToTop();
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Remove trailing slashes for consistency
  const normalizedPath = currentPath.endsWith('/') && currentPath !== '/' 
    ? currentPath.slice(0, -1) 
    : currentPath;

  const renderPage = () => {
    switch (normalizedPath) {
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

  return (
    <div className="fade-in">
      {renderPage()}
    </div>
  );
};

export default Router;