import React from 'react';
import { Clock, ShieldCheck, Smartphone, RefreshCcw, CreditCard, BarChart } from 'lucide-react';

const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: <Clock size={32} className="text-green-600" />,
      title: 'Quick Approval',
      description: 'Get loan approval in minutes, not days. Our streamlined process ensures you get funds when you need them most.'
    },
    {
      icon: <ShieldCheck size={32} className="text-green-600" />,
      title: 'Secure & Private',
      description: 'Your data is protected with bank-level security. We prioritize your privacy and confidentiality.'
    },
    {
      icon: <Smartphone size={32} className="text-green-600" />,
      title: 'Mobile-First',
      description: 'Manage your loans anytime, anywhere with our user-friendly mobile app. No paperwork or branch visits required.'
    },
    {
      icon: <RefreshCcw size={32} className="text-green-600" />,
      title: 'Flexible Repayment',
      description: 'Choose repayment terms that fit your financial situation with options from 1 to 12 months.'
    },
    {
      icon: <CreditCard size={32} className="text-green-600" />,
      title: 'Multiple Payment Options',
      description: 'Repay your loans easily via bank transfer, debit card, USSD, or automated repayments.'
    },
    {
      icon: <BarChart size={32} className="text-green-600" />,
      title: 'Increasing Limits',
      description: 'Build your credit history with us and unlock higher loan amounts and better rates over time.'
    }
  ];

  return (
    <section id="features" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Constant Cash?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our innovative platform provides fast, secure, and convenient access to funds when you need them most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card p-6 transition-transform duration-300 hover:-translate-y-1">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;