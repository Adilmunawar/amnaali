
import { motion } from "framer-motion";
import { Heart, ArrowUp, Sparkles } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-16 overflow-hidden">
      {/* Simplified Background Animation */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              background: `linear-gradient(45deg, #10b981, #06b6d4)`
            }}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0
            }}
            animate={{
              y: [null, -50, (typeof window !== 'undefined' ? window.innerHeight : 800) + 50],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.div className="flex items-center space-x-3">
              <Sparkles className="w-8 h-8 text-emerald-400" />
              <div className="text-xl font-bold text-white">
                Amna Ali
              </div>
            </motion.div>
            <motion.p className="text-slate-300 leading-relaxed">
              Creative professional crafting digital experiences that transform brands through innovative design and strategic excellence.
            </motion.p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-emerald-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Quick Links
            </h3>
            <div className="space-y-2">
              {["Home", "About", "Tools", "Portfolio", "Services", "Contact"].map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="block text-slate-300 hover:text-emerald-400 transition-colors duration-200"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-emerald-400 flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Get In Touch
            </h3>
            <div className="space-y-3 text-slate-300">
              {[
                { icon: "📧", text: "contact@amnali.com" },
                { icon: "📱", text: "+92 324 8406582" },
                { icon: "📍", text: "Pakistan" }
              ].map((item, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.text}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center py-8 border-t border-slate-700/50"
        >
          <motion.div className="space-y-3">
            <motion.p className="text-slate-400 text-lg font-medium">
              Crafted with{" "}
              <Heart className="inline w-4 h-4 text-emerald-400 mx-1" />
              by{" "}
              <span className="text-emerald-400 font-semibold">Amna Ali</span>
            </motion.p>
            <motion.p className="text-sm text-slate-500">
              © 2024 Amna Ali. All rights reserved.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-3 rounded-full shadow-lg z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>
    </footer>
  );
};
