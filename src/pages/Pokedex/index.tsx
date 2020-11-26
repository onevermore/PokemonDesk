import React, { useState } from 'react';
import { PokedexList } from '../../components/PokedexList';
import { H, Heading } from '../../components/Heading';
import s from './Pokedex.module.scss';
import { Layout } from '../../components/Layout';
import useData from '../../hook/getData';
import { IPokemons } from '../../interface/pokemons';
import { useDebounce } from '../../hook/useDebounce';

interface IQuery {
  limit: number;
  name?: string;
}

export const PokedexPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({ limit: 12 });
  const debouncedValue = useDebounce(searchValue, 500);

  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [debouncedValue]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: event.target.value,
    }));
  };
  {
    /*
        if (isLoading) {
            return <div>Loading . . .</div>;
        } */
  }

  if (isError) {
    return <div>Something went wrong . . .</div>;
  }

  return (
    <Layout>
      <div className={s.hStyle}>
        <Heading size={H.h3}>
          {!isLoading && data && data.total} <strong>Pokemons</strong> for you to choose your favorite
        </Heading>
      </div>
      <div>
        <input type="text" value={searchValue} onChange={handleSearchChange} />
      </div>

      <div>
        {!isLoading && data && <PokedexList pokemons={data.pokemons} />}
        {/*  {data.pokemons.map( item => <div>{item.name}</div>)} */}
      </div>
    </Layout>
  );
};
