import Image from 'next/image';
import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: '/gallery/falafel-1.jpg',
      alt: 'Falafels frais',
    },
    {
      src: '/gallery/wrap-1.jpg',
      alt: 'Wrap falafel',
    },
    {
      src: '/gallery/bowl-1.jpg',
      alt: 'Bowl végétarien',
    },
    {
      src: '/gallery/houmous-1.jpg',
      alt: 'Houmous maison',
    },
    {
      src: '/gallery/salad-1.jpg',
      alt: 'Salade fraîche',
    },
    {
      src: '/gallery/platter-1.jpg',
      alt: 'Assiette partagée',
    },
  ];

  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-primary)]">
            Notre Galerie
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos plats en images
          </p>
        </div>

        {/* Grille d'images */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-lg transition-transform duration-300
                         group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20
                            transition-colors duration-300 rounded-lg" />
            </div>
          ))}
        </div>

        {/* Modal pour l'image sélectionnée */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full aspect-[4/3]">
              <Image
                src={selectedImage}
                alt="Image en grand format"
                fill
                className="object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300
                         transition-colors duration-300"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery; 