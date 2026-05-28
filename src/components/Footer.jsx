import React from 'react';

const Footer = ({ company }) => {
  return (
    <footer id="contact" className="section" style={{ background: '#1a1a1a', color: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
              <div style={{ background: 'var(--primary)', width: '32px', height: '32px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
                V
              </div>
              <span style={{ fontSize: '1.5rem', fontWeight: '700', letterSpacing: '-0.5px' }}>
                {company.name}
              </span>
            </div>
            <p style={{ color: '#999', fontSize: '0.95rem', lineHeight: '1.8' }}>
              Bringing the purest essence of Indian agriculture to your doorstep with modern processing and traditional values.
            </p>
          </div>

          <div>
            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1.5rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', color: '#999' }}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1.5rem' }}>Contact Us</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: '#999' }}>
              <li><strong>Phone:</strong> {company.phone}</li>
              <li><strong>Email:</strong> {company.email}</li>
              <li><strong>Address:</strong> {company.address}</li>
            </ul>
          </div>
        </div>
        
        <div style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid #333', textAlign: 'center', color: '#666', fontSize: '0.9rem' }}>
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved. Made with ❤️ for Nature.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
