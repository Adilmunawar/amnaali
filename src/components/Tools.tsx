
import { motion } from "framer-motion";
import { Palette, Search, TrendingUp, Zap } from "lucide-react";

export const Tools = () => {
  const tools = [
    {
      category: "Design Tools",
      icon: Palette,
      color: "from-pink-500 to-rose-500",
      tools: [
        { 
          name: "Adobe Creative Suite", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Creative_Cloud_rainbow_icon.svg",
          description: "Complete creative toolkit"
        },
        { 
          name: "Figma", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
          description: "Collaborative design platform"
        },
        { 
          name: "Canva Pro", 
          icon: "https://upload.wikimedia.org/wikipedia/en/1/15/Canva_icon_2021.svg",
          description: "Professional design tool"
        },
        { 
          name: "Adobe XD", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",
          description: "UX/UI design and prototyping"
        }
      ]
    },
    {
      category: "SEO & Analytics",
      icon: Search,
      color: "from-emerald-500 to-teal-500",
      tools: [
        { 
          name: "Google Analytics", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/7/77/GAnalytics.svg",
          description: "Web analytics platform"
        },
        { 
          name: "SEMrush", 
          icon: "https://cdn.worldvectorlogo.com/logos/semrush-1.svg",
          description: "SEO and marketing toolkit"
        },
        { 
          name: "Ahrefs", 
          icon: "https://cdn.worldvectorlogo.com/logos/ahrefs-1.svg",
          description: "SEO toolset"
        },
        { 
          name: "Google Search Console", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Google_Search_Console_Logo_2015-2020.svg",
          description: "Search performance monitoring"
        }
      ]
    },
    {
      category: "Marketing Platforms",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500",
      tools: [
        { 
          name: "Facebook Ads Manager", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
          description: "Social media advertising"
        },
        { 
          name: "Google Ads", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg",
          description: "Search and display advertising"
        },
        { 
          name: "LinkedIn Campaign Manager", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
          description: "Professional network advertising"
        },
        { 
          name: "HubSpot", 
          icon: "https://cdn.worldvectorlogo.com/logos/hubspot-4.svg",
          description: "Inbound marketing platform"
        }
      ]
    },
    {
      category: "Productivity Suite",
      icon: Zap,
      color: "from-violet-500 to-purple-500",
      tools: [
        { 
          name: "Slack", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
          description: "Team communication"
        },
        { 
          name: "Trello", 
          icon: "https://cdn.worldvectorlogo.com/logos/trello.svg",
          description: "Project management"
        },
        { 
          name: "Asana", 
          icon: "https://cdn.worldvectorlogo.com/logos/asana-logo.svg",
          description: "Work management platform"
        },
        { 
          name: "Notion", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
          description: "All-in-one workspace"
        }
      ]
    }
  ];

  return (
    <section id="tools" className="py-20 bg-gradient-to-br from-slate-50 via-slate-100 to-emerald-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, 20, -20, 0],
            y: [0, -10, 10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-emerald-600 to-teal-600 bg-clip-text text-transparent"
          >
            Professional Toolkit
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Industry-leading tools and technologies that power my creative solutions
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {tools.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-lg group"
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-6">
                  {category.category}
                </h3>
                
                <div className="grid grid-cols-1 gap-4">
                  {category.tools.map((tool, toolIndex) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: index * 0.1 + toolIndex * 0.05
                      }}
                      viewport={{ once: true }}
                      className="group/tool"
                    >
                      <motion.div
                        className="bg-gradient-to-r from-slate-50 to-white rounded-xl p-4 border border-slate-200/50 hover:shadow-md transition-all duration-300 cursor-pointer flex items-center gap-4"
                        whileHover={{ y: -2 }}
                      >
                        <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center overflow-hidden">
                          <img 
                            src={tool.icon} 
                            alt={tool.name}
                            className="w-6 h-6 object-contain"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-800 group-hover/tool:text-emerald-600 transition-colors">
                            {tool.name}
                          </h4>
                          <p className="text-sm text-slate-500">{tool.description}</p>
                        </div>
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
