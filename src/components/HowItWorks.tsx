import React from 'react';
import { Download, UserCheck, Coins, RefreshCw } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Download size={32} className="text-white" />,
      title: 'Download the App',
      description: 'Get our mobile app from Google Play Store or Apple App Store.'
    },
    {
      icon: <UserCheck size={32} className="text-white" />,
      title: 'Quick Registration',
      description: 'Create an account and complete the simple verification process.'
    },
    {
      icon: <Coins size={32} className="text-white" />,
      title: 'Apply for a Loan',
      description: 'Select your loan amount and duration, then submit your application.'
    },
    {
      icon: <RefreshCw size={32} className="text-white" />,
      title: 'Receive & Repay',
      description: 'Get funds in your account and repay according to your chosen schedule.'
    }
  ];

  return (
    <section className="section bg-blue-800 text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Getting a loan with Constant Cash is quick and easy. Follow these simple steps:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {step.icon}
              </div>
              <div className="relative mb-6 lg:mb-0">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-blue-100">{step.description}</p>
                
                {/* Connecting line for all but the last step */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-blue-600">
                    <div className="absolute right-0 -top-1.5 w-3 h-3 rounded-full bg-blue-500"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;