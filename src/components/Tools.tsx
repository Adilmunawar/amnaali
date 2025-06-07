import { motion } from "framer-motion";
import { Palette, Search, TrendingUp, Zap } from "lucide-react";

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
    <section id="tools" className="py-20 bg-gradient-to-br from-white via-purple-50 to-pink-50 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.3, rotate: -180 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
        className="absolute top-10 right-10 z-10"
      >
        <motion.div 
          className="relative"
          whileHover={{ scale: 1.3, rotate: 15 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.img 
            src="/lovable-uploads/716d8093-d916-47af-ab5a-cc51a036653f.png" 
            alt="ARS Logo" 
            onError={(e) => {
              e.currentTarget.src = "/fallback-logo.png"; // Local fallback
              e.currentTarget.alt = "Fallback Logo";
            }}
            className="w-32 h-32 object-contain relative z-10 filter drop-shadow-xl"
            animate={{ 
              y: [0, -8, 0],
              filter: [
                "drop-shadow(0 8px 16px rgba(168, 85, 247, 0.3))",
                "drop-shadow(0 12px 24px rgba(236, 72, 153, 0.5))",
                "drop-shadow(0 8px 16px rgba(168, 85, 247, 0.3))"
              ]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>

      {/* Main content (headings and tools) remains unchanged... */}
    </section>
  );
};
