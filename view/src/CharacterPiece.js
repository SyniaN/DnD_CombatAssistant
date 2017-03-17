import React from 'react';
import { selectCharacter, removeCharacter, deselectCharacter} from './Game';

export default class CharacterPiece extends React.Component {
    
    handlePieceSelect(key){
        selectCharacter(key);
    }
    
    handlePieceRemove(key){
        deselectCharacter();
        removeCharacter(key);
    }
    
    render(){
        var characterStyle = {
            width: "100%",
            margin: '0',
            backgroundColor: this.props.color,
            borderStyle: 'solid',
            borderWidth: '1px',
            padding: '0',
            
            //textAlign: 'center'
        };
        
        var clickAble = {
            cursor: 'pointer'
        };
        
        return (
            <div style={characterStyle}>
                <span style={clickAble} onClick={()=>this.handlePieceSelect(this.props.id)}> {this.props.label}</span>
                <span style={clickAble} onClick={()=>this.handlePieceRemove(this.props.id)}> <span className="glyphicon glyphicon-remove pull-right"/> </span>
            </div>
        );
    
    }
        
}