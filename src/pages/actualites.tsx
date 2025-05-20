import React from 'react';
import Head from 'next/head';
import OptimizedImage from '../components/OptimizedImage';

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Portes Ouvertes 2024",
    date: "15 juin 2024",
    description: "Venez découvrir les ateliers d'artistes et les espaces culturels de La Cité Suchard lors de notre journée portes ouvertes annuelle.",
    image: "/images/events/portes-ouvertes.jpg"
  },
  {
    id: 2,
    title: "Marché de Noël Artisanal",
    date: "14-15 décembre 2024",
    description: "Notre traditionnel marché de Noël réunit les artisans de La Cité Suchard pour deux jours de découvertes et de partage.",
    image: "/images/events/marche-noel.jpg"
  },
  {
    id: 3,
    title: "Fresque Participative",
    date: "Été 2024",
    description: "Participez à la création d'une fresque collective sur les murs de La Cité Suchard, guidée par nos artistes résidents.",
    image: "/images/events/fresque.jpg"
  }
];

export default function Actualites() {
  return (
    <>
      <Head>
        <title>Actualités - La Cité Suchard</title>
        <meta name="description" content="Découvrez les événements et actualités de La Cité Suchard à Neuchâtel" />
      </Head>

      <main className="min-h-screen bg-suchard-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl text-suchard-900 text-center mb-12">
            Actualités
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <article key={event.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <div className="aspect-w-16 aspect-h-9 relative w-full h-48">
                  <OptimizedImage
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-suchard-600 font-sans text-sm mb-2">{event.date}</p>
                  <h2 className="font-serif text-2xl text-suchard-900 mb-3">{event.title}</h2>
                  <p className="text-suchard-700 font-sans">{event.description}</p>
                  <a
                    href="#"
                    className="inline-block mt-4 text-suchard-600 hover:text-suchard-800 font-sans underline"
                  >
                    En savoir plus
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
} 