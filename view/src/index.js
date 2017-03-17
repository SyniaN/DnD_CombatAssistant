import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { observe } from './Game';
import './index.css';

observe((playerPieces, playMap, mapOptions) => {
      console.log('redrawing');
      console.log(playerPieces);
      ReactDOM.render(
        <App playerPieces={playerPieces} playMap={playMap} mapOptions={mapOptions}/>,
        document.getElementById('root')
      );
  }
);

