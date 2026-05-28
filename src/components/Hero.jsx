import React from 'react';

const Hero = ({ company }) => {
  return (
    <section id="home" className="section" style={{ paddingTop: '160px', background: 'radial-gradient(circle at top right, #fff5f5, transparent 40%)' }}>
      <div className="container grid-2">
        <div className="hero-text">
          <span style={{ color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', display: 'block', marginBottom: '1rem' }}>
            Welcome to {company.name}
          </span>
          <h1 style={{ fontSize: '4.5rem', lineHeight: '1.1', marginBottom: '1.5rem', color: '#1a1a1a' }}>
            {company.tagline || 'Pure. Authentic. Sustainable.'}
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '500px', marginInline: 'auto' }}>
            Delivering the essence of Indian nature to the world through premium dehydrated foods and spices.
          </p>
          <div className="hero-btns" style={{ display: 'flex', gap: '1rem' }}>
            <a href="#products" className="btn btn-primary">View Products</a>
            <a href="#about" className="btn" style={{ border: '1px solid var(--border)' }}>Learn More</a>
          </div>
        </div>
        <div style={{ position: 'relative' }} className="mobile-hide">
          <div style={{ width: '100%', height: '500px', borderRadius: '30px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            <img 
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000&auto=format&fit=crop" 
              alt="Vaidik Spices" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="glass" style={{ position: 'absolute', bottom: '40px', left: '-40px', padding: '1.5rem', borderRadius: '20px', boxShadow: 'var(--shadow-md)', maxWidth: '240px' }}>
            <p style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--primary)' }}>100% Organic</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Sourced directly from the heart of India's richest farms.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
