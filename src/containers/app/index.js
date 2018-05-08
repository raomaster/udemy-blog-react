import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import About from '../../components/about';
import Prueba from '../../components/prueba';
import PostIndex from '../../containers/posts';
import PostNew from '../../components/posts/nuevo';
import MostrarPost from '../../components/posts/mostrar';

const App = () => (
  <div>
    <header>
      <Link to="/">Inicio</Link>
      <Link to="/about-us">About</Link>
      <Link to="/prueba">Prueba</Link>
      <Link to="/posts/new">Nuevo Post</Link>
      
    </header>

    <Switch>
      <Route exact path="/" component={PostIndex} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/prueba" component={Prueba} />
      <Route exact path="/posts/new" component={PostNew} />
      <Route exact path="/posts/:id" component={MostrarPost} />
      
    </Switch>
  </div>
);

export default App;
