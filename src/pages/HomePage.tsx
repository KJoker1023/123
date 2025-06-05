import React from 'react';
import { testimonials } from '../data/testimonials';
import { faqs } from '../data/faqs';
import TestimonialCard from '../components/TestimonialCard';
import FaqItem from '../components/FaqItem';
import LoanCalculator from '../components/LoanCalculator';
import DownloadButtons from '../components/DownloadButtons';
import FeatureSection from '../components/FeatureSection';
import HowItWorks from '../components/HowItWorks';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Quick Loans for <span className="text-green-400">Everyday Nigerians</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Get instant cash loans of up to ₦500,000 in minutes. No collateral, no paperwork, just quick funds when you need them most.
              </p>
              
              <DownloadButtons />
              
              <div className="mt-8 flex items-center">
                <div className="bg-blue-800 px-4 py-2 rounded-lg">
                  <div className="text-green-400 font-bold">4.8/5</div>
                  <div className="text-sm text-blue-100">App Store Rating</div>
                </div>
                <div className="ml-4 bg-blue-800 px-4 py-2 rounded-lg">
                  <div className="text-green-400 font-bold">100K+</div>
                  <div className="text-sm text-blue-100">Happy Customers</div>
                </div>
                <div className="ml-4 bg-blue-800 px-4 py-2 rounded-lg">
                  <div className="text-green-400 font-bold">5 Min</div>
                  <div className="text-sm text-blue-100">Approval Time</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-green-500 opacity-10 rounded-xl transform rotate-3"></div>
                <div className="relative bg-white rounded-xl p-6 shadow-xl">
                  <LoanCalculator />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <FeatureSection />
      
      {/* How It Works */}
      <HowItWorks />
      
      {/* Testimonials Section */}
      <section id="testimonials" className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our customers have to say about their experience with Constant Cash.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about Constant Cash loans and services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              {faqs.map((faq) => (
                <FaqItem key={faq.id} faq={faq} />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-green-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Download the Constant Cash app now and get access to quick loans in minutes.
          </p>
          <div className="flex justify-center">
            <DownloadButtons />
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default HomePage;