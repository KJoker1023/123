import React from 'react';
import { appLinks } from '../data/appLinks';

const DownloadButtons: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <a 
        href={appLinks.find(link => link.platform === 'android')?.url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        Download for Android
      </a>
      <a 
        href={appLinks.find(link => link.platform === 'ios')?.url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline"
      >
        Download for iOS
      </a>
    </div>
  );
};

export default DownloadButtons;