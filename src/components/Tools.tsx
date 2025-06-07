
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
          name: "Photoshop", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
        },
        { 
          name: "Illustrator", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
        },
        { 
          name: "InDesign", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg",
        },
        { 
          name: "Figma", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
        { 
          name: "Sketch", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg",
        },
        { 
          name: "Canva", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
        },
        { 
          name: "After Effects", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg",
        },
        { 
          name: "Premiere Pro", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg",
        },
        { 
          name: "Blender", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
        },
        { 
          name: "CorelDRAW", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/4/4f/CorelDRAW_2021_icon.svg",
        },
        { 
          name: "XD", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",
        },
        { 
          name: "GIMP", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg",
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
          name: "Google Ads", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg",
        },
        { 
          name: "Facebook Ads", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
        },
        { 
          name: "Instagram", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
        },
        { 
          name: "LinkedIn", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
        },
        { 
          name: "Google Analytics", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/7/77/Google_Analytics_logo.svg",
        },
        { 
          name: "SEO Tools", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_Search_Console_icon.svg",
        },
        { 
          name: "Mailchimp", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mailchimp/mailchimp-original.svg",
        },
        { 
          name: "WordPress", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
        },
        { 
          name: "HubSpot", 
          icon: "https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png",
        },
        { 
          name: "Shopify", 
          icon: "https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-primary-logo-456baa801ee66a0a435671082365958316831c9960c480451dd0330bcdae304f.svg",
        },
        { 
          name: "TikTok", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Ionicons_logo-tiktok.svg/512px-Ionicons_logo-tiktok.svg.png",
        },
        { 
          name: "YouTube", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg",
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
          name: "Brand Identity", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
        },
        { 
          name: "Logo Design", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
        },
        { 
          name: "Typography", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg",
        },
        { 
          name: "Color Theory", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
        { 
          name: "Brand Guidelines", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
        },
        { 
          name: "Market Research", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/7/77/Google_Analytics_logo.svg",
        },
        { 
          name: "Competitor Analysis", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Semrush_company_logo.svg/512px-Semrush_company_logo.svg.png",
        },
        { 
          name: "Brand Positioning", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
        },
        { 
          name: "Style Guides", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",
        },
        { 
          name: "Moodboards", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Pinterest_logo.svg/512px-Pinterest_logo.svg.png",
        },
        { 
          name: "Branding Tools", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg",
        },
        { 
          name: "Brand Strategy", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Miro_Logo.svg/512px-Miro_Logo.svg.png",
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
          name: "Content Creation", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
        },
        { 
          name: "Social Strategy", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
        },
        { 
          name: "Community Management", 
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
        },
        { 
          name: "Influencer Marketing", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
        },
        { 
          name: "Social Analytics", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/7/77/Google_Analytics_logo.svg",
        },
        { 
          name: "Paid Social", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
        },
        { 
          name: "Video Content", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg",
        },
        { 
          name: "Stories & Reels", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
        },
        { 
          name: "Twitter/X", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/512px-X_logo_2023.svg.png",
        },
        { 
          name: "Pinterest", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Pinterest_logo.svg/512px-Pinterest_logo.svg.png",
        },
        { 
          name: "Snapchat", 
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Snapchat_logo.svg/512px-Snapchat_logo.svg.png",
        },
        { 
          name: "Buffer", 
          icon: "https://buffer.com/static/icons/buffer-logo.png",
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

                <div className="grid grid-cols-4 gap-4">
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
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 aspect-square flex items-center justify-center text-white transition-all duration-300 cursor-pointer relative overflow-hidden border border-white/20 hover:border-white/40"
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
                          className="w-12 h-12 object-contain relative z-10 drop-shadow-lg"
                          whileHover={{
                            scale: 1.2,
                            rotate: 360
                          }}
                          transition={{
                            duration: 0.6,
                            ease: "easeInOut"
                          }}
                          onError={(e) => {
                            // Fallback for broken images - hide the image and show icon text
                            e.currentTarget.style.display = 'none';
                            const parent = e.currentTarget.parentElement;
                            if (parent) {
                              const fallback = document.createElement('div');
                              fallback.className = 'text-white font-bold text-xs text-center';
                              fallback.textContent = skill.name;
                              parent.appendChild(fallback);
                            }
                          }}
                        />
                        
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
                      
                      {/* Tooltip */}
                      <motion.div
                        className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover/skill:opacity-100 pointer-events-none z-20 backdrop-blur-sm border border-white/20"
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        whileHover={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {skill.name}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
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
