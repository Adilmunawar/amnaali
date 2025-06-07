import { motion } from "framer-motion";
import { Palette, Search, TrendingUp, Zap } from "lucide-react";

export const Tools = () => {
  const tools = [
    {
      category: "Design Tools",
      icon: Palette,
      color: "from-pink-500 to-rose-500",
      tools: [
        { name: "Adobe Photoshop", image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" },
        { name: "Adobe Illustrator", image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" },
        { name: "Figma", image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
        { name: "Canva Pro", image: "https://github.com/Adilmunawar/amnaali/blob/main/AdilUploads/Canva.png" },
        { name: "Adobe InDesign", image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg" }
      ]
    },
    {
      category: "SEO & Analytics",
      icon: Search,
      color: "from-green-500 to-emerald-500",
      tools: [
        { name: "Google Analytics", image: "https://upload.wikimedia.org/wikipedia/commons/7/77/GAnalytics.svg" },
        { name: "SEMrush", image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/SEMrush_logo.svg" },
        { name: "Ahrefs", image: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Ahrefs_logo.svg" },
        { name: "Search Console", image: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" },
        { name: "Yoast SEO", image: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Yoast_Logo_Small.svg" }
      ]
    },
    {
      category: "Marketing",
      icon: TrendingUp,
      color: "from-purple-500 to-violet-500",
      tools: [
        { name: "Google Ads", image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg" },
        { name: "Facebook Ads", image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" },
        { name: "Mailchimp", image: "https://upload.wikimedia.org/wikipedia/commons/2/27/Mailchimp_Logo.svg" },
        { name: "Hootsuite", image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Hootsuite_Logo.svg" },
        { name: "Buffer", image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Buffer_logo.svg" }
      ]
    },
    {
      category: "Productivity",
      icon: Zap,
      color: "from-cyan-500 to-teal-500",
      tools: [
        { name: "Notion", image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
        { name: "Slack", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" },
        { name: "Trello", image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Trello-logo-blue.svg" },
        { name: "Adobe Creative", image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg" },
        { name: "Google Workspace", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Workspace_Logo.svg" }
      ]
    }
  ];

  return (
    <section id="tools" className="py-20 bg-gradient-to-br from-white via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Enhanced Logo Integration - Made Much Larger */}
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

      <div className="max-w-7xl mx-auto px-6">
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
                
                <div className="grid grid-cols-3 gap-4 relative z-10">
                  {category.tools.map((tool, toolIndex) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ 
                        delay: index * 0.1 + toolIndex * 0.05,
                        type: "spring",
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -5,
                        rotate: [0, -5, 5, 0],
                        boxShadow: "0 10px 25px rgba(168, 85, 247, 0.3)"
                      }}
                      className="group/tool relative"
                    >
                      <motion.div
                        className="bg-gradient-to-br from-white to-purple-50 rounded-xl p-4 border border-purple-100 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden"
                        whileHover={{ 
                          background: "linear-gradient(135deg, #ffffff, #f3e8ff, #fce7f3)" 
                        }}
                      >
                        <motion.div
                          className="relative z-10"
                          animate={{
                            y: [0, -2, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <motion.img
                            src={tool.image}
                            alt={tool.name}
                            className="w-12 h-12 mx-auto mb-3 object-contain filter drop-shadow-lg"
                            whileHover={{ 
                              rotate: [0, 360],
                              filter: "drop-shadow(0 8px 16px rgba(168, 85, 247, 0.4))"
                            }}
                            transition={{ duration: 0.6 }}
                            onError={(e) => {
                              console.log(`Failed to load image for ${tool.name}:`, e.currentTarget.src);
                              // Fallback to a generic icon
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.nextElementSibling?.classList.add('mt-6');
                            }}
                          />
                          <motion.p 
                            className="text-xs font-semibold text-gray-700 text-center leading-tight group-hover/tool:text-purple-600 transition-colors"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tool.name}
                          </motion.p>
                        </motion.div>

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
