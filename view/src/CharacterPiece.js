import React from 'react';
import { selectCharacter, removeCharacter } from './Game';

export default class CharacterPiece extends React.Component {
    
    handlePieceSelect(key){
        selectCharacter(key);
    }
    
    handlePieceRemove(key){
        removeCharacter(key);
    }
    
    render(){
        var characterStyle = {
            width: "100%",
            margin: 'auto',
            backgroundColor: 'white',
            borderStyle: 'solid',
            borderWidth: '1px',
            //textAlign: 'center'
        };
        
        return (
            <div style={characterStyle}>
                <a href="#" onClick={()=>this.handlePieceSelect(this.props.id)}> {this.props.label}</a>
                <a href="#" onClick={()=>this.handlePieceRemove(this.props.id)}> <span className="glyphicon glyphicon-remove pull-right"/> </a>
            </div>
        );
    
    }
        
}