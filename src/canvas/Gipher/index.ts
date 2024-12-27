import { ComponentProps, registerUniformComponent } from '@uniformdev/canvas-react';
import { Gipher } from './Gipher';

interface PokemonSprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: Record<string, unknown>;
  versions: Record<string, unknown>;
}

export type GipherProps = ComponentProps<{
  sprites: PokemonSprites;
  cycleSpeed?: number; // in milliseconds, optional with a default value
}>;

export default Gipher;

registerUniformComponent({
  type: 'gipher',
  component: Gipher,
});
