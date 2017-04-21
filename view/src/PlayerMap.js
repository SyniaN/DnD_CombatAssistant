import React from 'react';
import {deselectCharacter, getGameState, movePiece} from './Game';
import CharacterPiece from './CharacterPiece';

export default class PlayerMap extends React.Component {

    constructor(){
        super();
        this.handleContextMenu = this.handleContextMenu.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        deselectCharacter();
    }

    handleContextMenu(e){
        e.preventDefault();
        var X = e.pageX-230;
        var Y = e.pageY;
        movePiece(Math.floor(X/60), Math.floor(Y/60));
    }


    
    render(){
        const playerPlacementStyle = {
            position: "absolute",
            height: "100%",
            width: "100%"
        };
        
        const tokenArray = getGameState().tokens;
        var tokens = [];
        
        for (var i = 0; i < tokenArray.length; i++){
            
            var token = tokenArray[i];
            
            var playerTokenStyle = {
                position: "absolute",
                height: "60px",
                width: "60px",
                backgroundColor: "red",
                top: tokenArray[i].position[1] * 60 + "px",
                left: tokenArray[i].position[0] * 60 + "px",
                WebkitTransition: "0.2s",
                MozTransition: "0.2s",
                OOransition: "0.2s",
                transition: "0.2s",
                willChange: "left, top"
            };
            
            tokens.push (<div key={token.id} style={playerTokenStyle}>
                <CharacterPiece key={token.id} id={token.id} color={token.color} label={token.label} size="100%"/>
            </div>);
        }
        
        return (
        <div style={playerPlacementStyle} onContextMenu={this.handleContextMenu} onClick={this.handleClick}>
            {tokens}
        </div>);
    }
}