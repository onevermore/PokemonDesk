import React from 'react';
import { Header } from '../../components/Header';

interface EmptyProps {
  title?: string;
}

export const EmptyPage: React.FC<EmptyProps> = ({ title }) => {
  return (
    <div>
      <Header />
      <div>This is Empty Page for {title}</div>
    </div>
  );
};
