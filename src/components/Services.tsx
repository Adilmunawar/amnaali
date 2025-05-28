
import { motion } from "framer-motion";
import { Brush, Megaphone, Search, Globe, Camera, Lightbulb } from "lucide-react";

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
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites that deliver exceptional user experiences",
      features: ["Responsive Design", "E-commerce", "CMS Development", "Website Optimization"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography services for products, events, and brand storytelling",
      features: ["Product Photography", "Event Coverage", "Portrait Sessions", "Brand Photography"],
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
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 via-purple-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
            My Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive creative and strategic solutions tailored to elevate your brand
          </p>
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
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-200/50 shadow-lg group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  transition={{ duration: 0.3 }}
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6 group-hover:shadow-lg`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
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
