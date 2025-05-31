
import { motion } from "framer-motion";
import { Heart, ArrowUp, Sparkles, Mail, Phone, MapPin, Star, Zap } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white py-20 overflow-hidden">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 6 + 3,
              height: Math.random() * 6 + 3,
              background: `linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899)`
            }}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0
            }}
            animate={{
              y: [null, -80, (typeof window !== 'undefined' ? window.innerHeight : 800) + 80],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.5],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute border border-purple-500/20"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              borderRadius: i % 2 === 0 ? '50%' : '20%'
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2
            }}
          />
        ))}
        
        {/* Gradient waves */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/10 to-pink-500/5"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          {/* Logo and Description */}
          <motion.div 
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div className="flex items-center space-x-4">
              <motion.div 
                className="relative"
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Sparkles className="w-10 h-10 text-cyan-400" />
                <motion.div
                  className="absolute inset-0 w-10 h-10 bg-cyan-400 rounded-full blur-lg opacity-40"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -inset-2 border border-cyan-400/30 rounded-full"
                  animate={{
                    rotate: [0, -360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
              <motion.div 
                className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                Amna Ali
              </motion.div>
            </motion.div>
            <motion.p 
              className="text-gray-300 leading-relaxed text-lg"
              animate={{
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Creating exceptional digital experiences through innovative design and strategic excellence that transforms brands and captivates audiences worldwide.
            </motion.p>
            
            {/* Social links placeholder */}
            <div className="flex gap-4">
              {[Star, Zap, Heart].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-purple-500/30 cursor-pointer"
                  animate={{
                    y: [0, -5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                >
                  <Icon className="w-5 h-5 text-cyan-400" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl font-semibold mb-6 text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="w-6 h-6 text-cyan-400" />
              </motion.div>
              Quick Links
            </motion.h3>
            <div className="space-y-4">
              {["Home", "About", "Tools", "Portfolio", "Services", "Contact"].map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    x: 10, 
                    color: "#06b6d4",
                    transition: { duration: 0.2 }
                  }}
                  className="block text-gray-300 hover:text-cyan-400 transition-all duration-200 text-lg relative group"
                >
                  <motion.span
                    className="absolute left-0 top-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300 transform -translate-y-1/2"
                  />
                  <span className="pl-6">{link}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl font-semibold mb-6 text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.3, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart className="w-6 h-6 text-purple-400" />
              </motion.div>
              Get In Touch
            </motion.h3>
            <div className="space-y-5 text-gray-300">
              {[
                { icon: Mail, text: "contact@amnali.com" },
                { icon: Phone, text: "+92 324 8406582" },
                { icon: MapPin, text: "Pakistan" }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      x: 5, 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    className="flex items-center gap-4 hover:text-purple-400 transition-all duration-200 cursor-pointer group text-lg"
                  >
                    <motion.div
                      className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.div>
                    <span>{item.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center py-8 border-t border-purple-500/30 relative"
        >
          <motion.div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            animate={{
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div className="space-y-4">
            <motion.p 
              className="text-gray-400 text-xl font-medium flex items-center justify-center gap-2"
              animate={{
                y: [0, -3, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Crafted with{" "}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart className="w-5 h-5 text-purple-400 mx-1" />
              </motion.div>
              by{" "}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text font-semibold">Amna Ali</span>
            </motion.p>
            <motion.p 
              className="text-sm text-gray-500"
              animate={{
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              © 2024 Amna Ali. All rights reserved.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ 
            scale: 1.15, 
            y: -8,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 z-50 group"
        >
          <motion.div
            className="absolute -inset-2 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"
            animate={{
              rotate: [0, 360]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <div className="relative bg-gray-900 p-4 rounded-full border border-purple-500/30 group-hover:border-purple-500/60 transition-colors duration-300">
            <motion.div
              animate={{
                y: [0, -3, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ArrowUp className="w-6 h-6 text-white" />
            </motion.div>
          </div>
        </motion.button>
      </div>
    </footer>
  );
};
