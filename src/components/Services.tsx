import { motion } from "framer-motion";
import { Brush, Megaphone, Search, TrendingUp, Lightbulb, Target, Zap, Crown, Sparkles } from "lucide-react";
export const Services = () => {
  const services = [{
    icon: Brush,
    title: "Premium Design Studio",
    description: "Crafting extraordinary visual identities that captivate audiences and define market leadership",
    features: ["Luxury Brand Identity", "Award-Winning Logos", "Premium Print Design", "Digital Art Direction"],
    color: "from-violet-600 via-fuchsia-600 to-pink-600",
    accentColor: "violet"
  }, {
    icon: Megaphone,
    title: "Strategic Marketing Mastery",
    description: "Revolutionary marketing campaigns that drive exponential growth and market domination",
    features: ["Viral Campaign Strategy", "Omnichannel Marketing", "Influencer Partnerships", "Performance Analytics"],
    color: "from-cyan-600 via-blue-600 to-indigo-600",
    accentColor: "cyan"
  }, {
    icon: Search,
    title: "SEO Excellence Engine",
    description: "Advanced optimization strategies that dominate search rankings and drive organic supremacy",
    features: ["AI-Powered SEO", "Technical Optimization", "Content Strategy", "Competitive Intelligence"],
    color: "from-emerald-600 via-teal-600 to-green-600",
    accentColor: "emerald"
  }, {
    icon: Target,
    title: "Growth Strategy Innovation",
    description: "Data-driven strategies that accelerate business growth and maximize market penetration",
    features: ["Growth Hacking", "Market Analysis", "ROI Optimization", "Strategic Planning"],
    color: "from-orange-600 via-amber-600 to-yellow-600",
    accentColor: "orange"
  }, {
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "High-converting campaigns that deliver measurable results and unprecedented ROI",
    features: ["Conversion Optimization", "Advanced Analytics", "A/B Testing", "Revenue Scaling"],
    color: "from-purple-600 via-violet-600 to-indigo-600",
    accentColor: "purple"
  }, {
    icon: Lightbulb,
    title: "Brand Innovation Lab",
    description: "Revolutionary brand strategies that disrupt industries and create lasting market impact",
    features: ["Brand Positioning", "Innovation Strategy", "Market Disruption", "Future-Proofing"],
    color: "from-rose-600 via-pink-600 to-fuchsia-600",
    accentColor: "rose"
  }];
  return <section id="services" className="py-32 bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 relative overflow-hidden">
      {/* Advanced Background */}
      <div className="absolute inset-0">
        {/* Animated Gradient Mesh */}
        <motion.div className="absolute inset-0" animate={{
        background: ["radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 70%)", "radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.15) 0%, transparent 70%)", "radial-gradient(circle at 50% 20%, rgba(6, 182, 212, 0.15) 0%, transparent 70%)", "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 70%)"]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }} />

        {/* Floating Elements */}
        {[...Array(12)].map((_, i) => <motion.div key={`float-${i}`} className="absolute" style={{
        background: `linear-gradient(45deg, 
                ${i % 3 === 0 ? '#8b5cf6, #06b6d4' : i % 3 === 1 ? '#ec4899, #10b981' : '#f59e0b, #8b5cf6'})`,
        width: `${8 + i * 4}px`,
        height: `${8 + i * 4}px`,
        borderRadius: i % 2 === 0 ? "50%" : "20%",
        opacity: 0.1
      }} initial={{
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
        rotate: 0
      }} animate={{
        x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200)],
        y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)],
        rotate: 360,
        scale: [1, 1.5, 1]
      }} transition={{
        duration: 15 + i * 2,
        repeat: Infinity,
        ease: "linear"
      }} />)}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 80
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1.5,
        type: "spring",
        stiffness: 60
      }} viewport={{
        once: true
      }} className="text-center mb-20">
          

          <motion.h2 className="text-7xl md:text-8xl font-black mb-8 relative" whileInView={{
          scale: [0.8, 1.05, 1]
        }} transition={{
          duration: 1.5
        }} viewport={{
          once: true
        }}>
            <span className="absolute inset-0 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent blur-sm">
              My Services
            </span>
            <span className="relative bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
              My Services
            </span>
          </motion.h2>
          
          <motion.p className="text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed" initial={{
          opacity: 0,
          scale: 0.8
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 1,
          delay: 0.3
        }} viewport={{
          once: true
        }}>
            Comprehensive creative and strategic solutions designed to elevate your brand to extraordinary heights
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
          const IconComponent = service.icon;
          return <motion.div key={service.title} initial={{
            opacity: 0,
            y: 80,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            y: 0,
            scale: 1
          }} transition={{
            duration: 1,
            delay: index * 0.1,
            type: "spring",
            stiffness: 100
          }} viewport={{
            once: true
          }} whileHover={{
            y: -20,
            scale: 1.02,
            rotateY: 5
          }} className="relative group cursor-pointer">
                {/* Card Background */}
                <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl rounded-3xl p-8 border border-white/20 overflow-hidden h-full">
                  {/* Hover Effect Background */}
                  <motion.div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10`} transition={{
                duration: 0.6
              }} />

                  {/* Animated Icon Container */}
                  <motion.div className="relative mb-8" whileHover={{
                scale: 1.1,
                rotate: 15
              }} transition={{
                duration: 0.4
              }}>
                    <motion.div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} relative`} animate={{
                  boxShadow: ["0 0 20px rgba(139, 92, 246, 0.3)", "0 0 40px rgba(236, 72, 153, 0.4)", "0 0 20px rgba(139, 92, 246, 0.3)"]
                }} transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}>
                      <IconComponent className="w-10 h-10 text-white relative z-10" />
                      
                      {/* Glow Effect */}
                      <motion.div className="absolute inset-0 rounded-2xl bg-white/20" animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }} transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }} />
                    </motion.div>

                    {/* Floating Sparkles */}
                    <motion.div className="absolute -top-2 -right-2" animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }} transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}>
                      <Sparkles className="w-6 h-6 text-violet-400 opacity-60" />
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.h3 className="text-2xl font-bold text-white mb-4 group-hover:text-violet-400 transition-colors" whileHover={{
                  x: 5
                }}>
                      {service.title}
                    </motion.h3>

                    <motion.p className="text-gray-300 mb-8 leading-relaxed text-lg" initial={{
                  opacity: 0.8
                }} whileInView={{
                  opacity: 1
                }} transition={{
                  delay: index * 0.1
                }} viewport={{
                  once: true
                }}>
                      {service.description}
                    </motion.p>

                    {/* Features List */}
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => <motion.div key={feature} initial={{
                    opacity: 0,
                    x: -20
                  }} whileInView={{
                    opacity: 1,
                    x: 0
                  }} transition={{
                    delay: index * 0.1 + featureIndex * 0.05,
                    type: "spring",
                    stiffness: 200
                  }} viewport={{
                    once: true
                  }} whileHover={{
                    x: 10,
                    scale: 1.05
                  }} className="flex items-center text-gray-300 group/feature cursor-pointer">
                          <motion.div className={`w-3 h-3 rounded-full bg-gradient-to-r ${service.color} mr-4 relative`} whileHover={{
                      scale: 1.5
                    }}>
                            <motion.div className="absolute inset-0 rounded-full bg-white/30" animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }} transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: featureIndex * 0.2
                      }} />
                          </motion.div>
                          <span className="group-hover/feature:text-white transition-colors font-medium">
                            {feature}
                          </span>
                        </motion.div>)}
                    </div>
                  </div>

                  {/* Lightning Effect */}
                  <motion.div className="absolute top-4 right-4" animate={{
                opacity: [0, 1, 0],
                scale: [0.8, 1.2, 0.8],
                rotate: [0, 180, 360]
              }} transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5
              }}>
                    <Zap className="w-4 h-4 text-violet-400 opacity-40" />
                  </motion.div>
                </div>
              </motion.div>;
        })}
        </div>
      </div>
    </section>;
};