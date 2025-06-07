import { useState } from "react";
import { motion } from "framer-motion";
import { Palette, Search, TrendingUp, Zap, ImageOff } from "lucide-react";

const FallbackIcon = () => (
  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-purple-100 text-purple-500 rounded-xl">
    <ImageOff className="w-6 h-6" />
  </div>
);

const ToolIcon = ({ name, image }: { name: string; image: string }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="text-center">
      <div className="bg-gradient-to-br from-white to-purple-50 p-4 rounded-xl shadow hover:shadow-lg transition-all">
        {!imgError ? (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 mx-auto mb-3 object-contain"
            onError={() => setImgError(true)}
          />
        ) : (
          <FallbackIcon />
        )}
        <p className="text-sm font-medium text-gray-700">{name}</p>
      </div>
    </div>
  );
};

export const Tools = () => {
  const tools = [
    {
      category: "Design Tools",
      icon: Palette,
      color: "from-pink-500 to-rose-500",
      tools: [
        { name: "Adobe Photoshop", image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" },
        { name: "Adobe Illustrator", image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" },
        { name: "Figma", image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
        { name: "Canva Pro", image: "https://cdn.worldvectorlogo.com/logos/canva-1.svg" },
        { name: "Adobe InDesign", image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg" }
      ]
    },
    {
      category: "SEO & Analytics",
      icon: Search,
      color: "from-green-500 to-emerald-500",
      tools: [
        { name: "Google Analytics", image: "https://upload.wikimedia.org/wikipedia/commons/7/77/GAnalytics.svg" },
        { name: "SEMrush", image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/SEMrush_logo.svg" },
        { name: "Ahrefs", image: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Ahrefs_logo.svg" },
        { name: "Search Console", image: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" },
        { name: "Yoast SEO", image: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Yoast_Logo_Small.svg" }
      ]
    },
    {
      category: "Marketing",
      icon: TrendingUp,
      color: "from-purple-500 to-violet-500",
      tools: [
        { name: "Google Ads", image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg" },
        { name: "Facebook Ads", image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" },
        { name: "Mailchimp", image: "https://upload.wikimedia.org/wikipedia/commons/2/27/Mailchimp_Logo.svg" },
        { name: "Hootsuite", image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Hootsuite_Logo.svg" },
        { name: "Buffer", image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Buffer_logo.svg" }
      ]
    },
    {
      category: "Productivity",
      icon: Zap,
      color: "from-cyan-500 to-teal-500",
      tools: [
        { name: "Notion", image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
        { name: "Slack", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" },
        { name: "Trello", image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Trello-logo-blue.svg" },
        { name: "Adobe Creative", image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg" },
        { name: "Google Workspace", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Workspace_Logo.svg" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-purple-50 to-pink-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
            My Professional Toolkit
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge tools and technologies that power my creative and strategic solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {tools.map((category, i) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-purple-100 shadow-md"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-full mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{category.category}</h3>
                <div className="grid grid-cols-3 gap-4">
                  {category.tools.map((tool, toolIndex) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, scale: 0.7 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: toolIndex * 0.05 }}
                    >
                      <ToolIcon name={tool.name} image={tool.image} />
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
