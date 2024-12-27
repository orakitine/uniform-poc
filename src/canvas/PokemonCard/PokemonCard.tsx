/* eslint-disable */
// @ts-nocheck
import { FC } from 'react';
import { PokemonCardProps } from '.';
import Button from '../../components/Button';

export const PokemonCard: FC<PokemonCardProps> = ({ name, url }) => {
  const id = getPokemonId(url);
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold">Name: {name}</p>
      <img src={imageUrl} alt={name} />
      <p>ID: {id}</p>
      <Button href={`/pokemons/${id}`} copy="View Details" />
    </div>
  );
};

const getPokemonId = (url: string): string => {
  const matches = url.match(/pokemon\/(\d+)/);
  return matches?.[1] ?? '';
};
