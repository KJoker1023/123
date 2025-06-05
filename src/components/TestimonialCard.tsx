import React from 'react';
import { Testimonial } from '../types';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="card p-6 h-full flex flex-col transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.photoUrl} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="ml-4">
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.location}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} 
          />
        ))}
      </div>
      
      <p className="text-gray-700 flex-grow">"{testimonial.content}"</p>
    </div>
  );
};

export default TestimonialCard;