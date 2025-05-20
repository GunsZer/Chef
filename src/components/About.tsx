import Image from 'next/image';

const About = () => {
  const features = [
    {
      icon: '🌱',
      title: '100% Végétarien',
      description: 'Des recettes authentiques sans aucun produit animal',
    },
    {
      icon: '👨‍🍳',
      title: 'Fait Maison',
      description: 'Préparation quotidienne avec des ingrédients frais',
    },
    {
      icon: '🌍',
      title: 'Éco-responsable',
      description: 'Emballages recyclables et approvisionnement local',
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/about-image.jpg"
              alt="Chef Falafel en cuisine"
              fill
              className="object-cover"
            />
          </div>

          {/* Contenu */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-primary)]">
              Notre Histoire
            </h2>
            <p className="text-lg mb-8 text-gray-600">
              Depuis 2015, Chef Falafel s&apos;engage à servir les meilleurs falafels végétariens
              de la ville. Notre passion pour la cuisine végétarienne et notre respect
              des traditions culinaires nous permettent de créer des plats savoureux
              et authentiques.
            </p>

            {/* Features */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm
                           hover:shadow-md transition-shadow duration-300"
                >
                  <span className="text-3xl">{feature.icon}</span>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 