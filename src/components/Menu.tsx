import Image from 'next/image';

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Falafel Wrap Classique',
      description: 'Falafels maison, houmous, salade, sauce tahini',
      price: '8.50',
      image: '/menu/falafel-wrap.jpg',
      category: 'Wraps',
    },
    {
      id: 2,
      name: 'Assiette Falafel',
      description: '6 falafels, houmous, salade, pain pita',
      price: '12.50',
      image: '/menu/falafel-plate.jpg',
      category: 'Assiettes',
    },
    {
      id: 3,
      name: 'Bowl Végétarien',
      description: 'Quinoa, légumes grillés, falafels, sauce au yaourt',
      price: '14.50',
      image: '/menu/vegetarian-bowl.jpg',
      category: 'Bowls',
    },
    {
      id: 4,
      name: 'Houmous Maison',
      description: "Pois chiches, tahini, huile d'olive, épices",
      price: '6.50',
      image: '/menu/houmous.jpg',
      category: 'Entrées',
    },
  ];

  const categories = Array.from(new Set(menuItems.map(item => item.category)));

  return (
    <section id="menu" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-primary)]">
            Notre Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos plats emblématiques préparés avec des ingrédients frais
            et de saison
          </p>
        </div>

        {/* Catégories */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full bg-gray-100 hover:bg-[var(--color-primary)]
                       hover:text-white transition-colors duration-300"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grille de plats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md
                       transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="text-[var(--color-primary)] font-bold">
                    {item.price}€
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="w-full btn-primary">
                  Commander
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton Voir tout le menu */}
        <div className="text-center mt-12">
          <button className="btn-primary">
            Voir tout le menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu; 