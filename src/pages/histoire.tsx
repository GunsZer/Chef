import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

export default function Histoire() {
  return (
    <>
      <Head>
        <title>Histoire - La Cité Suchard</title>
        <meta name="description" content="Découvrez l'histoire fascinante de La Cité Suchard, de sa fondation par Philippe Suchard à sa transformation en espace culturel." />
      </Head>

      <main className="min-h-screen bg-suchard-50">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-suchard-900">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10" />
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
            <motion.h1 
              {...fadeIn}
              className="font-serif text-5xl md:text-6xl text-white mb-6 max-w-3xl"
            >
              L&apos;Histoire de La Cité Suchard
            </motion.h1>
            <motion.p 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="font-sans text-xl text-white/90 max-w-2xl"
            >
              De la chocolaterie à l&apos;espace culturel : découvrez l&apos;évolution remarquable d&apos;un lieu emblématique de Neuchâtel
            </motion.p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                {...fadeIn}
                className="mb-16"
              >
                <h2 className="font-serif text-3xl text-suchard-900 mb-6">Les Origines</h2>
                <p className="font-sans text-lg text-suchard-800 leading-relaxed mb-6">
                  C&apos;est en 1886 que Philippe Suchard, visionnaire et entrepreneur passionné, pose la première pierre de ce qui deviendra La Cité Suchard. Son ambition ? Créer non seulement une chocolaterie d&apos;excellence, mais aussi un lieu de vie pour ses employés.
                </p>
                <p className="font-sans text-lg text-suchard-800 leading-relaxed">
                  Entre 1886 et 1896, l&apos;ensemble architectural prend forme, mêlant harmonieusement espaces de production et logements ouvriers, dans un style caractéristique de l&apos;architecture industrielle de la fin du XIXe siècle.
                </p>
              </motion.div>

              <motion.div 
                {...fadeIn}
                transition={{ delay: 0.2 }}
                className="mb-16"
              >
                <h2 className="font-serif text-3xl text-suchard-900 mb-6">L&apos;Âge d&apos;Or Industriel</h2>
                <p className="font-sans text-lg text-suchard-800 leading-relaxed">
                  Pendant près d&apos;un siècle, La Cité Suchard fut le cœur battant de la production chocolatière neuchâteloise. Les bâtiments, avec leurs grandes fenêtres et leurs volumes généreux, témoignent encore aujourd&apos;hui de cette période florissante où le chocolat Suchard conquit le monde.
                </p>
              </motion.div>

              <motion.div 
                {...fadeIn}
                transition={{ delay: 0.4 }}
                className="mb-16"
              >
                <h2 className="font-serif text-3xl text-suchard-900 mb-6">La Renaissance Culturelle</h2>
                <p className="font-sans text-lg text-suchard-800 leading-relaxed">
                  Après la fin de la production industrielle, La Cité Suchard connaît une renaissance remarquable. Les anciens espaces de production sont progressivement transformés en ateliers d&apos;artistes, en salles d&apos;exposition et en espaces culturels, insufflant une nouvelle vie à ce patrimoine architectural unique.
                </p>
              </motion.div>

              <motion.div 
                {...fadeIn}
                transition={{ delay: 0.6 }}
              >
                <h2 className="font-serif text-3xl text-suchard-900 mb-6">Aujourd&apos;hui</h2>
                <p className="font-sans text-lg text-suchard-800 leading-relaxed">
                  Classée au patrimoine culturel, La Cité Suchard est désormais un lieu vivant où se côtoient artistes, artisans et amateurs d&apos;art. Les espaces rénovés dans le respect de leur histoire accueillent expositions, événements culturels et ateliers créatifs, perpétuant l&apos;esprit d&apos;innovation et de création cher à son fondateur.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 