import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Head from 'next/head';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  fill?: boolean;
  title?: string;
  description?: string;
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  priority = false,
  width,
  height,
  fill = false,
  title,
  description,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Métadonnées SEO */}
      <Head>
        <meta property="og:image" content={src} />
        {title && <meta property="og:image:title" content={title} />}
        {description && <meta property="og:image:description" content={description} />}
        <meta name="twitter:image" content={src} />
        {title && <meta name="twitter:image:alt" content={title} />}
      </Head>

      <div className={`relative ${className}`}>
        {/* Placeholder pendant le chargement */}
        {isLoading && (
          <div className="absolute inset-0 bg-suchard-100 animate-pulse" />
        )}
        
        {/* Image optimisée */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            fill={fill}
            priority={priority}
            className={`transition-opacity duration-300 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoadingComplete={() => setIsLoading(false)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={85}
            title={title}
          />
        </motion.div>
      </div>
    </>
  );
} 