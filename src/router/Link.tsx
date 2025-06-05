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
    
    // Check if the link is a hash link to a section on the same page
    if (to.includes('#') && !to.startsWith('/')) {
      const targetId = to.split('#')[1];
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // Update the URL
      window.location.hash = to === '/' ? '' : to;
      scrollToTop();
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