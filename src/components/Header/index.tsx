import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.scss';
import { ReactComponent as PokemonLogoSvg } from './img/Logo.svg';

interface IMenu {
  id: number;
  value: string;
  link: string;
}

const MENU: IMenu[] = [
  {
    id: 1,
    value: 'Home',
    link: '/',
  },
  {
    id: 2,
    value: 'Pokédex',
    link: '/pokedex',
  },
  {
    id: 3,
    value: 'Legendaries',
    link: '/legendaries',
  },
  {
    id: 4,
    value: 'Documentation',
    link: '/documentation',
  },
];

export const Header: FC = () => {
  return (
    <header className={s.shadow}>
      <div className={s.root}>
        <div className={s.wrap}>
          <div className={s.pokeLogo}>
            <PokemonLogoSvg />
          </div>

          <ul className={s.menu}>
            {MENU.map(({ value, link, id }) => (
              <li key={id}>
                <Link to={link}>{value}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
