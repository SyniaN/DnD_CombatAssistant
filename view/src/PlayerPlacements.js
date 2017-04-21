import React from 'react';
import {getGameState} from './Game';
import CharacterPiece from './CharacterPiece';

export default class PlayerPlacements extends React.Component {
    
    render(){
        var playerPlacementStyle = {
            position: "absolute",
        };
        
        var tokenArray = getGameState().tokens;
        var tokens = [];
        
        for (var i = 0; i < tokenArray.length; i++){
            
            var token = tokenArray[i];
            
            var playerTokenStyle = {
                position: "absolute",
                height: "60px",
                width: "60px",
                backgroundColor: "red",
                top: tokenArray[i].position[1] * 60 + "px",
                left: tokenArray[i].position[0] * 60 + "px"
            };
            
            tokens.push (<div key={token.id} style={playerTokenStyle}>
                <CharacterPiece key={token.id} id={token.id} color={token.color} label={token.label} size="100%"/>
            </div>);
        }
        
        return (
        <div style={playerPlacementStyle}>
            {tokens}
        </div>);
    }
}