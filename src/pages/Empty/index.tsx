import React from 'react';

interface EmptyProps {
  title?: string;
}

export const EmptyPage: React.FC<EmptyProps> = ({ title }) => {
  return (
    <div>
      <div>This is Empty Page for {title}</div>
    </div>
  );
};

