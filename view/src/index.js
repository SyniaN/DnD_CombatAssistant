import React from 'react';
import {render} from 'react-dom';
import Portal_PC from './PlayerCharacterPortal/Portal_PC';
import Portal_GM from './GameMasterPortal/Portal_GM';
import LoginPage from './LoginPage/LoginPage';
import { observe } from './System/Game';
import { getLocalState } from './System/Game_Local'
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
            <Route exact path="/GameMaster" component={Portal_GM}/>
            <PrivateRoute path="/Player" component={Portal_PC}/>
          </div>
        </Router>,
        document.getElementById('root')
      )
  }
);



        

