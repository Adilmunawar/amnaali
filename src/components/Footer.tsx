
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
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white py-16 overflow-hidden">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              background: `linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899)`
            }}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0
            }}
            animate={{
              y: [null, -50, (typeof window !== 'undefined' ? window.innerHeight : 800) + 50],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 4,
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
              <div className="relative">
                <Sparkles className="w-8 h-8 text-cyan-400" />
                <motion.div
                  className="absolute inset-0 w-8 h-8 bg-cyan-400 rounded-full blur-lg opacity-30"
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Amna Ali
              </div>
            </motion.div>
            <motion.p className="text-gray-300 leading-relaxed">
              Creating exceptional digital experiences through innovative design and strategic excellence that transforms brands and captivates audiences.
            </motion.p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
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
                  className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200"
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
            <h3 className="text-lg font-semibold mb-4 text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text flex items-center gap-2">
              <Heart className="w-4 h-4 text-purple-400" />
              Get In Touch
            </h3>
            <div className="space-y-3 text-gray-300">
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
                  className="flex items-center gap-3 hover:text-purple-400 transition-colors duration-200"
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
          className="text-center py-8 border-t border-purple-500/20"
        >
          <motion.div className="space-y-3">
            <motion.p className="text-gray-400 text-lg font-medium">
              Crafted with{" "}
              <Heart className="inline w-4 h-4 text-purple-400 mx-1" />
              by{" "}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text font-semibold">Amna Ali</span>
            </motion.p>
            <motion.p className="text-sm text-gray-500">
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
          className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-600 to-purple-600 text-white p-3 rounded-full shadow-lg z-50 border border-purple-500/30"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>
    </footer>
  );
};
