import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Import Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './containers/Home/Home';
import Login from './containers/User/Login/Login';
import Registro from './containers/User/Register/Register';
import Profile from './containers/Profile/Profile';
import Detail from './containers/Detail/Detail';
import PinBuilder from './containers/PinBuilder/PinBuilder';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header/>
          {/* <Redirect from="/" to="/home"/> */}
          <Switch>
            <Route path="/home" component= { Home } exact/>
            <Route path="/login" component= {Login} exact/>
            <Route path="/register" component= {Registro} exact/>
            <Route path="/profile" component= { Profile } exact/>
            <Route path="/post/:id" component= { Detail } exact/>
            <Route path="/pin-builder" component= { PinBuilder } exact/>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
