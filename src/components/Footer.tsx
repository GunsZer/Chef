import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-suchard-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Informations de contact */}
          <div>
            <h3 className="font-serif text-xl mb-4">Contact</h3>
            <p className="mb-2">Passage de la Cité-Suchard</p>
            <p className="mb-2">2000 Neuchâtel, Suisse</p>
            <p className="mb-2">
              <a href="mailto:contact@cite-suchard.ch" className="hover:text-suchard-300">
                contact@cite-suchard.ch
              </a>
            </p>
          </div>

          {/* Navigation rapide */}
          <div>
            <h3 className="font-serif text-xl mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/histoire" className="hover:text-suchard-300">
                  Histoire
                </Link>
              </li>
              <li>
                <Link href="/actualites" className="hover:text-suchard-300">
                  Actualités
                </Link>
              </li>
              <li>
                <Link href="/galerie" className="hover:text-suchard-300">
                  Galerie
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-suchard-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="font-serif text-xl mb-4">Horaires</h3>
            <p className="mb-2">Lundi - Vendredi: 9h - 18h</p>
            <p className="mb-2">Samedi: 10h - 17h</p>
            <p>Dimanche: Fermé</p>
          </div>
        </div>

        <div className="border-t border-suchard-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} La Cité Suchard. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 