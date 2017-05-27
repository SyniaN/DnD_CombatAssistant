import React from 'react';
import {getGameState, setMyGameState} from '../../System/Game';

export default class FullStateInfo extends React.Component{

    constructor(props){
        super(props);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleInfoChange = this.handleInfoChange.bind(this);

        var gameState = getGameState();

        var simplifiedState = {
            mapOptions: gameState.mapOptions,
            playMap: gameState.playMap,
            mapScale: gameState.mapScale,
            tokens: gameState.tokens
        }

        var info = JSON.stringify(simplifiedState, null, "\t");

        this.state={
            stateInfo: info
        }

    }

    handleInfoChange(event){
        this.setState({stateInfo: event.target.value});
    }

    handleUpdate(){
        console.log('submitting modified state');
        var newStateObj = JSON.parse(this.state.stateInfo);
        var newSubmission = getGameState();
        newSubmission.mapOptions = newStateObj.mapOptions;
        newSubmission.playMap = newStateObj.playMap;
        newSubmission.mapScale = newStateObj.mapScale;
        newSubmission.tokens = newStateObj.tokens;

        setMyGameState(newSubmission);
    }

    render(){

        var styleInfo={
            height: "500px",
            width: "100%"
        }
        return(
            <div >
                <h2>Game State</h2>
                <textarea   style={styleInfo} 
                            value={this.state.stateInfo} 
                            onChange={this.handleInfoChange}/>
                <button type="submit" 
                        className="btn btn-default" 
                        onClick={this.handleUpdate}>Set State</button>
                <hr/>
            </div>
        )
    }
}