
import { motion } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";
import { useState } from "react";

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Luxury Brand Identity Design",
      category: "design",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Complete visual identity system with sophisticated branding elements and color psychology for luxury fashion brands"
    },
    {
      id: 2,
      title: "Social Media Campaign Visuals",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Engaging social media campaign designs with high conversion rates and compelling brand storytelling"
    },
    {
      id: 3,
      title: "SEO Performance Dashboard",
      category: "seo",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Analytics dashboard design showcasing traffic growth, keyword performance, and ROI metrics"
    },
    {
      id: 4,
      title: "Premium Product Packaging",
      category: "design",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80",
      description: "Innovative premium product packaging design with sustainable materials and compelling visual appeal"
    },
    {
      id: 5,
      title: "Integrated Marketing Campaign",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2139&q=80",
      description: "Multi-channel marketing campaign with brand consistency across all touchpoints and platforms"
    },
    {
      id: 6,
      title: "Corporate Brand Guidelines",
      category: "design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80",
      description: "Comprehensive brand guidelines and design systems for corporate identity and consistency"
    },
    {
      id: 7,
      title: "Content Marketing Strategy",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Strategic content marketing materials including infographics, presentations, and promotional designs"
    },
    {
      id: 8,
      title: "Event Branding & Collateral",
      category: "design",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Complete event branding package with signage, promotional materials, and digital assets"
    },
    {
      id: 9,
      title: "PPC Campaign Optimization",
      category: "seo",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
      description: "High-converting PPC campaign designs with A/B testing and performance optimization strategies"
    }
  ];

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "design", label: "Graphic Design" },
    { key: "marketing", label: "Digital Marketing" },
    { key: "seo", label: "SEO & Analytics" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 40, 0],
            y: [0, 25, -25, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Enhanced Logo - Positioned strategically */}
      <motion.div
        initial={{ opacity: 0, x: -200, rotate: -360 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 1.5, type: "spring", stiffness: 80 }}
        viewport={{ once: true }}
        className="absolute top-16 left-16 z-10"
      >
        <motion.div 
          className="relative"
          whileHover={{ scale: 1.4, rotate: -15 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-purple-400/30 rounded-full blur-2xl"
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, -180, -360]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.img 
            src="/lovable-uploads/716d8093-d916-47af-ab5a-cc51a036653f.png" 
            alt="ARS Logo" 
            className="w-40 h-40 object-contain relative z-10 filter brightness-0 invert drop-shadow-2xl"
            animate={{ 
              y: [0, -10, 0],
              filter: [
                "brightness(0) invert(1) drop-shadow(0 10px 20px rgba(34, 211, 238, 0.4))",
                "brightness(0) invert(1) drop-shadow(0 15px 30px rgba(168, 85, 247, 0.6))",
                "brightness(0) invert(1) drop-shadow(0 10px 20px rgba(34, 211, 238, 0.4))"
              ]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            whileInView={{ scale: [0.9, 1.05, 1] }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            My Creative Portfolio
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Explore my latest creative projects showcasing innovative design, strategic marketing, and measurable results.
          </motion.p>
        </motion.div>

        {/* Enhanced Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.key}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(34, 211, 238, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full transition-all duration-300 relative overflow-hidden ${
                activeFilter === filter.key
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {activeFilter === filter.key && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500"
                  layoutId="activeFilter"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{filter.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(34, 211, 238, 0.3)"
              }}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-500 relative"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                    <motion.button
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 360,
                        boxShadow: "0 10px 25px rgba(34, 211, 238, 0.5)"
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-cyan-500 text-white p-3 rounded-full hover:bg-cyan-600 transition-colors relative overflow-hidden"
                    >
                      <Eye className="w-5 h-5 relative z-10" />
                    </motion.button>
                    <motion.button
                      initial={{ scale: 0, rotate: 180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: -360,
                        boxShadow: "0 10px 25px rgba(168, 85, 247, 0.5)"
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-purple-500 text-white p-3 rounded-full hover:bg-purple-600 transition-colors relative overflow-hidden"
                    >
                      <ExternalLink className="w-5 h-5 relative z-10" />
                    </motion.button>
                  </div>
                </div>
              </div>
              
              <div className="p-6 relative">
                <motion.h3 
                  className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-400 leading-relaxed"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {project.description}
                </motion.p>
                
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
