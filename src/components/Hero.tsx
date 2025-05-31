
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Code, Palette, TrendingUp, ChevronRight, Star, Zap } from "lucide-react";
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

  const floatingIcons = [
    { icon: Code, delay: 0, position: { x: "10%", y: "20%" } },
    { icon: Palette, delay: 1, position: { x: "85%", y: "30%" } },
    { icon: TrendingUp, delay: 2, position: { x: "15%", y: "70%" } },
    { icon: Sparkles, delay: 1.5, position: { x: "80%", y: "75%" } }
  ];

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 overflow-hidden flex items-center justify-center">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -40, 0],
            y: [0, 25, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <motion.div
            key={index}
            className="absolute text-purple-400/30"
            style={{
              left: item.position.x,
              top: item.position.y
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 360],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut"
            }}
          >
            <IconComponent className="w-8 h-8" />
          </motion.div>
        );
      })}

      {/* Enhanced Cursor Trail */}
      <motion.div
        className="fixed w-6 h-6 rounded-full pointer-events-none z-50 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-60"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          {/* Enhanced Logo Animation */}
          <motion.div
            className="inline-block mb-8 relative"
            animate={{ 
              rotate: [0, 360],
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
          >
            <div className="relative">
              <Sparkles className="w-20 h-20 text-cyan-400 filter drop-shadow-2xl" />
              <motion.div
                className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-xl opacity-30"
                animate={{
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
          
          {/* Enhanced Title with better typography */}
          <motion.h1 
            className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent filter drop-shadow-lg">
              Amna Ali
            </span>
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl -z-10"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.h1>
          
          {/* Enhanced Subtitle with animated background */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mb-8"
          >
            <div className="inline-block bg-gradient-to-r from-gray-800/80 to-purple-900/80 backdrop-blur-lg border border-purple-500/30 rounded-2xl px-8 py-4 mb-8">
              <h2 className="text-2xl md:text-3xl text-transparent bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text font-semibold">
                Creative Professional & Brand Strategist
              </h2>
            </div>
            
            {/* Enhanced Role Tags */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { text: "Creative Director", gradient: "from-cyan-500 to-blue-600", icon: Palette },
                { text: "Brand Designer", gradient: "from-purple-500 to-pink-600", icon: Star },
                { text: "Growth Strategist", gradient: "from-emerald-500 to-teal-600", icon: TrendingUp }
              ].map((role, index) => {
                const IconComponent = role.icon;
                return (
                  <motion.div
                    key={role.text}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: 1 + index * 0.2, 
                      type: "spring", 
                      stiffness: 200,
                      duration: 0.8
                    }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`bg-gradient-to-r ${role.gradient} text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg cursor-pointer flex items-center gap-3`}
                  >
                    <IconComponent className="w-5 h-5" />
                    {role.text}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Enhanced Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Crafting digital experiences that transcend expectations through 
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text font-semibold"> innovative design</span> and 
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold"> strategic brilliance</span>
          </motion.p>

          {/* Enhanced CTA Elements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            {/* Advanced Animated Card Button */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative group cursor-pointer"
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <div className="relative bg-gray-900 px-8 py-4 rounded-3xl leading-none flex items-center">
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <Zap className="w-6 h-6 text-cyan-400" />
                  </motion.div>
                  <span className="text-white text-xl font-bold">Explore My Work</span>
                  <motion.div
                    animate={{
                      x: [0, 5, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <ChevronRight className="w-6 h-6 text-purple-400" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            {/* Glass Morphism Connect Button */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-3xl border border-purple-500/30" />
              <motion.div 
                className="relative bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-3xl overflow-hidden"
                whileHover={{
                  background: "rgba(255, 255, 255, 0.15)"
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: [-100, 300]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <div className="relative flex items-center gap-3">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Star className="w-6 h-6 text-yellow-400" />
                  </motion.div>
                  <span className="text-white text-xl font-bold">Let's Connect</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
          className="text-purple-400 cursor-pointer p-4 bg-gray-800/50 rounded-full backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/60 transition-colors duration-300"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};
