import React from 'react';
import cn from 'classnames';
import s from './Button.module.scss';

interface ButtonProps {
  fullWidth?: boolean;
  color?: 'green' | 'yellow';
  size?: 'normal' | 'small';
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({ children, fullWidth, color = 'green', size = 'normal', onClick }) => {
  return (
    <button
      type="button"
      className={cn(s.root, {
        [s.yellow]: color === 'yellow',
        [s.small]: size === 'small',
        [s.width]: fullWidth,
      })}
      onClick={onClick}>
      {children}
    </button>
  );
};
