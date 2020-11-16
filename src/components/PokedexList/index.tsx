import { PokemonCard, PokemonsProps } from '../PokemonCard';
import s from './PokedexList.module.scss';

interface DataPokemon {
  pokemons: PokemonsProps[];
}

export const PokedexList: React.FC<DataPokemon> = ({ pokemons }) => {
  return (
    <>
      <div className={s.root}>
        {pokemons.map((pokemon) => {
          return <PokemonCard data={pokemon} key={pokemon.id} />;
        })}
      </div>
    </>
  );
};
