import React from 'react';
import s from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer>
      <div className={s.container}>
        <div className={s.footer}>
          <div>
            Make with{' '}
            <span role="img" aria-label="heart">
              ❤
            </span>
            ️
          </div>
          <div className={s.text2}>Our Team</div>
        </div>
      </div>
    </footer>
  );
};
