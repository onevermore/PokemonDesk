import React from 'react';
import s from './Header.module.scss';
import Logo from './img/Logo.png';

export const Header = () => {
  return (
    <header>
      <div className={s.container}>
        <div className={s.header}>
          <div className={s.pokeLogo}>
            <img src={Logo} alt="" />
          </div>
          <nav className={s.menu}>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Pokedex</a>
              </li>
              <li>
                <a href="/">Legendaries</a>
              </li>
              <li>
                <a href="/">Documentation</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
