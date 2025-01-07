import { ComponentProps, registerUniformComponent } from '@uniformdev/canvas-react';
import { PokemonCard } from './PokemonCard';

export type PokemonCardProps = ComponentProps<{
  id: string;
  name: string;
  url: string;
  types: string[];
}>;

registerUniformComponent({ type: 'pokemonCard', component: PokemonCard });

export default PokemonCard;
