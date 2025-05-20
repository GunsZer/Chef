import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import OptimizedImage from '../components/OptimizedImage';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/images/gallery/atelier-1.jpg',
    alt: 'Atelier d\'artiste avec matériel de peinture',
    category: 'ateliers'
  },
  {
    id: 2,
    src: '/images/gallery/atelier-2.jpg',
    alt: 'Atelier de peinture avec pinceaux et couleurs',
    category: 'ateliers'
  },
  {
    id: 3,
    src: '/images/gallery/exposition-1.jpg',
    alt: 'Exposition d\'art contemporain',
    category: 'expositions'
  },
  {
    id: 4,
    src: '/images/gallery/exposition-2.jpg',
    alt: 'Vernissage avec visiteurs',
    category: 'expositions'
  },
  {
    id: 5,
    src: '/images/gallery/architecture-1.jpg',
    alt: 'Vue architecturale de la Cité Suchard',
    category: 'architecture'
  },
  {
    id: 6,
    src: '/images/gallery/architecture-2.jpg',
    alt: 'Détails architecturaux historiques',
    category: 'architecture'
  }
];

const categories = ['tous', 'ateliers', 'expositions', 'architecture'];

export default function Galerie() {
  const [selectedCategory, setSelectedCategory] = useState('tous');

  const filteredImages = selectedCategory === 'tous'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Galerie - La Cité Suchard</title>
        <meta name="description" content="Découvrez notre galerie d&apos;images de La Cité Suchard, témoignant de son histoire et de sa vie culturelle." />
      </Head>

      <main className="min-h-screen bg-suchard-50 py-16">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl text-suchard-900 text-center mb-12"
          >
            Galerie
          </motion.h1>

          {/* Filtres */}
          <div className="flex justify-center space-x-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-suchard-600 text-white'
                    : 'bg-white text-suchard-700 hover:bg-suchard-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Grille d'images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative aspect-square overflow-hidden rounded-lg shadow-lg"
              >
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="font-sans text-sm">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
} 