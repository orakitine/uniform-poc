import { NextResponse } from 'next/server';

interface Pokemon {
  id: string;
  name: string;
  url: string;
  types: string[];
}

interface PokemonResponse {
  results: Pokemon[];
}
interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit');
    const pokemonLimit = limit ? parseInt(limit) : 151;

    // Validate limit
    if (isNaN(pokemonLimit) || pokemonLimit < 1) {
      return NextResponse.json({ error: 'Invalid limit parameter. Must be a positive number.' }, { status: 400 });
    }

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonLimit}`);
    const data: PokemonResponse = await response.json();

    // Fetch detailed data for each Pokemon
    const detailedPokemons = await Promise.all(
      data.results.map(async pokemon => {
        const id = pokemon.url.split('/').filter(Boolean).pop() || '';
        const detailResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const detailData = await detailResponse.json();

        return {
          id,
          name: pokemon.name,
          imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
          types: detailData.types.map((typeInfo: PokemonType) => typeInfo.type.name),
        };
      })
    );

    return NextResponse.json(detailedPokemons);
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
    return NextResponse.json({ error: 'Failed to fetch Pokemon' }, { status: 500 });
  }
}
