import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = ({ company }) => {
  return (
    <section id="contact" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/5"
          >
            <span className="inline-block text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4">Contact Us</span>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">Get in touch</h2>
            
            <div className="space-y-8">
              {[
                { icon: <Phone className="text-primary" />, title: "Call Us", detail: company.phone, sub: "Mon-Sat, 9AM-7PM" },
                { icon: <Mail className="text-primary" />, title: "Email Us", detail: company.email, sub: "We respond quickly" },
                { icon: <MapPin className="text-primary" />, title: "Visit Us", detail: company.address, sub: "Main Office" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-900 font-medium mb-1">{item.detail}</p>
                    <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-3/5"
          >
            <div className="bg-gray-50 p-12 lg:p-16 rounded-[60px] relative border border-gray-100 shadow-premium">
              <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold uppercase tracking-widest text-gray-500 ml-2">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name"
                      className="w-full bg-white rounded-3xl py-5 px-8 border border-gray-100 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all duration-300 text-lg"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold uppercase tracking-widest text-gray-500 ml-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="name@company.com"
                      className="w-full bg-white rounded-3xl py-5 px-8 border border-gray-100 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all duration-300 text-lg"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-500 ml-2">Subject</label>
                  <select className="w-full bg-white rounded-3xl py-5 px-8 border border-gray-100 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all duration-300 text-lg appearance-none">
                    <option>Bulk Inquiry</option>
                    <option>Product Samples</option>
                    <option>Export Partnership</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-500 ml-2">Your Message</label>
                  <textarea 
                    rows="4" 
                    placeholder="Tell us what you need..."
                    className="w-full bg-white rounded-[32px] py-6 px-8 border border-gray-100 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all duration-300 text-lg resize-none"
                  ></textarea>
                </div>
                
                <button className="btn btn-primary w-full py-6 text-xl flex items-center justify-center gap-4 group">
                  Send Message
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
              
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
