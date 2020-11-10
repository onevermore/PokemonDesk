import React, { FC } from 'react';
import { A } from 'hookrouter';
import s from './Header.module.scss';
import { ReactComponent as PokemonLogoSvg } from './img/Logo.svg';
import { GENERAL_MENU } from '../../routes';

export const Header: FC = () => {
  return (
    <header className={s.shadow}>
      <div className={s.root}>
        <div className={s.wrap}>
          <div className={s.pokeLogo}>
            <PokemonLogoSvg />
          </div>

          <ul className={s.menu}>
            {GENERAL_MENU.map(({ title, link }) => (
              <li key={title}>
                <A href={link}>{title}</A>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
