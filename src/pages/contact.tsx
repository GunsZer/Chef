import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'loading'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await res.json();
        setErrorMsg(data.message || 'Erreur lors de l\'envoi du message.');
        setStatus('error');
      }
    } catch (err) {
      setErrorMsg('Erreur lors de l\'envoi du message.');
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <Head>
        <title>Contact - La Cité Suchard</title>
        <meta name="description" content="Contactez La Cité Suchard à Neuchâtel pour plus d'informations sur nos espaces et événements culturels." />
      </Head>

      <main className="min-h-screen bg-suchard-50 py-16">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl text-suchard-900 text-center mb-12"
          >
            Contact
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Informations de contact */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="font-serif text-2xl text-suchard-900 mb-6">Nous trouver</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-sans font-semibold text-suchard-800 mb-2">Adresse</h3>
                  <p className="font-sans text-suchard-700">
                    Passage de la Cité-Suchard<br />
                    2000 Neuchâtel<br />
                    Suisse
                  </p>
                </div>

                <div>
                  <h3 className="font-sans font-semibold text-suchard-800 mb-2">Email</h3>
                  <a href="mailto:contact@cite-suchard.ch" className="font-sans text-suchard-600 hover:text-suchard-800">
                    contact@cite-suchard.ch
                  </a>
                </div>

                <div>
                  <h3 className="font-sans font-semibold text-suchard-800 mb-2">Accès</h3>
                  <p className="font-sans text-suchard-700 mb-2">
                    <strong>En bus :</strong> Lignes 101, 102 - Arrêt &quot;Cité Suchard&quot;
                  </p>
                  <p className="font-sans text-suchard-700">
                    <strong>En voiture :</strong> Sortie autoroute A5 &quot;Serrières&quot;
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Formulaire de contact */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="font-serif text-2xl text-suchard-900 mb-6">Nous écrire</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-sans text-suchard-800 mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-suchard-200 rounded-md focus:outline-none focus:ring-2 focus:ring-suchard-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-sans text-suchard-800 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-suchard-200 rounded-md focus:outline-none focus:ring-2 focus:ring-suchard-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-sans text-suchard-800 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-suchard-200 rounded-md focus:outline-none focus:ring-2 focus:ring-suchard-500"
                  />
                </div>

                {status === 'success' && (
                  <div className="text-green-600 font-sans">Votre message a bien été envoyé !</div>
                )}
                {status === 'error' && (
                  <div className="text-red-600 font-sans">{errorMsg}</div>
                )}

                <button
                  type="submit"
                  className="w-full bg-suchard-600 hover:bg-suchard-700 text-white font-sans py-3 px-6 rounded-md transition-colors"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Envoi en cours...' : 'Envoyer'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
} 