/* eslint-disable */
import PokemonCard, { PokemonCardProps } from '@/canvas/PokemonCard';
import type { Meta, StoryObj } from '@storybook/react';
import { UniformComposition } from '@uniformdev/canvas-react';
import { createFakeCompositionData } from '../utils';

const meta: Meta<typeof PokemonCard> = {
  title: 'PokemonCard',
  component: PokemonCard,
};

export default meta;
type Story = StoryObj<typeof PokemonCard>;

const renderStory = (args: PokemonCardProps) => {
  const fakeComposition = createFakeCompositionData('pokemonCard', args, {});
  return (
    <UniformComposition data={fakeComposition}>
      <PokemonCard {...args} />
    </UniformComposition>
  );
};

export const YouTube: Story = {
  name: 'YouTube',
  args: {
    name: 'Bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
  },
  render: renderStory,
};

export const Loom: Story = {
  args: {
    name: 'Bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
  },
  render: renderStory,
};
