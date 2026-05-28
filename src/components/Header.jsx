import React, { useState } from 'react';

const Header = ({ company }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="glass fixed top-0 w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="bg-primary w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20">
              V
            </div>
            <span className="text-2xl font-bold text-primary tracking-tight">
              {company.name || 'Vaidik Foods'}
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 font-medium text-gray-600">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#products" className="hover:text-primary transition-colors">Products</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            <a href={`tel:${company.phone}`} className="btn-primary px-6 py-2 rounded-full text-sm">
              Call Now
            </a>
          </nav>

          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white border-b transition-all duration-300 ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="px-4 py-6 space-y-4 flex flex-col items-center">
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#products" onClick={() => setIsMenuOpen(false)}>Products</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <a href={`tel:${company.phone}`} className="btn-primary w-full text-center py-2">Call Now</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
