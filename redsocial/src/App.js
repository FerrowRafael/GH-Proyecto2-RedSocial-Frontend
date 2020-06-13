import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Badge } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

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
import ImageUpload from './components/ImageUpload/ImageUpload';
import ModalUpdate from './components/ModalUpdate/ModalUpdate';
import PrivateZone from './guards/PrivateZone';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';

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
        {showHeaderFooter() ? <Header/> : ''}
        <Switch>
          <Route path="/" component= { Inicio } exact/>
          <Route path="/login" component= {Login} exact/>
          <Route path="/register" component= {Registro} exact/>
           
          <PrivateZone>
            <Switch>
              <Route path="/home" component= { Home } exact/>
              <Route path="/profile" component={Profile} exact />
              <Route path="/post/:id" component= { Detail } exact/>
              <Route path="/pin-builder" component= { PinBuilder } exact/>
              <Route path="/results/:name" component= { Results } exact/>
              <Route path="/download" component= { ImageUpload } exact/>
              <Route path="/modal" component= { ModalUpdate } exact/>
              <Route path="/profileUpdate" component= { UpdateProfile } exact/>
              {/* <Route exact path='/**' component={NotFound} /> */}
            </Switch>
          </PrivateZone>
          </Switch>

        {/* { showHeaderFooter() ? 
        <NavLink to="/pin-builder" exact>
          <Badge >
            <PlusCircleOutlined style={{ position: "fixed", zIndex:2,fontSize: '32px', marginTop:"40px",marginLeft:"1680px" }} />
          </Badge>
        </NavLink>
        : ''} */}
      </BrowserRouter>
    </div>
  );
}

export default App;
