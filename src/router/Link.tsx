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
    if (to.includes('#')) {
      const [path, hash] = to.split('#');
      
      // If there's a path before the hash, navigate to that page first
      if (path && path !== window.location.hash.substring(1)) {
        window.location.hash = path;
      }
      
      // Scroll to the section
      if (hash) {
        const targetElement = document.getElementById(hash);
        if (targetElement) {
          setTimeout(() => {
            const headerOffset = 80; // Account for fixed header
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 100); // Small delay to ensure page transition is complete
        }
      }
    } else {
      // Regular page navigation
      const normalizedPath = to === '/' ? '' : to.replace(/\/$/, '');
      window.location.hash = normalizedPath;
      scrollToTop();
    }
    
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