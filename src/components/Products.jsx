import React from 'react';

const Products = ({ products }) => {
  return (
    <section id="products" className="section" style={{ background: 'var(--bg-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Premium Catalog</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Explore our range of naturally processed ingredients.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2.5rem' }}>
          {products.map((product, index) => (
            <div key={index} className="product-card" style={{ 
              background: 'white', 
              borderRadius: '24px', 
              overflow: 'hidden', 
              boxShadow: 'var(--shadow-sm)',
              transition: 'var(--transition)',
              border: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ height: '240px', overflow: 'hidden' }}>
                <img 
                  src={product.image || 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop'} 
                  alt={product.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {product.category}
                </span>
                <h3 style={{ fontSize: '1.5rem', margin: '0.5rem 0 1rem 0' }}>{product.name}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                  {product.description}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
                  <span style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-main)' }}>{product.price}</span>
                  <button className="btn" style={{ background: '#f8f9fa', color: 'var(--primary)', border: '1px solid var(--border)', padding: '0.5rem 1.2rem', fontSize: '0.9rem' }}>
                    Inquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary);
        }
      `}</style>
    </section>
  );
};

export default Products;
