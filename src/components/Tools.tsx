import { motion } from "framer-motion";
import { Palette, TrendingUp, Users, Target } from "lucide-react";

export const Tools = () => {
  const skillCategories = [
    {
      title: "Design Tools",
      color: "from-purple-500 to-pink-500",
      bgGradient: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
      icon: Palette,
      skills: [
        { 
          name: "Adobe Illustrator", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
        },
        { 
          name: "Adobe Photoshop", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
        },
        { 
          name: "Figma", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
        },
        { 
          name: "Canva", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg",
        },
        { 
          name: "Sketch", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/5/59/Sketch_Logo.svg",
        },
        { 
          name: "Adobe XD", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",
        }
      ]
    },
    {
      title: "Marketing Platforms",
      color: "from-emerald-500 to-teal-500",
      bgGradient: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20",
      icon: TrendingUp,
      skills: [
        { 
          name: "Meta Business", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
        },
        { 
          name: "Google Ads", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg",
        },
        { 
          name: "Pinterest Business", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png",
        },
        { 
          name: "LinkedIn Campaign Manager", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
        },
        { 
          name: "TikTok Ads", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/3/34/Ionicons_logo-tiktok.svg",
        },
        { 
          name: "Snapchat Ads", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Snapchat_ghost_icon.svg",
        }
      ]
    },
    {
      title: "Analytics & Strategy",
      color: "from-cyan-500 to-blue-500",
      bgGradient: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
      icon: Target,
      skills: [
        { 
          name: "Google Analytics", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/7/77/Google_Analytics_logo.svg",
        },
        { 
          name: "Google Tag Manager", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Google_Tag_Manager_Icon.svg",
        },
        { 
          name: "Miro", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Miro_Logo.svg/512px-Miro_Logo.svg.png",
        },
        { 
          name: "Notion", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
        },
        { 
          name: "Airtable", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Airtable_Logo.svg",
        },
        { 
          name: "Hotjar", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Hotjar-logo.svg",
        }
      ]
    },
    {
      title: "Social Platforms",
      color: "from-pink-500 to-rose-500",
      bgGradient: "bg-gradient-to-br from-pink-500/20 to-rose-500/20",
      icon: Users,
      skills: [
        { 
          name: "Instagram", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
        },
        { 
          name: "YouTube", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg",
        },
        { 
          name: "Facebook", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
        },
        { 
          name: "Twitter", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg",
        },
        { 
          name: "TikTok", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/3/34/Ionicons_logo-tiktok.svg",
        },
        { 
          name: "Discord", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/Discord_logo.svg",
        }
      ]
    }
  ];

  return (
    <section id="tools" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative overflow-hidden">
      {/* Keep existing background animations */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            x: [0, -80, 0],
            y: [0, 40, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/3 rounded-full blur-2xl"
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.3, 0.8]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Professional Tools
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"
            animate={{
              scaleX: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Tools Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Main Card */}
                <motion.div
                  whileHover={{ 
                    y: -8,
                    scale: 1.01,
                    transition: { duration: 0.3 }
                  }}
                  className={`${category.bgGradient} backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 relative overflow-hidden`}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-6 mb-8 relative z-10">
                    <motion.div 
                      className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} shadow-lg`}
                      whileHover={{ 
                        scale: 1.1,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                    <motion.h3 
                      className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                    >
                      {category.title}
                    </motion.h3>
                  </div>

                  {/* Tools Icons Grid */}
                  <div className="grid grid-cols-3 gap-6">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: categoryIndex * 0.1 + index * 0.05,
                        }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          scale: 1.05, 
                          y: -5,
                          transition: { duration: 0.2 }
                        }}
                        className="group/tool relative"
                      >
                        <motion.div 
                          className="bg-white rounded-xl p-4 aspect-square flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl border border-gray-100"
                          whileHover={{
                            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                          }}
                        >
                          {/* Icon */}
                          <motion.img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-10 h-10 object-contain"
                            whileHover={{
                              scale: 1.1,
                            }}
                            transition={{
                              duration: 0.2,
                            }}
                            onError={(e) => {
                              const target = e.currentTarget;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent && !parent.querySelector('.fallback-icon')) {
                                const fallback = document.createElement('div');
                                fallback.className = 'fallback-icon w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-gray-600 font-bold text-sm';
                                fallback.textContent = skill.name.slice(0, 2).toUpperCase();
                                parent.appendChild(fallback);
                              }
                            }}
                          />
                        </motion.div>
                        
                        {/* Tooltip */}
                        <motion.div
                          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/tool:opacity-100 transition-opacity duration-200 whitespace-nowrap z-20"
                          initial={{ opacity: 0, y: 5 }}
                          whileHover={{ opacity: 1, y: 0 }}
                        >
                          {skill.name}
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
