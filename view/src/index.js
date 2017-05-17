import React from 'react';
import {render} from 'react-dom';
import PCPortal from './PCPortal';
import GMPortal from './GMPortal';
import LoginPage from './LoginPage';
import { observe } from './Game';
import { getLocalState } from './Game_Local'
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'
import './index.css';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    getLocalState().charId === "" ? (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    ) : (
      <Component {...props}/>
    )
  )}/>
)

observe(() => {

      render(
        <Router>
          <div>
            <Route exact path="/" component={LoginPage}/>
            <Route exact path="/GameMaster" component={GMPortal}/>
            <PrivateRoute path="/Player" component={PCPortal}/>
          </div>
        </Router>,
        document.getElementById('root')
      )
  }
);



        

