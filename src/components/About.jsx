import React from 'react';

const About = ({ company }) => {
  return (
    <section id="about" className="section" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Heritage & Quality</h2>
          <div style={{ width: '80px', height: '4px', background: 'var(--primary)', margin: '0 auto' }}></div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
              {company.about || 'Loading company profile...'}
            </p>
            <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <h4 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Global Exports</h4>
                <p style={{ fontSize: '0.9rem' }}>Supplying premium food ingredients to over 15+ countries across Europe and USA.</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>ISO Certified</h4>
                <p style={{ fontSize: '0.9rem' }}>Strict adherence to international food safety standards and certifications.</p>
              </div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <img 
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=500&auto=format&fit=crop" 
              alt="Quality Control" 
              style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '20px' }}
            />
            <img 
              src="https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=500&auto=format&fit=crop" 
              alt="Ingredients" 
              style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '20px', marginTop: '2rem' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
