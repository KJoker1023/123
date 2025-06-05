import React from 'react';
import { scrollToTop } from '../utils/helpers';

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ to, children, className = '', onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Handle hash links for same-page navigation
    if (to.includes('#') && !to.startsWith('/')) {
      const targetId = to.split('#')[1];
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // Normalize the path by removing trailing slashes
      const normalizedPath = to === '/' ? '' : to.replace(/\/$/, '');
      window.location.hash = normalizedPath;
      
      // Only scroll to top for full page navigation
      if (!to.includes('#')) {
        scrollToTop();
      }
    }
    
    // Call the additional onClick handler if provided
    if (onClick) {
      onClick();
    }
  };
  
  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};