import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// IMPORT COMPONENTS
// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Containers
import Inicio from './containers/Inicio/Inicio';
import Home from './containers/Home/Home';
import Login from './containers/User/Login/Login';
import Registro from './containers/User/Register/Register';
import Profile from './containers/Profile/Profile';
import Detail from './containers/Detail/Detail';
import PinBuilder from './containers/PinBuilder/PinBuilder';
import Results from './containers/Results/Results';

function App() {
  const showHeaderFooter = () => {
    const path = window.location.pathname;
    let show;
    if (path === '/register' || path === '/login' || path === '/'){
      show = false;
    } else {
      show = true
    }
    return show;
  }

  return (
    <div className="App">
      <BrowserRouter>
        { showHeaderFooter() ? <Header/> : ''}
          <Switch>
          <Route path="/" component= { Inicio } exact/>
            <Route path="/home" component= { Home } exact/>
            <Route path="/login" component= {Login} exact/>
            <Route path="/register" component= {Registro} exact/>
            <Route path="/profile" component= { Profile } exact/>
            <Route path="/post/:id" component= { Detail } exact/>
            <Route path="/pin-builder" component= { PinBuilder } exact/>
            <Route path="/results/:name" component= { Results } exact/>
          </Switch>
        { showHeaderFooter() ? <Footer/> : ''}
      </BrowserRouter>
    </div>
  );
}

export default App;
