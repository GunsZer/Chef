import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import OptimizedImage from '../OptimizedImage';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // Simuler le chargement de l'image
    setTimeout(() => {
      if (props.onLoadingComplete) {
        props.onLoadingComplete();
      }
    }, 100);
    return <img {...props} />;
  },
}));

describe('OptimizedImage', () => {
  it('affiche le placeholder pendant le chargement', () => {
    render(
      <OptimizedImage
        src="/test.jpg"
        alt="Test image"
        width={100}
        height={100}
      />
    );
    
    expect(screen.getByRole('img')).toHaveAttribute('src', '/test.jpg');
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Test image');
  });

  it('gère correctement les props fill', () => {
    render(
      <OptimizedImage
        src="/test.jpg"
        alt="Test image"
        fill
      />
    );
    
    expect(screen.getByRole('img')).toHaveAttribute('fill', 'true');
  });

  it('applique les classes CSS correctement', () => {
    const customClass = 'custom-class';
    render(
      <OptimizedImage
        src="/test.jpg"
        alt="Test image"
        className={customClass}
        width={100}
        height={100}
      />
    );
    
    expect(screen.getByRole('img').parentElement?.parentElement).toHaveClass(customClass);
  });
}); 