
import React from 'react';
import { Check, MessageCircle } from 'lucide-react';
import { PACKAGES, WHATSAPP_LINK } from '../constants';

const Packages: React.FC = () => {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">
            Choose Your <span className="text-indigo-600">Success Package</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Affordable, professional, and result-oriented services tailored for students and freshers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-3xl p-8 transition-all duration-300 border-2 ${
                pkg.popular
                  ? 'border-indigo-600 shadow-2xl scale-105 z-10'
                  : 'border-gray-100 shadow-xl hover:border-indigo-200'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-indigo-600 text-white text-sm font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">₹{pkg.price}</span>
                  <span className="ml-1 text-gray-500">one-time</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`${WHATSAPP_LINK}?text=Hello! I am interested in the ${pkg.name} package (₹${pkg.price}).`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 px-6 rounded-xl font-bold flex items-center justify-center transition-all ${
                  pkg.popular
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Book via WhatsApp
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-indigo-50 rounded-3xl p-8 text-center border border-indigo-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Requirements?</h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            If you need a custom combination of services or have specific project requirements, feel free to chat with us directly.
          </p>
          <a
            href={WHATSAPP_LINK}
            className="inline-flex items-center text-indigo-600 font-bold hover:underline"
          >
            Chat with a Consultant <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

const ArrowRight = ({ className }: { className: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export default Packages;
