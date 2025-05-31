
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X, Sparkles, Crown } from "lucide-react";

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
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, type: "spring", stiffness: 80 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="flex items-center space-x-4 relative group"
          >
            <motion.div className="relative">
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-violet-400/30 via-fuchsia-400/30 to-cyan-400/30 rounded-full blur-2xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Logo Image */}
              <motion.img 
                src="/lovable-uploads/716d8093-d916-47af-ab5a-cc51a036653f.png" 
                alt="ARS Logo" 
                className="w-16 h-16 object-contain relative z-10 filter drop-shadow-2xl"
                whileHover={{ rotate: 360 }}
                animate={{
                  y: [0, -4, 0],
                  filter: [
                    "drop-shadow(0 8px 16px rgba(139, 92, 246, 0.4))",
                    "drop-shadow(0 12px 24px rgba(236, 72, 153, 0.6))",
                    "drop-shadow(0 8px 16px rgba(139, 92, 246, 0.4))"
                  ]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Sparkle Effect */}
              <motion.div
                className="absolute -top-1 -right-1"
                animate={{
                  rotate: 360,
                  scale: [1, 1.3, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Sparkles className="w-4 h-4 text-violet-400" />
              </motion.div>
            </motion.div>
            
            {/* Brand Text */}
            <motion.div className="space-y-1">
              <motion.div 
                className="text-3xl font-black bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent relative"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                ARS Ltd.
                
                {/* Premium Badge */}
                <motion.div
                  className="absolute -top-2 -right-8 flex items-center gap-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-xs px-2 py-1 rounded-full"
                  whileHover={{ scale: 1.1 }}
                >
                  <Crown className="w-3 h-3" />
                  <span className="font-semibold">Premium</span>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="text-xs text-gray-400 font-medium tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                CREATIVE EXCELLENCE
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                className="relative group px-6 py-3 text-gray-300 hover:text-white transition-all duration-300 font-medium"
              >
                {/* Background Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-fuchsia-500/0 to-cyan-500/0 group-hover:from-violet-500/20 group-hover:via-fuchsia-500/20 group-hover:to-cyan-500/20 rounded-xl transition-all duration-300"
                  whileHover={{
                    boxShadow: "0 8px 32px -8px rgba(139, 92, 246, 0.3)"
                  }}
                />
                
                <span className="relative z-10">{item.name}</span>
                
                {/* Underline Effect */}
                <motion.span 
                  className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-cyan-400 transition-all duration-300 group-hover:w-3/4 group-hover:left-1/8"
                  whileHover={{ scale: 1.2 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative p-3 text-white bg-white/10 backdrop-blur-xl rounded-xl border border-white/20"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="md:hidden overflow-hidden"
        >
          <motion.div 
            className="py-6 space-y-4 bg-black/30 backdrop-blur-2xl rounded-2xl mt-4 px-6 border border-white/10"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-white transition-all duration-300 font-medium text-lg py-2 relative group"
              >
                <motion.div
                  className="absolute left-0 top-1/2 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-cyan-400 group-hover:w-8 transition-all duration-300"
                  style={{ transform: "translateY(-50%)" }}
                />
                <span className="pl-12">{item.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
};
