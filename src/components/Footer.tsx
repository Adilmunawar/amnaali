
import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-purple-900 via-slate-900 to-indigo-900 text-white py-16 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              y: [null, -50, window.innerHeight + 50],
              opacity: [0, 0.7, 0]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/716d8093-d916-47af-ab5a-cc51a036653f.png" 
                alt="ARS Logo" 
                className="w-12 h-12 object-contain filter brightness-0 invert"
              />
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                ARS Ltd.
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Creative visionary crafting digital experiences that transform brands through innovative design and strategic excellence.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-cyan-400">Quick Links</h3>
            <div className="space-y-3">
              {["Home", "About", "Tools", "Portfolio", "Services", "Contact"].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ x: 5, color: "#22d3ee" }}
                  className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-cyan-400">Get In Touch</h3>
            <div className="space-y-3 text-gray-300">
              <p>📧 contact@arsltd.com</p>
              <p>📱 +92 324 8406582</p>
              <p>📍 Pakistan</p>
            </div>
          </motion.div>
        </div>

        {/* Signature Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center py-8 border-t border-purple-700/50"
        >
          <div className="mb-6">
            <img 
              src="/lovable-uploads/397d5705-f917-47f5-b699-e8347a4579e0.png" 
              alt="Amna Ali Signature" 
              className="mx-auto h-16 object-contain filter brightness-0 invert opacity-80"
            />
          </div>
          <motion.p 
            className="text-gray-400 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Crafted with <Heart className="inline w-4 h-4 text-pink-400 mx-1" /> by Amna Ali
          </motion.p>
          <p className="text-sm text-gray-500">
            © 2024 ARS Ltd. All rights reserved.
          </p>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-purple-600 text-white p-4 rounded-full shadow-lg shadow-purple-500/30 z-50"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      </div>
    </footer>
  );
};
