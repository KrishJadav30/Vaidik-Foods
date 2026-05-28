import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Zap, Award, ThumbsUp, Leaf } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Guaranteed Quality",
      desc: "We follow high safety standards for every product we make.",
      icon: <ShieldCheck size={32} className="text-primary" />,
      color: "bg-blue-50"
    },
    {
      title: "Worldwide Delivery",
      desc: "We ship to over 15 countries and always deliver on time.",
      icon: <Truck size={32} className="text-primary" />,
      color: "bg-green-50"
    },
    {
      title: "Natural Methods",
      desc: "We use both old and new ways to keep our food healthy.",
      icon: <Zap size={32} className="text-primary" />,
      color: "bg-yellow-50"
    },
    {
      title: "Fresh Ingredients",
      desc: "We work with local farmers to get the freshest ingredients.",
      icon: <Leaf size={32} className="text-primary" />,
      color: "bg-orange-50"
    },
    {
      title: "Custom Orders",
      desc: "We can process and pack products exactly how you need them.",
      icon: <Award size={32} className="text-primary" />,
      color: "bg-purple-50"
    },
    {
      title: "Eco-Friendly",
      desc: "We use methods that are good for the planet and reduce waste.",
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
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Why We Are Different</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We care about quality, our traditions, and helping our customers succeed around the world.
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
