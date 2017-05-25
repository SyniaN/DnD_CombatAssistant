import React from 'react';
import CharacterInfo from './CharacterInfo_GM';

export default class CharInfoPanel extends React.Component{
    render(){

        var infoBoxes = [];

        for (var tokenId in this.props.tokens){
            
            var token = this.props.tokens[tokenId];
            infoBoxes.push(<CharacterInfo char={token} key={token.id}/>);
            
        }

        return(
            <div style={{ position: "fixed", top: "30px",  right:"20px", width:"300px"}}>
                {infoBoxes}
            </div>
        )
    }
}