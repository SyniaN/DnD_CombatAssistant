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
            <div style={{height: "150px", width: "1920px", position: "fixed", marginLeft: '250px', bottom: "20px"}}>
                {infoBoxes}
            </div>
        )
    }
}