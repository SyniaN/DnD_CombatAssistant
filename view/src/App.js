import React, { Component } from 'react';
import './App.css';
import AttackDetails from './AttackDetails';
import Character from './Character';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      charList : [
        {
          name:"Asher",
          age:16,
          stats: {
            hp: 10,
            ac: 10,
            str: 10,
            dex: 10
          }
        },
        {
          name:"Bob",
          age:16,
          stats: {
            hp: 10,
            ac: 10,
            str: 10,
            dex: 10
          }
        }
      ]
    }
  }
  render() {

    return (
      <div className="App">

        <AttackDetails/>

        <div className="row">
          <div id="left-panel" className="col-md-6">
            <Character char={this.state.charList[0]}/>
          </div>
            
          <div id="right-panel" className="col-md-6">
            <Character char={this.state.charList[1]}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;