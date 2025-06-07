
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
      {/* Animated Background Elements */}
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
                initial={{ opacity: 0, y: 60, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Main Card */}
                <motion.div
                  whileHover={{ 
                    y: -15,
                    scale: 1.02,
                    rotateY: 5,
                    transition: { duration: 0.4 }
                  }}
                  className={`${category.bgGradient} backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 relative overflow-hidden`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Floating Background Orb */}
                  <motion.div
                    className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r ${category.color} opacity-20 rounded-full blur-2xl`}
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  {/* Category Header */}
                  <div className="flex items-center gap-6 mb-8 relative z-10">
                    <motion.div 
                      className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} shadow-2xl`}
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: categoryIndex * 0.8
                      }}
                    >
                      <IconComponent className="w-8 h-8 text-white drop-shadow-lg" />
                    </motion.div>
                    <motion.h3 
                      className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {category.title}
                    </motion.h3>
                  </div>

                  {/* Tools Icons Grid */}
                  <div className="grid grid-cols-3 gap-6">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.3, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: categoryIndex * 0.1 + index * 0.1,
                          type: "spring",
                          stiffness: 200
                        }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          scale: 1.3, 
                          y: -20,
                          rotateY: 15,
                          rotateX: 10,
                          transition: { duration: 0.3 }
                        }}
                        className="group/tool relative"
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <motion.div 
                          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 aspect-square flex items-center justify-center transition-all duration-500 cursor-pointer relative overflow-hidden border border-white/10 hover:border-white/30 hover:bg-white/10"
                          whileHover={{
                            boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                          }}
                        >
                          {/* Animated Background */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover/tool:opacity-100 rounded-2xl"
                            animate={{
                              scale: [1, 1.1, 1],
                              rotate: [0, 180, 360]
                            }}
                            transition={{
                              duration: 8,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />
                          
                          {/* Icon */}
                          <motion.img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-12 h-12 object-contain relative z-10 drop-shadow-2xl filter brightness-110"
                            whileHover={{
                              scale: 1.3,
                              rotate: [0, -10, 10, 0],
                              filter: "brightness(1.3) saturate(1.2)"
                            }}
                            transition={{
                              duration: 0.6,
                              ease: "easeInOut"
                            }}
                            onError={(e) => {
                              const target = e.currentTarget;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent && !parent.querySelector('.fallback-icon')) {
                                const fallback = document.createElement('div');
                                fallback.className = 'fallback-icon w-12 h-12 bg-gradient-to-br from-white/20 to-white/5 rounded-xl flex items-center justify-center text-white font-bold text-lg border border-white/20';
                                fallback.textContent = skill.name.slice(0, 2).toUpperCase();
                                parent.appendChild(fallback);
                              }
                            }}
                          />
                          
                          {/* Floating Particles on Hover */}
                          <motion.div
                            className="absolute inset-0 opacity-0 group-hover/tool:opacity-100"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                          >
                            {[...Array(4)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-white rounded-full"
                                style={{
                                  left: `${15 + i * 20}%`,
                                  top: `${10 + i * 15}%`,
                                }}
                                animate={{
                                  y: [-15, -40, -15],
                                  opacity: [0, 1, 0],
                                  scale: [0.5, 1.2, 0.5]
                                }}
                                transition={{
                                  duration: 2.5,
                                  repeat: Infinity,
                                  delay: i * 0.4,
                                  ease: "easeInOut"
                                }}
                              />
                            ))}
                          </motion.div>

                          {/* Glow Effect */}
                          <motion.div
                            className="absolute inset-0 rounded-2xl opacity-0 group-hover/tool:opacity-100"
                            animate={{
                              boxShadow: [
                                "0 0 0 rgba(255,255,255,0)",
                                "0 0 30px rgba(255,255,255,0.2)",
                                "0 0 0 rgba(255,255,255,0)"
                              ]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
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
