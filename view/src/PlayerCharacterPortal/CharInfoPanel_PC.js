import React from 'react';
import CharacterInfo from './CharacterInfo_PC';
import {getLocalState} from '../System/Game_Local';

export default class CharInfoPanel extends React.Component{
    render(){

        var infoBoxes = [];
        var localCharId = getLocalState().charId;

        for (var tokenId in this.props.tokens){
            
            var token = this.props.tokens[tokenId];
            if(token.tokenType === "player" && token.id !== localCharId){
                infoBoxes.push(<CharacterInfo char={token} key={token.id}/>);
            }
        }

        var titleStyle = {
            float : "right",
            color: "white",
            textShadow: "0px 0px 5px #000000"
        }

        return(
            <div style={{ position: "fixed", top: "30px",  right:"20px", width:"300px"}}>
                <h1 style={titleStyle}>Team mates</h1>
                {infoBoxes}
            </div>
        )
    }
}