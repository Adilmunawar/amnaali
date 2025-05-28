
import { motion } from "framer-motion";
import { Award, Zap, Target, Users, Palette, TrendingUp } from "lucide-react";

export const About = () => {
  const skills = [
    { name: "Graphic Design", level: 95, color: "from-pink-500 to-rose-500", icon: Palette },
    { name: "Digital Marketing", level: 90, color: "from-purple-500 to-indigo-500", icon: TrendingUp },
    { name: "SEO Optimization", level: 88, color: "from-cyan-500 to-blue-500", icon: Target },
    { name: "Brand Strategy", level: 92, color: "from-green-500 to-emerald-500", icon: Award }
  ];

  const achievements = [
    { icon: Award, number: "150+", label: "Creative Projects" },
    { icon: Users, number: "50+", label: "Happy Clients" },
    { icon: Target, number: "95%", label: "Success Rate" },
    { icon: Zap, number: "5+", label: "Years Experience" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-800 via-purple-900 to-slate-800 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0
            }}
            animate={{
              y: [null, -50, (typeof window !== 'undefined' ? window.innerHeight : 800) + 50],
              opacity: [0, 0.7, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 80 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "linear"
            }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Passionate creative professional with a vision to transform digital landscapes through innovative design and strategic marketing solutions.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(147, 51, 234, 0.25)"
              }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">My Creative Journey</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  As the founder of ARS Ltd., I've dedicated my career to bridging the gap between creative excellence and strategic business growth. My expertise spans across graphic design, digital marketing, and SEO optimization, helping brands establish their digital presence with impact and authenticity.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Every project is an opportunity to push creative boundaries while delivering measurable results that drive business success.
                </p>
              </div>
            </motion.div>

            {/* Enhanced Skills with Icons */}
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.03,
                      x: 10,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 group relative overflow-hidden"
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"
                    />
                    <div className="relative z-10">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-3">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                            className="p-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
                          >
                            <IconComponent className="w-4 h-4 text-white" />
                          </motion.div>
                          <span className="text-white font-medium">{skill.name}</span>
                        </div>
                        <motion.span 
                          className="text-cyan-400 font-bold"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.5 }}
                          viewport={{ once: true }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0, x: "-100%" }}
                          whileInView={{ width: `${skill.level}%`, x: 0 }}
                          transition={{ 
                            duration: 1.5, 
                            delay: index * 0.2,
                            type: "spring",
                            stiffness: 100
                          }}
                          viewport={{ once: true }}
                          className={`h-2 rounded-full bg-gradient-to-r ${skill.color} relative`}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/30"
                            animate={{ x: ["0%", "100%"] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Enhanced Achievements Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={achievement.label}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    rotateY: 5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center group relative overflow-hidden"
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ 
                        rotate: [0, -10, 10, -10, 0],
                        scale: [1, 1.1, 1.2, 1.1, 1]
                      }}
                      transition={{ duration: 0.8 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/25 relative"
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-white/30"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                    <motion.h4 
                      className="text-3xl font-bold text-white mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      {achievement.number}
                    </motion.h4>
                    <motion.p 
                      className="text-gray-400"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.7 }}
                      viewport={{ once: true }}
                    >
                      {achievement.label}
                    </motion.p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
