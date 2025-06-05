import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from '../router/Link';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Header />
      
      <section className="pt-32 pb-20 flex items-center justify-center min-h-screen bg-gray-50">
        <div className="container-custom text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/" className="btn btn-primary">
            Return to Homepage
          </Link>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default NotFoundPage;