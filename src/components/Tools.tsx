
import { motion } from "framer-motion";
import { Palette, Code, Search, TrendingUp, Camera, Zap } from "lucide-react";

export const Tools = () => {
  const tools = [
    {
      category: "Design Tools",
      icon: Palette,
      color: "from-pink-500 to-rose-500",
      tools: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva Pro", "Adobe InDesign"]
    },
    {
      category: "Development",
      icon: Code,
      color: "from-blue-500 to-indigo-500",
      tools: ["HTML/CSS", "JavaScript", "WordPress", "Shopify", "React"]
    },
    {
      category: "SEO & Analytics",
      icon: Search,
      color: "from-green-500 to-emerald-500",
      tools: ["Google Analytics", "SEMrush", "Ahrefs", "Google Search Console", "Yoast SEO"]
    },
    {
      category: "Marketing",
      icon: TrendingUp,
      color: "from-purple-500 to-violet-500",
      tools: ["Google Ads", "Facebook Ads", "Mailchimp", "Hootsuite", "Buffer"]
    },
    {
      category: "Photography",
      icon: Camera,
      color: "from-orange-500 to-amber-500",
      tools: ["Adobe Lightroom", "Adobe Premiere Pro", "DaVinci Resolve", "Canon EOS", "DSLR"]
    },
    {
      category: "Productivity",
      icon: Zap,
      color: "from-cyan-500 to-teal-500",
      tools: ["Notion", "Slack", "Trello", "Adobe Creative Suite", "Google Workspace"]
    }
  ];

  return (
    <section id="tools" className="py-20 bg-gradient-to-br from-white via-purple-50 to-pink-50">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)"
                }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-purple-200/50 shadow-lg shadow-purple-500/10 group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-full mb-6 group-hover:shadow-lg transition-all duration-300`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors">
                  {category.category}
                </h3>
                
                <div className="space-y-3">
                  {category.tools.map((tool, toolIndex) => (
                    <motion.div
                      key={tool}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + toolIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-3 text-gray-700 font-medium hover:from-purple-200 hover:to-pink-200 transition-all duration-300 cursor-pointer"
                    >
                      {tool}
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
