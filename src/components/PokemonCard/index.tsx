import React from 'react';
import cn from 'classnames';
import { Heading, H } from '../Heading';
import s from './PokemonCard.module.scss';
import { PokemonsProps } from '../../interface/pokemons';

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
