import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="col-md-12" id="attacking_detail_panel">
          <h1>Attacking Details</h1>
          <div className="col-md-6">
            <h4>Attacker</h4>

            <div>
              <label>Name:</label> Asher
            </div>

            <div>
              <label>Attack Die</label>1d20 + 4
            </div>

            <div>
              <label>Damage Die</label>1d8 + 4
            </div>

          </div>

          <div className="col-md-6">
            <h4>Defender</h4>

            <div>
              <label>Name: Asher</label>
            </div>

            <div>
              <label>AC</label>15
            </div>

            <div>
              <label>HP</label>15
            </div>

            <div>
              <label>Damage</label>15
            </div>

          </div>

          <button>Attack</button>
          <button>Clear</button>

        </div>


        <div id="left-panel" className="col-md-6">
          <h1 >Players</h1>
          <div>
            <div>
              <h2>Asher</h2>
              <h4>Stats</h4>
              <label>HP</label> <input size="2" type="text"/>
              <label>AC</label> <input size="2" type="text"/>
              <label>Str</label> <input size="2" type="text"/>
              <label>Dex</label> <input size="2" type="text"/>

              <h4>Weapons</h4>
              <div>
                <input type="text" placeholder="weapon1"/> 
                <input type="text" size="6"placeholder="atk bonus"/>
                <input type="text" size="2"/> d <input type="text" size="2"/> 
                <select>
                  <option>Str</option>
                  <option>Dex</option>
                </select>
                <button>select</button>
              </div>
              
              
            </div>
          </div>
        </div>
          
        <div id="right-panel" className="col-md-6">
          <h1>NPC</h1>
        </div>
      </div>
    );
  }
}

export default App;