import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>La Cité Suchard - Un espace culturel unique à Neuchâtel</title>
        <meta name="description" content="Découvrez La Cité Suchard, un lieu historique et culturel unique à Neuchâtel. Ateliers d'artistes, espaces communautaires et événements culturels." />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10" />
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-5xl md:text-7xl mb-6"
            >
              La Cité Suchard
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-xl md:text-2xl max-w-2xl mb-8"
            >
              Un lieu historique où l&apos;art et la culture se rencontrent au cœur de Neuchâtel
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              href="/galerie"
              className="bg-suchard-600 hover:bg-suchard-700 text-white font-sans px-8 py-3 rounded-full transition-colors"
            >
              Découvrir la galerie
            </motion.a>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 bg-suchard-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-suchard-900 mb-6">
                Un héritage culturel vivant
              </h2>
              <p className="font-sans text-lg text-suchard-800 leading-relaxed mb-8">
                Fondée entre 1886 et 1896 par Philippe Suchard, La Cité Suchard s&apos;est transformée en un espace culturel vibrant où artistes, artisans et passionnés de culture se rencontrent. Aujourd&apos;hui, ce lieu historique protégé abrite des ateliers d&apos;artistes, des espaces d&apos;exposition et des salles polyvalentes.
              </p>
              <Link href="/histoire" className="inline-block font-sans text-suchard-700 hover:text-suchard-800 underline">
                En savoir plus sur notre histoire
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 