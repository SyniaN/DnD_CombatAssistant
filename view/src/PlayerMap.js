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
        console.log('rendering PlayerMap');
        const playerPlacementStyle = {
            position: "absolute",
            height: "1080px",
            width: "1920px"
        };
        
        const tokenArray = getGameState().tokens;
        var tokens = [];
        
        for (var i = 0; i < tokenArray.length; i++){
            
            var token = tokenArray[i];

            var block = {
                position: "absolute",
                height: "60px",
                width: "60px",
                top: tokenArray[i].position[1] * 60 + "px",
                left: tokenArray[i].position[0] * 60 + "px",
            }

            var playerTokenStyle = {
                ...block,
                WebkitTransition: "0.2s",
                MozTransition: "0.2s",
                OOransition: "0.2s",
                transition: "0.2s"
            }

            var highlightBlockStyle = {
                ...block,
                backgroundColor: "rgba(244, 244, 244, 0.3)",
            }

            var posX = getGameState().tokens[token.id].position[0];
            var posY = getGameState().tokens[token.id].position[1];

            tokens.push (
                <div key={"h"+token.id} style={highlightBlockStyle}></div>
            )
            
            tokens.push (
            <div key={token.id} style={playerTokenStyle}>
                <CharacterPiece key={token.id} id={token.id} color={token.color} label={token.label} size="100%" posX={posX} posY={posY}/>
                
            </div>);
            
            
        }
        
        return (
            <div style={playerPlacementStyle} onContextMenu={this.handleContextMenu} onClick={this.handleClick}>
                {tokens}
            </div>);
    }
}