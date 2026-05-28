import React, { useState } from 'react';

const Products = ({ products }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', ...new Set(products.map(p => p.category))];
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4">Our Catalog</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Premium Ingredients</h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hygienically processed and packed to preserve the natural goodness of Indian agriculture.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 border ${
                activeCategory === cat 
                ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' 
                : 'bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div key={index} className="group bg-white rounded-[32px] overflow-hidden border border-gray-100 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 flex flex-col">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={product.image || 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop'} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-xs font-bold text-primary shadow-sm uppercase tracking-wider">
                  {product.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h4>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-50 mt-auto">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Price Range</span>
                    <span className="text-2xl font-black text-gray-900">{product.price}</span>
                  </div>
                  <button className="bg-gray-900 text-white p-4 rounded-2xl hover:bg-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 group-hover:rotate-12">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.827-1.233L3 21l1.657-4.586C3.412 14.796 3 12.819 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
