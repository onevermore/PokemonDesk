import React from 'react';

import { Heading, H } from '../Heading';

import s from './PokemonCard.module.scss';

export interface IStats {
  hp: number;
  attack: number;
  defense: number;
  'special-attack'?: number;
  'special-defense'?: number;
  speed?: number;
}

export interface PokemonsProps {
  nameClean: string;
  abilities: string[];
  stats: IStats;
  types: string[];
  img: string;
  name: string;
  baseExperience: number;
  height: number;
  id: number;
  isDefault: boolean;
  order: number;
  weight: number;
}

interface DataProps {
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
      <div className={s.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};
