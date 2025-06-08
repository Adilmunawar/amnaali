
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import GooeyNav from "./GooeyNav";

export const Navigation = () => {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Tools", href: "#tools" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg border-b border-pink-300/30 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <motion.div className="relative">
              <Sparkles className="w-10 h-10 text-white drop-shadow-lg" />
              <motion.div
                className="absolute inset-0 w-10 h-10 bg-white rounded-full blur-lg opacity-40"
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
            
            <motion.div className="text-2xl font-bold text-white drop-shadow-lg">
              Amna Ali
            </motion.div>
          </motion.div>

          {/* GooeyNav */}
          <div className="hidden md:block">
            <GooeyNav
              items={navItems}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>

          {/* Mobile Navigation - Simple fallback */}
          <div className="md:hidden">
            <select 
              className="bg-white/20 text-white border border-white/30 rounded-lg px-4 py-2 backdrop-blur-sm"
              onChange={(e) => {
                if (e.target.value) {
                  document.querySelector(e.target.value)?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <option value="">Menu</option>
              {navItems.map((item, index) => (
                <option key={index} value={item.href} className="text-black">
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
