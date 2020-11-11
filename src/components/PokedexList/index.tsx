import React from 'react';
import { PokemonCard } from '../PokemonCard';
import s from './PokedexList.module.scss';
import { pokemons } from './pokemons';
import { Header } from '../Header';

export const PokedexList: React.FC = () => {
  return (
    <>
      <Header />
      <div className={s.root}>
        {pokemons.map((pokemon) => {
          return <PokemonCard data={pokemon} key={pokemon.id} />;
        })}
      </div>
    </>
  );
};
