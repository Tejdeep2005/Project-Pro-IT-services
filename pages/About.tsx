
import React from 'react';
import { Target, Users, Zap, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">About Our Mission</h1>
          <p className="text-xl text-gray-600">
            We bridge the gap between education and employment by providing students with the professional assets they need to succeed in the modern job market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Founded with the vision of making professional career branding accessible to all, Project Pro started as a small group of industry professionals helping local students with their resumes.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Today, we've expanded our horizons to offer comprehensive portfolio websites and academic project assistance, ensuring that every student who works with us is equipped with high-quality work that recruiters actually notice.
            </p>
          </div>
          <div className="relative">
             <img src="https://picsum.photos/800/600?tech" alt="Team collaborating" className="rounded-3xl shadow-2xl" />
             <div className="absolute -bottom-6 -left-6 bg-indigo-600 text-white p-8 rounded-2xl shadow-xl hidden lg:block">
                <div className="text-4xl font-bold mb-1">5+</div>
                <div className="text-indigo-100">Years of Experience</div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
           <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Precision</h3>
              <p className="text-gray-600">Meticulous attention to detail in every resume we craft.</p>
           </div>
           <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Speed</h3>
              <p className="text-gray-600">Efficient workflows that get your assets ready in days, not weeks.</p>
           </div>
           <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-gray-600">Industry-standard deliverables that stand the test of scrutiny.</p>
           </div>
           <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Mentorship</h3>
              <p className="text-gray-600">Beyond services, we offer guidance for your career path.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
