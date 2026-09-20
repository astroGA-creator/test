import React, { useMemo } from 'react';

export const StarBackground: React.FC = () => {
  // Generate a deterministic set of stars for smooth rendering without layout shift
  const stars = useMemo(() => {
    return Array.from({ length: 120 }).map((_, i) => ({
      id: i,
      left: `${(i * 1.137) % 100}%`,
      top: `${(i * 2.371 + (i % 7) * 11) % 100}%`,
      size: `${(i % 3) * 0.5 + 1}px`,
      duration: `${(i % 4) + 2.5}s`,
      delay: `${(i % 5) * 0.7}s`,
      opacity: (i % 5) * 0.1 + 0.15,
    }));
  }, []);

  return (
    <div id="star-container" className="star-field pointer-events-none" aria-hidden="true">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDuration: star.duration,
            animationDelay: star.delay,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
};
