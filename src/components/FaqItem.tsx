import React, { useState } from 'react';
import { FAQ } from '../types';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItemProps {
  faq: FAQ;
}

const FaqItem: React.FC<FaqItemProps> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-gray-900">{faq.question}</span>
        {isOpen ? (
          <ChevronUp className="flex-shrink-0 text-gray-500" size={20} />
        ) : (
          <ChevronDown className="flex-shrink-0 text-gray-500" size={20} />
        )}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-700">{faq.answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;