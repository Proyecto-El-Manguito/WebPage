import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const GallerySection = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="w-full mb-30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer overflow-hidden rounded-br-4xl shadow-lg"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img.src}
              alt={img.alt || `Imagen ${index + 1}`}
              className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-300 ease-in-out"
            />
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 z-[2000] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

GallerySection.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ),
};

export default GallerySection;
