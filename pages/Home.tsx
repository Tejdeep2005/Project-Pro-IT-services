
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Briefcase, Code, GraduationCap } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-50 rounded-full">
              Your Career Starts Here
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8">
              Stand Out from the <span className="text-indigo-600">Competition</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-500 mb-10">
              We provide professional ATS-friendly resumes, stunning portfolio websites, and high-quality IT projects to help you land your dream job.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/packages"
                className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all flex items-center justify-center shadow-xl shadow-indigo-200"
              >
                View Packages <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-all text-center"
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>
        
        {/* Background blobs */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Project Pro?</h2>
            <p className="text-gray-600">We don't just build resumes; we build careers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">ATS-Compliant Resumes</h3>
              <p className="text-gray-600">Get past the automated filters and reach the recruiters with our scientifically structured resumes.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Live Portfolios</h3>
              <p className="text-gray-600">Showcase your skills with a personal website that tells your story better than a PDF ever could.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Academic Projects</h3>
              <p className="text-gray-600">Excel in your final year with our premium IT projects, complete with research papers and documentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-3xl p-12 shadow-2xl shadow-indigo-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-indigo-100">Resumes Crafted</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-indigo-100">Portfolios Live</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">150+</div>
                <div className="text-indigo-100">IT Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-indigo-100">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to take the next step?</h2>
          <p className="text-gray-600 mb-10 text-lg">
            Join hundreds of successful candidates who used our services to kickstart their careers. Don't leave your future to chance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/packages"
              className="px-8 py-3 bg-gray-900 text-white rounded-lg font-bold hover:bg-black transition-all"
            >
              Get Started
            </Link>
            <Link
              to="/it-projects"
              className="px-8 py-3 bg-white text-gray-900 border border-gray-200 rounded-lg font-bold hover:bg-gray-50 transition-all"
            >
              Academic Help
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
