
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Star, Zap, Crown, Gem } from "lucide-react";
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
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 overflow-hidden flex items-center justify-center">
      {/* Advanced Animated Background */}
      <div className="absolute inset-0">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-fuchsia-500/20 to-cyan-400/20" />
        
        {/* Animated Orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-30"
            style={{
              background: `linear-gradient(45deg, 
                ${i % 3 === 0 ? '#8b5cf6, #06b6d4' : i % 3 === 1 ? '#ec4899, #f59e0b' : '#10b981, #3b82f6'})`,
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
            }}
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
              scale: [0, 1, 0.5, 1],
              rotate: [0, 360]
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3csvg width="60" height="60" xmlns="http://www.w3.org/2000/svg"%3e%3cdefs%3e%3cpattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"%3e%3cpath d="m 60 0 l 0 60 l -60 0 l 0 -60 z" fill="none" stroke="%23a855f7" stroke-width="1" opacity="0.1"/%3e%3c/pattern%3e%3c/defs%3e%3crect width="100%25" height="100%25" fill="url(%23grid)"/%3e%3c/svg%3e')] opacity-20" />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: 0,
              scale: 0
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: 360,
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {i % 4 === 0 ? (
              <Star className="w-6 h-6 text-violet-400 opacity-40" />
            ) : i % 4 === 1 ? (
              <Zap className="w-5 h-5 text-cyan-400 opacity-40" />
            ) : i % 4 === 2 ? (
              <Crown className="w-7 h-7 text-fuchsia-400 opacity-40" />
            ) : (
              <Gem className="w-4 h-4 text-emerald-400 opacity-40" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Interactive Cursor Trail */}
      <motion.div
        className="fixed w-6 h-6 rounded-full pointer-events-none z-50"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.8), rgba(6, 182, 212, 0.6))",
          boxShadow: "0 0 20px rgba(139, 92, 246, 0.6), 0 0 40px rgba(6, 182, 212, 0.4)"
        }}
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 50
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 80 }}
          className="mb-8"
        >
          {/* Logo Animation */}
          <motion.div
            className="inline-block mb-12 relative"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <motion.div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 blur-2xl opacity-50" />
            <Sparkles className="w-24 h-24 text-white relative z-10 filter drop-shadow-2xl" />
          </motion.div>
          
          {/* Enhanced Title */}
          <motion.h1 
            className="text-8xl md:text-9xl lg:text-[10rem] font-black mb-8 relative"
            initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 2, delay: 0.5, type: "spring", stiffness: 100 }}
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 30px rgba(139, 92, 246, 0.8)"
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Amna Ali
            </span>
            <span className="bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
              Amna Ali
            </span>
            {/* Glow Effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-cyan-500/20 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.h1>
          
          {/* Subtitle with Glass Effect */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="mb-12"
          >
            <motion.div 
              className="inline-block bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-4 mb-8"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.4)"
              }}
            >
              <h2 className="text-2xl md:text-3xl text-white font-light">
                Founder of{" "}
                <span className="font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  ARS Ltd.
                </span>
              </h2>
            </motion.div>
            
            {/* Role Tags */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { text: "Creative Director", color: "from-violet-500 to-purple-600" },
                { text: "Brand Strategist", color: "from-fuchsia-500 to-pink-600" },
                { text: "Growth Expert", color: "from-cyan-500 to-blue-600" }
              ].map((role, index) => (
                <motion.span
                  key={role.text}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: 1.8 + index * 0.2, 
                    type: "spring", 
                    stiffness: 200 
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    rotate: 5,
                    boxShadow: "0 20px 40px -12px rgba(139, 92, 246, 0.4)"
                  }}
                  className={`bg-gradient-to-r ${role.color} text-white px-6 py-3 rounded-full font-semibold shadow-xl border border-white/20 backdrop-blur-sm`}
                >
                  {role.text}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2.5 }}
            className="text-xl md:text-2xl text-gray-200 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Transforming brands through{" "}
            <span className="text-transparent bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text font-semibold">
              cutting-edge design
            </span>{" "}
            and{" "}
            <span className="text-transparent bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text font-semibold">
              strategic innovation
            </span>
            , crafting digital experiences that captivate audiences and drive exponential growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.6)",
                y: -8
              }}
              whileTap={{ scale: 0.95 }}
              className="relative group bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 text-white px-12 py-5 rounded-2xl text-lg font-bold shadow-2xl border border-white/20 overflow-hidden"
            >
              <span className="relative z-10">Explore My Universe</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="relative group border-2 border-white/30 bg-white/5 backdrop-blur-xl text-white px-12 py-5 rounded-2xl text-lg font-bold transition-all duration-300"
            >
              <span className="relative z-10">Start Collaboration</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 4 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-white/80 cursor-pointer p-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};
