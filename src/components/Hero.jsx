import React from 'react';

const Hero = ({ company }) => {
  return (
    <section id="home" className="pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left relative z-10">
            <span className="inline-block text-primary font-bold uppercase tracking-widest text-sm mb-4 bg-primary/10 px-4 py-1 rounded-full">
              Authentic Indian Flavors
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
              {company.tagline || 'Pure. Authentic. Sustainable.'}
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experience the true essence of Vedic nutrition with our premium range of dehydrated vegetables and authentic spices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#products" className="btn btn-primary text-lg shadow-xl shadow-primary/30">
                Explore Catalog
              </a>
              <a href="#about" className="px-8 py-3 rounded-full font-semibold border-2 border-gray-200 text-gray-700 hover:bg-gray-50 transition-all text-lg">
                Our Story
              </a>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-60">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">100%</p>
                <p className="text-sm uppercase tracking-wider">Natural</p>
              </div>
              <div className="w-px h-10 bg-gray-300"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">15+</p>
                <p className="text-sm uppercase tracking-wider">Countries</p>
              </div>
              <div className="w-px h-10 bg-gray-300"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">ISO</p>
                <p className="text-sm uppercase tracking-wider">Certified</p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 rounded-[40px] blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000&auto=format&fit=crop" 
                alt="Vaidik Spices" 
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 glass p-6 rounded-3xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-2xl text-primary text-2xl">🌿</div>
                  <div>
                    <p className="font-bold text-gray-900">Directly from Farmers</p>
                    <p className="text-sm text-gray-600">Sustainably sourced, ethically delivered.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
