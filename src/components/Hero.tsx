
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 overflow-hidden flex items-center justify-center">
      {/* Simplified Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-slate-900/50 to-cyan-500/10" />
        
        {/* Reduced Animated Orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-2xl opacity-20"
            style={{
              background: i % 2 === 0 ? 'linear-gradient(45deg, #10b981, #06b6d4)' : 'linear-gradient(45deg, #0891b2, #059669)',
              width: `${150 + i * 80}px`,
              height: `${150 + i * 80}px`,
            }}
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200)],
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Cursor Trail */}
      <motion.div
        className="fixed w-4 h-4 rounded-full pointer-events-none z-50 bg-emerald-400/60"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          {/* Logo Animation */}
          <motion.div
            className="inline-block mb-8 relative"
            animate={{ 
              rotate: [0, 360],
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
          >
            <Sparkles className="w-16 h-16 text-emerald-400 filter drop-shadow-lg" />
          </motion.div>
          
          {/* Enhanced Title */}
          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-white via-emerald-200 to-cyan-200 bg-clip-text text-transparent">
              Amna Ali
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mb-8"
          >
            <div className="inline-block bg-slate-800/60 backdrop-blur-lg border border-slate-700/50 rounded-xl px-6 py-3 mb-6">
              <h2 className="text-xl md:text-2xl text-emerald-300 font-medium">
                Creative Professional & Brand Strategist
              </h2>
            </div>
            
            {/* Role Tags */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { text: "Creative Director", color: "from-emerald-500 to-teal-600" },
                { text: "Brand Designer", color: "from-cyan-500 to-blue-600" },
                { text: "Growth Strategist", color: "from-teal-500 to-emerald-600" }
              ].map((role, index) => (
                <motion.span
                  key={role.text}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 1 + index * 0.1, 
                    type: "spring", 
                    stiffness: 200 
                  }}
                  className={`bg-gradient-to-r ${role.color} text-white px-4 py-2 rounded-full text-sm font-semibold`}
                >
                  {role.text}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Transforming brands through innovative design and strategic thinking, 
            creating digital experiences that captivate and convert.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg"
            >
              View My Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-slate-600 bg-slate-800/50 text-white px-8 py-3 rounded-lg text-lg font-semibold backdrop-blur-sm"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-slate-400 cursor-pointer p-2"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};
