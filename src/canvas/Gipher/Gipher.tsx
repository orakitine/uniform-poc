import { FC, useEffect, useState } from 'react';
import { GipherProps } from '.';

export const Gipher: FC<GipherProps> = ({ sprites = {} as GipherProps['sprites'], cycleSpeed = 1000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get all sprite URLs that exist, excluding 'other' and 'versions'
  const spriteUrls = Object.entries(sprites)
    .filter(
      ([key, value]): value is [string, string] =>
        // Exclude 'other' and 'versions' objects and null values
        !['other', 'versions'].includes(key) && typeof value === 'string' && value !== null
    )
    .map(([_, url]) => url);

  useEffect(() => {
    if (spriteUrls.length <= 1) return;

    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex === spriteUrls.length - 1 ? 0 : prevIndex + 1));
    }, cycleSpeed);

    return () => clearInterval(intervalId);
  }, [spriteUrls.length, cycleSpeed]);

  if (spriteUrls.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full">
      <img
        src={spriteUrls[currentIndex]}
        alt={`Pokemon sprite ${currentIndex + 1} of ${spriteUrls.length}`}
        className="w-full h-full object-contain"
      />
    </div>
  );
};
