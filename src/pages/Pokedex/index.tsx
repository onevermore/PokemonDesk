import React, { useEffect, useState } from 'react';
import { PokedexList } from '../../components/PokedexList';
import { H, Heading } from '../../components/Heading';
import { PokemonsProps } from '../../components/PokemonCard';
import s from './Pokedex.module.scss';
import { Layout } from '../../components/Layout';

export interface DataProps {
  total: number;
  pokemons: PokemonsProps[];
}

const usePokemons = () => {
  const [data, setData] = useState<DataProps>({ total: 0, pokemons: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons');
        const result = await response.json();

        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

export const PokedexPage: React.FC = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div>Loading . . .</div>;
  }

  if (isError) {
    return <div>Something went wrong . . .</div>;
  }

  return (
    <Layout>
      <div className={s.hStyle}>
        <Heading size={H.h3}>
          {data.total} <strong>Pokemons</strong> for you to choose your favorite
        </Heading>
      </div>

      <div>
        <PokedexList pokemons={data.pokemons} />
        {/*  {data.pokemons.map( item => <div>{item.name}</div>)} */}
      </div>
    </Layout>
  );
};
