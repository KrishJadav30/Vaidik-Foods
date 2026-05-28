import { motion } from 'framer-motion';
import { ArrowRight, Leaf, ShieldCheck, Globe } from 'lucide-react';

const Hero = ({ company }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden relative bg-[#fdfdfd]">
      {/* Animated Background Elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top pointer-events-none"
      ></motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left relative z-10"
          >
            <motion.span 
              variants={itemVariants}
              className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-[0.2em] text-xs mb-6 bg-primary/10 px-4 py-2 rounded-full"
            >
              <Leaf size={14} className="animate-pulse" />
              Authentic Indian Flavors
            </motion.span>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-8"
            >
              {company.tagline || 'Pure. Authentic. Sustainable.'}
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg lg:text-xl text-gray-600 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Experience the true essence of Vedic nutrition with our premium range of dehydrated vegetables and authentic spices.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
            >
              <a href="#products" className="btn btn-primary text-lg flex items-center justify-center gap-3 px-10">
                Explore Catalog
                <ArrowRight size={20} />
              </a>
              <a href="#about" className="btn btn-outline text-lg">
                Our Story
              </a>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-16 flex items-center justify-center lg:justify-start gap-10"
            >
              {[
                { label: 'Natural', value: '100%', icon: <Leaf size={20} className="text-primary" /> },
                { label: 'Countries', value: '15+', icon: <Globe size={20} className="text-primary" /> },
                { label: 'Certified', value: 'ISO', icon: <ShieldCheck size={20} className="text-primary" /> },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center lg:items-start group">
                  <div className="flex items-center gap-2 mb-1">
                    {stat.icon}
                    <p className="text-2xl font-black text-gray-900">{stat.value}</p>
                  </div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold group-hover:text-primary transition-colors">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="relative group"
          >
            {/* Image Glow */}
            <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[100px] group-hover:bg-primary/20 transition-all duration-700 animate-pulse"></div>
            
            <div className="relative rounded-[60px] overflow-hidden shadow-2xl animate-float">
              <img 
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000&auto=format&fit=crop" 
                alt="Vaidik Spices" 
                className="w-full h-[500px] lg:h-[650px] object-cover hover:scale-110 transition-transform duration-1000"
              />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-10 left-10 right-10 glass p-8 rounded-[40px] shadow-2xl border-white/50"
              >
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-primary/10 rounded-3xl text-primary text-3xl">
                    <Leaf />
                  </div>
                  <div>
                    <p className="font-black text-gray-900 text-xl">Directly from Farmers</p>
                    <p className="text-gray-600">Sustainably sourced, ethically delivered to your doorstep.</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Decorative Elements */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-32 h-32 border-4 border-dashed border-primary/20 rounded-full"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
