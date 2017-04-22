import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { observe } from './Game';
import './index.css';

observe((playMap, mapOptions, gameState) => {
      ReactDOM.render(
        <App tokens={gameState.tokens} playMap={playMap} mapOptions={mapOptions}/>,
        document.getElementById('root')
      );
  }
);

