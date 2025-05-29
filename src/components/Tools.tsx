
import { motion } from "framer-motion";
import { Palette, Search, TrendingUp, Zap } from "lucide-react";

export const Tools = () => {
  const tools = [
    {
      category: "Design Tools",
      icon: Palette,
      color: "from-pink-500 to-rose-500",
      tools: [
        { name: "Adobe Creative Suite", icon: "🎨" },
        { name: "Figma", icon: "🔧" },
        { name: "Canva Pro", icon: "✨" },
        { name: "Adobe XD", icon: "🎯" },
        { name: "Sketch", icon: "📐" }
      ]
    },
    {
      category: "SEO & Analytics",
      icon: Search,
      color: "from-green-500 to-emerald-500",
      tools: [
        { name: "Google Analytics", icon: "📊" },
        { name: "SEMrush", icon: "🔍" },
        { name: "Ahrefs", icon: "📈" },
        { name: "Google Search Console", icon: "🌐" },
        { name: "Moz Pro", icon: "📉" }
      ]
    },
    {
      category: "Marketing Platforms",
      icon: TrendingUp,
      color: "from-purple-500 to-violet-500",
      tools: [
        { name: "Facebook Ads Manager", icon: "📱" },
        { name: "Google Ads", icon: "🎯" },
        { name: "LinkedIn Campaign Manager", icon: "💼" },
        { name: "Twitter Ads", icon: "🐦" },
        { name: "TikTok Ads Manager", icon: "🎵" }
      ]
    },
    {
      category: "Productivity Suite",
      icon: Zap,
      color: "from-cyan-500 to-teal-500",
      tools: [
        { name: "Slack", icon: "💬" },
        { name: "Trello", icon: "📋" },
        { name: "Asana", icon: "✅" },
        { name: "Notion", icon: "📝" },
        { name: "Monday.com", icon: "🗓️" }
      ]
    }
  ];

  return (
    <section id="tools" className="py-20 bg-gradient-to-br from-white via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Enhanced floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -20, 20, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 rounded-full blur-2xl"
          animate={{
            x: [0, -25, 25, 0],
            y: [0, 15, -15, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Enhanced Logo Integration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.3, rotate: -180 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
        className="absolute top-10 right-10 z-10"
      >
        <motion.div 
          className="relative"
          whileHover={{ scale: 1.3, rotate: 15 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.img 
            src="/lovable-uploads/716d8093-d916-47af-ab5a-cc51a036653f.png" 
            alt="ARS Logo" 
            className="w-32 h-32 object-contain relative z-10 filter drop-shadow-xl"
            animate={{ 
              y: [0, -8, 0],
              filter: [
                "drop-shadow(0 8px 16px rgba(168, 85, 247, 0.3))",
                "drop-shadow(0 12px 24px rgba(236, 72, 153, 0.5))",
                "drop-shadow(0 8px 16px rgba(168, 85, 247, 0.3))"
              ]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent"
            whileInView={{ scale: [0.9, 1.05, 1] }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            My Professional Toolkit
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Cutting-edge tools and technologies that power my creative and strategic solutions
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {tools.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(168, 85, 247, 0.3)"
                }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-purple-200/50 shadow-lg shadow-purple-500/10 group relative overflow-hidden"
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-full mb-6 group-hover:shadow-lg transition-all duration-300 relative z-10`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-purple-600 transition-colors relative z-10">
                  {category.category}
                </h3>
                
                <div className="grid grid-cols-1 gap-4 relative z-10">
                  {category.tools.map((tool, toolIndex) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, scale: 0.5, x: -50 }}
                      whileInView={{ opacity: 1, scale: 1, x: 0 }}
                      transition={{ 
                        delay: index * 0.1 + toolIndex * 0.05,
                        type: "spring",
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.05, 
                        x: 10,
                        boxShadow: "0 5px 15px rgba(168, 85, 247, 0.2)"
                      }}
                      className="group/tool relative"
                    >
                      <motion.div
                        className="bg-gradient-to-br from-white to-purple-50 rounded-xl p-4 border border-purple-100 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden flex items-center gap-4"
                        whileHover={{ 
                          background: "linear-gradient(135deg, #ffffff, #f3e8ff, #fce7f3)" 
                        }}
                      >
                        <motion.div
                          className="text-2xl"
                          animate={{
                            rotate: [0, 10, -10, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          {tool.icon}
                        </motion.div>
                        
                        <motion.p 
                          className="text-sm font-semibold text-gray-700 group-hover/tool:text-purple-600 transition-colors flex-1"
                          whileHover={{ x: 5 }}
                        >
                          {tool.name}
                        </motion.p>

                        <motion.div
                          className="absolute inset-0 rounded-xl opacity-0 group-hover/tool:opacity-100 transition-opacity duration-300"
                          style={{
                            background: "radial-gradient(circle at center, rgba(168, 85, 247, 0.1) 0%, transparent 70%)"
                          }}
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
