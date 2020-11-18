import { useEffect, useState } from 'react';
import req from '../utils/request';
import { PokemonsProps } from '../components/PokemonCard';

interface DataProps {
  total: number;
  pokemons: Array<PokemonsProps>;
}

const useData = (endpoint: string, query: object, deps: any[] = []) => {
  const [data, setData] = useState<DataProps>({ total: 0, pokemons: [] });

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      try {
        const result = await req(endpoint, query);

        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, deps);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;
