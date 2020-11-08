import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import { PokedexPage } from './pages/Pokedex';
import { Header } from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Route
        render={() => (
          <>
            <Header />
            <div>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/pokedex" component={PokedexPage} />
                <Route render={() => '404 not found'} />
              </Switch>
            </div>
          </>
        )}
      />
    </BrowserRouter>
  );
};

export default App;
