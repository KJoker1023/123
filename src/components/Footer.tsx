import React from 'react';
import { Link } from '../router/Link';
import { Twitter, Instagram, Facebook, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="ml-2 font-bold text-xl text-white">Constant Cash</span>
            </div>
            <p className="text-blue-100 mb-4">
              Your trusted source for quick, hassle-free loans in Nigeria.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com/constantcash" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com/constantcash" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com/constantcash" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#features" className="text-blue-100 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/#testimonials" className="text-blue-100 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/#faq" className="text-blue-100 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-blue-100 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-blue-100 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/license" className="text-blue-100 hover:text-white transition-colors">
                  Licenses
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-blue-100" />
                <a 
                  href="mailto:support@constantcash.com" 
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  support@constantcash.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-blue-100" />
                <a 
                  href="tel:+2347012345678" 
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  +234 701 234 5678
                </a>
              </li>
              <li className="mt-4">
                <p className="text-blue-100">
                  15 Financial Street, Victoria Island, Lagos, Nigeria
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>© {currentYear} Constant Cash. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Constant Cash is licensed by the Central Bank of Nigeria.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;