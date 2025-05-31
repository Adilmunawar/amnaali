
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Tools", href: "#tools" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-purple-500/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <motion.div className="relative">
              <Sparkles className="w-10 h-10 text-cyan-400" />
              <motion.div
                className="absolute inset-0 w-10 h-10 bg-cyan-400 rounded-full blur-lg opacity-30"
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            <motion.div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Amna Ali
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="relative group px-6 py-3 text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                <span className="relative z-10">{item.name}</span>
                <motion.span 
                  className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-200 group-hover:w-3/4 group-hover:left-1/8"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white bg-gray-800/80 border border-purple-500/30 rounded-lg backdrop-blur-sm"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2 bg-gray-800/50 backdrop-blur-sm rounded-lg mt-4 px-4 border border-purple-500/20">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-white hover:bg-purple-500/20 transition-all py-3 px-4 rounded-lg font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};
