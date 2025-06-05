import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Constant Cash</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our mission is to make access to credit simple, quick, and affordable for all Nigerians.
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2020, Constant Cash was born out of a simple observation: millions of hardworking Nigerians lack access to quick, convenient financial support when they need it most.
              </p>
              <p className="text-gray-700 mb-4">
                Our founder, Dr. Folake Adeyemi, experienced firsthand the challenges of obtaining short-term loans through traditional banking systems. The lengthy processes, excessive paperwork, and collateral requirements made it nearly impossible for everyday people to access funds during emergencies.
              </p>
              <p className="text-gray-700">
                Leveraging her background in fintech and banking, Dr. Adeyemi assembled a team of financial and technology experts to create a solution that would democratize access to credit. Today, Constant Cash has helped over 100,000 Nigerians meet their financial needs with dignity and convenience.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-green-500 opacity-10 rounded-xl transform -rotate-3"></div>
              <img 
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team collaborating" 
                className="relative rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're guided by a clear mission and strong values that inform everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Our Mission</h3>
              <p className="text-gray-700">
                To empower Nigerians by providing accessible, affordable, and convenient financial solutions that improve their quality of life and help them achieve their goals.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Our Vision</h3>
              <p className="text-gray-700">
                To be the most trusted financial partner for every Nigerian, creating a future where access to credit is a right, not a privilege.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Core Values</h3>
              <ul className="text-gray-700 space-y-2">
                <li><span className="font-medium">Integrity:</span> We are transparent and honest in all our dealings.</li>
                <li><span className="font-medium">Innovation:</span> We continuously improve our services to meet evolving needs.</li>
                <li><span className="font-medium">Inclusion:</span> We believe financial services should be accessible to all.</li>
                <li><span className="font-medium">Empathy:</span> We understand our customers' needs and challenges.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Licenses & Compliance */}
      <section className="section bg-blue-800 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Licenses & Compliance</h2>
              <p className="text-blue-100 mb-4">
                Constant Cash is licensed by the Central Bank of Nigeria and fully compliant with all applicable financial regulations in Nigeria.
              </p>
              <p className="text-blue-100 mb-4">
                We adhere to the highest standards of data protection and privacy, ensuring that your personal and financial information is secure at all times.
              </p>
              <p className="text-blue-100">
                Our transparent lending practices and clear terms of service have earned us recognition as a responsible lender in the Nigerian fintech space.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="bg-blue-700 p-8 rounded-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">100K+</div>
                    <p className="text-blue-100">Customers Served</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">₦5B+</div>
                    <p className="text-blue-100">Loans Disbursed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">4.8</div>
                    <p className="text-blue-100">App Store Rating</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">5 Min</div>
                    <p className="text-blue-100">Average Approval Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default AboutPage;