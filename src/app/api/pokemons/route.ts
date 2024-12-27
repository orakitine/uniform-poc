import { NextResponse } from 'next/server';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonResponse {
  results: Pokemon[];
}

interface TransformedPokemon {
  id: string;
  name: string;
  imageUrl: string;
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

    const transformedPokemons: TransformedPokemon[] = data.results.map(pokemon => {
      const id = pokemon.url.split('/').filter(Boolean).pop() || '';
      return {
        id,
        name: pokemon.name,
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
      };
    });

    return NextResponse.json(transformedPokemons);
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
    return NextResponse.json({ error: 'Failed to fetch Pokemon' }, { status: 500 });
  }
}
