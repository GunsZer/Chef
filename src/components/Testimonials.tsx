import { useState } from 'react';
import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sophie Martin',
      avatar: '/testimonials/avatar-1.jpg',
      rating: 5,
      comment: "Les meilleurs falafels que j'ai jamais mangés ! Frais, croustillants et tellement savoureux.",
      date: '2024-03-15',
    },
    {
      id: 2,
      name: 'Thomas Dubois',
      avatar: '/testimonials/avatar-2.jpg',
      rating: 5,
      comment: 'Un service rapide et des plats délicieux. Je recommande vivement le bowl végétarien !',
      date: '2024-03-10',
    },
    {
      id: 3,
      name: 'Emma Petit',
      avatar: '/testimonials/avatar-3.jpg',
      rating: 4,
      comment: 'Très bon rapport qualité-prix. Les portions sont généreuses et les ingrédients sont frais.',
      date: '2024-03-05',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-primary)]">
            Avis de nos clients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez ce que nos clients pensent de nous
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Témoignage actuel */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    {testimonials[currentIndex].name}
                  </h3>
                  <div className="flex items-center">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-[var(--color-secondary)]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-lg italic mb-4">
                "{testimonials[currentIndex].comment}"
              </p>
              <p className="text-gray-500 text-sm">
                {new Date(testimonials[currentIndex].date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>

            {/* Boutons de navigation */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12
                       bg-white p-2 rounded-full shadow-md hover:bg-gray-50
                       transition-colors duration-300"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12
                       bg-white p-2 rounded-full shadow-md hover:bg-gray-50
                       transition-colors duration-300"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Indicateurs */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex
                    ? 'bg-[var(--color-primary)]'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 