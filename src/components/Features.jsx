import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Zap, Award, ThumbsUp, Leaf } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Quality Assurance",
      desc: "Strict adherence to ISO 22000 and HACCP standards for every batch we produce.",
      icon: <ShieldCheck size={32} className="text-primary" />,
      color: "bg-blue-50"
    },
    {
      title: "Global Logistics",
      desc: "Efficient export network reaching over 15 countries with timely delivery.",
      icon: <Truck size={32} className="text-primary" />,
      color: "bg-green-50"
    },
    {
      title: "Vedic Processing",
      desc: "Ancient wisdom meets modern technology to retain maximum nutritional value.",
      icon: <Zap size={32} className="text-primary" />,
      color: "bg-yellow-50"
    },
    {
      title: "Premium Sourcing",
      desc: "Direct partnership with local farmers ensures the freshest raw materials.",
      icon: <Leaf size={32} className="text-primary" />,
      color: "bg-orange-50"
    },
    {
      title: "Customized Solutions",
      desc: "Bespoke processing and packaging according to specific client requirements.",
      icon: <Award size={32} className="text-primary" />,
      color: "bg-purple-50"
    },
    {
      title: "Sustainable Practices",
      desc: "Eco-friendly processing methods that minimize waste and environmental impact.",
      icon: <ThumbsUp size={32} className="text-primary" />,
      color: "bg-red-50"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4">Why Choose Us</span>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">The Vaidik Advantage</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            What sets us apart is our commitment to quality, tradition, and our clients' success in the global marketplace.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[40px] bg-gray-50 border border-gray-100 hover:border-primary/20 hover:bg-white hover:shadow-premium transition-all duration-500 group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 bg-white shadow-sm`}>
                {feature.icon}
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
