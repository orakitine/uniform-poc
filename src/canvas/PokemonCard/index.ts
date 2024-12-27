import { ComponentProps, registerUniformComponent } from '@uniformdev/canvas-react';
import { PokemonCard } from './PokemonCard';

export type PokemonCardProps = ComponentProps<{
  name: string;
  url: string;
}>;

registerUniformComponent({ type: 'pokemonCard', component: PokemonCard });

export default PokemonCard;
