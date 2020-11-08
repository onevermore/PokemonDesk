import React, { FC } from 'react';

export enum H {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
}
type HeadingProps = {
  size: H;
};

export const Heading: FC<HeadingProps> = ({ children, size }) => {
  return React.createElement(size, '', children);
};
