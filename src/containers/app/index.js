import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../../components/about';
import Prueba from '../../components/prueba';
import PostIndex from '../../containers/posts';

const App = () => (
  <div>
    <header>
      <Link to="/">Inicio</Link>
      <Link to="/about-us">About</Link>
      <Link to="/prueba">Prueba</Link>
    </header>

    <main>
      <Route exact path="/" component={PostIndex} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/prueba" component={Prueba} />
    </main>
  </div>
);

export default App;
