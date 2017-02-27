import React from 'react';
import WeaponStats from './WeaponStats';

export default class Character extends React.Component{

    constructor(props){
        super(props);
        this.states = props;
    }

    render(){
        console.dir(this.props);
        return(
        <div className="character-card card">
            <div className="card-block">
                <h3>{this.states.char.name}</h3>
                <div>
                <h4>Stats</h4>
                <label>HP</label> <input size="2"  type="text" value={this.states.char.stats.hp}/>
                <label>AC</label> <input size="2" type="text"/>
                <label>Str</label> <input size="2" type="text"/>
                <label>Dex</label> <input size="2" type="text"/>

                <h4>Weapons</h4>
                <WeaponStats/>
                <WeaponStats/>
                <WeaponStats/>

                </div>
            </div>
          </div>
        )
    }
}