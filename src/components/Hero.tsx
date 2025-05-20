import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <Image
          src="/hero-falafel.jpg"
          alt="Falafel gourmet"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Contenu */}
      <div className="relative h-full flex items-center">
        <div className="container-custom">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Le meilleur du falafel 100% végétarien
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in delay-300">
              Découvrez nos recettes authentiques et nos ingrédients frais
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-500">
              <Link href="#menu" className="btn-primary text-center">
                Commander maintenant
              </Link>
              <Link
                href="#about"
                className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg 
                         hover:bg-white/20 transition-all duration-300 text-center"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero; 