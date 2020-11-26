import React from 'react';
import { PokemonsProps } from '../../interface/pokemons';
import useData from '../../hook/getData';

export interface PokeProps {
  id: string | number;
}

export const Pokemon: React.FC<PokeProps> = ({ id }) => {
  const { data, isLoading } = useData<PokemonsProps>('getPokemon', { id });

  if (isLoading) {
    return <div>Loading. . .</div>;
  }

  return <div>This is pokemon id equal {data?.name}</div>;
};
