
import { motion } from "framer-motion";
import { Code, Database, Settings, Palette } from "lucide-react";

export const Tools = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-cyan-400",
      icon: Code,
      skills: [
        { name: "React", icon: "⚛️", color: "bg-blue-600" },
        { name: "Next.js", icon: "N", color: "bg-black" },
        { name: "TypeScript", icon: "TS", color: "bg-blue-700" },
        { name: "JavaScript", icon: "JS", color: "bg-yellow-500" },
        { name: "HTML5", icon: "📄", color: "bg-orange-600" },
        { name: "CSS3", icon: "🎨", color: "bg-blue-500" },
        { name: "Tailwind", icon: "🌊", color: "bg-teal-500" },
        { name: "Vue.js", icon: "V", color: "bg-green-600" }
      ]
    },
    {
      title: "Backend",
      color: "from-green-500 to-emerald-500",
      borderColor: "border-emerald-400",
      icon: Database,
      skills: [
        { name: "Node.js", icon: "📗", color: "bg-green-600" },
        { name: "Python", icon: "🐍", color: "bg-blue-500" },
        { name: "Express", icon: "⚡", color: "bg-gray-700" },
        { name: "SQL", icon: "🗃️", color: "bg-blue-600" },
        { name: "PostgreSQL", icon: "🐘", color: "bg-blue-700" },
        { name: "Firebase", icon: "🔥", color: "bg-orange-500" },
        { name: "Supabase", icon: "⚡", color: "bg-green-500" },
        { name: "Redis", icon: "🔴", color: "bg-red-600" }
      ]
    },
    {
      title: "Tools & Environment",
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-400",
      icon: Settings,
      skills: [
        { name: "Git", icon: "🌿", color: "bg-orange-600" },
        { name: "GitHub", icon: "🐙", color: "bg-gray-800" },
        { name: "VS Code", icon: "💙", color: "bg-blue-600" },
        { name: "Docker", icon: "🐳", color: "bg-blue-500" },
        { name: "Figma", icon: "🎨", color: "bg-purple-600" },
        { name: "Webpack", icon: "📦", color: "bg-blue-400" },
        { name: "Azure", icon: "☁️", color: "bg-blue-600" },
        { name: "Vercel", icon: "▲", color: "bg-black" }
      ]
    },
    {
      title: "Design & Creative",
      color: "from-pink-500 to-rose-500",
      borderColor: "border-pink-400",
      icon: Palette,
      skills: [
        { name: "Adobe XD", icon: "🎨", color: "bg-pink-600" },
        { name: "Photoshop", icon: "🖼️", color: "bg-blue-700" },
        { name: "Illustrator", icon: "🎭", color: "bg-orange-600" },
        { name: "Canva", icon: "🎪", color: "bg-purple-500" },
        { name: "Sketch", icon: "✏️", color: "bg-orange-500" },
        { name: "InVision", icon: "👁️", color: "bg-pink-500" },
        { name: "Framer", icon: "🔳", color: "bg-blue-500" },
        { name: "After Effects", icon: "🎬", color: "bg-purple-700" }
      ]
    }
  ];

  return (
    <section id="tools" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </motion.h2>
          <motion.p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technologies and tools that power modern digital solutions
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border ${category.borderColor} border-opacity-30 hover:border-opacity-60 transition-all duration-500 group`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-4 gap-3">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: categoryIndex * 0.1 + index * 0.05 
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="group/skill"
                    >
                      <div className={`${skill.color} rounded-xl p-4 aspect-square flex flex-col items-center justify-center text-white hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer`}>
                        <div className="text-2xl mb-1 group-hover/skill:scale-125 transition-transform duration-300">
                          {skill.icon}
                        </div>
                        <div className="text-xs font-semibold text-center leading-tight">
                          {skill.name}
                        </div>
                      </div>
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
