import React from 'react';
import cn from 'classnames';
import { Heading, H } from '../Heading';
import s from './PokemonCard.module.scss';

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

export interface DataProps {
  data: PokemonsProps;
}

export const PokemonCard: React.FC<DataProps> = ({
  data: {
    stats: { attack, defense },
    types,
    img,
    name,
  },
}) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading size={H.h4}>{name}</Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((type) => (
            <span key={type} className={s.label}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className={cn(s.pictureWrap, s[types[0] as keyof typeof s])}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};
