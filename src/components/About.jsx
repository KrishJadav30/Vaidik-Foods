import { motion } from 'framer-motion';
import { History, Globe2, Users2 } from 'lucide-react';

const About = ({ company }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="lg:w-1/2 relative"
          >
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-12">
                <motion.img 
                  variants={fadeIn}
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=500&auto=format&fit=crop" 
                  alt="Processing" 
                  className="rounded-[40px] shadow-2xl w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-500"
                />
                <motion.div 
                  variants={fadeIn}
                  className="bg-primary p-10 rounded-[40px] text-white text-center shadow-xl shadow-primary/20"
                >
                  <p className="text-5xl font-black mb-2">10+</p>
                  <p className="text-xs uppercase tracking-[0.2em] font-bold opacity-80">Years Excellence</p>
                </motion.div>
              </div>
              <div className="space-y-6">
                <motion.div 
                  variants={fadeIn}
                  className="bg-accent p-10 rounded-[40px] text-white text-center aspect-square flex flex-col justify-center shadow-xl shadow-accent/20"
                >
                  <p className="text-5xl font-black mb-2">100%</p>
                  <p className="text-xs uppercase tracking-[0.2em] font-bold opacity-80">Export Quality</p>
                </motion.div>
                <motion.img 
                  variants={fadeIn}
                  src="https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=500&auto=format&fit=crop" 
                  alt="Farm" 
                  className="rounded-[40px] shadow-2xl w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="lg:w-1/2"
          >
            <motion.div variants={fadeIn} className="mb-10">
              <span className="inline-block text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4">Our Legacy</span>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Pioneering Dehydrated Nutrition in Mahuva
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed italic border-l-4 border-primary pl-8 py-4 bg-primary/5 rounded-r-[32px]">
                "{company.about || 'Vaidik Foods brings you the finest selection of agricultural products processed with cutting-edge technology while preserving traditional integrity.'}"
              </p>
            </motion.div>
            
            <div className="space-y-8">
              {[
                { title: 'Traditional Roots', desc: 'Our processing methods are inspired by Vedic principles of preservation.', icon: <History className="text-primary" size={28} /> },
                { title: 'Global Standards', desc: 'ISO, HACCP, and global food safety protocols strictly followed.', icon: <Globe2 className="text-primary" size={28} /> },
                { title: 'Farmer First', desc: 'We work directly with local growers to ensure fair trade and fresh harvest.', icon: <Users2 className="text-primary" size={28} /> }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeIn}
                  className="flex gap-6 items-start group p-6 rounded-3xl hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="bg-white shadow-lg shadow-gray-200/50 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
