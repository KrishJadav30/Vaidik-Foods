const Footer = ({ company }) => {
  return (
    <footer id="contact" className="bg-gray-900 pt-24 pb-12 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                V
              </div>
              <span className="text-2xl font-bold tracking-tight">
                {company.name}
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8">
              Pioneers in the dehydrated food industry, bringing the purity of Vedic nutrition to global markets since inception.
            </p>
            <div className="flex gap-4">
              {['𝕏', 'ƒ', 'in', 'ig'].map(soc => (
                <a key={soc} href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-primary hover:text-primary transition-all">
                  {soc}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 flex items-center gap-2">
              <span className="w-6 h-px bg-primary"></span> Navigation
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home Experience</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Our Legacy</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Premium Catalog</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Get in Touch</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 flex items-center gap-2">
              <span className="w-6 h-px bg-primary"></span> Contact Details
            </h4>
            <ul className="space-y-6 text-gray-400">
              <li className="flex gap-4">
                <span className="text-primary text-xl">📞</span>
                <div>
                  <p className="text-white font-medium">Phone Number</p>
                  <p>{company.phone}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary text-xl">✉️</span>
                <div>
                  <p className="text-white font-medium">Email Address</p>
                  <p>{company.email}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-primary text-xl">📍</span>
                <div>
                  <p className="text-white font-medium">Headquarters</p>
                  <p>{company.address}</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 flex items-center gap-2">
              <span className="w-6 h-px bg-primary"></span> Newsletter
            </h4>
            <p className="text-gray-400 mb-6">Subscribe to receive updates on new product launches.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-gray-800 border border-gray-700 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary transition-colors text-white"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-primary px-6 rounded-xl hover:bg-primary-light transition-colors font-bold">
                →
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} {company.name}. Crafted for Culinary Excellence.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
