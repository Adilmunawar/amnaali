import { motion } from "framer-motion";
import { Heart, ArrowUp, Sparkles } from "lucide-react";
export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="relative bg-gradient-to-br from-purple-900 via-slate-900 to-indigo-900 text-white py-20 overflow-hidden">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => <motion.div key={i} className="absolute rounded-full" style={{
        width: Math.random() * 4 + 1,
        height: Math.random() * 4 + 1,
        background: `linear-gradient(45deg, #a855f7, #ec4899, #06b6d4)`
      }} initial={{
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
        opacity: 0
      }} animate={{
        y: [null, -100, (typeof window !== 'undefined' ? window.innerHeight : 800) + 100],
        opacity: [0, 0.8, 0],
        scale: [0, 1, 0],
        rotate: [0, 360]
      }} transition={{
        duration: Math.random() * 6 + 4,
        repeat: Infinity,
        delay: Math.random() * 5,
        ease: "easeInOut"
      }} />)}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Logo and Description */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="space-y-6">
            <motion.div className="flex items-center space-x-3" whileHover={{
            scale: 1.05
          }} transition={{
            type: "spring",
            stiffness: 300
          }}>
              <motion.img src="/lovable-uploads/716d8093-d916-47af-ab5a-cc51a036653f.png" alt="ARS Logo" className="w-12 h-12 object-contain filter brightness-0 invert" whileHover={{
              rotate: 360
            }} transition={{
              duration: 0.8
            }} />
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                ARS Ltd.
              </div>
            </motion.div>
            <motion.p className="text-gray-300 leading-relaxed" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} viewport={{
            once: true
          }}>
              Creative visionary crafting digital experiences that transform brands through innovative design and strategic excellence.
            </motion.p>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} viewport={{
          once: true
        }}>
            <h3 className="text-xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Quick Links
            </h3>
            <div className="space-y-3">
              {["Home", "About", "Tools", "Portfolio", "Services", "Contact"].map((link, index) => <motion.a key={link} href={`#${link.toLowerCase()}`} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} whileHover={{
              x: 10,
              color: "#22d3ee",
              scale: 1.05
            }} className="block text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group">
                  <motion.span className="absolute left-0 w-0 h-0.5 bg-cyan-400 bottom-0 group-hover:w-full transition-all duration-300" />
                  {link}
                </motion.a>)}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} viewport={{
          once: true
        }}>
            <h3 className="text-xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Get In Touch
            </h3>
            <div className="space-y-4 text-gray-300">
              {[{
              icon: "📧",
              text: "contact@arsltd.com"
            }, {
              icon: "📱",
              text: "+92 324 8406582"
            }, {
              icon: "📍",
              text: "Pakistan"
            }].map((item, index) => <motion.p key={index} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} whileHover={{
              x: 5,
              scale: 1.02
            }} className="flex items-center gap-3 transition-all duration-300">
                  <motion.span whileHover={{
                scale: 1.5,
                rotate: 360
              }} transition={{
                duration: 0.5
              }} className="text-xl">
                    {item.icon}
                  </motion.span>
                  {item.text}
                </motion.p>)}
            </div>
          </motion.div>
        </div>

        {/* Enhanced Signature Section */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.8
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 1,
        delay: 0.6
      }} viewport={{
        once: true
      }} className="text-center py-12 border-t border-purple-700/50">
          <motion.div className="mb-8 relative" whileHover={{
          scale: 1.1
        }} transition={{
          type: "spring",
          stiffness: 300
        }}>
            <motion.div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-xl" animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }} transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }} />
            <motion.img src="/lovable-uploads/397d5705-f917-47f5-b699-e8347a4579e0.png" alt="Amna Ali Signature" className="mx-auto h-24 object-contain filter brightness-0 invert opacity-90 relative z-10" animate={{
            filter: ["brightness(0) invert(1) drop-shadow(0 0 10px rgba(34, 211, 238, 0.5))", "brightness(0) invert(1) drop-shadow(0 0 20px rgba(168, 85, 247, 0.7))", "brightness(0) invert(1) drop-shadow(0 0 10px rgba(34, 211, 238, 0.5))"]
          }} transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }} />
          </motion.div>
          
          <motion.div className="space-y-4" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.8
        }} viewport={{
          once: true
        }}>
            <motion.p className="text-gray-400 text-lg font-medium" whileHover={{
            scale: 1.05
          }}>
              Crafted with{" "}
              <motion.span animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 5, -5, 0]
            }} transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }} className="inline-block">
                <Heart className="inline w-5 h-5 text-pink-400 mx-1" />
              </motion.span>
              by{" "}
              <motion.span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-bold text-xl" whileHover={{
              scale: 1.1
            }}>Team ARS</motion.span>
            </motion.p>
            <motion.p className="text-sm text-gray-500" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 1
          }} viewport={{
            once: true
          }}>
              © 2024 ARS Ltd. All rights reserved.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll to Top Button */}
        <motion.button onClick={scrollToTop} initial={{
        opacity: 0,
        scale: 0
      }} animate={{
        opacity: 1,
        scale: 1
      }} whileHover={{
        scale: 1.15,
        y: -5,
        boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)"
      }} whileTap={{
        scale: 0.9
      }} className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-purple-600 text-white p-4 rounded-full shadow-lg shadow-purple-500/30 z-50 group relative overflow-hidden">
          <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <motion.div animate={{
          y: [0, -2, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }} className="relative z-10">
            <ArrowUp className="w-6 h-6" />
          </motion.div>
          <motion.div className="absolute inset-0 rounded-full border-2 border-white/30" animate={{
          rotate: 360
        }} transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }} />
        </motion.button>
      </div>
    </footer>;
};