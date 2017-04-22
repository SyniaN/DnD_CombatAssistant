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
            height: getGameState().fogOfWar.foggerSelected? "0px" : "1080px",
            width: getGameState().fogOfWar.foggerSelected? "0px" : "1920px"
        };
        
        const tokensObj = getGameState().tokens;
        var tokens = [];
        
        for (var tokenID in tokensObj){

            var token = tokensObj[tokenID];

            var block = {
                position: "absolute",
                height: token.height === undefined ? "60px" : token.height,
                width: token.width === undefined ? "60px" : token.width,
                top: token.position[1] * 60 + "px",
                left:token.position[0] * 60 + "px",
            }

            var playerTokenStyle = {
                ...block,
                WebkitTransition: "0.3s",
                MozTransition: "0.3s",
                OOransition: "0.3s",
                transition: "0.3s"
            }

            var highlightBlockStyle = {
                ...block,
                backgroundColor: "rgba(244, 244, 244, 0.5)",
            }

            var posX = token.position[0];
            var posY = token.position[1];

            tokens.push (
                <div key={"h"+token.id} style={highlightBlockStyle}></div>
            )
            
            tokens.push (
            <div key={token.id} style={playerTokenStyle}>
                <CharacterPiece key={token.id} id={token.id} color={token.color} label={token.name} size="100%" posX={posX} posY={posY}/> 
            </div>);
            
            
        }
        
        return (
            <div style={playerPlacementStyle} onContextMenu={this.handleContextMenu} onClick={this.handleClick}>
                {tokens}
            </div>);
    }
}