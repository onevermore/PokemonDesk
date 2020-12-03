export interface IPokemons {
  total: number;
  pokemons: PokemonsProps[];
}

export interface IStats {
  hp?: number;
  attack: number;
  defense: number;
  'special-attack'?: number;
  'special-defense'?: number;
  speed?: number;
}

export interface PokemonsProps {
  // eslint-disable-next-line camelcase
  name_clean: string;
  abilities: string[];
  stats: IStats;
  types: string[];
  img?: string;
  name: string;
  // eslint-disable-next-line camelcase
  base_experience: number;
  height: number;
  id: number;
  // eslint-disable-next-line camelcase
  is_default: boolean;
  order: number;
  weight: number;
}
