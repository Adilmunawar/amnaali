
import { motion } from "framer-motion";
import { Brush, Megaphone, Search, TrendingUp, Lightbulb, Target } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Brush,
      title: "Graphic Design",
      description: "Creating stunning visual identities, logos, and brand materials that capture your essence",
      features: ["Logo Design", "Brand Identity", "Print Design", "Digital Graphics"],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Strategic marketing campaigns that drive engagement and boost your online presence",
      features: ["Social Media Marketing", "Content Strategy", "Email Campaigns", "PPC Advertising"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your search rankings and organic traffic with proven SEO strategies",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Analytics & Reporting"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Target,
      title: "Marketing Strategy",
      description: "Data-driven marketing strategies that align with your business objectives",
      features: ["Market Analysis", "Campaign Planning", "Performance Tracking", "ROI Optimization"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Growth Marketing",
      description: "Accelerate your business growth with innovative marketing techniques",
      features: ["Conversion Optimization", "A/B Testing", "User Acquisition", "Retention Strategies"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: Lightbulb,
      title: "Brand Strategy",
      description: "Comprehensive brand strategies that align with your business goals and values",
      features: ["Brand Positioning", "Market Research", "Competitor Analysis", "Brand Guidelines"],
      color: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 via-purple-50 to-cyan-50 relative overflow-hidden">
      {/* Floating elements for enhanced visual appeal */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-xl"
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent"
            whileInView={{ scale: [0.9, 1.05, 1] }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            My Services
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Comprehensive creative and strategic solutions tailored to elevate your brand
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.02,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(168, 85, 247, 0.3)"
                }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-200/50 shadow-lg group relative overflow-hidden"
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${service.color.split(' ')[1]}/10, ${service.color.split(' ')[3]}/10)`
                  }}
                />

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  transition={{ duration: 0.3 }}
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6 group-hover:shadow-lg relative z-10`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors relative z-10">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                  {service.description}
                </p>

                <div className="space-y-2 relative z-10">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center text-gray-700"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`} />
                      {feature}
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
