
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Code, Palette, TrendingUp, ChevronRight, Star, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import ShinyText from "./ShinyText";
import ProfileCard from "./ProfileCard";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const floatingIcons = [{
    icon: Code,
    delay: 0,
    position: {
      x: "10%",
      y: "20%"
    }
  }, {
    icon: Palette,
    delay: 1,
    position: {
      x: "85%",
      y: "30%"
    }
  }, {
    icon: TrendingUp,
    delay: 2,
    position: {
      x: "15%",
      y: "70%"
    }
  }, {
    icon: Sparkles,
    delay: 1.5,
    position: {
      x: "80%",
      y: "75%"
    }
  }];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex items-center justify-center">
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

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center lg:justify-start"
          >
            <ProfileCard
              avatarUrl="/lovable-uploads/43fd4e87-d6c9-42fa-a776-492777f17353.png"
              miniAvatarUrl="/lovable-uploads/43fd4e87-d6c9-42fa-a776-492777f17353.png"
              name="Amna Ali"
              title="Creative Marketer"
              handle="AmnaAli"
              status="Online"
              contactText="Contact"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </motion.div>

          {/* Right Side - Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Enhanced Logo Animation */}
            <motion.div
              className="inline-block mb-8 relative"
              animate={{ rotate: [0, 360] }}
              transition={{
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            >
              <div className="relative">
                <Sparkles className="w-20 h-20 text-cyan-400 filter drop-shadow-2xl" />
                <motion.div
                  className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-xl opacity-30"
                  animate={{ scale: [1, 1.5, 1] }}
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
              className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.3,
                ease: "easeOut"
              }}
            >
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 bg-clip-text text-transparent filter drop-shadow-lg">
                Amna Ali
              </span>
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl -z-10"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.h1>

            {/* Enhanced Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mb-8"
            >
              <div className="inline-block bg-white/90 backdrop-blur-lg border border-gray-200 rounded-2xl px-8 py-4 mb-8 shadow-lg">
                <h2 className="text-2xl md:text-3xl text-transparent bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text font-semibold">
                  Creative Professional & Brand Strategist
                </h2>
              </div>

              {/* Enhanced Role Tags */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {[
                  {
                    text: "Creative Director",
                    gradient: "from-cyan-500 to-blue-600",
                    icon: Palette
                  },
                  {
                    text: "Brand Designer",
                    gradient: "from-purple-500 to-pink-600",
                    icon: Star
                  },
                  {
                    text: "Growth Strategist",
                    gradient: "from-emerald-500 to-teal-600",
                    icon: TrendingUp
                  }
                ].map((role, index) => {
                  const IconComponent = role.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.2 }}
                      className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${role.gradient} rounded-full text-white font-semibold shadow-lg`}
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
              className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl leading-relaxed"
            >
              Crafting digital experiences that transcend expectations through 
              <span className="text-transparent bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text font-semibold"> innovative design</span> and 
              <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text font-semibold"> strategic brilliance</span>
            </motion.p>

            {/* Enhanced CTA Buttons with ShinyText */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mb-16"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl text-white font-bold text-lg shadow-2xl border border-white/20 backdrop-blur-sm overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  <ShinyText text="View My Work" speed={3} />
                  <ChevronRight className="w-5 h-5" />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-white/90 border-2 border-gray-300 rounded-2xl text-gray-800 font-bold text-lg shadow-2xl backdrop-blur-sm hover:bg-white transition-all duration-300 overflow-hidden"
              >
                <motion.div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  <ShinyText text="Get In Touch" speed={4} />
                  <Sparkles className="w-5 h-5" />
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-gray-700 text-sm mb-2 font-medium">Scroll to explore</span>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 rounded-full bg-white/80 border border-gray-300 flex items-center justify-center backdrop-blur-sm shadow-lg"
          >
            <ArrowDown className="w-6 h-6 text-gray-700" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
