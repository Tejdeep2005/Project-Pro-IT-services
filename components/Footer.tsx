
import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Mail, Phone, MapPin } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Rocket className="w-8 h-8 text-indigo-400" />
              <span className="text-2xl font-bold text-white">Project Pro</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Empowering students and job seekers with industry-standard resumes, stunning portfolios, and academic excellence through high-quality IT projects.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link></li>
              <li><Link to="/packages" className="hover:text-indigo-400 transition-colors">Service Packages</Link></li>
              <li><Link to="/it-projects" className="hover:text-indigo-400 transition-colors">IT Projects</Link></li>
              <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-indigo-400" />
                <a href={WHATSAPP_LINK} className="hover:text-indigo-400">+91 7674097659</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-indigo-400" />
                <a href="mailto:projectproitservices@gmail.com" className="hover:text-indigo-400 transition-colors">projectproitservices@gmail.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-indigo-400" />
                <span>Hyderabad, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Project Pro Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
