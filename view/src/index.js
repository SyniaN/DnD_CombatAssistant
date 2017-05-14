import React from 'react';
import {render} from 'react-dom';
import PCPortal from './PCPortal';
import GMPortal from './GMPortal';
import { observe } from './Game';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './index.css';

observe(() => {

      render(
        <Router>
          <div>
            <Route exact path="/" component={PCPortal}/>
            <Route exact path="/GameMaster" component={GMPortal}/>
          </div>
        </Router>,
        document.getElementById('root')
      )
  }
);

        

