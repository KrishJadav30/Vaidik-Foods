import React from 'react';

const Header = ({ company }) => {
  return (
    <header className="glass" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, borderBottom: '1px solid var(--border)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ background: 'var(--primary)', width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>
            V
          </div>
          <span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)', letterSpacing: '-0.5px' }}>
            {company.name || 'Vaidik Foods'}
          </span>
        </div>
        
        <nav className="nav-links" style={{ display: 'flex', gap: '2rem', fontWeight: '500' }}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href={`tel:${company.phone}`} className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
          Call
        </a>
      </div>
    </header>
  );
};

export default Header;
