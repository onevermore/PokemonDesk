import React from 'react';
import s from './Header.module.scss';
import Logo from './img/Logo.png';

export const Header = () => {
  const menuList = ['Home', 'Pokedex', 'Legendaries', 'Documentation'];

  return (
    <header>
      <div className={s.container}>
        <div className={s.header}>
          <div className={s.pokeLogo}>
            <img src={Logo} alt="" />
          </div>
          <nav className={s.menu}>
            <ul>
              {menuList.map((item) => (
                <li>
                  <a href="/">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
