
import React from 'react';
import { FileText, Monitor, PenTool, RefreshCw, Layers, ExternalLink, MessageCircle } from 'lucide-react';
import { IT_PROJECT_OFFER, WHATSAPP_LINK } from '../constants';

const ITProjects: React.FC = () => {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gray-900 to-indigo-900 rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="px-8 py-20 sm:p-20 text-center">
            <span className="inline-block px-4 py-1 bg-white/10 text-indigo-200 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              Academic Excellence Guaranteed
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Final Year IT Projects
            </h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-12">
              Get comprehensive project support including full source code, IEEE-standard research paper, and polished presentations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={IT_PROJECT_OFFER.formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-indigo-900 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-all flex items-center"
              >
                Apply Now <ExternalLink className="ml-2 w-5 h-5" />
              </a>
              <a
                href={`${WHATSAPP_LINK}?text=I'm interested in the Final Year IT Project package.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-indigo-500/20 text-white border border-white/30 rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center backdrop-blur-md"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Discuss Details
              </a>
            </div>
          </div>
        </div>

        {/* Pricing Card Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Project Ecosystem</h2>
            <p className="text-gray-600">Fixed price of ₹5,000 for everything you need for a successful submission.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex-shrink-0 flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">End-to-End Projects</h3>
                  <p className="text-gray-600">Complete source code with detailed setup instructions for various domains like AI, Web, Mobile, or Blockchain.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex-shrink-0 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Research Publication</h3>
                  <p className="text-gray-600">Professionally written research papers formatted for IEEE or Scopus indexing standards.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex-shrink-0 flex items-center justify-center">
                  <PenTool className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">PPT Presentations</h3>
                  <div className="inline-block px-2 py-0.5 bg-purple-50 text-purple-600 text-xs font-bold rounded mr-2">2 PPTs INCLUDED</div>
                  <p className="text-gray-600">High-quality slides for your internal and final external project vivas.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex-shrink-0 flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Free Revision</h3>
                  <p className="text-gray-600">One full technical revision to accommodate changes requested by your internal guide.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2rem] shadow-2xl border border-gray-100 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Layers className="w-32 h-32 text-indigo-900" />
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-8">The IT Package</h3>
               <div className="flex items-baseline mb-8">
                  <span className="text-5xl font-extrabold text-indigo-600">₹5,000</span>
                  <span className="ml-2 text-gray-500 font-medium">/ complete bundle</span>
               </div>
               <div className="space-y-4 mb-10">
                  {IT_PROJECT_OFFER.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                      {item}
                    </div>
                  ))}
               </div>
               <a
                href={IT_PROJECT_OFFER.formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-all mb-4"
               >
                 Fill Requirement Form
               </a>
               <p className="text-center text-sm text-gray-500">
                 Average delivery time: 7-10 working days
               </p>
            </div>
          </div>
        </div>

        {/* Form Link Section */}
        <div className="mt-24 p-12 bg-indigo-50 rounded-3xl text-center">
           <h3 className="text-2xl font-bold text-gray-900 mb-4">Start Your Academic Project Today</h3>
           <p className="text-gray-600 mb-8">Provide your project domain and preferences via our secure form.</p>
           <a 
            href={IT_PROJECT_OFFER.formLink}
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-all shadow-lg"
           >
             Go to Google Form <ExternalLink className="ml-2 w-4 h-4" />
           </a>
        </div>
      </div>
    </div>
  );
};

export default ITProjects;
