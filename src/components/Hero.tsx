
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Star } from "lucide-react";
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
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-cyan-100 overflow-hidden flex items-center justify-center">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
              scale: Math.random() * 2
            }}
            animate={{
              y: [null, -100, window.innerHeight + 100],
              opacity: [0, 0.8, 0],
              scale: [0.5, 2, 0.5]
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`float-${i}`}
            className="absolute"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          >
            <Star className="w-4 h-4 text-purple-300 opacity-30" />
          </motion.div>
        ))}
      </div>

      {/* Enhanced Magnetic Cursor Effect */}
      <motion.div
        className="fixed w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none z-50 mix-blend-multiply opacity-70"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 30
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
          className="mb-8"
        >
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="inline-block mb-8"
          >
            <Sparkles className="w-20 h-20 text-purple-500" />
          </motion.div>
          
          <motion.h1 
            className="text-7xl md:text-9xl font-bold mb-8 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5, rotateX: 45 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1.5, delay: 0.5, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.05, textShadow: "0px 0px 20px rgba(168, 85, 247, 0.8)" }}
          >
            Amna Ali
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mb-10"
          >
            <motion.h2 
              className="text-3xl md:text-4xl text-gray-700 mb-6 font-light"
              whileInView={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Founder of ARS Ltd.
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              {["Graphic Designer", "Digital Marketer", "SEO Expert"].map((role, index) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 + index * 0.2, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-200 text-gray-700 font-medium shadow-lg shadow-purple-200/50"
                >
                  {role}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Creative visionary crafting digital experiences that bridge art and technology, 
            transforming brands through innovative design and strategic marketing excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg shadow-purple-300/50 border border-white/20"
            >
              Explore My Work
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(168, 85, 247, 0.1)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-purple-400 text-purple-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-purple-500 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <ArrowDown className="w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
};
