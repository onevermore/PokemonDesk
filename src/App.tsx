import React from 'react';
import s from './App.module.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <div className={s.content}>This is App Component</div>
      <Footer />
    </>
  );
};

export default App;
