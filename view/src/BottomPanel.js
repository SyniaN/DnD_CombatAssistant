import React from 'react';
import CharacterInfo from './CharacterInfo';

export default class BottomPanel extends React.Component{
    render(){

        var infoBoxes = [];

        for (var tokenId in this.props.tokens){
            
            var token = this.props.tokens[tokenId];
            if(token.tokenType === "player"){
                infoBoxes.push(<CharacterInfo char={token} key={token.id}/>);
            }
        }

        return(
            <div style={{ position: "fixed", marginLeft: '240px', top: "10px", height:"0px"}}>
                {infoBoxes}
            </div>
        )
    }
}