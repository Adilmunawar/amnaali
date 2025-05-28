
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink, Linkedin, Instagram, Facebook } from "lucide-react";

export const Contact = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/amnama",
      icon: Linkedin,
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-700 hover:to-blue-900"
    },
    {
      name: "Behance",
      url: "https://behance.net/amnaali82",
      icon: "🎨",
      color: "from-blue-500 to-purple-600",
      hoverColor: "hover:from-blue-600 hover:to-purple-700"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/kashf.e.haal",
      icon: Instagram,
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:from-pink-600 hover:to-purple-700"
    },
    {
      name: "Facebook",
      url: "https://facebook.com/amna.ali.93176",
      icon: Facebook,
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-700 hover:to-blue-900"
    },
    {
      name: "Threads",
      url: "https://threads.com/@kashf.e.haal",
      icon: "🧵",
      color: "from-gray-700 to-black",
      hoverColor: "hover:from-gray-800 hover:to-gray-900"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/+923248406582",
      icon: "💬",
      color: "from-green-500 to-green-700",
      hoverColor: "hover:from-green-600 hover:to-green-800"
    }
  ];

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+92 324 8406582" },
    { icon: Mail, label: "Email", value: "contact@arsltd.com" },
    { icon: MapPin, label: "Location", value: "Pakistan" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your vision to life? Let's discuss how we can create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-200/50 shadow-lg shadow-purple-200/20"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Name</label>
                <input
                  type="text"
                  className="w-full bg-white/90 border border-purple-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full bg-white/90 border border-purple-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  className="w-full bg-white/90 border border-purple-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all"
                  placeholder="Project Subject"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Message</label>
                <textarea
                  rows={5}
                  className="w-full bg-white/90 border border-purple-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-300/50 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-200/50 shadow-lg shadow-purple-200/20">
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
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm font-medium">{info.label}</p>
                        <p className="text-gray-800 font-semibold">{info.value}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-200/50 shadow-lg shadow-purple-200/20">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
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
                        boxShadow: "0 10px 30px rgba(168, 85, 247, 0.3)"
                      }}
                      className={`bg-gradient-to-r ${social.color} ${social.hoverColor} p-4 rounded-xl text-white flex items-center gap-3 transition-all duration-300 group`}
                    >
                      {typeof IconComponent === 'string' ? (
                        <span className="text-xl">{IconComponent}</span>
                      ) : (
                        <IconComponent className="w-5 h-5" />
                      )}
                      <div className="flex-1">
                        <p className="font-semibold text-sm">{social.name}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
