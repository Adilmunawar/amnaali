
import { motion } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";
import { useState } from "react";

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Data Visualization Dashboard",
      category: "design",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Interactive dashboard design with advanced data visualization and real-time analytics"
    },
    {
      id: 2,
      title: "Digital Marketing Analytics",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      description: "Comprehensive marketing campaign visualization with performance metrics and ROI tracking"
    },
    {
      id: 3,
      title: "SEO Performance Visualization",
      category: "seo",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Advanced SEO analytics dashboard showing traffic growth and keyword performance"
    },
    {
      id: 4,
      title: "Brand Identity System",
      category: "design",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      description: "Complete visual identity system with brand guidelines and color psychology"
    },
    {
      id: 5,
      title: "Social Media Analytics",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
      description: "Social media performance visualization with engagement metrics and audience insights"
    },
    {
      id: 6,
      title: "Technical SEO Audit System",
      category: "seo",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Comprehensive technical SEO analysis with site architecture visualization"
    },
    {
      id: 7,
      title: "Motion Graphics Showcase",
      category: "design",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2586&q=80",
      description: "Dynamic motion graphics and animated visualizations for digital campaigns"
    },
    {
      id: 8,
      title: "Conversion Optimization Study",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2586&q=80",
      description: "A/B testing visualization and conversion funnel optimization analysis"
    },
    {
      id: 9,
      title: "Website Architecture Design",
      category: "seo",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2586&q=80",
      description: "Strategic website structure optimization for enhanced user experience and SEO"
    }
  ];

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "design", label: "Design & Visualization" },
    { key: "marketing", label: "Digital Marketing" },
    { key: "seo", label: "SEO & Analytics" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-900 via-purple-800 to-slate-900 relative overflow-hidden">
      {/* Floating Logo */}
      <motion.div
        initial={{ opacity: 0, x: -200, rotate: -360 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 1.5, type: "spring", stiffness: 80 }}
        viewport={{ once: true }}
        className="absolute top-16 left-16 z-10"
      >
        <motion.div 
          className="relative"
          whileHover={{ scale: 1.3, rotate: -15 }}
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
            className="w-28 h-28 object-contain relative z-10 filter brightness-0 invert drop-shadow-2xl"
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

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            My Portfolio
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore my latest projects showcasing creativity, strategy, and measurable results through advanced visualizations.
          </p>
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
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(45deg, rgba(34, 211, 238, 0.2), rgba(168, 85, 247, 0.2), rgba(34, 211, 238, 0.2))",
                  backgroundSize: "300% 300%"
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-120"
                  whileHover={{ scale: 1.1 }}
                />
                
                {/* Enhanced overlay with particles */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {/* Floating particles */}
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                      initial={{ 
                        x: Math.random() * 300,
                        y: Math.random() * 200,
                        opacity: 0
                      }}
                      animate={{
                        y: [null, -50, 200],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                  
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
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
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
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
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
                
                {/* Animated bottom border */}
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
