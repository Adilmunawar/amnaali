
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink, Linkedin, Instagram, Facebook, Palette, Users } from "lucide-react";

export const Contact = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/amnama",
      icon: Linkedin,
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-700 hover:to-blue-900",
      description: "Professional Network"
    },
    {
      name: "Behance",
      url: "https://behance.net/amnaali82",
      icon: Palette,
      color: "from-blue-500 to-purple-600",
      hoverColor: "hover:from-blue-600 hover:to-purple-700",
      description: "Design Portfolio"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/kashf.e.haal",
      icon: Instagram,
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:from-pink-600 hover:to-purple-700",
      description: "Creative Showcase"
    },
    {
      name: "Facebook",
      url: "https://facebook.com/amna.ali.93176",
      icon: Facebook,
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-700 hover:to-blue-900",
      description: "Social Updates"
    },
    {
      name: "Threads",
      url: "https://threads.com/@kashf.e.haal",
      icon: Users,
      color: "from-gray-700 to-black",
      hoverColor: "hover:from-gray-800 hover:to-gray-900",
      description: "Community"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/+923248406582",
      icon: Phone,
      color: "from-green-500 to-green-700",
      hoverColor: "hover:from-green-600 hover:to-green-800",
      description: "Direct Message"
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

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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

          {/* Contact Info & Enhanced Social Links */}
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

            {/* Enhanced Animated Social Links */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-200/50 shadow-lg shadow-purple-200/20"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Connect With Me</h3>
              <div className="grid grid-cols-1 gap-4">
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
                        y: -3,
                        boxShadow: "0 15px 35px rgba(168, 85, 247, 0.4)"
                      }}
                      className={`bg-gradient-to-r ${social.color} ${social.hoverColor} p-4 rounded-xl text-white flex items-center gap-4 transition-all duration-300 group relative overflow-hidden`}
                    >
                      <motion.div 
                        className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"
                      />
                      <motion.div
                        whileHover={{ 
                          rotate: [0, -15, 15, -15, 0],
                          scale: [1, 1.1, 1.2, 1.1, 1]
                        }}
                        transition={{ duration: 0.6 }}
                        className="relative z-10 p-2 bg-white/20 rounded-lg"
                      >
                        <IconComponent className="w-6 h-6" />
                      </motion.div>
                      <div className="flex-1 relative z-10">
                        <p className="font-bold text-lg">{social.name}</p>
                        <p className="text-sm opacity-90">{social.description}</p>
                      </div>
                      <motion.div
                        className="relative z-10"
                        whileHover={{ rotate: 45, scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ExternalLink className="w-5 h-5 opacity-70" />
                      </motion.div>
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
