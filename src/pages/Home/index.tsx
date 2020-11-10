import React, { FC } from 'react';
import { navigate } from 'hookrouter';
import { Footer } from '../../components/Footer';
import { Layout } from '../../components/Layout';
import { Button } from '../../components/Button';
import s from './Home.module.scss';
import { Parallax } from '../../components/Parallax';
import { H, Heading } from '../../components/Heading';
import { Header } from '../../components/Header';

const HomePage: FC = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div>
          <Heading size={H.h1}>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button onClick={() => navigate('/pokedex')}>See pokemons</Button>

          <Button size="small" onClick={() => {}}>
            Small
          </Button>
          <Button fullWidth onClick={() => {}}>
            {' '}
            Full Width
          </Button>
        </div>
        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default HomePage;
