import React from 'react';
import {getGameState} from './Game';
export default class PlayerPlacements extends React.Component {
    
    render(){
        var playerPlacementStyle = {
            position: "absolute",
        };
        
        var tokenArray = getGameState().tokens;
        var tokens = [];
        
        for (var i = 0; i < tokenArray.length; i++){
            
            var playerTokenStyle = {
                position: "absolute",
                height: "60px",
                width: "60px",
                backgroundColor: "red",
                top: tokenArray[i].position[1] * 60 + "px",
                left: tokenArray[i].position[0] * 60 + "px"
            };
            
            tokens.push (<div style={playerTokenStyle}></div>);
        }
        
        
        
        return (
        <div style={playerPlacementStyle}>
            {tokens}
        </div>);
    }
}