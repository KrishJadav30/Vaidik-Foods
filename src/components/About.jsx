const About = ({ company }) => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img 
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=500&auto=format&fit=crop" 
                  alt="Processing" 
                  className="rounded-3xl shadow-lg w-full aspect-[4/5] object-cover"
                />
                <div className="bg-primary p-8 rounded-3xl text-white text-center">
                  <p className="text-4xl font-bold mb-1">10+</p>
                  <p className="text-sm uppercase tracking-widest opacity-80">Years Excellence</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-accent p-8 rounded-3xl text-white text-center aspect-square flex flex-col justify-center">
                  <p className="text-4xl font-bold mb-1">100%</p>
                  <p className="text-sm uppercase tracking-widest opacity-80">Export Quality</p>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=500&auto=format&fit=crop" 
                  alt="Farm" 
                  className="rounded-3xl shadow-lg w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="mb-8">
              <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-3">Our Legacy</h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Pioneering Dehydrated Nutrition in Mahuva
              </h3>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed italic border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-2xl">
              {company.about || 'Vaidik Foods brings you the finest selection of agricultural products processed with cutting-edge technology while preserving traditional integrity.'}
            </p>
            
            <div className="space-y-6">
              {[
                { title: 'Traditional Roots', desc: 'Our processing methods are inspired by Vedic principles of preservation.', icon: '📜' },
                { title: 'Global Standards', desc: 'ISO, HACCP, and global food safety protocols strictly followed.', icon: '🌍' },
                { title: 'Farmer First', desc: 'We work directly with local growers to ensure fair trade and fresh harvest.', icon: '🤝' }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 items-start group">
                  <div className="text-3xl bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
