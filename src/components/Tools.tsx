
import { motion } from "framer-motion";
import { Palette, TrendingUp, Users, Target } from "lucide-react";

export const Tools = () => {
  const skillCategories = [
    {
      title: "Graphic Design",
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-400",
      icon: Palette,
      skills: [
        { 
          name: "Adobe Illustrator", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
        },
        { 
          name: "Adobe Photoshop", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
        },
        { 
          name: "Figma", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
        { 
          name: "Canva", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
        }
      ]
    },
    {
      title: "Digital Marketing",
      color: "from-emerald-500 to-teal-500",
      borderColor: "border-emerald-400",
      icon: TrendingUp,
      skills: [
        { 
          name: "Meta Ads", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
        },
        { 
          name: "Google Ads", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg",
        },
        { 
          name: "Pinterest Ads", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png",
        },
        { 
          name: "LinkedIn Ads", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
        }
      ]
    },
    {
      title: "Brand Strategy",
      color: "from-cyan-500 to-blue-500",
      borderColor: "border-cyan-400",
      icon: Target,
      skills: [
        { 
          name: "Kantar", 
          icon: "https://logo.clearbit.com/kantar.com",
        },
        { 
          name: "Brand Index", 
          icon: "https://logo.clearbit.com/brandindex.com",
        },
        { 
          name: "Miro", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Miro_Logo.svg/512px-Miro_Logo.svg.png",
        },
        { 
          name: "Google Analytics", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/7/77/Google_Analytics_logo.svg",
        }
      ]
    },
    {
      title: "Social Media",
      color: "from-pink-500 to-rose-500",
      borderColor: "border-pink-400",
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
          name: "Threads", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Threads_%28app%29_logo.svg/512px-Threads_%28app%29_logo.svg.png",
        },
        { 
          name: "Facebook", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
        }
      ]
    }
  ];

  return (
    <section id="tools" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 25, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl"
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.1, 0.8]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
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
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Creative Expertise
          </motion.h2>
          <motion.p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional skills in graphic design and digital marketing that drive brand success
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className={`bg-gray-800/60 backdrop-blur-xl rounded-3xl p-8 border ${category.borderColor} border-opacity-40 hover:border-opacity-80 transition-all duration-500 group relative overflow-hidden`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Card Background Animation */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="flex items-center gap-6 mb-8 relative z-10">
                  <motion.div 
                    className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} relative`}
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: categoryIndex * 0.5
                    }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                    <motion.div
                      className="absolute inset-0 bg-white rounded-2xl opacity-0 group-hover:opacity-20"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0, 0.1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                  <motion.h3 
                    className={`text-3xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {category.title}
                  </motion.h3>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.5, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.1 + index * 0.08,
                        type: "spring",
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.15, 
                        y: -12,
                        rotateY: 15,
                        rotateX: 10,
                        transition: { duration: 0.3 }
                      }}
                      className="group/skill relative"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <motion.div 
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 aspect-square flex flex-col items-center justify-center text-white transition-all duration-300 cursor-pointer relative overflow-hidden border border-white/20 hover:border-white/40"
                        whileHover={{
                          boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
                          borderColor: "rgba(255,255,255,0.6)",
                          backgroundColor: "rgba(255,255,255,0.15)"
                        }}
                      >
                        {/* Icon */}
                        <motion.img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-12 h-12 object-contain relative z-10 drop-shadow-lg mb-2"
                          whileHover={{
                            scale: 1.2,
                            rotate: 360
                          }}
                          transition={{
                            duration: 0.6,
                            ease: "easeInOut"
                          }}
                          onError={(e) => {
                            // Fallback for broken images
                            e.currentTarget.style.display = 'none';
                            const parent = e.currentTarget.parentElement;
                            if (parent && !parent.querySelector('.fallback-text')) {
                              const fallback = document.createElement('div');
                              fallback.className = 'text-white font-bold text-xs text-center fallback-text';
                              fallback.textContent = skill.name;
                              parent.appendChild(fallback);
                            }
                          }}
                        />
                        
                        {/* Tool Name */}
                        <div className="text-xs font-semibold text-center text-white/80 relative z-10">
                          {skill.name}
                        </div>
                        
                        {/* Background Effects */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover/skill:opacity-100 rounded-2xl"
                          animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 180, 360]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                        
                        {/* Floating Particles */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover/skill:opacity-100"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        >
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-white rounded-full"
                              style={{
                                left: `${20 + i * 20}%`,
                                top: `${10 + i * 15}%`,
                              }}
                              animate={{
                                y: [-10, -30, -10],
                                opacity: [0, 1, 0],
                                scale: [0.5, 1, 0.5]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.3,
                                ease: "easeInOut"
                              }}
                            />
                          ))}
                        </motion.div>
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
