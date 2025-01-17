/* eslint-disable */
// @ts-nocheck
import { useUniformContext } from '@uniformdev/context-react';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { PokemonCardProps } from '.';
import Button from '../../components/Button';

const typeToEnrichmentIdMap = {
  bug: '6',
  fire: '1',
  flying: '5',
  grass: '3',
  normal: '7',
  poison: '4',
  water: '2',
} as const;

const typeColors = {
  grass: 'bg-green-500',
  poison: 'bg-purple-500',
  fire: 'bg-red-500',
  flying: 'bg-blue-300',
  water: 'bg-blue-500',
  bug: 'bg-lime-500',
  normal: 'bg-gray-400',
} as const;

export const PokemonCard: FC<PokemonCardProps> = ({ name, url, id, types = [] }) => {
  const { context } = useUniformContext();

  const router = useRouter();
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  const handleViewDetails = async (e, id) => {
    console.log(`Viewing details for Pokemon #${id}: ${name}`);
    e.preventDefault();

    for (const type of types) {
      await context.update({
        enrichments: [
          {
            cat: '1',
            key: typeToEnrichmentIdMap[type], // fire, grass, water, etc.
            str: 10,
          },
        ],
      });
    }

    // await context.update({
    //   enrichments: types.map(type => ({
    //     cat: '1',
    //     key: typeToEnrichmentIdMap[type], // fire, grass, water, etc.
    //     str: 10,
    //   })),
    // });

    router.push(`/pokemons/${id}`);
  };

  return (
    <div className="relative bg-white shadow-lg hover:shadow-2xl p-4 rounded-xl w-64 transform transition-all hover:-translate-y-1 duration-300 overflow-hidden group">
      {/* Rainbow Shimmer Effect */}
      <div className="absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity duration-300">
        <div
          className="absolute inset-0 bg-[length:200%_200%] animate-shimmer"
          style={{
            backgroundImage: `
              linear-gradient(
                90deg,
                transparent 0%,
                rgba(255, 217, 0, 0.4) 10%,
                rgba(255, 156, 0, 0.4) 20%,
                rgba(255, 0, 212, 0.4) 30%,
                rgba(118, 0, 255, 0.4) 40%,
                transparent 50%,
                transparent 100%
              )
            `,
          }}
        />
      </div>

      {/* Pokemon Card Header */}
      <div className="top-2 right-3 z-10 absolute font-mono text-gray-600 text-sm">#{id.padStart(3, '0')}</div>

      {/* Pokemon Image Container */}
      <div className="relative flex justify-center items-center bg-gradient-to-b from-gray-100 to-gray-200 mb-4 rounded-lg h-48">
        <img
          src={imageUrl}
          alt={name}
          className="relative z-[1] w-32 h-32 transform transition-transform duration-200 hover:scale-110 object-contain"
        />
      </div>

      {/* Pokemon Name */}
      <h2 className="relative z-[1] mb-2 font-bold text-center text-gray-800 text-xl capitalize">{name}</h2>

      {/* Type Pills */}
      <div className="relative z-[1] flex justify-center gap-2 mb-4">
        {types.map(type => (
          <span
            key={type}
            className={`${typeColors[type.toLowerCase()] || 'bg-gray-500'} 
              px-3 py-1 rounded-full text-white text-sm font-semibold capitalize
              shadow-sm`}
          >
            {type}
          </span>
        ))}
      </div>

      {/* View Details Button */}
      <div className="relative z-[1] text-center">
        <Button onClick={e => handleViewDetails(e, id)} copy="View Details" />
      </div>
    </div>
  );
};

// Add this to your global CSS or Tailwind config
const shimmerAnimation = {
  '@keyframes shimmer': {
    '0%': { backgroundPosition: '200% 0' },
    '100%': { backgroundPosition: '-200% 0' },
  },
  '.animate-shimmer': {
    animation: 'shimmer 3s linear infinite',
  },
};
