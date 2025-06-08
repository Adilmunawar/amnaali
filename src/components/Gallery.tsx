
import { motion } from "framer-motion";
import CircularGallery from "./CircularGallery";

export const Gallery = () => {
  const galleryItems = [
    {
      image: "https://picsum.photos/seed/1/800/600?grayscale",
      text: "Bridge",
    },
    {
      image: "https://picsum.photos/seed/2/800/600?grayscale",
      text: "Desk Setup",
    },
    {
      image: "https://picsum.photos/seed/3/800/600?grayscale",
      text: "Waterfall",
    },
    {
      image: "https://picsum.photos/seed/4/800/600?grayscale",
      text: "Strawberries",
    },
    {
      image: "https://picsum.photos/seed/5/800/600?grayscale",
      text: "Deep Diving",
    },
    {
      image: "https://picsum.photos/seed/16/800/600?grayscale",
      text: "Train Track",
    },
    {
      image: "https://picsum.photos/seed/17/800/600?grayscale",
      text: "Santorini",
    },
    {
      image: "https://picsum.photos/seed/8/800/600?grayscale",
      text: "Blurry Lights",
    },
    {
      image: "https://picsum.photos/seed/9/800/600?grayscale",
      text: "New York",
    },
    {
      image: "https://picsum.photos/seed/10/800/600?grayscale",
      text: "Good Boy",
    },
    {
      image: "https://picsum.photos/seed/21/800/600?grayscale",
      text: "Coastline",
    },
    {
      image: "https://picsum.photos/seed/12/800/600?grayscale",
      text: "Palm Trees",
    },
  ];

  return (
    <section id="gallery" className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text">
              Creative Gallery
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Explore my creative journey through an interactive gallery showcasing diverse projects and inspirations
          </motion.p>
        </motion.div>

        {/* Gallery Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="h-[600px] w-full glass rounded-3xl overflow-hidden border border-purple-500/20">
            <CircularGallery
              items={galleryItems}
              bend={3}
              textColor="#ffffff"
              borderRadius={0.05}
              font="bold 24px Inter"
            />
          </div>
          
          {/* Gradient overlay for better integration */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-3xl pointer-events-none" />
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-gray-400 text-lg">
            Click and drag to explore • Scroll to navigate through the gallery
          </p>
        </motion.div>
      </div>
    </section>
  );
};
