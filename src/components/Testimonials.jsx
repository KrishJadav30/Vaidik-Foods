import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "David Chen",
      role: "Sourcing Director, Global Foods (USA)",
      content: "The quality of dehydrated onions from Vaidik Foods is unmatched. Their consistency and attention to export standards make them our primary partner in India.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Ahmed Al-Farsi",
      role: "Operations Manager, Spice House (Dubai)",
      content: "Excellent service and premium quality spices. The spray-dried powders retain incredible flavor and color. Highly recommended for industrial applications.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Sarah Müller",
      role: "Quality Lead, BioFoods (Germany)",
      content: "Vaidik Foods understands European food safety requirements perfectly. Their documentation and lab reports are always thorough and reliable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <section className="section-padding bg-[#fdfdfd] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4">Global Trust</span>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We take pride in building long-term relationships with food industry leaders across the globe through consistent excellence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testi, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[40px] bg-white border border-gray-100 shadow-premium relative group hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute top-10 right-10 text-primary/10 group-hover:text-primary/20 transition-colors">
                <Quote size={80} strokeWidth={1} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(testi.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-8 text-lg leading-relaxed italic relative z-10">
                "{testi.content}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-gray-50 pt-8 mt-auto">
                <img 
                  src={testi.image} 
                  alt={testi.name} 
                  className="w-16 h-16 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{testi.name}</h4>
                  <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
    </section>
  );
};

export default Testimonials;
