import React from 'react';
import { PokemonCard } from '../PokemonCard';
import s from './PokedexList.module.scss';
import { PokemonsProps } from '../../interface/pokemons';

interface DataPokemon {
  pokemons?: PokemonsProps[];
}

export const PokedexList: React.FC<DataPokemon> = ({ pokemons }) => {
  return (
    <>
      <div className={s.root}>
        {pokemons?.map((pokemon: PokemonsProps) => {
          return <PokemonCard data={pokemon} key={pokemon.id} />;
        })}
      </div>
    </>
  );
};
