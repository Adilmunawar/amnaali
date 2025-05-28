import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink, Linkedin, Instagram, Facebook, Users } from "lucide-react";

export const Contact = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/amnama",
      icon: Linkedin,
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-700 hover:to-blue-900",
      description: "Professional Network",
      gradient: "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/kashf.e.haal",
      icon: Instagram,
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:from-pink-600 hover:to-purple-700",
      description: "Creative Showcase",
      gradient: "bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600"
    },
    {
      name: "Facebook",
      url: "https://facebook.com/amna.ali.93176",
      icon: Facebook,
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-700 hover:to-blue-900",
      description: "Social Updates",
      gradient: "bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"
    },
    {
      name: "Threads",
      url: "https://threads.com/@kashf.e.haal",
      icon: Users,
      color: "from-gray-700 to-black",
      hoverColor: "hover:from-gray-800 hover:to-gray-900",
      description: "Community",
      gradient: "bg-gradient-to-br from-gray-800 via-black to-gray-900"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/+923248406582",
      icon: Phone,
      color: "from-green-500 to-green-700",
      hoverColor: "hover:from-green-600 hover:to-green-800",
      description: "Direct Message",
      gradient: "bg-gradient-to-br from-green-500 via-green-600 to-green-700"
    }
  ];

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+92 324 8406582" },
    { icon: Mail, label: "Email", value: "contact@arsltd.com" },
    { icon: MapPin, label: "Location", value: "Pakistan" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50 relative overflow-hidden">
      {/* Enhanced Logo Display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: -50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
        className="absolute top-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div 
          className="relative"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-2xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.img 
            src="/lovable-uploads/716d8093-d916-47af-ab5a-cc51a036653f.png" 
            alt="ARS Logo" 
            className="w-24 h-24 object-contain relative z-10 filter drop-shadow-2xl"
            animate={{ 
              y: [0, -5, 0],
              filter: [
                "drop-shadow(0 10px 20px rgba(168, 85, 247, 0.4))",
                "drop-shadow(0 15px 30px rgba(236, 72, 153, 0.6))",
                "drop-shadow(0 10px 20px rgba(168, 85, 247, 0.4))"
              ]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200)],
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 80 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Let's Connect
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Ready to bring your vision to life? Let's discuss how we can create something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-200/50 shadow-lg shadow-purple-200/20 relative overflow-hidden group"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-pink-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
              <form className="space-y-6">
                <motion.div variants={itemVariants}>
                  <label className="block text-gray-700 mb-2 font-medium">Name</label>
                  <motion.input
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)" }}
                    type="text"
                    className="w-full bg-white/90 border border-purple-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all"
                    placeholder="Your Name"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label className="block text-gray-700 mb-2 font-medium">Email</label>
                  <motion.input
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)" }}
                    type="email"
                    className="w-full bg-white/90 border border-purple-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all"
                    placeholder="your@email.com"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label className="block text-gray-700 mb-2 font-medium">Subject</label>
                  <motion.input
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)" }}
                    type="text"
                    className="w-full bg-white/90 border border-purple-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all"
                    placeholder="Project Subject"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label className="block text-gray-700 mb-2 font-medium">Message</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)" }}
                    rows={5}
                    className="w-full bg-white/90 border border-purple-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </motion.div>
                <motion.button
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -2,
                    boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden group"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative z-10">Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Advanced Animated Social Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-200/50 shadow-lg shadow-purple-200/20"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg hover:from-purple-100 hover:to-pink-100 transition-all duration-300"
                    >
                      <motion.div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent className="w-5 h-5 text-white" />
                      </motion.div>
                      <div>
                        <p className="text-gray-600 text-sm font-medium">{info.label}</p>
                        <p className="text-gray-800 font-semibold">{info.value}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Ultra Advanced Animated Social Links */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-200/50 shadow-lg shadow-purple-200/20"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Connect With Me</h3>
              <div className="grid grid-cols-1 gap-6">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -5,
                        boxShadow: "0 25px 50px rgba(168, 85, 247, 0.4)"
                      }}
                      className="relative group overflow-hidden rounded-2xl p-6 text-white transition-all duration-500"
                    >
                      {/* Animated Background */}
                      <motion.div 
                        className={`absolute inset-0 ${social.gradient}`}
                        animate={{
                          background: [
                            social.gradient.replace('bg-gradient-to-br', 'linear-gradient(45deg'),
                            social.gradient.replace('bg-gradient-to-br', 'linear-gradient(135deg'),
                            social.gradient.replace('bg-gradient-to-br', 'linear-gradient(225deg'),
                            social.gradient.replace('bg-gradient-to-br', 'linear-gradient(315deg'),
                            social.gradient.replace('bg-gradient-to-br', 'linear-gradient(45deg')
                          ]
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      
                      {/* Floating Particles */}
                      <div className="absolute inset-0">
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white/30 rounded-full"
                            initial={{ 
                              x: Math.random() * 200,
                              y: Math.random() * 60,
                              opacity: 0
                            }}
                            animate={{
                              y: [null, -20, 60],
                              opacity: [0, 0.8, 0],
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
                      </div>

                      {/* Glow Effect */}
                      <motion.div
                        className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{
                          background: [
                            "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)",
                            "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)",
                            "radial-gradient(circle at 50% 20%, rgba(255,255,255,0.1) 0%, transparent 70%)",
                            "radial-gradient(circle at 50% 80%, rgba(255,255,255,0.1) 0%, transparent 70%)",
                            "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)"
                          ]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />

                      <div className="relative z-10 flex items-center gap-4">
                        {/* Ultra Animated Icon */}
                        <motion.div
                          className="relative"
                          whileHover={{ 
                            rotate: [0, -10, 10, -10, 0],
                            scale: [1, 1.2, 1.1, 1.2, 1]
                          }}
                          transition={{ duration: 0.6 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/20 rounded-lg blur-md"
                            animate={{ 
                              scale: [1, 1.3, 1],
                              opacity: [0.3, 0.7, 0.3]
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          <motion.div 
                            className="relative p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
                            animate={{
                              boxShadow: [
                                "0 0 10px rgba(255,255,255,0.3)",
                                "0 0 20px rgba(255,255,255,0.5)",
                                "0 0 10px rgba(255,255,255,0.3)"
                              ]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <IconComponent className="w-6 h-6" />
                          </motion.div>
                        </motion.div>

                        <div className="flex-1">
                          <motion.p 
                            className="font-bold text-lg"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {social.name}
                          </motion.p>
                          <motion.p 
                            className="text-sm opacity-90"
                            initial={{ opacity: 0.7 }}
                            whileHover={{ opacity: 1 }}
                          >
                            {social.description}
                          </motion.p>
                        </div>

                        <motion.div
                          whileHover={{ 
                            rotate: 45, 
                            scale: 1.3,
                            x: 5
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <ExternalLink className="w-5 h-5 opacity-70" />
                        </motion.div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
