import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ShoppingBag } from 'lucide-react';

const Products = ({ products }) => {
  const [activeCategory, setActiveCategory] = useState(''); // empty means show all
  
  // Extract categories dynamically, removing 'All'
  const categories = [...new Set(products.map(p => p.category))];
  
  const filteredProducts = activeCategory 
    ? products.filter(p => p.category === activeCategory)
    : products;

  return (
    <section id="products" className="section-padding bg-[#f8f9fa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4">Our Products</span>
          <h3 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">High-Quality Ingredients</h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Cleanly made and packed to keep the natural taste. We deliver the best farm products to your door.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? '' : cat)}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-500 border-2 text-sm uppercase tracking-widest ${
                activeCategory === cat 
                ? 'bg-primary text-white border-primary shadow-xl shadow-primary/30' 
                : 'bg-white text-gray-500 border-gray-100 hover:border-primary hover:text-primary shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <motion.div 
                  key={product.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group bg-white rounded-[48px] overflow-hidden border border-gray-100 hover:border-primary/20 transition-all duration-500 hover:shadow-premium flex flex-col h-full"
                >
                  <div className="relative h-80 overflow-hidden m-4 rounded-[40px]">
                    <img 
                      src={product.image || 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop'} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute top-6 right-6 glass px-5 py-2 rounded-full text-[10px] font-black text-primary shadow-sm uppercase tracking-[0.2em]">
                      {product.category}
                    </div>
                  </div>
                  
                  <div className="p-10 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors pr-4">
                        {product.name}
                      </h4>
                      <ArrowUpRight className="text-gray-300 group-hover:text-primary transition-colors shrink-0" />
                    </div>
                    <p className="text-gray-500 mb-8 flex-grow leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="pt-8 border-t border-gray-50 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-black mb-1">Price</span>
                        <span className="text-3xl font-black text-gray-900 tracking-tight">{product.price || 'Contact for price'}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-20 text-center"
              >
                <div className="bg-gray-50 rounded-[40px] p-12 border-2 border-dashed border-gray-100">
                  <ShoppingBag size={48} className="mx-auto text-gray-200 mb-4" />
                  <p className="text-gray-400 font-bold text-xl uppercase tracking-widest">No products here yet</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
};

export default Products;
